import type { Skill } from "@/types";

export const skills: Skill[] = [
  { name: "JavaScript", category: "Lenguajes", icon: "SiJavascript" },
  { name: "TypeScript", category: "Lenguajes", icon: "SiTypescript" },
  { name: "Java", category: "Lenguajes", icon: "FaJava" },

  { name: "Node.js", category: "Backend", icon: "FaNodeJs" },
  { name: "Express", category: "Backend", icon: "SiExpress" },
  { name: "REST APIs", category: "Backend", icon: "TbApi" },
  { name: "WebSockets", category: "Backend", icon: "TbPlugConnected" },

  { name: "React", category: "Frontend", icon: "FaReact" },
  { name: "Next.js", category: "Frontend", icon: "SiNextdotjs" },
  { name: "Angular", category: "Frontend", icon: "FaAngular" },

  { name: "SQL Server", category: "Bases de Datos", icon: "TbDatabase" },
  { name: "PostgreSQL", category: "Bases de Datos", icon: "SiPostgresql" },

  { name: "Firebase", category: "Cloud / Plataformas", icon: "SiFirebase" },
  { name: "Supabase", category: "Cloud / Plataformas", icon: "SiSupabase" },
  { name: "Electron", category: "Cloud / Plataformas", icon: "SiElectron" },

  { name: "Git", category: "Herramientas", icon: "FaGitAlt" },
];
