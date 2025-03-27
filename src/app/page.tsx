'use client';

import { useState, useEffect } from 'react';
import ProjectCard from '@/components/ProjectCard';
import ProjectFilter from '@/components/ProjectFilter';
import projectsData from '@/data/projects.json';
import { Project } from '@/types';

export default function Home() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData.projects);

  // Filter change handler
  const handleCategoryChange = (categoryStr: string) => {
    const categories = categoryStr ? categoryStr.split(',') : [];
    setSelectedCategories(categories);
  };

  // Filter projects based on selected categories
  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredProjects(projectsData.projects);
      return;
    }
    
    // Filter projects that contain any of the selected technologies
    const filtered = projectsData.projects.filter((project) => 
      project.technologies.some(tech => 
        selectedCategories.some(selected => 
          tech.toLowerCase() === selected.toLowerCase()
        )
      )
    );
    
    setFilteredProjects(filtered);
  }, [selectedCategories]);

  return (
    <div className="min-h-screen py-8 bg-soft-gray dark:bg-gray-900">
      <div className="container bg-soft-white/60 dark:bg-gray-800/60 p-6 rounded-xl shadow-sm">
        {/* Project filter */}
        <ProjectFilter
          selectedCategory={selectedCategories.join(',')}
          onCategoryChange={handleCategoryChange}
        />
        
        {/* Project list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            // Projects found
            filteredProjects.map((project) => (
              <div key={project.id}>
                <ProjectCard project={project} />
              </div>
            ))
          ) : (
            // No projects found
            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No projects found matching the selected categories.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
