# CLAUDE.md — Portfolio Mijael Cama

Portfolio personal neo-retro "arcade". Astro 6 + React 19 (islands) + Tailwind v4 +
Motion. Estático, deploy en Vercel.

## Posicionamiento (leer antes de tocar copy)

Mijael se posiciona como **Full Stack Product Engineer** — ownership de producto de
punta a punta (idea → requerimientos → diseño → build → deploy → medir), no solo
"dev que codea".

**Jerarquía de metas (jul-2026): EMPRESAS PRIMERO, freelance secundario.** El sitio es
ante todo una oferta para que una empresa lo contrate full-time; la carrera freelance
se menciona después, como carril secundario (Services + CTA de contacto). El hero
lidera con prueba para empresas (casos de estudio), no con el pitch freelance. (Esto
supersede el "ambos por igual" previo.)

## Tono y principios de contenido

- **Playful pero profesional.** Faro: Josh Comeau. Los términos arcade (Player 1,
  Power-Ups, High Scores, Continue?) son *eyebrow*; cada sección lleva un subtítulo
  profesional real.
- **Honestidad sobre marketing.** El "lvl" de skills es honestidad de uso; las
  métricas son números reales del CV. No inflar.
- **Show, don't tell.** Los casos de estudio son la prueba fuerte; priorizarlos.
- **No publicar "WIP".** Nada que diga "en construcción" en producción — contradice
  el claim de "yo entrego".
- **Geodata DESCARTADO** (jul-2026): fuera de la propuesta. No reintroducir mapas/
  geodata/PostGIS en copy de posicionamiento. Se conservan solo menciones factuales
  en la línea de experiencia (Navia/Innova).
- **No repetir el mismo mensaje 3 veces.** Los 3 buckets de capacidades
  (web/LMS · CRM/dashboards · integraciones/IA) tienden a duplicarse. Reparto actual:
  Services = qué construyo (detalle + freelance) · StatsHud "En qué destaco" =
  diferenciadores (por qué yo) · Hero = one-liner. Cada aparición, ángulo distinto.

## Arquitectura (una fuente de verdad por dato)

- **Copy de UI:** todo en `src/i18n/ui.ts` — objetos `es`/`en` con la MISMA shape
  (`en` tipado como `typeof es`, no perder claves). No hardcodear texto en componentes.
- **Datos:** `src/data/*.ts` (`profile`, `projects`, `skills`, `experience`) como
  `getX(locale)` con el helper `t(locale, es, en)` de `i18n/config`.
- **CV PDF:** única fuente = `ui.playerOne.cvHref`/`cvDownload` (Hero lo reexporta).
- **Copy con énfasis:** guardar como HTML + `set:html`; helpers `bold()`/`cobalt()`.
- **Orden de secciones:** `src/components/Home.astro` (compartido ES/EN).
- **i18n:** ES en `/`, EN en `/en/` (Astro routing). Componentes leen
  `Astro.currentLocale`.

## Estilos

- **Tailwind v4 con `@theme`** en `src/styles/globals.css`. Usar SIEMPRE utilidades
  canónicas (`bg-paper`, `text-ink`, `border-ink`, `bg-paper/95`); **nunca**
  `bg-[var(--color-paper)]` (el linter lo marca como `suggestCanonicalClasses`).
- **Paleta LOCKED:** paper `#f5f1e8` · ink `#1a1a2e` · cobalt `#2e6dd9` · tomato
  `#e8483b` · mustard `#fcc936` · pink `#ffb3d1` · mint `#6dd3a8` (+ variantes
  `-deep`/`-soft`). Más matices = opacity sobre estos, no colores nuevos.
- **Estética LOCKED:** neo-retro cartoon rubber-hose. Stroke base 5px ink; sombra
  cartoon sólida (offset, sin blur). Display: Bagel Fat One + sombra 3D extruida.
  Body: DM Sans. Mono: IBM Plex Mono.
- **Performance:** animaciones solo en transform/opacity, respetar
  `prefers-reduced-motion`.

## Comandos / calidad

- `pnpm dev` · `pnpm build` · `pnpm preview`.
- `npx astro check` debe quedar en **0 errors / 0 warnings** antes de cerrar.

## Referencias

- Backlog activo de refinamiento (concepto/contenido): `BACKLOG.md`.
- Tracking histórico (features/design): `PROGRESS.md`.
- Memoria: `~/.claude/projects/-Users-mijaelcama-Documents-personal-portfolio/memory/`
  (`user_profile`, `project_portfolio_direction`, `feedback_collab_style`).
- Estilo de colaboración: Mijael prefiere alineación estructurada (preguntas upfront,
  gaps en tablas) antes de implementar trabajo creativo/de diseño.
