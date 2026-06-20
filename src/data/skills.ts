// Skills del CV como inventario RPG, localizadas ES/EN.
// Los nombres técnicos no se traducen; sí los títulos/subtítulos de categoría
// y los pocos nombres de skill que son texto común.

import { t, type Locale } from "../i18n/config";

export type Skill = {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
  iconSlug?: string;
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
      icon: "{ }",
      skills: [
        { name: "JavaScript / TS", level: 5, iconSlug: "typescript" },
        { name: "Python", level: 4, iconSlug: "python" },
        { name: "Dart", level: 4, iconSlug: "dart" },
        { name: "Kotlin", level: 3, iconSlug: "kotlin" },
        { name: "SQL", level: 4, iconSlug: "postgresql" },
      ],
    },
    {
      key: "frontend",
      title: "Frontend & Mobile",
      subtitle: t(locale, "Interfaces", "Interfaces"),
      icon: "▢",
      skills: [
        { name: "Next.js", level: 5, iconSlug: "nextjs" },
        { name: "React", level: 5, iconSlug: "react" },
        { name: "React Native", level: 4, iconSlug: "react" },
        { name: "Flutter", level: 4, iconSlug: "flutter" },
        { name: "Android", level: 3, iconSlug: "android" },
        { name: "SwiftUI", level: 2, iconSlug: "swift" },
        { name: "Angular", level: 3, iconSlug: "angularjs" },
      ],
    },
    {
      key: "backend",
      title: "Backend",
      subtitle: t(locale, "APIs y servicios", "APIs & services"),
      icon: "⚙",
      skills: [
        { name: "FastAPI", level: 5, iconSlug: "fastapi" },
        { name: "Django", level: 4, iconSlug: "django" },
        { name: "Node.js", level: 4, iconSlug: "nodejs" },
        { name: "NestJS", level: 4, iconSlug: "nestjs" },
        { name: "Express", level: 4, iconSlug: "express" },
        { name: "REST · OAuth", level: 4 },
      ],
    },
    {
      key: "databases",
      title: "Databases",
      subtitle: t(locale, "Persistencia", "Persistence"),
      icon: "▤",
      skills: [
        { name: "PostgreSQL", level: 5, iconSlug: "postgresql" },
        { name: "MongoDB", level: 4, iconSlug: "mongodb" },
        { name: "Redis", level: 3, iconSlug: "redis" },
        { name: "MySQL", level: 3, iconSlug: "mysql" },
        { name: "Prisma", level: 4, iconSlug: "prisma" },
        { name: t(locale, "Geoespacial", "Geospatial"), level: 4 },
      ],
    },
    {
      key: "devops",
      title: "DevOps & QA",
      subtitle: t(locale, "Entrega", "Delivery"),
      icon: "▷",
      skills: [
        { name: "Docker", level: 4, iconSlug: "docker" },
        { name: "Docker Compose", level: 4 },
        { name: "Vercel", level: 4, iconSlug: "vercel" },
        { name: t(locale, "Pruebas funcionales", "Functional testing"), level: 4 },
        { name: "Debugging", level: 5 },
      ],
    },
    {
      key: "integrations",
      title: t(locale, "Integraciones", "Integrations"),
      subtitle: t(locale, "Servicios externos", "External services"),
      icon: "⇄",
      skills: [
        { name: "Culqi", level: 4 },
        { name: "MUX", level: 4 },
        { name: "UploadThing", level: 4 },
        { name: "Google OAuth", level: 5, iconSlug: "google" },
      ],
    },
  ];
}
