'use client';

import { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface LinkedInConnectButtonProps {
  onProfileData?: (data: any) => void;
}

export default function LinkedInConnectButton({ onProfileData }: LinkedInConnectButtonProps) {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const initiateOAuth = async () => {
    try {
      setIsConnecting(true);
      setError(null);
      
      // Redirect to our OAuth endpoint
      window.location.href = '/api/linkedin/oauth';
      
    } catch (err) {
      console.error('Error initiating LinkedIn OAuth:', err);
      setError('Failed to connect to LinkedIn');
      setIsConnecting(false);
    }
  };

  // This function would be called after the OAuth redirect returns with a code
  const handleOAuthCallback = async (code: string, state: string) => {
    try {
      setIsConnecting(true);
      
      const response = await fetch('/api/linkedin/oauth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, state }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to exchange authorization code');
      }
      
      const data = await response.json();
      
      // Store the token in localStorage for future use
      if (data.profile) {
        localStorage.setItem('linkedin_profile', JSON.stringify(data.profile));
        setIsConnected(true);
        
        // Call the callback if provided
        if (onProfileData) {
          onProfileData(data);
        }
      }
    } catch (err) {
      console.error('Error handling OAuth callback:', err);
      setError('Failed to connect your LinkedIn account');
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {error && (
        <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-md text-sm">
          {error}
        </div>
      )}
      
      <motion.button
        onClick={initiateOAuth}
        disabled={isConnecting || isConnected}
        className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-colors ${
          isConnected
            ? 'bg-green-600 text-white cursor-default'
            : 'bg-[#0077B5] hover:bg-[#006097] text-white'
        }`}
        whileHover={!isConnected ? { scale: 1.05 } : {}}
        whileTap={!isConnected ? { scale: 0.95 } : {}}
      >
        <FaLinkedin size={20} />
        {isConnecting
          ? 'Connecting...'
          : isConnected
          ? 'Connected'
          : 'Connect with LinkedIn'}
      </motion.button>
      
      {isConnected && (
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          Your LinkedIn profile is connected
        </p>
      )}
    </div>
  );
} 