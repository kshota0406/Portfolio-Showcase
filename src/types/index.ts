export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  url: string; // GitHub URL
  demoUrl?: string; // デモサイトURL（オプション）
  createdAt: string;
}

export interface ProjectsData {
  projects: Project[];
} 