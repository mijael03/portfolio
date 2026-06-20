// Strings de interfaz (no-datos) en ES/EN. Los términos de arcade
// (Player 1, Game Select, Power-Ups, High Scores, Continue?, Press Start…)
// se mantienen iguales en ambos idiomas: son parte de la estética.
//
// Los textos con énfasis inline (tagline, bio) van como HTML y se
// renderizan con set:html en el componente.

import type { Locale } from "./config";

const bold = (s: string) => `<span class="font-bold text-[var(--color-tomato)]">${s}</span>`;
const cobalt = (s: string) => `<span class="font-bold text-[var(--color-cobalt)]">${s}</span>`;

const es = {
  meta: {
    title: "Mijael Cama · Full Stack Developer",
    description:
      "Portfolio de Mijael Cama — Full Stack Developer especializado en mapas, geodata y CRMs.",
    ogImageAlt: "MIJAEL CAMA — Full Stack Developer · mapas, geodata y CRMs",
    ogLocale: "es_PE",
    htmlLang: "es",
  },
  a11y: {
    skipLink: "Saltar al contenido",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    toggleLang: "Cambiar idioma a inglés",
    toggleSound: "Activar o desactivar sonido",
  },
  nav: {
    selectStage: "▼ Select stage",
    items: [
      { href: "#about", label: "Player 1" },
      { href: "#projects", label: "Game Select" },
      { href: "#skills", label: "Power-Ups" },
      { href: "#experience", label: "High Scores" },
      { href: "#contact", label: "Continue?" },
    ],
  },
  hero: {
    badge: "Available for work · Press start",
    taglineHtml: `${bold("Full Stack Developer")} especializado en mapas, geodata y CRMs. Identifico antipatrones y huecos funcionales antes de que escalen — luego los convierto en soluciones estables, optimizadas y sostenibles.`,
    ctaProjects: "Ver proyectos →",
    ctaContact: "Contactarme",
    metaLocation: "📍 Lima, Perú",
    metaStack: "Next · FastAPI · Flutter",
    metaYears: "+4 años en producción",
  },
  playerOne: {
    label: "PLAYER 1",
    heading: "SELECT CHARACTER",
    charId: "CHAR · 001",
    bioLabel: "// BIO",
    bioHtml: `Desarrollador full stack con experiencia en web y móvil, backend, frontend, QA, datos geográficos, mapas y CRMs. Me especializo en identificar fallos, huecos funcionales y antipatrones técnicos que pueden escalar — sobre todo en la interoperabilidad ${cobalt("frontend ↔ backend")} — y convertirlos en soluciones estables y sostenibles.`,
    cvButton: "↓ Descargar CV",
    cvHref: "/mijael-cama-cv-es.pdf",
    cvDownload: "mijael-cama-cv-es.pdf",
    cvMeta: "CHARACTER SHEET · PDF · ES",
    abilitiesLabel: "ABILITIES UNLOCKED",
  },
  gameSelect: {
    label: "GAME SELECT",
    heading: "PROYECTOS",
    cartridges: (n: number) => `${n} CARTRIDGES · PRESS A TO INSERT`,
    intro:
      "Los cartuchos destacados en los que estuve metido recientemente. Tocá uno para entrar (las páginas de detalle vienen pronto). El resto de la trayectoria está en High Scores.",
    detailsSoon: "DETAILS · soon",
    featured: "★ Featured",
  },
  powerUps: {
    label: "POWER-UPS",
    heading: "SKILLS",
    inventory: (n: number) => `INVENTORY · ${n} ITEMS`,
    intro:
      'Cada item es un power-up que vengo usando en proyectos reales. El "lvl" es honestidad de uso, no marketing — main set vs cosas que he tocado lo suficiente para resolverlas.',
    specialtyLabel: "⚡ SPECIALTY",
    specialty:
      "Mapas · Data geográfica · CRMs · Detección de antipatrones e interoperabilidad FE ↔ BE",
    levelAria: (lvl: number) => `Nivel ${lvl} de 5`,
  },
  highScores: {
    label: "HIGH SCORES",
    heading: "EXPERIENCIA",
    leaderboard: (n: number) => `LEADERBOARD · LAST ${n} RUNS`,
    colRank: "RANK",
    colCompany: "COMPANY · ROLE",
    colPeriod: "PERIOD",
  },
  worldMap: {
    label: "WORLD MAP",
    heading: "MAPAS Y GEODATA",
    meta: (n: number) => `SPECIALTY · GEO · ${n} PINS`,
    intro:
      "Una sección dedicada a proyectos donde la data geográfica es protagonista. Cada pin abre detalle del caso: qué hicimos, qué reto técnico tenía el geo y cómo lo resolvimos.",
    wip: "☐ MAPA INTERACTIVO · WIP",
    coordLabel: "[ 12.04° S · 77.04° W ] LIMA · PE",
    pins: [
      { label: "Zefiron CRM", sublabel: "CRM inmobiliario · Navia", stack: "Flutter · FastAPI · PostgreSQL", tone: "tomato" },
      { label: "Apps Innova ECG", sublabel: "DBs geoespaciales · 2023", stack: "Android · NestJS · Django", tone: "mustard" },
      { label: "Mapas / Geo", sublabel: "Especialidad declarada", stack: "PostGIS · Vectorial · Pins", tone: "mint" },
    ],
  },
  continue: {
    label: "CONTINUE?",
    insertCoin: "▌ INSERT COIN",
    heading: "READY PLAYER 2?",
    intro:
      "Si tenés un proyecto donde encaje, una idea sin pulir, o solo querés charlar de mapas, antipatrones y cómics — la línea está abierta. Disponibilidad por las noches (zona horaria Lima, GMT-5).",
    pressStart: "PRESS START",
    pressStartBody: "¿Prefieres ir directo? Mandame un email con el contexto del proyecto.",
    emailButton: "Mandar email →",
  },
  footer: {
    roleLine: "Full Stack Developer · Lima, Perú",
    gameOver: (year: number) => `© ${year} · GAME OVER`,
  },
};

