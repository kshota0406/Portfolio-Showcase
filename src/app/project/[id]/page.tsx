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
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
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
    <div className="min-h-screen py-8 bg-soft-gray dark:bg-gray-900">
      <div className="container bg-soft-white/60 dark:bg-gray-800/60 p-6 rounded-xl shadow-sm">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Back link */}
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:underline mb-6"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Projects
          </Link>

          {/* Project image */}
          <div className="relative aspect-video mb-6 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={imageSrc}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 800px"
              unoptimized={!project.image} // デフォルト画像の場合は最適化をスキップ
              onError={(e) => {
                // 画像読み込みエラーの場合もデフォルト画像に置き換え
                (e.target as HTMLImageElement).src = DEFAULT_PROJECT_IMAGE;
              }}
            />
          </div>

          {/* Project title and GitHub link */}
          <div className="flex justify-between items-start mb-2">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">{project.title}</h1>
              <div className="flex items-center text-gray-700 dark:text-gray-300 mt-2">
                <CalendarIcon className="h-5 w-5 mr-1" />
                <span>{new Date(project.createdAt).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
            </div>
            <div className="flex gap-3">
              {/* デモサイトリンク（存在する場合） */}
              {project.demoUrl && (
                <motion.a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title="View Live Demo"
                >
                  <FaExternalLinkAlt size={24} />
                </motion.a>
              )}
              {/* GitHub リンク */}
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="Open GitHub Repository"
              >
                <FaGithub size={28} />
              </motion.a>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <motion.div
                  key={tech}
                  className="px-3 py-2 bg-blue-200 dark:bg-blue-900/70 text-blue-900 dark:text-blue-50 rounded-full font-medium flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <TechIcon tech={tech} className="h-5 w-5" />
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Project description */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Project Overview</h2>
            <p className="text-gray-800 dark:text-gray-100 leading-relaxed whitespace-pre-line">
              {project.description}
            </p>
          </div>

          {/* Action buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            {/* GitHub link button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-700 hover:bg-blue-800 dark:bg-blue-800 dark:hover:bg-blue-900 text-white font-medium rounded-lg transition-colors duration-200"
              >
                <FaGithub size={20} className="mr-2" />
                View Code on GitHub
              </a>
            </motion.div>

            {/* デモサイトリンクボタン（存在する場合） */}
            {project.demoUrl && (
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-700 hover:bg-green-800 dark:bg-green-800 dark:hover:bg-green-900 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  <FaExternalLinkAlt size={16} className="mr-2" />
                  Visit Live Demo
                </a>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 