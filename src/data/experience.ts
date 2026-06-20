// Experiencia laboral del CV ordenada por recencia.

export type Experience = {
  rank: number;
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
  badge?: string; // crown / star / etc.
};

export const experience: Experience[] = [
  {
    rank: 1,
    company: "Navia",
    role: "Full Stack Developer",
    period: "Ago 2025 — Actualidad",
    location: "Remoto",
    badge: "★",
    achievements: [
      "Implementé soluciones web y administrativas para distintos procesos: frontend, backend, data, despliegues.",
      "Trabajo con data geográfica, mapas, landings y CRMs de administración.",
      "Identifiqué y resolví bugs y antipatrones en la interoperabilidad FE-BE proponiendo mejoras integrales.",
      "Participé en Zefiron (CRM inmobiliario) con Flutter, FastAPI, PostgreSQL, Redis y Docker.",
    ],
  },
  {
    rank: 2,
    company: "Depromine EIRL",
    role: "Freelance Full Stack",
    period: "Abr 2025 — Actualidad",
    location: "Remoto",
    badge: "♛",
    achievements: [
      "LMS de cursos de minería de punta a punta: Next.js + MongoDB + Prisma + Vercel.",
      "Dashboard tipo CMS con métricas, ventas, certificados, reclamos y progreso.",
      "6 cursos lanzados, ~30 pantallas en 10 módulos, picos de ~800 usuarios/día.",
      "Integraciones: Culqi, MUX, UploadThing, Google OAuth, roles y permisos.",
    ],
  },
  {
    rank: 3,
    company: "Cliente sector cambiario",
    role: "Freelance Backend",
    period: "Nov 2024 — Feb 2025",
    location: "Remoto",
    achievements: [
      "Mejora y estabilización de plataforma de cambio de divisas con Django.",
      "Formularios, CRUDs, automatizaciones, módulos administrativos, OAuth con Google.",
      "Ajustes puntuales en React y apoyo en despliegue y mantenimiento.",
    ],
  },
  {
    rank: 4,
    company: "Innova ECG",
    role: "Programador de Aplicaciones",
    period: "Mar 2023 — Mar 2024",
    location: "Lima, PE",
    achievements: [
      "Apps móviles y web con Android, Flutter, NestJS y Django.",
      "Lideré el área de QA: diseño, ejecución y seguimiento de pruebas.",
      "Diseño de bases de datos con características geoespaciales.",
    ],
  },
  {
    rank: 5,
    company: "Innova ECG",
    role: "Practicante Desarrollo y QA",
    period: "Nov 2022 — Feb 2023",
    location: "Lima, PE",
    achievements: [
      "Pruebas funcionales, documentación de incidencias y correcciones en Angular/NestJS/Django/Flutter.",
    ],
  },
  {
    rank: 6,
    company: "IdeasCloud",
    role: "Practicante Desarrollo",
    period: "Dic 2021 — Feb 2022",
    location: "Lima, PE",
    achievements: [
      "Desarrollo de app móvil con React Native integrada a la API de la empresa.",
      "Apoyo en comunicación con clientes.",
    ],
  },
];
