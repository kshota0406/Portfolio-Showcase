'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import profileData from '@/data/profile.json';
import { UserIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaInstagram, FaThreads } from 'react-icons/fa6';
import { FaBriefcase } from 'react-icons/fa';

// Profile data type extensions
interface Certification {
  name: string;
  issuer: string;
  year: number;
}

interface Experience {
  title: string;
  period: string;
  description: string;
}

interface ProfileData {
  name: string;
  title: string;
  bio: string;
  experience: Experience[];
  certifications: Certification[];
  social: Record<string, string>;
}

// Animation settings
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

// Social icon mapping
const socialIcons: Record<string, React.ReactNode> = {
  github: <FaGithub size={24} />,
  linkedin: <FaLinkedin size={24} />,
  instagram: <FaInstagram size={24} />,
  threads: <FaThreads size={24} />
};

export default function Profile() {
  // Type casting
  const typedProfileData = profileData as unknown as ProfileData;
  
  // 常にプロフィールデータを表示
  const [linkedInData, setLinkedInData] = useState<any>(null);
  
  // ComponentDidMount時にプロフィールデータを設定
  useEffect(() => {
    // 実際の環境ではAPI呼び出しを行うが、ここではモックデータを使用
    const mockLinkedInData = {
      profile: {
        localizedFirstName: typedProfileData.name.split(' ')[0],
        localizedLastName: typedProfileData.name.split(' ')[1] || '',
      },
      positions: {
        elements: typedProfileData.experience.map(exp => ({
          title: exp.title,
          startDate: { year: exp.period.split(' - ')[0] },
          endDate: { year: exp.period.split(' - ')[1] || 'Present' },
          company: { localizedName: exp.description }
        }))
      }
    };
    
    setLinkedInData(mockLinkedInData);
  }, []);
  
  return (
    <div className="px-4 py-6 sm:py-8 bg-soft-gray dark:bg-gray-900">
      <motion.div
        className="w-full max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Profile Header */}
        <div className="flex flex-col items-center gap-6 mb-6 sm:mb-8">
          {/* Profile Image */}
          <motion.div
            className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/images/icon.png"
              alt={typedProfileData.name}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Name and Title */}
          <div className="text-center">
            <motion.h1
              className="text-3xl sm:text-4xl font-bold mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {linkedInData?.profile?.localizedFirstName 
                ? `${linkedInData.profile.localizedFirstName} ${linkedInData.profile.localizedLastName}` 
                : typedProfileData.name}
            </motion.h1>
            <motion.h2
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {linkedInData?.positions?.elements?.[0]?.title || typedProfileData.title}
            </motion.h2>
            
            {/* Social Link Icons */}
            <motion.div
              className="flex gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {Object.entries(typedProfileData.social).map(([platform, url]) => (
                <motion.a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {socialIcons[platform]}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
        
        {/* About Me Section */}
        <motion.div
          className="card mb-6 sm:mb-8 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl shadow-sm"
          {...fadeInUp}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <UserIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" />
            <h3 className="text-xl sm:text-2xl font-bold">About Me</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{typedProfileData.bio}</p>
        </motion.div>
        
        {/* Experience Section */}
        <motion.div
          className="card mb-6 sm:mb-8 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl shadow-sm"
          {...fadeInUp}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <FaBriefcase className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" />
            <h3 className="text-xl sm:text-2xl font-bold">Experience</h3>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {/* Display LinkedIn positions if available, otherwise use static data */}
            {(linkedInData?.positions?.elements || typedProfileData.experience).map((exp: any, index: number) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-700/30 p-3 sm:p-4 rounded-lg shadow-sm"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <h4 className="font-bold text-base sm:text-lg text-gray-900 dark:text-white">
                    {linkedInData ? exp.title : exp.title}
                  </h4>
                  <span className="text-xs sm:text-sm text-blue-600 dark:text-blue-400">
                    {linkedInData 
                      ? `${exp.startDate?.year || ''} - ${exp.endDate?.year || 'Present'}`
                      : exp.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                  {linkedInData 
                    ? exp.company?.localizedName || ''
                    : exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Certifications Section */}
        <motion.div
          className="card mb-6 sm:mb-8 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl shadow-sm"
          {...fadeInUp}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <AcademicCapIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" />
            <h3 className="text-xl sm:text-2xl font-bold">Certifications</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {typedProfileData.certifications.map((cert, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-700/30 p-3 sm:p-4 rounded-lg shadow-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="font-bold text-base sm:text-lg text-gray-900 dark:text-white mb-1">{cert.name}</h4>
                <div className="flex text-xs sm:text-sm">
                  <span className="text-gray-600 dark:text-gray-300">{cert.issuer}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
} 