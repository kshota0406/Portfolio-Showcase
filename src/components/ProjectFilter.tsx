import { XMarkIcon } from '@heroicons/react/24/outline';
import TechIcon from './TechIcon';
import { useState, useRef, useEffect } from 'react';
import techCategoriesData from '@/data/techCategories.json';
import { motion } from 'framer-motion';
import { 
  CodeBracketIcon, 
  ServerIcon, 
  CpuChipIcon, 
  CircleStackIcon,
  CogIcon,
  DevicePhoneMobileIcon,
  PresentationChartLineIcon
} from '@heroicons/react/24/outline';
import React from 'react';

interface ProjectFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

// Get technology categories from JSON
const techCategories = techCategoriesData.categories;

// Category icons mapping
const categoryIcons: Record<string, React.ReactNode> = {
  frontend: <CodeBracketIcon className="h-4 w-4" />,
  backend: <ServerIcon className="h-4 w-4" />,
  language: <CpuChipIcon className="h-4 w-4" />,
  database: <CircleStackIcon className="h-4 w-4" />,
  devops: <CogIcon className="h-4 w-4" />,
  mobile: <DevicePhoneMobileIcon className="h-4 w-4" />,
  visualization: <PresentationChartLineIcon className="h-4 w-4" />
};

export default function ProjectFilter({
  selectedCategory,
  onCategoryChange,
}: ProjectFilterProps) {
  // Manage selected technologies as an array
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  // Track active category
  const [activeCategory, setActiveCategory] = useState<string>('frontend');
  // For horizontal scroll
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  
  // Check if scroll buttons should be shown
  useEffect(() => {
    const checkScroll = () => {
      if (tabsContainerRef.current) {
        const { scrollWidth, clientWidth } = tabsContainerRef.current;
        setShowScrollButtons(scrollWidth > clientWidth);
      }
    };
    
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);
  
  // Scroll tabs
  const scrollTabs = (direction: 'left' | 'right') => {
    if (tabsContainerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      tabsContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Add/remove selected technology
  const handleTechSelect = (tech: string) => {
    let newSelectedTechs;
    
    if (selectedTechs.includes(tech)) {
      // Remove if already selected
      newSelectedTechs = selectedTechs.filter(t => t !== tech);
    } else {
      // Add if not selected
      newSelectedTechs = [...selectedTechs, tech];
    }
    
    setSelectedTechs(newSelectedTechs);
    // Notify parent component of changes
    onCategoryChange(newSelectedTechs.join(','));
  };

  // Clear all selections
  const clearAll = () => {
    setSelectedTechs([]);
    onCategoryChange('');
  };

  // Switch category
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  // Get technologies from the active category
  const activeTechs = techCategories.find(cat => cat.id === activeCategory)?.techs || [];

  return (
    <div className="mb-8 bg-soft-white/90 dark:bg-gray-800/70 p-5 rounded-xl shadow-sm">
      {/* Header with title and clear button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Filter by Technology</h2>
        {selectedTechs.length > 0 && (
          <button 
            onClick={clearAll}
            className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Display active filters */}
      {selectedTechs.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-5 p-3 bg-gray-100/80 dark:bg-gray-700/40 rounded-lg">
          {selectedTechs.map(tech => (
            <motion.div 
              key={tech} 
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm bg-blue-600 text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <TechIcon tech={tech} className="h-4 w-4" />
              <span>{tech}</span>
              <button 
                onClick={() => handleTechSelect(tech)} 
                className="ml-1 hover:text-gray-200"
              >
                <XMarkIcon className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>
      )}

      {/* Category tabs */}
      <div className="relative">
        {showScrollButtons && (
          <>
            <button 
              onClick={() => scrollTabs('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-1 bg-gray-100 dark:bg-gray-700 shadow-md rounded-full"
            >
              <svg className="h-4 w-4 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => scrollTabs('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-1 bg-gray-100 dark:bg-gray-700 shadow-md rounded-full"
            >
              <svg className="h-4 w-4 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
        
        <div 
          className="overflow-x-auto scrollbar-hide" 
          ref={tabsContainerRef}
        >
          <div className="border-b border-gray-300 dark:border-gray-600 mb-5 flex whitespace-nowrap">
            {techCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`inline-flex items-center px-4 py-2 text-sm font-medium ${
                  activeCategory === category.id
                    ? 'text-blue-700 border-b-2 border-blue-700 dark:text-blue-300 dark:border-blue-300'
                    : 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100'
                }`}
              >
                {categoryIcons[category.id]}
                <span className="ml-2">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Technology list */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {activeTechs.map((tech) => (
          <motion.button
            key={tech}
            onClick={() => handleTechSelect(tech)}
            className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm ${
              selectedTechs.includes(tech)
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
            }`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <TechIcon tech={tech} className="h-4 w-4" />
            <span>{tech}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
} 