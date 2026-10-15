import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Project } from '@/types';
import { CalendarIcon } from '@heroicons/react/24/outline';
import TechIcon from './TechIcon';

// デフォルト画像のパス
const DEFAULT_PROJECT_IMAGE = '/images/default-project.png';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [18, -18]);

  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // 画像のパスを取得、存在しない場合はデフォルト画像を使用
  const imageSrc = project.image || DEFAULT_PROJECT_IMAGE;

  return (
    <div ref={cardRef} className="h-full">
      <motion.div
        className="project-card group transition-transform duration-200 flex flex-col h-full cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        whileHover={{ y: -5 }}
      >
        <Link href={`/project/${project.id}`} className="flex flex-col flex-grow">
          <div className="flex items-center justify-end project-meta mb-3">
            <div className="flex items-center gap-1 text-[var(--muted)]">
              <CalendarIcon className="h-4 w-4" />
              <span>{formatDate(project.createdAt)}</span>
            </div>
          </div>

          <div className="relative h-48 mb-3 overflow-hidden rounded-lg border border-[var(--line)]">
            <motion.div className="absolute inset-0" style={{ y: imageY, scale: 1.12 }}>
              <Image
                src={imageSrc}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                unoptimized={!project.image}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = DEFAULT_PROJECT_IMAGE;
                }}
              />
            </motion.div>
          </div>
          <div className="flex-grow flex flex-col">
            <div className="mb-3 space-y-1">
              <motion.h3
                className="text-xl font-semibold text-[var(--ink)] group-hover:text-[var(--accent)]"
                title={project.title}
              >
                {project.title}
              </motion.h3>
              <p className="text-[var(--muted)] text-sm line-clamp-3">{project.description}</p>
            </div>
            
            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 max-h-20 overflow-y-auto">
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full font-semibold flex items-center gap-2 border border-[var(--line)] bg-[color-mix(in_srgb,_var(--sand-2)_60%,_transparent)] text-[var(--ink)]"
                    whileHover={{ scale: 1.1 }}
                  >
                    <TechIcon tech={tech} className="h-3.5 w-3.5" />
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </Link>
        
      </motion.div>
    </div>
  );
} 
