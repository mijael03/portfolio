// Proyectos destacados como casos de estudio (con captura real), localizados ES/EN.
// Formato caso de estudio: problema → rol → solución → stack → impacto → evidencia.
// El resto de la trayectoria vive en la línea de tiempo (HighScores).

import { t, type Locale } from "../i18n/config";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  context: string;
  problem: string;
  solution: string;
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
      problem: t(
        locale,
        "Una empresa de capacitación minera necesitaba vender y dictar sus cursos online, con certificados, pagos y un panel para operar todo sin depender de terceros.",
        "A mining-training company needed to sell and deliver its courses online — with certificates, payments and a panel to run everything without relying on third parties.",
      ),
      solution: t(
        locale,
        "Diseñé y construí de punta a punta un LMS completo con dashboard tipo CMS: métricas, ventas, usuarios, certificados, progreso y libro de reclamaciones. Integré pagos, video protegido y autenticación.",
        "I designed and built an end-to-end LMS with a CMS-style dashboard: metrics, sales, users, certificates, progress and a complaints book. I wired in payments, protected video and authentication.",
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
      screenshot: "/projects/depromine.webp",
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
      problem: t(
        locale,
        "El CRM inmobiliario arrastraba inconsistencias entre tablas, bugs y antipatrones en la interoperabilidad frontend ↔ backend que golpeaban rendimiento y experiencia.",
        "The real-estate CRM carried cross-table inconsistencies, bugs and anti-patterns in frontend ↔ backend interoperability that hurt performance and UX.",
      ),
      solution: t(
        locale,
        "Relacioné y consolidé la información entre tablas para ganar consistencia y rendimiento. Identifiqué los antipatrones y huecos de interoperabilidad y propuse mejoras integrales sobre mobile, API, data y despliegues.",
        "I related and consolidated data across tables for consistency and performance. I pinpointed the anti-patterns and interoperability gaps and proposed end-to-end improvements across mobile, API, data and deployments.",
      ),
      stack: ["Flutter", "Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
      metrics: [
        { label: "Stack", value: "Mobile + API" },
        { label: t(locale, "Foco", "Focus"), value: t(locale, "Consistencia", "Data consistency") },
      ],
      role: t(
        locale,
        "Frontend, Backend, Data, Despliegues",
        "Frontend, Backend, Data, Deployments",
      ),
      period: t(locale, "Ago 2025 — Actualidad", "Aug 2025 — Present"),
      highlight: true,
      cartridgeTone: "tomato",
      screenshot: "/projects/zefiron.webp",
      screenshotAlt: t(
        locale,
        "Dashboard del CRM Zefiron: leads recibidos, tasa de conversión, leads limpios y ventas cerradas con gráficos por proyecto",
        "Zefiron CRM dashboard: leads received, conversion rate, clean leads and closed deals with per-project charts",
      ),
    },
  ];
}
