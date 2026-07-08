// Strings de interfaz (no-datos) en ES/EN. Los términos de arcade
// (Player 1, Game Select, Power-Ups, High Scores, Continue?, Press Start…)
// se mantienen como eyebrow; cada sección lleva un subtítulo profesional.
//
// Los textos con énfasis inline (tagline, bio) van como HTML y se
// renderizan con set:html en el componente.

import type { Locale } from "./config";

const bold = (s: string) => `<span class="font-bold text-tomato">${s}</span>`;
const cobalt = (s: string) => `<span class="font-bold text-cobalt">${s}</span>`;

const es = {
  meta: {
    title: "Mijael Cama · Full Stack Product Engineer",
    description:
      "Portfolio de Mijael Cama — Full Stack Product Engineer. Convierto ideas en plataformas web, CRMs, dashboards y features con IA: de la idea al deploy.",
    ogImageAlt: "MIJAEL CAMA — Full Stack Product Engineer · de la idea al producto",
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
      { href: "#projects", label: "Casos" },
      { href: "#build", label: "Build Mode" },
      { href: "#skills", label: "Stack" },
      { href: "#services", label: "Servicios" },
      { href: "#contact", label: "Contacto" },
    ],
  },
  hero: {
    badge: "Disponible para proyectos · Press start",
    role: "Full Stack Product Engineer",
    taglineHtml: `Convierto ideas en producto — ${bold("de la idea al deploy")}. Diseño, construyo y despliego plataformas web, CRMs y dashboards, con criterio de producto en cada decisión.`,
    ctaProjects: "Ver casos de estudio →",
    ctaCv: "↓ Descargar CV",
    metaLocation: "📍 Lima, Perú",
    metaStack: "Next · FastAPI · Flutter",
    metaYears: "+4 años en producción",
  },
  statsHud: {
    label: "STATS",
    heading: "PARTIDA EN CURSO",
    subtitle: "Números que respaldan el trabajo",
    capabilitiesLabel: "// EN QUÉ DESTACO",
    capabilities: [
      "Ownership de producto de punta a punta",
      "Interoperabilidad frontend ↔ backend",
      "Detecto antipatrones antes de que escalen",
      "Criterio de producto, no solo código",
    ],
  },
  playerOne: {
    label: "PLAYER 1",
    heading: "SELECT CHARACTER",
    subtitle: "Sobre mí",
    charId: "CHAR · 001",
    bioLabel: "// BIO",
    bioHtml: `Product engineer full stack con raíz en QA — de ahí el ojo para detectar fallos y antipatrones antes de que escalen, sobre todo en la interoperabilidad ${cobalt("frontend ↔ backend")}. Trabajo el producto completo, en web y móvil: del requerimiento al deploy, con foco en que lo que entrego sea estable y mantenible.`,
    cvButton: "↓ Descargar CV",
    cvHref: "/mijael-cama-cv-es.pdf",
    cvDownload: "mijael-cama-cv-es.pdf",
    cvMeta: "CHARACTER SHEET · PDF · ES",
    abilitiesLabel: "ABILITIES UNLOCKED",
  },
  buildMode: {
    label: "BUILD MODE",
    heading: "DE IDEA A PRODUCTO",
    subtitle: "Cómo trabajo",
    intro:
      "No solo escribo código: acompaño el producto de punta a punta. Este es el flujo que sigo en cada proyecto, del primer requerimiento a la mejora con datos.",
    steps: [
      {
        title: "Entender el problema",
        body: "Levanto requerimientos entre áreas y traduzco negocio → técnico. Antes de codear, entiendo qué mueve la aguja.",
      },
      {
        title: "Diseñar la solución",
        body: "Arquitectura, modelo de datos y flujos claros. Decido el stack por el problema, no por moda.",
      },
      {
        title: "Prototipar rápido",
        body: "Un prototipo funcional temprano para validar con evidencia, no con supuestos.",
      },
      {
        title: "Construir y desplegar",
        body: "Frontend, backend, data e integraciones de punta a punta, con despliegue real en producción.",
      },
      {
        title: "Mejorar con evidencia",
        body: "Métricas, detección de antipatrones e iteración continua sobre lo que ya está vivo.",
      },
    ],
  },
  gameSelect: {
    label: "GAME SELECT",
    heading: "CASOS DE ESTUDIO",
    subtitle: "Proyectos reales, de punta a punta",
    cartridges: (n: number) => `${n} CARTRIDGES · PRESS A TO INSERT`,
    intro:
      "Los productos en los que estuve metido de lleno. Cada caso muestra el problema, mi rol, la solución, el stack y el impacto — con evidencia visual real.",
    detailsSoon: "DETAILS · soon",
    featured: "★ Destacado",
    // etiquetas del formato caso de estudio
    problemLabel: "// PROBLEMA",
    solutionLabel: "// SOLUCIÓN",
    roleLabel: "// MI ROL",
    impactLabel: "// IMPACTO",
    stackLabel: "// STACK",
  },
  powerUps: {
    label: "POWER-UPS",
    heading: "STACK & CAPACIDADES",
    subtitle: "Herramientas por categoría",
    inventory: (n: number) => `INVENTORY · ${n} ITEMS`,
    intro:
      'Stack organizado por categoría, no como lista plana. El "lvl" es honestidad de uso, no marketing — main set vs. cosas que he tocado lo suficiente para resolverlas.',
    levelAria: (lvl: number) => `Nivel ${lvl} de 5`,
  },
  services: {
    label: "SIDE QUESTS",
    heading: "CÓMO PUEDO AYUDARTE",
    subtitle: "Trabajo freelance",
    intro:
      "¿Tienes una idea, un producto que estabilizar o una feature que no despega? Estas son las misiones en las que entro.",
    cta: "Hablemos de tu producto →",
    items: [
      {
        icon: "▢",
        title: "Plataformas web & LMS",
        body: "Apps y portales a medida, de la idea al deploy. Auth, pagos, roles y paneles incluidos.",
        tags: ["Next.js", "FastAPI", "Vercel"],
      },
      {
        icon: "▤",
        title: "CRMs & dashboards",
        body: "Paneles de administración, métricas, reportes y consolidación de datos entre tablas.",
        tags: ["Dashboards", "PostgreSQL", "Redis"],
      },
      {
        icon: "✦",
        title: "Integraciones & IA",
        body: "Pagos, video, OAuth y features con IA conectadas a servicios externos sin fricción.",
        tags: ["Culqi", "MUX", "OAuth"],
      },
    ],
  },
  highScores: {
    label: "HIGH SCORES",
    heading: "TRAYECTORIA",
    subtitle: "Dónde he jugado",
    leaderboard: (n: number) => `LEADERBOARD · LAST ${n} RUNS`,
    colRank: "RANK",
    colCompany: "COMPANY · ROLE",
    colPeriod: "PERIOD",
  },
  continue: {
    label: "CONTINUE?",
    insertCoin: "▌ INSERT COIN",
    heading: "HABLEMOS DE TU PRODUCTO",
    subtitle: "Contacto",
    intro:
      "Si tienes un proyecto donde encaje, una idea sin pulir, o quieres estabilizar algo que ya está vivo — la línea está abierta. Cuéntame el contexto y te digo cómo entraría.",
    pressStart: "PRESS START",
    pressStartBody: "¿Prefieres ir directo? Mándame un email con el contexto del proyecto.",
    emailButton: "Mandar email →",
  },
  footer: {
    roleLine: "Full Stack Product Engineer · Lima, Perú",
    gameOver: (year: number) => `© ${year} · GAME OVER`,
  },
};

