import type { Project } from "@/types";

/**
 * Agregar/quitar un proyecto es solo editar este array — no requiere tocar el JSX.
 * Cada proyecto puede incluir un `caseStudy` (problema/enfoque/arquitectura/retos/
 * resultado) que alimenta su página /proyectos/[id].
 */
export const projects: Project[] = [
  {
    id: "starteducation",
    title: "StartEducation",
    description:
      "Academia en línea de barbería profesional para México y LATAM: cursos en video, seguimiento de progreso por módulos y un flujo pensado para que el estudiante genere ingresos reales desde el primer mes.",
    stack: ["Node.js", "Express", "Handlebars", "PostgreSQL", "CSS", "Heroku"],
    image: "/images/projects/starteducation.png",
    repoUrl: "https://github.com/Sxnse1/StartEducation",
    demoUrl: "https://www.starteducation.page/",
    // CSP frame-ancestors en StartEducation ahora permite este dominio — confirmado con curl -I.
    embeddable: true,
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
    id: "cryptoia",
    title: "CryptoIA",
    description:
      "Plataforma de análisis de criptomonedas con IA: detecta oportunidades de trading a corto plazo con un score interno basado en indicadores técnicos, backtesting histórico y análisis contextual generado con OpenAI.",
    stack: ["Next.js", "TypeScript", "OpenAI API", "Binance API", "Supabase", "Tailwind CSS"],
    image: "/images/projects/cryptoia.svg", // PLACEHOLDER: reemplaza con screenshot real del sitio
    repoUrl: "https://github.com/Sxnse1/CryptoIA",
    demoUrl: "https://cryptoia.starteducation.page/",
    // Sin X-Frame-Options ni CSP frame-ancestors en el deploy — confirmado con curl -I.
    embeddable: true,
    featured: true,
    year: "2026",
    role: "Desarrollador full-stack",
    // NOTA: borrador escrito a partir del repo/README/package.json — revisa y ajusta los detalles técnicos.
    caseStudy: {
      problem:
        "Encontrar oportunidades de trading a corto plazo entre miles de criptomonedas implica cruzar manualmente indicadores técnicos y datos de mercado en tiempo real — lento, propenso a error y sin un criterio objetivo consistente para comparar una moneda contra otra.",
      approach:
        "Construí CryptoIA como una app Next.js (App Router) que consume datos de mercado en tiempo real de Binance (vía endpoints públicos) y los enriquece con rankings de CoinMarketCap, calcula un score interno a partir de indicadores técnicos y backtesting histórico, y usa la API de OpenAI para generar análisis contextual sobre ese score — dejando siempre explícito que es una herramienta de apoyo, no asesoría financiera.",
      architecture: [
        "API routes de Next.js desplegadas en Vercel, consumiendo Binance API (mercado en tiempo real) y CoinMarketCap (rankings)",
        "Motor de scoring basado en la librería technicalindicators + backtesting histórico",
        "Integración con OpenAI para generar análisis en lenguaje natural sobre los scores calculados",
        "Supabase para persistir alertas, favoritos e historial de usuario, con fallback a memoria local en desarrollo si falta alguna credencial",
        "Visualización de datos con Recharts y Lightweight Charts (gráficos de velas)",
      ],
      challenges: [
        "Diseñar un score objetivo a partir de múltiples indicadores técnicos sin sobreajustarlo a datos históricos",
        "Integrar varias APIs externas (Binance, CoinMarketCap, OpenAI, Supabase) con degradación agraciada cuando falta alguna credencial, para que el proyecto siga siendo desarrollable localmente sin todas las keys",
        "Comunicar con claridad, tanto en el producto como en el código, que el sistema es apoyo analítico y no asesoría financiera — un límite de responsabilidad importante en un producto de este tipo",
      ],
      result:
        "MVP funcional desplegado en Vercel (cryptoia.starteducation.page), con autenticación de usuarios, generación de señales de mercado y respaldo de indicadores técnicos más backtesting histórico.",
    },
  },
];
