'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '@/types';
import projectsData from '@/data/projects.json';
import TechIcon from '@/components/TechIcon';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { CalendarIcon } from '@heroicons/react/24/outline';

// デフォルト画像のパス
const DEFAULT_PROJECT_IMAGE = '/images/default-project.png';

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch project data
    const foundProject = projectsData.projects.find(p => p.id === id);
    if (foundProject) {
      setProject(foundProject);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="container flex items-center justify-center min-h-screen">
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container flex flex-col items-center justify-center min-h-screen">
        <div className="text-2xl mb-4">Project not found</div>
        <Link href="/" className="text-blue-600 hover:underline flex items-center">
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Back to Projects
        </Link>
      </div>
    );
  }

  // 画像のパスを取得、存在しない場合はデフォルト画像を使用
  const imageSrc = project.image || DEFAULT_PROJECT_IMAGE;

  return (
    <div className="min-h-screen px-4 md:px-6 pb-16 pt-6">
      <div className="container max-w-5xl">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-2">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-[var(--line)] bg-[color-mix(in_srgb,_var(--sand-2)_70%,_transparent)] hover:-translate-y-0.5 transition-transform"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              <span className="text-sm font-semibold">Back to list</span>
            </Link>
          </div>

          <div className="section-shell">
            {/* Project image */}
            <div className="relative aspect-video mb-6 rounded-xl overflow-hidden border-2 border-[var(--line)] shadow-lg">
              <Image
                src={imageSrc}
                alt={project.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
                unoptimized={!project.image}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = DEFAULT_PROJECT_IMAGE;
                }}
              />
            </div>

            {/* Project title */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl font-semibold text-[var(--ink)]">{project.title}</h1>
                <div className="flex items-center text-[var(--muted)] project-meta">
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  <span>{new Date(project.createdAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-[var(--ink)]">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <motion.div
                    key={tech}
                    className="px-3 py-2 text-xs sm:text-sm rounded-full font-semibold flex items-center gap-2 border border-[var(--line)] bg-[color-mix(in_srgb,_var(--sand-2)_60%,_transparent)] text-[var(--ink)]"
                    whileHover={{ scale: 1.05 }}
                  >
                    <TechIcon tech={tech} className="h-4 w-4" />
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Project description */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-[var(--ink)]">Project Overview</h2>
              <p className="text-[var(--muted)] leading-relaxed whitespace-pre-line">
                {project.description}
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
