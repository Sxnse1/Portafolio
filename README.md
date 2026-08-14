# Portafolio — Alejandro Dávila

Portafolio personal construido con Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui, Framer Motion y Supabase.

## Stack

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS v4** + **shadcn/ui**
- **Framer Motion** para animaciones y transiciones de página
- **cmdk** para la paleta de comandos (⌘K)
- **next-themes** para modo claro/oscuro con persistencia
- **Supabase** para el formulario de contacto y el contador de visitas
- **react-hook-form** + **zod** para validación de formularios

## Arquitectura del sitio

Es un sitio multi-ruta, no una landing de una sola página:

| Ruta | Contenido |
|---|---|
| `/` | Hero + tira de tecnologías + proyectos destacados + CTA — el "trailer" |
| `/proyectos` | Catálogo completo de proyectos, filtrable por stack |
| `/proyectos/[id]` | Case study de cada proyecto: problema, enfoque, arquitectura, retos, resultado |
| `/sobre-mi` | Bio completa, intereses, habilidades por categoría y experiencia |
| `/contacto` | Formulario + links directos |

Navegación global vía **⌘K / Ctrl+K** (paleta de comandos): saltar a cualquier página, proyecto, red social, descargar el CV o cambiar de tema sin tocar el mouse.

## Estructura del proyecto

```
src/
  app/
    layout.tsx              # metadata SEO, fuentes, ThemeProvider, Navbar/Footer/CommandPalette
    template.tsx             # transición fade/slide entre rutas (Framer Motion)
    page.tsx                  # home
    proyectos/page.tsx         # catálogo filtrable
    proyectos/[id]/page.tsx     # case study (generateStaticParams + generateMetadata)
    sobre-mi/page.tsx            # bio + skills + experiencia
    contacto/page.tsx             # formulario de contacto
    globals.css                    # tema (colores, radios) y utilidades
    api/visits/route.ts             # incrementa el contador de visitas (Supabase, server-side)
  components/
    layout/                # Navbar, Footer, Container, Section, PageHeader
    sections/               # Hero, About, FeaturedProjects, Skills, Experience, Contact
    ui/                     # componentes shadcn/ui (incluye Command)
    CommandPalette.tsx       # paleta de comandos global (⌘K)
    ProjectCard.tsx           # card reutilizable (imagen o video en hover, click → case study)
    ProjectsGrid.tsx           # grid filtrable usado en /proyectos
    TechMarquee.tsx             # tira de íconos con scroll infinito
    ScrollReveal.tsx             # wrapper de animación de scroll
    TimelineItem.tsx
    ThemeToggle.tsx
    VisitCounter.tsx
  data/
    projects.ts            # array tipado — cada proyecto incluye su `caseStudy`
    skills.ts
    experience.ts
  lib/
    supabase/               # clientes de Supabase (browser y server)
    validations.ts           # schema zod del formulario de contacto
  types/index.ts             # tipos compartidos (Project, ProjectCaseStudy, etc.)
supabase/
  schema.sql                 # SQL para crear las tablas y políticas RLS
```

## 1. Instalación local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## 2. Configurar Supabase

### 2.1 Crear el proyecto

1. Entra a [supabase.com](https://supabase.com) y crea un nuevo proyecto.
2. Espera a que termine el aprovisionamiento (1-2 minutos).

### 2.2 Crear las tablas

1. En el dashboard de tu proyecto, ve a **SQL Editor**.
2. Pega el contenido de [`supabase/schema.sql`](supabase/schema.sql) y ejecútalo.

Esto crea:
- `contact_submissions`: guarda los envíos del formulario de contacto (con RLS que solo permite `INSERT` público, nunca lectura desde el navegador).
- `page_visits`: fila única con el contador de visitas, más una función `increment_page_visits()` para incrementarlo de forma atómica.

### 2.3 Obtener las claves

En **Project Settings → API** copia:
- **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
- **anon public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **service_role key** → `SUPABASE_SERVICE_ROLE_KEY` (¡mantenla secreta, nunca la expongas con `NEXT_PUBLIC_`!)

### 2.4 Variables de entorno

Copia `.env.local.example` a `.env.local` y rellena los valores:

```bash
cp .env.local.example .env.local
```

```
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key
SUPABASE_SERVICE_ROLE_KEY=tu-service-role-key
```

Reinicia `npm run dev` después de crear el archivo.

## 3. Placeholders pendientes de reemplazar

| Qué | Dónde | Detalle |
|---|---|---|
| Imagen Open Graph | `public/images/og-image.png` (1200×630px) | Referenciada en [layout.tsx](src/app/layout.tsx) para previews de redes sociales |
| Proyecto 3 | [`src/data/projects.ts`](src/data/projects.ts) | Sigue con contenido de ejemplo — reemplázalo, incluyendo el objeto `caseStudy` (problema/enfoque/arquitectura/retos/resultado) que alimenta su página `/proyectos/[id]` |
| Screenshots de DESCONECTADO / Proyecto 3 | `public/images/projects/` | Sustituye los SVG placeholder por capturas reales (o un video corto mudo para el hover, campo `video` del tipo `Project`) |

Agregar un proyecto nuevo es tan simple como añadir un objeto al array en `projects.ts` — no requiere tocar el JSX.

## 4. Desplegar en Vercel

1. Sube el repositorio a GitHub (si aún no lo has hecho).
2. Entra a [vercel.com/new](https://vercel.com/new) e importa el repositorio.
3. En **Environment Variables**, agrega las mismas tres variables de `.env.local`:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
4. Despliega. Vercel detecta Next.js automáticamente (no requiere configuración adicional de build).
5. Una vez desplegado, actualiza `siteUrl` en [layout.tsx](src/app/layout.tsx) con tu dominio real y vuelve a desplegar para que los metadatos Open Graph apunten correctamente.

## Scripts

```bash
npm run dev      # servidor de desarrollo
npm run build     # build de producción
npm run start      # sirve el build de producción
npm run lint         # eslint
```
