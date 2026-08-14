import type { Project } from "@/types";

/**
 * PLACEHOLDER: "Proyecto 3" sigue con contenido de ejemplo — reemplázalo con
 * tu siguiente proyecto real (incluyendo el objeto `caseStudy`, que alimenta
 * su página /proyectos/[id]). Agrega la imagen en /public/images/projects/
 * y actualiza image/video/repoUrl/demoUrl.
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
    year: "2026",
    role: "Desarrollador full-stack (solo)",
    // NOTA: borrador escrito a partir del stack y el sitio en vivo — revisa y ajusta los detalles técnicos.
    caseStudy: {
      problem:
        "En México y LATAM, aprender barbería de nivel profesional casi siempre implica academias presenciales: horarios fijos, costos altos y sin forma de medir el progreso real del estudiante. StartEducation nace para resolver eso — llevar la formación completa a un navegador, a tu ritmo, desde el celular.",
      approach:
        "Construí la plataforma completa como un monolito server-rendered: Express sirviendo vistas con Handlebars para que cada página cargue rápido sin depender de un bundle de JavaScript pesado, con PostgreSQL como fuente de verdad para usuarios, cursos, módulos y progreso. El CSS está escrito a mano, sin framework, para controlar cada detalle visual del look premium que necesitaba una marca nueva.",
      architecture: [
        "Backend Express con rutas organizadas por dominio (auth, cursos, progreso)",
        "PostgreSQL con esquema relacional: usuarios → inscripciones → módulos → lecciones → progreso",
        "Renderizado server-side con Handlebars + partials reutilizables para mantener la vista consistente",
        "Autenticación basada en sesión y despliegue continuo en Heroku con addon de Postgres",
      ],
      challenges: [
        "Diseñar un esquema de progreso que se actualizara de forma confiable lección por lección sin duplicar escrituras",
        "Lograr una landing con animaciones y jerarquía visual fuerte usando CSS puro, sin Tailwind ni un framework de componentes",
        "Mantener tiempos de carga bajos en un stack 100% server-rendered mientras la plataforma crecía en contenido",
      ],
      result:
        "La plataforma está en producción en starteducation.page, sirviendo a estudiantes de barbería en México y LATAM con seguimiento de progreso por módulo y una experiencia pensada para completarse desde el celular.",
    },
  },
  {
    id: "desconectado",
    title: "DESCONECTADO",
    description:
      "Módulo de punto de venta (TPV) de escritorio offline-first construido en PROINTERNET: sigue vendiendo sin internet y sincroniza automáticamente al reconectar.",
    stack: ["Electron", "Node.js", "Express", "SQL Server", "WebSockets"],
    image: "/images/projects/desconectado.svg", // PLACEHOLDER: reemplaza con screenshot real de la app
    // Proyecto propiedad de PROINTERNET — sin repo público ni demo (app de escritorio interna).
    repoUrl: undefined,
    demoUrl: undefined,
    featured: true,
    year: "2025",
    role: "Desarrollador Backend (Prácticas Profesionales) — PROINTERNET",
    // NOTA: borrador escrito a partir de tu CV — revisa y ajusta los detalles técnicos.
    caseStudy: {
      problem:
        "El punto de venta de PROINTERNET dependía de tener internet activo para operar. Cualquier corte de conexión detenía las ventas del comercio — un problema real de continuidad de negocio para el cliente.",
      approach:
        "Construí DESCONECTADO como una aplicación de escritorio con Electron que opera completamente offline contra una instancia local de SQL Server LocalDB, y sincroniza en segundo plano con el servidor central en cuanto detecta conexión.",
      architecture: [
        "Motor de sincronización REST propio con polling cada 60 segundos y procesamiento por lotes de 50 registros",
        "Autenticación local (JWT) sobre SQL Server LocalDB para permitir sesiones sin conexión a internet",
        "Empaquetado e instalación silenciosa con electron-builder y scripts NSIS, integrando SQL Server Express LocalDB",
        "Migración completa del esquema (23 tablas) de SQL Server a PostgreSQL, incluyendo reescritura de funciones PL/pgSQL",
      ],
      challenges: [
        "Diseñar el motor de sincronización para que fuera resiliente a conflictos y no duplicara ni perdiera registros entre el punto de venta local y el servidor central",
        "Resolver el orden de llaves foráneas y la codificación al migrar 23 tablas de SQL Server a PostgreSQL sin downtime del sistema en producción",
        "Mantener sesiones de usuario válidas y seguras completamente offline, sin depender de un servidor de autenticación central",
      ],
      result:
        "El módulo quedó en producción como parte del punto de venta de PROINTERNET, garantizando continuidad de ventas ante cortes de conexión y sincronización automática y consistente al restablecerse la red.",
    },
  },
  {
    id: "proyecto-3",
    title: "Proyecto 3",
    description:
      "Descripción corta de ejemplo: qué problema resuelve este proyecto y qué lo hace interesante desde el punto de vista técnico.",
    stack: ["Java", "SQL Server", "REST APIs"],
    image: "/images/projects/placeholder-3.svg",
    repoUrl: "https://github.com/Sxnse1/proyecto-3",
    demoUrl: undefined,
    featured: false,
    year: "2025",
    role: "Rol en el proyecto",
    caseStudy: {
      problem: "PLACEHOLDER: describe el problema real que resolvía este proyecto.",
      approach: "PLACEHOLDER: cómo abordaste la solución técnica.",
      architecture: [
        "PLACEHOLDER: pieza de arquitectura o decisión técnica clave",
        "PLACEHOLDER: otra decisión relevante (base de datos, infraestructura, etc.)",
      ],
      challenges: [
        "PLACEHOLDER: un reto técnico concreto que resolviste",
        "PLACEHOLDER: otro reto relevante",
      ],
      result: "PLACEHOLDER: resultado o impacto medible del proyecto.",
    },
  },
];
