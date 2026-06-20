// Proyectos destacados (showcase con captura real), localizados ES/EN.
// El resto de la trayectoria vive en la línea de tiempo (HighScores).

import { t, type Locale } from "../i18n/config";

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
  screenshot: string;
  screenshotAlt: string;
};

export function getProjects(locale: Locale): Project[] {
  return [
    {
      slug: "depromine-lms",
      title: "Depromine LMS",
      subtitle: t(locale, "Plataforma de cursos para minería", "Mining courses platform"),
      context: "Freelance Full Stack · Depromine EIRL",
      description: t(
        locale,
        "Diseñé y desarrollé de punta a punta una plataforma LMS para cursos de minería, incluyendo dashboard administrativo tipo CMS con métricas, ventas, usuarios, certificados y libro de reclamaciones.",
        "Designed and built an end-to-end LMS for mining courses, including a CMS-style admin dashboard with metrics, sales, users, certificates and a complaints book.",
      ),
      stack: ["Next.js", "MongoDB", "Prisma", "Vercel", "Culqi", "MUX", "UploadThing", "Google OAuth"],
      metrics: [
        { label: t(locale, "Cursos en producción", "Courses in production"), value: "6" },
        { label: t(locale, "Usuarios/día (picos)", "Users/day (peaks)"), value: "~800" },
        { label: t(locale, "Pantallas", "Screens"), value: "~30" },
        { label: t(locale, "Módulos", "Modules"), value: "10" },
      ],
      role: t(
        locale,
        "Diseño + Arquitectura + Implementación + Despliegue",
        "Design + Architecture + Implementation + Deployment",
      ),
      period: t(locale, "Abr 2025 — Actualidad", "Apr 2025 — Present"),
      highlight: true,
      cartridgeTone: "cobalt",
      screenshot: "/projects/depromine.png",
      screenshotAlt: t(
        locale,
        "Dashboard de analítica del LMS Depromine: KPIs de ventas, certificación y engagement con gráfico de ingresos en el tiempo",
        "Analytics dashboard of the Depromine LMS: sales, certification and engagement KPIs with a revenue-over-time chart",
      ),
    },
    {
      slug: "zefiron-crm",
      title: "Zefiron CRM",
      subtitle: t(locale, "CRM inmobiliario en Navia", "Real-estate CRM at Navia"),
      context: "Full Stack Dev · Navia",
      description: t(
        locale,
        "CRM inmobiliario con relación y consolidación de información entre tablas para mejorar consistencia, rendimiento y experiencia. Identifiqué bugs, antipatrones e interoperabilidad frontend ↔ backend y propuse mejoras integrales.",
        "Real-estate CRM with cross-table data consolidation to improve consistency, performance and UX. I identified bugs, anti-patterns and frontend ↔ backend interoperability issues and proposed end-to-end improvements.",
      ),
      stack: ["Flutter", "Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
      metrics: [
        { label: "Stack", value: "Mobile + API" },
        { label: t(locale, "Foco", "Focus"), value: "Geo · CRM" },
      ],
      role: t(
        locale,
        "Frontend, Backend, Data, Despliegues",
        "Frontend, Backend, Data, Deployments",
      ),
      period: t(locale, "Ago 2025 — Actualidad", "Aug 2025 — Present"),
      cartridgeTone: "tomato",
      screenshot: "/projects/zefiron.png",
      screenshotAlt: t(
        locale,
        "Dashboard del CRM Zefiron: leads recibidos, tasa de conversión, leads limpios y ventas cerradas con gráficos por proyecto",
        "Zefiron CRM dashboard: leads received, conversion rate, clean leads and closed deals with per-project charts",
      ),
    },
  ];
}
