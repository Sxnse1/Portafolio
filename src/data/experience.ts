import type { ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    id: "estadias",
    role: "Desarrollador de Software (Estadías Profesionales)",
    organization: "José Felipe Pérez Sandoval",
    period: "Junio 2026 — Actualidad",
    description:
      "Sistema de gestión y dirección de notarías con Angular y Firebase, cubriendo trámites, expedientes y demarcaciones notariales.",
    highlights: [
      "Desarrollo de un sistema de gestión y dirección de notarías con Angular y Firebase, cubriendo la administración de trámites, expedientes y demarcaciones notariales.",
      "Implementación de validación de RFC contra fuentes de datos del SAT (listas de los artículos 69 y 69-B) como control de cumplimiento dentro del sistema.",
      "Diseño de la arquitectura frontend con Angular, consumiendo servicios y autenticación en tiempo real de Firebase.",
      "Colaboración directa con el cliente/despacho para el levantamiento de requerimientos y ajuste iterativo de funcionalidades.",
    ],
    current: true,
  },
  {
    id: "prointernet",
    role: "Desarrollador Backend (Prácticas Profesionales)",
    organization: "PROINTERNET",
    period: "Enero 2025 — Junio 2026",
    description:
      "Diseño y desarrollo de DESCONECTADO, un módulo de punto de venta (TPV) de escritorio con soporte offline, además de migración de bases de datos y administración de SQL Server.",
    highlights: [
      "Diseño y desarrollo de DESCONECTADO, un módulo de punto de venta (TPV) de escritorio con soporte offline, construido con Electron, Node.js, Express y SQL Server LocalDB.",
      "Motor de sincronización REST con polling cada 60 segundos y procesamiento por lotes de 50 registros para mantener consistencia entre el punto de venta y el servidor central.",
      "Manejo de sesiones offline mediante autenticación local (JWT) sobre SQL Server LocalDB, permitiendo operación continua sin conexión a internet.",
      "Empaquetado e instalación de la aplicación con electron-builder y scripts NSIS, integrando SQL Server Express LocalDB de forma silenciosa.",
      "Migración de un esquema completo de base de datos (23 tablas) de SQL Server a PostgreSQL, incluyendo reescritura de funciones PL/pgSQL y resolución de orden de llaves foráneas.",
      "Administración de bases de datos SQL Server (scripts vía SQLCMD, migración entre versiones con .bacpac, resolución de usuarios huérfanos) y colaboración en un CMS interno y una plataforma de e-commerce.",
    ],
    current: false,
  },
];
