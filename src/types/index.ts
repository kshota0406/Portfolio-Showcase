export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  url: string;
  createdAt: string;
}

export interface ProjectsData {
  projects: Project[];
} 