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
    <div className="min-h-screen px-4 md:px-6 pb-16 pt-4">
      <div className="container space-y-8 md:space-y-10">
        {/* Project filter */}
        <section className="section-shell">
          <ProjectFilter
            selectedCategory={selectedCategories.join(',')}
            onCategoryChange={handleCategoryChange}
          />
        </section>
        
        {/* Project list */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div key={project.id}>
                <ProjectCard project={project} />
              </div>
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-12">
              <p className="text-[var(--muted)] text-lg">
                No projects found matching the selected categories.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
