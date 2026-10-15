'use client';

import React, { useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';
import profileData from '@/data/profile.json';
import { UserIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram, FaThreads } from 'react-icons/fa6';
import { FaBriefcase } from 'react-icons/fa';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import TechStack from '@/components/TechStack';

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
  const [skillsOpen, setSkillsOpen] = useState(false);
  const [automotiveExperienceOpen, setAutomotiveExperienceOpen] = useState(false);
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
    <div className="min-h-screen pb-16 pt-6">
      <motion.div
        className="container max-w-5xl space-y-5 px-3 sm:space-y-8 sm:px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Profile Header */}
        <section className="section-shell p-3 sm:p-6">
          <div className="flex items-center gap-3 min-[375px]:gap-4 sm:gap-6">
            {/* Profile Image */}
            <motion.div
              className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-[3px] border-[var(--line)] shadow-lg min-[375px]:h-[72px] min-[375px]:w-[72px] sm:h-24 sm:w-24 md:h-32 md:w-32"
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
            <div className="min-w-0 flex-1 space-y-2 sm:space-y-3">
              <motion.h1
                className="text-2xl font-semibold text-[var(--ink)] min-[375px]:text-3xl sm:text-4xl"
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                {typedProfileData.name}
              </motion.h1>
              <motion.div
                className="flex gap-2 sm:gap-3"
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
                    className="link-ghost rounded-full border border-[var(--line)] bg-[color-mix(in_srgb,_var(--sand-2)_60%,_transparent)] p-1.5 sm:p-2"
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
          className="section-shell space-y-3 p-3 sm:p-6"
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
          className="section-shell space-y-4 p-3 sm:p-6"
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
          <div className="relative space-y-4 pl-5 sm:space-y-5 sm:pl-8">
            <motion.div
              className="absolute left-[2px] top-3 bottom-3 w-0.5 origin-top rounded-full bg-gradient-to-b from-[var(--accent)] to-[var(--accent-2)] sm:left-[7px]"
              style={{ scaleY: careerLineProgress }}
              aria-hidden="true"
            />
            {careerMilestones.map((milestone, index) => (
              <motion.article
                key={milestone.marker}
                className="project-card relative p-3 sm:p-5"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
              >
                <span
                  className="absolute -left-5 top-5 grid h-4 w-4 place-items-center rounded-full border-[3px] border-[var(--paper)] bg-[var(--accent)] shadow-[0_0_0_3px_color-mix(in_srgb,var(--accent)_30%,transparent)] sm:-left-8"
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
                {index === 0 ? (
                  <button
                    type="button"
                    aria-expanded={automotiveExperienceOpen}
                    aria-controls="automotive-experience"
                    onClick={() => setAutomotiveExperienceOpen((open) => !open)}
                    className="group mb-1 inline-flex min-h-10 max-w-full flex-wrap items-center gap-x-3 gap-y-1 rounded-md text-left text-lg font-semibold text-[var(--ink)] transition-colors hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] sm:text-xl"
                  >
                    <span>{milestone.title}</span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--sand-1)] px-2.5 py-1 text-[10px] font-semibold normal-case tracking-normal text-[var(--muted)] transition-colors group-hover:border-[var(--accent)] group-hover:text-[var(--ink)] sm:text-xs">
                      <span>{automotiveExperienceOpen ? 'Hide experience' : 'Explore experience'}</span>
                      <ChevronDownIcon className={`h-3.5 w-3.5 text-[var(--accent)] transition-transform ${automotiveExperienceOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                    </span>
                  </button>
                ) : index === 1 ? (
                  <button
                    type="button"
                    aria-expanded={skillsOpen}
                    aria-controls="web-engineering-skills"
                    onClick={() => setSkillsOpen((open) => !open)}
                    className="group mb-1 inline-flex min-h-10 max-w-full flex-wrap items-center gap-x-3 gap-y-1 rounded-md text-left text-lg font-semibold text-[var(--ink)] transition-colors hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] sm:text-xl"
                  >
                    <span>{milestone.title}</span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--sand-1)] px-2.5 py-1 text-[10px] font-semibold normal-case tracking-normal text-[var(--muted)] transition-colors group-hover:border-[var(--accent)] group-hover:text-[var(--ink)] sm:text-xs">
                      <span>{skillsOpen ? 'Hide skills' : 'Explore skills'}</span>
                      <ChevronDownIcon className={`h-3.5 w-3.5 text-[var(--accent)] transition-transform ${skillsOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                    </span>
                  </button>
                ) : (
                  <h4 className="mb-1 text-lg font-semibold text-[var(--ink)]">{milestone.title}</h4>
                )}
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  {milestone.description}
                </p>
                {index === 0 && (
                  <AnimatePresence initial={false}>
                    {automotiveExperienceOpen && (
                      <motion.div
                        id="automotive-experience"
                        initial={{ opacity: 0, height: 0, y: -8 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -8 }}
                        transition={{ duration: 0.28, ease: 'easeOut' }}
                        className="mt-4 overflow-hidden border-t border-[var(--line)] pt-4"
                      >
                        <div>
                          <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                            <h5 className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)] sm:text-sm">Experience</h5>
                            <span className="text-xs text-[var(--muted)]">Production &amp; development</span>
                          </div>
                          <dl className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
                            <div className="grid grid-cols-[1.5rem_minmax(0,1fr)] gap-x-2 gap-y-1 py-3 sm:grid-cols-[2rem_minmax(10rem,0.8fr)_2fr] sm:items-start sm:gap-3 sm:py-4">
                              <span className="text-xs font-bold tabular-nums text-[var(--accent)] sm:pt-0.5">01</span>
                              <dt className="text-base font-semibold text-[var(--ink)]">Production line<span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--muted)]">Production</span></dt>
                              <dd className="col-start-2 text-sm leading-relaxed text-[var(--muted)] sm:col-start-auto sm:text-base">
                                <ul className="list-disc space-y-0.5 pl-4 marker:text-[var(--accent)]">
                                  <li>6 months</li>
                                </ul>
                              </dd>
                            </div>
                            <div className="grid grid-cols-[1.5rem_minmax(0,1fr)] gap-x-2 gap-y-1 py-3 sm:grid-cols-[2rem_minmax(10rem,0.8fr)_2fr] sm:items-start sm:gap-3 sm:py-4">
                              <span className="text-xs font-bold tabular-nums text-[var(--accent)] sm:pt-0.5">02</span>
                              <dt className="text-base font-semibold text-[var(--ink)]">Engine development<span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--muted)]">Development</span></dt>
                              <dd className="col-start-2 text-sm leading-relaxed text-[var(--muted)] sm:col-start-auto sm:text-base">
                                <ul className="list-disc space-y-0.5 pl-4 marker:text-[var(--accent)]">
                                  <li>Engine assembly</li>
                                  <li>Engine bench evaluation</li>
                                </ul>
                              </dd>
                            </div>
                            <div className="grid grid-cols-[1.5rem_minmax(0,1fr)] gap-x-2 gap-y-1 py-3 sm:grid-cols-[2rem_minmax(10rem,0.8fr)_2fr] sm:items-start sm:gap-3 sm:py-4">
                              <span className="text-xs font-bold tabular-nums text-[var(--accent)] sm:pt-0.5">03</span>
                              <dt className="text-base font-semibold text-[var(--ink)]">Vehicle evaluation<span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--muted)]">Development</span></dt>
                              <dd className="col-start-2 text-sm leading-relaxed text-[var(--muted)] sm:col-start-auto sm:text-base">
                                <ul className="list-disc space-y-0.5 pl-4 marker:text-[var(--accent)]">
                                  <li>Test course</li>
                                  <li>Chassis dynamometer</li>
                                </ul>
                              </dd>
                            </div>
                            <div className="grid grid-cols-[1.5rem_minmax(0,1fr)] gap-x-2 gap-y-1 py-3 sm:grid-cols-[2rem_minmax(10rem,0.8fr)_2fr] sm:items-start sm:gap-3 sm:py-4">
                              <span className="text-xs font-bold tabular-nums text-[var(--accent)] sm:pt-0.5">04</span>
                              <dt className="text-base font-semibold text-[var(--ink)]">Development support<span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--muted)]">Development</span></dt>
                              <dd className="col-start-2 text-sm leading-relaxed text-[var(--muted)] sm:col-start-auto sm:text-base">
                                <ul className="list-disc space-y-0.5 pl-4 marker:text-[var(--accent)]">
                                  <li>Equipment introduction and upgrades</li>
                                  <li>Development support tool development</li>
                                </ul>
                              </dd>
                            </div>
                          </dl>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
                {index === 1 && (
                  <AnimatePresence initial={false}>
                    {skillsOpen && (
                      <motion.div
                        id="web-engineering-skills"
                        key="web-engineering-skills"
                        initial={{ opacity: 0, height: 0, y: -8 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -8 }}
                        transition={{ duration: 0.28, ease: 'easeOut' }}
                        className="mt-4 overflow-hidden border-t border-[var(--line)] pt-4"
                      >
                        <TechStack />
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.article>
            ))}
          </div>
        </motion.section>
        
        {/* Certifications Section */}
        <motion.section
          className="section-shell space-y-4 p-3 sm:p-6"
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
