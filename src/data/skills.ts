// Skills del CV como inventario RPG, localizadas ES/EN.
// Los nombres técnicos no se traducen; sí los títulos/subtítulos de categoría
// y los pocos nombres de skill que son texto común.

import { t, type Locale } from "../i18n/config";

export type Skill = {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
  iconSlug?: string;
  // Ruta a un asset en /public para marcas que Simple Icons no trae (Culqi, MUX, UploadThing).
  iconSrc?: string;
};

export type SkillCategory = {
  key: string;
  title: string;
  subtitle: string;
  icon: string;
  skills: Skill[];
};

export function getSkillCategories(locale: Locale): SkillCategory[] {
  return [
    {
      key: "languages",
      title: t(locale, "Lenguajes", "Languages"),
      subtitle: "Core arsenal",
      icon: "braces",
      skills: [
        { name: "JavaScript / TS", level: 5, iconSlug: "typescript" },
        { name: "Python", level: 4, iconSlug: "python" },
        { name: "Dart", level: 4, iconSlug: "dart" },
        { name: "SQL", level: 4, iconSlug: "postgresql" },
      ],
    },
    {
      key: "frontend",
      title: "Frontend & Mobile",
      subtitle: t(locale, "Interfaces", "Interfaces"),
      icon: "devices",
      skills: [
        { name: "Next.js", level: 5, iconSlug: "nextjs" },
        { name: "React", level: 5, iconSlug: "react" },
        { name: "Flutter", level: 4, iconSlug: "flutter" },
        { name: "Android", level: 3, iconSlug: "android" },
      ],
    },
    {
      key: "backend",
      title: "Backend",
      subtitle: t(locale, "APIs y servicios", "APIs & services"),
      icon: "server",
      skills: [
        { name: "FastAPI", level: 5, iconSlug: "fastapi" },
        { name: "Django", level: 4, iconSlug: "django" },
        { name: "Node.js", level: 4, iconSlug: "nodejs" },
        { name: "NestJS", level: 4, iconSlug: "nestjs" },
      ],
    },
    {
      key: "databases",
      title: "Databases",
      subtitle: t(locale, "Persistencia", "Persistence"),
      icon: "database",
      skills: [
        { name: "PostgreSQL", level: 5, iconSlug: "postgresql" },
        { name: "MongoDB", level: 4, iconSlug: "mongodb" },
        { name: "Redis", level: 3, iconSlug: "redis" },
        { name: "Prisma", level: 4, iconSlug: "prisma" },
      ],
    },
    {
      key: "devops",
      title: "DevOps & QA",
      subtitle: t(locale, "Entrega", "Delivery"),
      icon: "git-branch",
      skills: [
        { name: "Docker", level: 4, iconSlug: "docker" },
        { name: "Vercel", level: 4, iconSlug: "vercel" },
        { name: t(locale, "Pruebas funcionales", "Functional testing"), level: 4 },
      ],
    },
    {
      key: "integrations",
      title: t(locale, "Integraciones", "Integrations"),
      subtitle: t(locale, "Servicios externos", "External services"),
      icon: "cable",
      skills: [
        { name: "Culqi", level: 4, iconSrc: "/culqi.svg" },
        { name: "MUX", level: 4, iconSrc: "/mux.svg" },
        { name: "UploadThing", level: 4, iconSrc: "/uploadthing.ico" },
        { name: "Google OAuth", level: 5, iconSlug: "google" },
      ],
    },
  ];
}
