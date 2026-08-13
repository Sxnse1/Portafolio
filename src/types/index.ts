export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  /** Ruta en /public a una imagen estática de preview. PLACEHOLDER hasta tener screenshots reales. */
  image?: string;
  /** Ruta en /public a un video corto (mp4/webm) que se reproduce en loop mudo al hacer hover. Opcional. */
  video?: string;
  repoUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export type SkillCategory =
  | "Lenguajes"
  | "Backend"
  | "Frontend"
  | "Bases de Datos"
  | "Cloud / Plataformas"
  | "Herramientas";

export interface Skill {
  name: string;
  category: SkillCategory;
  icon: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights?: string[];
  current?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
