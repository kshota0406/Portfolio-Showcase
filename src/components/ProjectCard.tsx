import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '@/types';
import { ArrowTopRightOnSquareIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import TechIcon from './TechIcon';

// デフォルト画像のパス
const DEFAULT_PROJECT_IMAGE = '/images/default-project.png';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // 画像のパスを取得、存在しない場合はデフォルト画像を使用
  const imageSrc = project.image || DEFAULT_PROJECT_IMAGE;

  // プロジェクト詳細へのリンククリックをハンドル
  const handleCardClick = () => {
    // プロジェクト詳細ページへの遷移
  };

  // 外部リンククリック時の挙動（イベントの伝播を停止）
  const handleExternalLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="h-full">
      <motion.div
        className="bg-soft-white dark:bg-gray-800 rounded-lg shadow-sm p-6 group hover:shadow-md transition-shadow duration-300 flex flex-col h-full cursor-pointer"
        initial={{ opacity: 1 }}
        whileHover={{ y: -5 }}
      >
        <Link href={`/project/${project.id}`} className="flex flex-col flex-grow">
          <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
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
            </div>
          </div>
        </Link>
        
        {/* 外部リンク */}
        <div className="flex justify-end gap-3 mt-3">
          {/* GitHub リンク */}
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={handleExternalLinkClick}
            className="text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-300 transition-colors"
            title="View GitHub Repository"
          >
            <FaGithub className="h-4 w-4" />
          </a>
          
          {/* デモサイトリンク（存在する場合） */}
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={handleExternalLinkClick}
              className="text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-300 transition-colors"
              title="View Live Demo"
            >
              <FaExternalLinkAlt className="h-4 w-4" />
            </a>
          )}
          
          {/* 詳細ページへのリンク */}
          <Link href={`/project/${project.id}`} className="text-blue-700 dark:text-blue-300">
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
} 