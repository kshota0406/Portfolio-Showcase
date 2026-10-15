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
    <div className="space-y-5">
      {/* Header with title and clear button */}
      <div className="flex justify-between items-start gap-3">
        <div />
        {selectedTechs.length > 0 && (
          <button 
            onClick={clearAll}
            className="text-sm font-semibold text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Display active filters */}
      {selectedTechs.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3 p-3 rounded-lg border border-[var(--line)] bg-[color-mix(in_srgb,_var(--sand-2)_55%,_transparent)]">
          {selectedTechs.map(tech => (
            <motion.div 
              key={tech} 
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm bg-[color-mix(in_srgb,_var(--accent)_15%,_transparent)] text-[var(--ink)] border border-[color-mix(in_srgb,_var(--accent)_40%,_var(--line))]"
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
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-1 bg-[color-mix(in_srgb,_var(--sand-2)_80%,_transparent)] shadow-md rounded-full border border-[var(--line)]"
            >
              <svg className="h-4 w-4 text-[var(--ink)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => scrollTabs('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-1 bg-[color-mix(in_srgb,_var(--sand-2)_80%,_transparent)] shadow-md rounded-full border border-[var(--line)]"
            >
              <svg className="h-4 w-4 text-[var(--ink)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
        
        <div 
          className="overflow-x-auto scrollbar-hide" 
          ref={tabsContainerRef}
        >
          <div className="tab-rail mb-4 whitespace-nowrap">
            {techCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`pill-tab ${
                  activeCategory === category.id ? 'is-active' : 'hover:text-[var(--ink)]'
                }`}
              >
                {categoryIcons[category.id]}
                <span>{category.name}</span>
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
            className={`flex items-center gap-2 px-3 py-2 text-sm tech-chip ${
              selectedTechs.includes(tech)
                ? 'is-active'
                : ''
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
