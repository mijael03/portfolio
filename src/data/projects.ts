// Proyectos extraídos del CV. Ampliable a content collection bilingüe más adelante.

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  context: string;
  description: string;
  stack: string[];
  metrics?: { label: string; value: string }[];
  role: string;
  period: string;
  highlight?: boolean;
  cartridgeTone: "cobalt" | "tomato" | "mustard" | "pink";
  // TODO: reemplazar por screenshot real cuando lo tenga
  screenshotPlaceholder: string;
};

export const projects: Project[] = [
  {
    slug: "depromine-lms",
    title: "Depromine LMS",
    subtitle: "Plataforma de cursos para minería",
    context: "Freelance Full Stack · Depromine EIRL",
    description:
      "Diseñé y desarrollé de punta a punta una plataforma LMS para cursos de minería, incluyendo dashboard administrativo tipo CMS con métricas, ventas, usuarios, certificados y libro de reclamaciones.",
    stack: ["Next.js", "MongoDB", "Prisma", "Vercel", "Culqi", "MUX", "UploadThing", "Google OAuth"],
    metrics: [
      { label: "Cursos en producción", value: "6" },
      { label: "Usuarios/día (picos)", value: "~800" },
      { label: "Pantallas", value: "~30" },
      { label: "Módulos", value: "10" },
    ],
    role: "Diseño + Arquitectura + Implementación + Despliegue",
    period: "Abr 2025 — Actualidad",
    highlight: true,
    cartridgeTone: "cobalt",
    screenshotPlaceholder: "Dashboard LMS · vista admin con métricas",
  },
  {
    slug: "zefiron-crm",
    title: "Zefiron CRM",
    subtitle: "CRM inmobiliario en Navia",
    context: "Full Stack Dev · Navia",
    description:
      "CRM inmobiliario con relación y consolidación de información entre tablas para mejorar consistencia, rendimiento y experiencia. Identifiqué bugs, antipatrones e interoperabilidad frontend ↔ backend y propuse mejoras integrales.",
    stack: ["Flutter", "Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    metrics: [
      { label: "Stack", value: "Mobile + API" },
      { label: "Foco", value: "Geo · CRM" },
    ],
    role: "Frontend, Backend, Data, Despliegues",
    period: "Ago 2025 — Actualidad",
    cartridgeTone: "tomato",
    screenshotPlaceholder: "Pantalla CRM Zefiron · TBD",
  },
  {
    slug: "cambio-divisas",
    title: "Cambio de divisas",
    subtitle: "Plataforma de cambio (cliente sector cambiario)",
    context: "Freelance Backend",
    description:
      "Mejoras y estabilización de plataforma existente: formularios, CRUDs, automatizaciones, módulos administrativos, OAuth con Google y ajustes puntuales en frontend, con apoyo en despliegue y mantenimiento.",
    stack: ["Django", "PostgreSQL", "React", "OAuth"],
    role: "Backend principal · Ajustes en FE",
    period: "Nov 2024 — Feb 2025",
    cartridgeTone: "mustard",
    screenshotPlaceholder: "Dashboard backend cambio · TBD",
  },
  {
    slug: "innova-apps",
    title: "Apps Innova ECG",
    subtitle: "Web y móvil + liderazgo QA",
    context: "Programador de Apps · Innova ECG",
    description:
      "Apps móviles y web con Android, Flutter, NestJS y Django. Lideré el área de QA: diseño, ejecución y seguimiento de pruebas. Diseñé bases de datos geoespaciales y participé en despliegues y debugging.",
    stack: ["Android", "Flutter", "NestJS", "Django", "PostgreSQL/geo"],
    role: "Full Stack + QA Lead",
    period: "Mar 2023 — Mar 2024",
    cartridgeTone: "pink",
    screenshotPlaceholder: "Mosaico apps Innova · TBD",
  },
];
