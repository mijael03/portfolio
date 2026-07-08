# Portfolio · Mijael Cama — Full Stack Product Engineer

Portfolio personal de [Mijael Cama](https://github.com/mijael03). Un sitio neo-retro
"arcade" que posiciona a Mijael como **Full Stack Product Engineer**: alguien que
acompaña el producto de punta a punta, de la idea al deploy — no solo escribe código.

El sitio sirve a dos objetivos en paralelo, con mensajes separados para que ninguno
diluya al otro:

- **Rol full-time** como Product Engineer → casos de estudio + proceso de trabajo.
- **Leads freelance** → sección de servicios + CTA de contacto.

El portfolio en sí es una muestra del craft: microinteracciones, i18n real,
performance cuidada y una mascota (MIJI) dibujada a mano.

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Astro 6 (SSG) |
| Islands | React 19 (`@astrojs/react`) |
| Estilos | Tailwind CSS v4 (`@theme` tokens, sin config JS) |
| Animación | Motion (vanilla, sin React) |
| Fuentes | Fontsource (Bagel Fat One · DM Sans · IBM Plex Mono, subset latin) |
| Iconos | Simple Icons (inline, build-time) |
| Audio | Web Audio API (SFX chiptune sintetizados, cero archivos) |
| Deploy | Vercel (auto-deploy en push a `main`) |

## Estructura

```text
src/
├── components/        # Secciones (.astro) + primitivas (DisplayHeading, CartoonButton, Decor…)
│   └── MijiMascot.astro   # Mascota SVG inline con variantes + pupil-tracking
├── data/              # Fuente de datos localizada: profile, projects, skills, experience
├── i18n/
│   ├── config.ts      # locale helpers + t(es, en)
│   └── ui.ts          # TODO el copy de UI (ES/EN), misma shape tipada
├── layouts/Layout.astro   # <head>, meta/OG, hreflang, skip-link
├── pages/
│   ├── index.astro        # ES (/)
│   └── en/index.astro     # EN (/en/)
├── components/Home.astro  # Orden de secciones (compartido ES/EN)
└── styles/globals.css     # @theme (paleta + fuentes + sombras) + resets
```

### Principios de arquitectura de contenido

- **Una sola fuente de verdad por tipo de dato.** Todo el copy de UI vive en
  [`src/i18n/ui.ts`](src/i18n/ui.ts) (objetos `es`/`en` con la misma shape, tipada
  desde `es`). Los datos (proyectos, skills, experiencia, ficha) viven en
  [`src/data/*.ts`](src/data) como funciones `getX(locale)` usando el helper
  `t(locale, es, en)`.
- **CV:** el PDF localizado se referencia solo desde `playerOne` en `ui.ts` (el Hero
  lo lee de ahí). No duplicar el href.
- **Copy con énfasis inline** (tagline, bio) se guarda como HTML y se renderiza con
  `set:html`; los helpers `bold()`/`cobalt()` envuelven los spans.
- **Colores:** usar siempre las utilidades canónicas de Tailwind v4 (`bg-paper`,
  `text-ink`, `border-ink`, `bg-paper/95`) — **nunca** la forma arbitraria
  `bg-[var(--color-paper)]`. Los tokens se definen en `@theme` (`globals.css`).

## Comandos

```sh
pnpm install       # instalar dependencias
pnpm dev           # dev server en localhost:4321
pnpm build         # build estático a ./dist/
pnpm preview       # previsualizar el build
npx astro check    # diagnostics de tipos/Astro — se mantiene en 0 warnings
```

## i18n

Bilingüe ES/EN vía Astro i18n routing (`astro.config.mjs`): ES en `/` (default,
sin prefijo), EN en `/en/`. El toggle de idioma es un link real; `<html lang>` y los
`hreflang` se emiten dinámicamente. Ambos idiomas comparten `Home.astro` y leen su
copy/datos según `Astro.currentLocale`.

## Deploy

Conectado a Vercel, auto-deploy en cada push a `main`. Sin variables de entorno
requeridas. La URL absoluta para OG/hreflang sale de `Astro.site` o, en su defecto,
de `VERCEL_PROJECT_PRODUCTION_URL`.

---

Tracking detallado del proyecto en [`PROGRESS.md`](PROGRESS.md).
