import { NextRequest, NextResponse } from 'next/server';

/**
 * LinkedIn OAuth Authorization Endpoint
 * 
 * This API route initiates the LinkedIn OAuth flow by redirecting the user to LinkedIn's 
 * authorization page. After the user grants permission, LinkedIn will redirect back to
 * the callback URL with an authorization code.
 */
export async function GET(request: NextRequest) {
  try {
    const clientId = process.env.LINKEDIN_CLIENT_ID;
    const redirectUri = process.env.LINKEDIN_REDIRECT_URI;
    const state = Buffer.from(`${Date.now()}`).toString('base64');
    
    // Store state in a cookie for validation when LinkedIn redirects back
    const response = NextResponse.redirect(
      `https://www.linkedin.com/oauth/v2/authorization?` +
      `response_type=code` +
      `&client_id=${clientId}` +
      `&redirect_uri=${encodeURIComponent(redirectUri || '')}` +
      `&state=${state}` +
      `&scope=r_liteprofile%20r_emailaddress`
    );
    
    // Set state cookie for validation
    response.cookies.set('linkedin_oauth_state', state, {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 10, // 10 minutes
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    });
    
    return response;
  } catch (error) {
    console.error('Error initiating LinkedIn OAuth flow:', error);
    return NextResponse.json(
      { error: 'Failed to initiate LinkedIn OAuth flow' },
      { status: 500 }
    );
  }
}

/**
 * LinkedIn OAuth Callback Endpoint
 * 
 * This API route handles the callback from LinkedIn after user authorization.
 * It exchanges the authorization code for an access token and fetches the user's profile information.
 */
export async function POST(request: NextRequest) {
  try {
    const { code, state } = await request.json();
    const storedState = request.cookies.get('linkedin_oauth_state')?.value;
    
    // Validate state to prevent CSRF attacks
    if (!state || !storedState || state !== storedState) {
      return NextResponse.json(
        { error: 'Invalid state parameter' },
        { status: 400 }
      );
    }
    
    // Exchange authorization code for access token
    const tokenResponse = await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: process.env.LINKEDIN_REDIRECT_URI || '',
        client_id: process.env.LINKEDIN_CLIENT_ID || '',
        client_secret: process.env.LINKEDIN_CLIENT_SECRET || '',
      }),
    });
    
    const tokenData = await tokenResponse.json();
    
    if (!tokenResponse.ok) {
      return NextResponse.json(
        { error: tokenData.error_description || 'Failed to exchange authorization code' },
        { status: 400 }
      );
    }
    
    // Fetch user profile with the access token
    const profileResponse = await fetch('https://api.linkedin.com/v2/me', {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
      },
    });
    
    const profileData = await profileResponse.json();
    
    // Fetch email address
    const emailResponse = await fetch('https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))', {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
      },
    });
    
    const emailData = await emailResponse.json();
    
    // Clear state cookie
    const response = NextResponse.json({
      profile: profileData,
      email: emailData,
    });
    
    response.cookies.set('linkedin_oauth_state', '', {
      httpOnly: true,
      path: '/',
      maxAge: 0,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    });
    
    return response;
  } catch (error) {
    console.error('Error handling LinkedIn OAuth callback:', error);
    return NextResponse.json(
      { error: 'Failed to process LinkedIn OAuth callback' },
      { status: 500 }
    );
  }
} 