import type { Project } from "@/types";

/**
 * PLACEHOLDER: reemplaza estos 3 proyectos con tus proyectos reales.
 * Para cada uno: agrega una imagen en /public/images/projects/<slug>/cover.png
 * (y opcionalmente un video corto en el mismo folder) y actualiza image/video/repoUrl/demoUrl.
 */
export const projects: Project[] = [
  {
    id: "starteducation",
    title: "StartEducation",
    description:
      "Academia en línea de barbería profesional para México y LATAM: cursos en video, seguimiento de progreso por módulos y un flujo pensado para que el estudiante genere ingresos reales desde el primer mes.",
    stack: ["Node.js", "Express", "Handlebars", "PostgreSQL", "CSS", "Heroku"],
    image: "/images/projects/starteducation.svg", // PLACEHOLDER: reemplaza con screenshot real del sitio
    repoUrl: "https://github.com/Sxnse1/StartEducation",
    demoUrl: "https://www.starteducation.page/",
    featured: true,
  },
  {
    id: "proyecto-2",
    title: "Proyecto 2",
    description:
      "Descripción corta de ejemplo: qué problema resuelve este proyecto y qué lo hace interesante desde el punto de vista técnico.",
    stack: ["Next.js", "TypeScript", "Supabase"],
    image: "/images/projects/placeholder-2.svg",
    repoUrl: "https://github.com/tu-usuario/proyecto-2",
    demoUrl: undefined,
    featured: true,
  },
  {
    id: "proyecto-3",
    title: "Proyecto 3",
    description:
      "Descripción corta de ejemplo: qué problema resuelve este proyecto y qué lo hace interesante desde el punto de vista técnico.",
    stack: ["Java", "SQL Server", "REST APIs"],
    image: "/images/projects/placeholder-3.svg",
    repoUrl: "https://github.com/tu-usuario/proyecto-3",
    demoUrl: undefined,
    featured: false,
  },
];
