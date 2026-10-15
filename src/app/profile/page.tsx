'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';
import profileData from '@/data/profile.json';
import { UserIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { FaGithub } from 'react-icons/fa';
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
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

// Social icon mapping
const socialIcons: Record<string, React.ReactNode> = {
  github: <FaGithub size={24} />,
  instagram: <FaInstagram size={24} />,
  threads: <FaThreads size={24} />
};

export default function Profile() {
  // Type casting
  const typedProfileData = profileData as unknown as ProfileData;
  const careerTimelineRef = useRef<HTMLElement>(null);
  const { scrollYProgress: careerProgress } = useScroll({
    target: careerTimelineRef,
    offset: ['start 75%', 'end 35%'],
  });
  const careerLineProgress = useSpring(careerProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  const careerMilestones = [
    {
      period: '2012 — 2024',
      title: 'Automotive Development Engineer',
      description: '12 years of experience in automotive development.',
      marker: '01',
    },
    {
      period: '2025 —',
      title: 'Web Application Developer',
      description: 'Building web applications with a focus on frontend technologies like React and Next.js.',
      marker: '02',
    },
  ];
  
  return (
    <div className="min-h-screen px-4 md:px-6 pb-16 pt-6">
      <motion.div
        className="container max-w-5xl space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Profile Header */}
        <section className="section-shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            {/* Profile Image */}
            <motion.div
              className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-[var(--line)] shadow-lg"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ rotate: -2 }}
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
            <div className="flex-1 space-y-3">
              <span className="eyebrow inline-flex">Profile</span>
              <motion.h1
                className="text-3xl sm:text-4xl font-semibold text-[var(--ink)]"
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                {typedProfileData.name}
              </motion.h1>
              <motion.h2
                className="text-lg sm:text-xl text-[var(--muted)]"
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                {typedProfileData.title}
              </motion.h2>
              <motion.div
                className="flex gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.25 }}
              >
                {Object.entries(typedProfileData.social).map(([platform, url]) => (
                  <motion.a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-ghost border border-[var(--line)] rounded-full p-2 bg-[color-mix(in_srgb,_var(--sand-2)_60%,_transparent)]"
                    whileHover={{ scale: 1.1, rotate: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {socialIcons[platform]}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* About Me Section */}
        <motion.section
          className="section-shell space-y-3"
          {...fadeInUp}
          transition={{ delay: 0.15 }}
        >
          <div className="flex items-center gap-2">
            <UserIcon className="h-5 w-5 text-[var(--accent)]" />
            <h3 className="text-xl sm:text-2xl font-semibold text-[var(--ink)]">About Me</h3>
          </div>
          <p className="text-[var(--muted)] leading-relaxed">{typedProfileData.bio}</p>
        </motion.section>
        
        {/* Career Timeline */}
        <motion.section
          ref={careerTimelineRef}
          className="section-shell space-y-4"
          {...fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-2">
            <FaBriefcase className="h-5 w-5 text-[var(--accent)]" />
            <h3 className="text-xl sm:text-2xl font-semibold text-[var(--ink)]">Career Journey</h3>
          </div>
          <p className="text-sm sm:text-base text-[var(--muted)]">
            From automotive development to web application development
          </p>
          <div className="relative space-y-5 pl-8">
            <motion.div
              className="absolute left-[7px] top-3 bottom-3 w-0.5 origin-top rounded-full bg-gradient-to-b from-[var(--accent)] to-[var(--accent-2)]"
              style={{ scaleY: careerLineProgress }}
              aria-hidden="true"
            />
            {careerMilestones.map((milestone, index) => (
              <motion.article
                key={milestone.marker}
                className="project-card relative p-4 sm:p-5"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
              >
                <span
                  className="absolute -left-8 top-5 grid h-4 w-4 place-items-center rounded-full border-[3px] border-[var(--paper)] bg-[var(--accent)] shadow-[0_0_0_3px_color-mix(in_srgb,var(--accent)_30%,transparent)]"
                  aria-hidden="true"
                />
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold tracking-[0.12em] text-[var(--accent)]">
                    {milestone.period}
                  </span>
                  <span className="text-xs font-semibold text-[var(--muted)]">
                    {milestone.marker} / 02
                  </span>
                </div>
                <h4 className="mb-1 text-lg font-semibold text-[var(--ink)]">
                  {milestone.title}
                </h4>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  {milestone.description}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.section>
        
        {/* Certifications Section */}
        <motion.section
          className="section-shell space-y-4"
          {...fadeInUp}
          transition={{ delay: 0.25 }}
        >
          <div className="flex items-center gap-2">
            <AcademicCapIcon className="h-5 w-5 text-[var(--accent)]" />
            <h3 className="text-xl sm:text-2xl font-semibold text-[var(--ink)]">Certifications</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {typedProfileData.certifications.map((cert, index) => (
              <motion.div 
                key={index}
                className="project-card p-3 sm:p-4"
                whileHover={{ rotate: -1, translateY: -2 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="font-semibold text-base sm:text-lg text-[var(--ink)] mb-1">{cert.name}</h4>
                <div className="flex text-xs sm:text-sm text-[var(--muted)]">
                  <span>{cert.issuer}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