// EN — mismo shape que `es`. Tipado a partir de `es` para no perder ninguna clave.
const en: typeof es = {
  meta: {
    title: "Mijael Cama · Full Stack Product Engineer",
    description:
      "Portfolio of Mijael Cama — Full Stack Product Engineer. I turn ideas into web platforms, CRMs, dashboards and AI-powered features: from idea to deploy.",
    ogImageAlt: "MIJAEL CAMA — Full Stack Product Engineer · from idea to product",
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
      { href: "#projects", label: "Cases" },
      { href: "#build", label: "Build Mode" },
      { href: "#skills", label: "Stack" },
      { href: "#services", label: "Services" },
      { href: "#contact", label: "Contact" },
    ],
  },
  hero: {
    badge: "Available for projects · Press start",
    role: "Full Stack Product Engineer",
    taglineHtml: `I turn ideas into product — ${bold("from idea to deploy")}. I design, build and ship web platforms, CRMs and dashboards, with product judgment behind every decision.`,
    ctaProjects: "View case studies →",
    ctaCv: "↓ Download CV",
    metaLocation: "📍 Lima, Peru",
    metaStack: "Next · FastAPI · Flutter",
    metaYears: "4+ years in production",
  },
  statsHud: {
    label: "STATS",
    heading: "GAME IN PROGRESS",
    subtitle: "Numbers that back the work",
    capabilitiesLabel: "// WHERE I STAND OUT",
    capabilities: [
      "End-to-end product ownership",
      "Frontend ↔ backend interoperability",
      "I catch anti-patterns before they escalate",
      "Product judgment, not just code",
    ],
  },
  playerOne: {
    label: "PLAYER 1",
    heading: "SELECT CHARACTER",
    subtitle: "About me",
    charId: "CHAR · 001",
    bioLabel: "// BIO",
    bioHtml: `Full stack product engineer with roots in QA — hence the eye for catching bugs and anti-patterns before they escalate, especially in ${cobalt("frontend ↔ backend")} interoperability. I work the whole product, across web and mobile: from requirement to deploy, focused on shipping something stable and maintainable.`,
    cvButton: "↓ Download CV",
    cvHref: "/cv_mijael_cama_en.pdf",
    cvDownload: "mijael-cama-cv-en.pdf",
    cvMeta: "CHARACTER SHEET · PDF · EN",
    abilitiesLabel: "ABILITIES UNLOCKED",
  },
  buildMode: {
    label: "BUILD MODE",
    heading: "FROM IDEA TO PRODUCT",
    subtitle: "How I work",
    intro:
      "I don't just write code: I own the product end to end. This is the flow I follow on every project, from the first requirement to data-driven improvement.",
    steps: [
      {
        title: "Understand the problem",
        body: "I gather requirements across teams and translate business → technical. Before coding, I know what moves the needle.",
      },
      {
        title: "Design the solution",
        body: "Clear architecture, data model and flows. I pick the stack for the problem, not for hype.",
      },
      {
        title: "Prototype fast",
        body: "An early working prototype to validate with evidence, not assumptions.",
      },
      {
        title: "Build & ship",
        body: "Frontend, backend, data and integrations end to end, shipped to real production.",
      },
      {
        title: "Improve with evidence",
        body: "Metrics, anti-pattern detection and continuous iteration on what's already live.",
      },
    ],
  },
  gameSelect: {
    label: "GAME SELECT",
    heading: "CASE STUDIES",
    subtitle: "Real projects, end to end",
    cartridges: (n: number) => `${n} CARTRIDGES · PRESS A TO INSERT`,
    intro:
      "The products I've been deep in. Each case shows the problem, my role, the solution, the stack and the impact — with real visual evidence.",
    detailsSoon: "DETAILS · soon",
    featured: "★ Featured",
    problemLabel: "// PROBLEM",
    solutionLabel: "// SOLUTION",
    roleLabel: "// MY ROLE",
    impactLabel: "// IMPACT",
    stackLabel: "// STACK",
  },
  powerUps: {
    label: "POWER-UPS",
    heading: "STACK & CAPABILITIES",
    subtitle: "Tools by category",
    inventory: (n: number) => `INVENTORY · ${n} ITEMS`,
    intro:
      'Stack organized by category, not as a flat list. The "lvl" is usage honesty, not marketing — main set vs. things I\'ve touched enough to ship with.',
    levelAria: (lvl: number) => `Level ${lvl} of 5`,
  },
  services: {
    label: "SIDE QUESTS",
    heading: "HOW I CAN HELP",
    subtitle: "Freelance work",
    intro:
      "Got an idea, a product to stabilize or a feature that won't take off? These are the quests I take on.",
    cta: "Let's talk about your product →",
    items: [
      {
        icon: "▢",
        title: "Web platforms & LMS",
        body: "Custom apps and portals, from idea to deploy. Auth, payments, roles and admin panels included.",
        tags: ["Next.js", "FastAPI", "Vercel"],
      },
      {
        icon: "▤",
        title: "CRMs & dashboards",
        body: "Admin panels, metrics, reports and cross-table data consolidation.",
        tags: ["Dashboards", "PostgreSQL", "Redis"],
      },
      {
        icon: "✦",
        title: "Integrations & AI",
        body: "Payments, video, OAuth and AI features wired to external services without friction.",
        tags: ["Culqi", "MUX", "OAuth"],
      },
    ],
  },
  highScores: {
    label: "HIGH SCORES",
    heading: "TRACK RECORD",
    subtitle: "Where I've played",
    leaderboard: (n: number) => `LEADERBOARD · LAST ${n} RUNS`,
    colRank: "RANK",
    colCompany: "COMPANY · ROLE",
    colPeriod: "PERIOD",
  },
  continue: {
    label: "CONTINUE?",
    insertCoin: "▌ INSERT COIN",
    heading: "LET'S TALK PRODUCT",
    subtitle: "Contact",
    intro:
      "If you've got a project where I'd fit, a rough idea, or something live you want to stabilize — the line is open. Tell me the context and I'll tell you how I'd step in.",
    pressStart: "PRESS START",
    pressStartBody: "Prefer to go direct? Send me an email with your project context.",
    emailButton: "Send email →",
  },
  footer: {
    roleLine: "Full Stack Product Engineer · Lima, Peru",
    gameOver: (year: number) => `© ${year} · GAME OVER`,
  },
};

const ui: Record<Locale, typeof es> = { es, en };

export function useUI(locale: Locale) {
  return ui[locale];
}

export type UI = typeof es;