// EN — mismo shape que `es`. Tipado a partir de `es` para no perder ninguna clave.
const en: typeof es = {
  meta: {
    title: "Mijael Cama · Full Stack Developer",
    description:
      "Portfolio of Mijael Cama — Full Stack Developer specialized in maps, geodata and CRMs.",
    ogImageAlt: "MIJAEL CAMA — Full Stack Developer · maps, geodata and CRMs",
    ogLocale: "en_US",
    htmlLang: "en",
  },
  a11y: {
    skipLink: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    toggleLang: "Switch language to Spanish",
    toggleSound: "Toggle sound on or off",
  },
  nav: {
    selectStage: "▼ Select stage",
    items: [
      { href: "#about", label: "Player 1" },
      { href: "#projects", label: "Game Select" },
      { href: "#skills", label: "Power-Ups" },
      { href: "#experience", label: "High Scores" },
      { href: "#contact", label: "Continue?" },
    ],
  },
  hero: {
    badge: "Available for work · Press start",
    taglineHtml: `${bold("Full Stack Developer")} specialized in maps, geodata and CRMs. I spot anti-patterns and functional gaps before they escalate — then turn them into stable, optimized and maintainable solutions.`,
    ctaProjects: "View projects →",
    ctaContact: "Get in touch",
    metaLocation: "📍 Lima, Peru",
    metaStack: "Next · FastAPI · Flutter",
    metaYears: "4+ years in production",
  },
  playerOne: {
    label: "PLAYER 1",
    heading: "SELECT CHARACTER",
    charId: "CHAR · 001",
    bioLabel: "// BIO",
    bioHtml: `Full stack developer with experience across web and mobile, backend, frontend, QA, geographic data, maps and CRMs. I specialize in spotting bugs, functional gaps and technical anti-patterns that can escalate — especially in ${cobalt("frontend ↔ backend")} interoperability — and turning them into stable, maintainable solutions.`,
    cvButton: "↓ Download CV",
    cvHref: "/cv_mijael_cama_en.pdf",
    cvDownload: "mijael-cama-cv-en.pdf",
    cvMeta: "CHARACTER SHEET · PDF · EN",
    abilitiesLabel: "ABILITIES UNLOCKED",
  },
  gameSelect: {
    label: "GAME SELECT",
    heading: "PROJECTS",
    cartridges: (n: number) => `${n} CARTRIDGES · PRESS A TO INSERT`,
    intro:
      "The featured cartridges I've been deep in recently. Tap one to enter (detail pages coming soon). The rest of the track record lives in High Scores.",
    detailsSoon: "DETAILS · soon",
    featured: "★ Featured",
  },
  powerUps: {
    label: "POWER-UPS",
    heading: "SKILLS",
    inventory: (n: number) => `INVENTORY · ${n} ITEMS`,
    intro:
      'Each item is a power-up I actually use on real projects. The "lvl" is usage honesty, not marketing — main set vs. things I\'ve touched enough to ship with.',
    specialtyLabel: "⚡ SPECIALTY",
    specialty:
      "Maps · Geographic data · CRMs · Anti-pattern detection & FE ↔ BE interoperability",
    levelAria: (lvl: number) => `Level ${lvl} of 5`,
  },
  highScores: {
    label: "HIGH SCORES",
    heading: "EXPERIENCE",
    leaderboard: (n: number) => `LEADERBOARD · LAST ${n} RUNS`,
    colRank: "RANK",
    colCompany: "COMPANY · ROLE",
    colPeriod: "PERIOD",
  },
  worldMap: {
    label: "WORLD MAP",
    heading: "MAPS & GEODATA",
    meta: (n: number) => `SPECIALTY · GEO · ${n} PINS`,
    intro:
      "A section for projects where geographic data takes center stage. Each pin opens the case: what we built, the geo's technical challenge, and how we solved it.",
    wip: "☐ INTERACTIVE MAP · WIP",
    coordLabel: "[ 12.04° S · 77.04° W ] LIMA · PE",
    pins: [
      { label: "Zefiron CRM", sublabel: "Real-estate CRM · Navia", stack: "Flutter · FastAPI · PostgreSQL", tone: "tomato" },
      { label: "Innova ECG Apps", sublabel: "Geospatial DBs · 2023", stack: "Android · NestJS · Django", tone: "mustard" },
      { label: "Maps / Geo", sublabel: "Declared specialty", stack: "PostGIS · Vector · Pins", tone: "mint" },
    ],
  },
  continue: {
    label: "CONTINUE?",
    insertCoin: "▌ INSERT COIN",
    heading: "READY PLAYER 2?",
    intro:
      "If you've got a project where I'd fit, a rough idea, or you just want to talk maps, anti-patterns and comics — the line is open. Available evenings (Lima time, GMT-5).",
    pressStart: "PRESS START",
    pressStartBody: "Prefer to go direct? Send me an email with your project context.",
    emailButton: "Send email →",
  },
  footer: {
    roleLine: "Full Stack Developer · Lima, Peru",
    gameOver: (year: number) => `© ${year} · GAME OVER`,
  },
};

const ui: Record<Locale, typeof es> = { es, en };

export function useUI(locale: Locale) {
  return ui[locale];
}

export type UI = typeof es;
