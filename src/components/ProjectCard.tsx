import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '@/types';
import { ArrowTopRightOnSquareIcon, CalendarIcon } from '@heroicons/react/24/outline';
import TechIcon from './TechIcon';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <Link href={`/project/${project.id}`}>
      <motion.div
        className="bg-soft-white dark:bg-gray-800 rounded-lg shadow-sm p-6 group hover:shadow-md transition-shadow duration-300 flex flex-col h-full cursor-pointer"
        initial={{ opacity: 1 }}
        whileHover={{ y: -5 }}
      >
        <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex-grow flex flex-col">
          <div className="mb-4">
            <motion.h3
              className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-300"
              title={project.title}
            >
              {project.title}
            </motion.h3>
            <div className="flex items-center text-sm text-gray-700 dark:text-gray-300 mt-1">
              <CalendarIcon className="h-4 w-4 mr-1" />
              <span>{formatDate(project.createdAt)}</span>
            </div>
          </div>
          
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 max-h-20 overflow-y-auto">
              {project.technologies.map((tech) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 text-sm bg-blue-200 dark:bg-blue-900/70 text-blue-900 dark:text-blue-50 rounded-full font-medium flex items-center gap-1"
                  whileHover={{ scale: 1.1 }}
                >
                  <TechIcon tech={tech} className="h-3.5 w-3.5" />
                  {tech}
                </motion.span>
              ))}
            </div>
            <div className="flex justify-end mt-3">
              <ArrowTopRightOnSquareIcon className="h-4 w-4 text-blue-700 dark:text-blue-300" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
} 