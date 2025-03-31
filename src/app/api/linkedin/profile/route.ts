import { NextRequest, NextResponse } from 'next/server';

/**
 * LinkedIn Profile API Endpoint
 * 
 * This API route fetches the current user's LinkedIn profile data.
 * It requires an access token in the request headers.
 */
export async function GET(request: NextRequest) {
  try {
    // Get the access token from the Authorization header
    const authHeader = request.headers.get('Authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Missing or invalid Authorization header' },
        { status: 401 }
      );
    }
    
    const accessToken = authHeader.substring(7); // Remove 'Bearer ' prefix
    
    // Fetch basic profile data
    const profileResponse = await fetch('https://api.linkedin.com/v2/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    
    if (!profileResponse.ok) {
      const errorData = await profileResponse.json();
      return NextResponse.json(
        { error: errorData.message || 'Failed to fetch LinkedIn profile' },
        { status: profileResponse.status }
      );
    }
    
    const profileData = await profileResponse.json();
    
    // Fetch email address
    const emailResponse = await fetch(
      'https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    
    let emailData = null;
    if (emailResponse.ok) {
      emailData = await emailResponse.json();
    }
    
    // Fetch profile picture
    const pictureResponse = await fetch(
      'https://api.linkedin.com/v2/me?projection=(id,profilePicture(displayImage~:playableStreams))',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    
    let pictureData = null;
    if (pictureResponse.ok) {
      pictureData = await pictureResponse.json();
    }
    
    // Fetch current positions (work experience)
    const positionsResponse = await fetch(
      'https://api.linkedin.com/v2/positions?q=members&projection=(elements*(id,title,company,startDate,endDate,current))',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    
    let positionsData = null;
    if (positionsResponse.ok) {
      positionsData = await positionsResponse.json();
    }
    
    // Combine the data
    return NextResponse.json({
      profile: profileData,
      email: emailData,
      picture: pictureData,
      positions: positionsData,
    });
  } catch (error) {
    console.error('Error fetching LinkedIn profile:', error);
    return NextResponse.json(
      { error: 'Failed to fetch LinkedIn profile data' },
      { status: 500 }
    );
  }
} 