// Experiencia laboral del CV, localizada ES/EN, ordenada por recencia.

import { t, type Locale } from "../i18n/config";

export type Experience = {
  rank: number;
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
  badge?: string;
};

export function getExperience(locale: Locale): Experience[] {
  const remote = t(locale, "Remoto", "Remote");
  return [
    {
      rank: 1,
      company: "Navia",
      role: "Full Stack Developer",
      period: t(locale, "Ago 2025 — Actualidad", "Aug 2025 — Present"),
      location: remote,
      badge: "★",
      achievements: t(
        locale,
        [
          "Implementé soluciones web y administrativas para distintos procesos: frontend, backend, data, despliegues.",
          "Trabajo con data geográfica, mapas, landings y CRMs de administración.",
          "Identifiqué y resolví bugs y antipatrones en la interoperabilidad FE-BE proponiendo mejoras integrales.",
          "Participé en Zefiron (CRM inmobiliario) con Flutter, FastAPI, PostgreSQL, Redis y Docker.",
        ],
        [
          "Built web and admin solutions across processes: frontend, backend, data, deployments.",
          "Work with geographic data, maps, landing pages and admin CRMs.",
          "Identified and fixed bugs and anti-patterns in FE-BE interoperability, proposing end-to-end improvements.",
          "Contributed to Zefiron (real-estate CRM) with Flutter, FastAPI, PostgreSQL, Redis and Docker.",
        ],
      ),
    },
    {
      rank: 2,
      company: "Depromine EIRL",
      role: t(locale, "Freelance Full Stack", "Freelance Full Stack"),
      period: t(locale, "Abr 2025 — Actualidad", "Apr 2025 — Present"),
      location: remote,
      badge: "♛",
      achievements: t(
        locale,
        [
          "LMS de cursos de minería de punta a punta: Next.js + MongoDB + Prisma + Vercel.",
          "Dashboard tipo CMS con métricas, ventas, certificados, reclamos y progreso.",
          "6 cursos lanzados, ~30 pantallas en 10 módulos, picos de ~800 usuarios/día.",
          "Integraciones: Culqi, MUX, UploadThing, Google OAuth, roles y permisos.",
        ],
        [
          "End-to-end LMS for mining courses: Next.js + MongoDB + Prisma + Vercel.",
          "CMS-style dashboard with metrics, sales, certificates, complaints and progress.",
          "6 courses launched, ~30 screens across 10 modules, peaks of ~800 users/day.",
          "Integrations: Culqi, MUX, UploadThing, Google OAuth, roles and permissions.",
        ],
      ),
    },
    {
      rank: 3,
      company: t(locale, "Cliente sector cambiario", "Currency-exchange client"),
      role: "Freelance Backend",
      period: t(locale, "Nov 2024 — Feb 2025", "Nov 2024 — Feb 2025"),
      location: remote,
      achievements: t(
        locale,
        [
          "Mejora y estabilización de plataforma de cambio de divisas con Django.",
          "Formularios, CRUDs, automatizaciones, módulos administrativos, OAuth con Google.",
          "Ajustes puntuales en React y apoyo en despliegue y mantenimiento.",
        ],
        [
          "Improved and stabilized a currency-exchange platform built with Django.",
          "Forms, CRUDs, automations, admin modules, Google OAuth.",
          "Targeted React tweaks plus deployment and maintenance support.",
        ],
      ),
    },
    {
      rank: 4,
      company: "Innova ECG",
      role: t(locale, "Programador de Aplicaciones", "Applications Developer"),
      period: t(locale, "Mar 2023 — Mar 2024", "Mar 2023 — Mar 2024"),
      location: t(locale, "Lima, PE", "Lima, PE"),
      achievements: t(
        locale,
        [
          "Apps móviles y web con Android, Flutter, NestJS y Django.",
          "Lideré el área de QA: diseño, ejecución y seguimiento de pruebas.",
          "Diseño de bases de datos con características geoespaciales.",
        ],
        [
          "Mobile and web apps with Android, Flutter, NestJS and Django.",
          "Led the QA area: test design, execution and tracking.",
          "Designed databases with geospatial features.",
        ],
      ),
    },
    {
      rank: 5,
      company: "Innova ECG",
      role: t(locale, "Practicante Desarrollo y QA", "Development & QA Intern"),
      period: t(locale, "Nov 2022 — Feb 2023", "Nov 2022 — Feb 2023"),
      location: t(locale, "Lima, PE", "Lima, PE"),
      achievements: t(
        locale,
        [
          "Pruebas funcionales, documentación de incidencias y correcciones en Angular/NestJS/Django/Flutter.",
        ],
        [
          "Functional testing, issue documentation and fixes across Angular/NestJS/Django/Flutter.",
        ],
      ),
    },
    {
      rank: 6,
      company: "IdeasCloud",
      role: t(locale, "Practicante Desarrollo", "Development Intern"),
      period: t(locale, "Dic 2021 — Feb 2022", "Dec 2021 — Feb 2022"),
      location: t(locale, "Lima, PE", "Lima, PE"),
      achievements: t(
        locale,
        [
          "Desarrollo de app móvil con React Native integrada a la API de la empresa.",
          "Apoyo en comunicación con clientes.",
        ],
        [
          "Built a React Native mobile app integrated with the company's API.",
          "Supported client communication.",
        ],
      ),
    },
  ];
}
