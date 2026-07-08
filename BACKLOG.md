# BACKLOG — Refinamiento conceptual del portfolio (v2)

> Creado: **2026-07-07** · Última edición: **2026-07-07** · Doc de trabajo activo.
> Historial de features/design vive en `PROGRESS.md`; esto es el backlog vivo.

**Leyenda:** 📋 pendiente · 🟡 en progreso · ✅ hecho · ⛔ necesita tu input · 💡 propuesta mía

## Norte (posicionamiento)

**Empresas primero, freelance secundario.** El portfolio es ante todo una oferta para
que una empresa contrate a Mijael como Product Engineer; la carrera freelance se
menciona después, como carril secundario (Services + CTA de contacto). El hero lidera
con prueba para empresas (casos de estudio), no con el pitch freelance.

---

## A. Narrativa & jerarquía (empresas primero)

| ID | Item | Resolución | Estado |
|---|---|---|---|
| C01 | CTA freelance en el hero | Sacado del hero. Hero = Casos + CV. "Hablemos de tu producto" vive solo en Services/Contact. | ✅ |
| C02 | "De la idea al producto" / BuildMode muy al frente | BuildMode bajado después de Casos (orden 01 Player 1 · 02 Casos · 03 BuildMode). Deja de ser el 2º bloque. | ✅ |
| C03 | "Disponibilidad por las noches" | Borrado de Services y Continue (ES/EN). | ✅ |

## B. Métricas honestas (StatsHud)

| ID | Item | Resolución | Estado |
|---|---|---|---|
| C04 | "+4 · Años en producción" ambiguo | Reetiquetado → **"Años de experiencia"** (es tu carrera, no uptime del producto). | ✅ |
| C05 | Tile "E2E" ambiguo | Opción B: reemplazado por **`4 · Stacks en producción`** (Next · FastAPI · Flutter · Django). | ✅ |
| C06 | Falta outcome real en casos (Zefiron) | Sin números reales por ahora → se deja como está. Retomar cuando haya datos. | 📋 en espera de datos |

## C. Player 1 / Select Character

| ID | Item | Resolución | Estado |
|---|---|---|---|
| C07 | Stat "MODE · Noches" | Quitado. | ✅ |
| C08 | Bio pretenciosa ("no suelto una feature hasta…") | Reescrita en tono sobrio: "…del requerimiento al deploy, con foco en que lo que entrego sea estable y mantenible." | ✅ |
| C09 | Hobbies (Deporte · Cómics) | Quitados (data + render + `getHobbies`). | ✅ |
| C10 | Abilities (5, genéricas) | Recortadas a **4** (fuera "resolución práctica…"). | ✅ |
| C11 | Sección Select Character en conjunto (layout/densidad) | Contenido depurado (C07-C10). Falta revisar layout general si aún se siente cargado. | 🟡 |

## D. Power-Ups / Stack

| ID | Item | Resolución | Estado |
|---|---|---|---|
| C12 | Bloque "⚡ Especialidad" | Descartado (componente + strings ES/EN). | ✅ |
| C13 | Iconos raros: Culqi, MUX, UploadThing | Assets de marca en `/public` cableados vía `iconSrc` + `<img>` en SkillIcon (culqi.svg · mux.svg · uploadthing.ico). | ✅ |
| C14 | Glyphs feos de cabecera de categoría (`⚙ ▤ ▷ ▢`) | Aún pendiente. Nota: los 3 logos de marca (color) conviven con ~20 iconos monocromo ink — inconsistencia leve, inherente a usar assets de marca. | 📋 |
| C14b | Imports muertos en `SkillIcon.astro` | Limpiados (Kotlin/Swift/Angular/Express/MySQL). | ✅ |

## E. Game Select / Casos

| ID | Item | Resolución | Estado |
|---|---|---|---|
| C15 | "PRESS A TO INSERT / DETAILS soon" prometen interacción inexistente | Se deja como está por ahora. **Pendiente: detail page básica por caso** — el concepto ya existe en PROGRESS como **D32** (`/proyectos/[slug]`, cada cartucho linkea ahí). Al construirla, los cartuchos pasan a ser clicables y el "press A/soon" cobra sentido. | 📋 pendiente (D32) |

## F. Pendientes previos

| ID | Item | Estado |
|---|---|---|
| — | Geo en la línea de experiencia (Navia/Innova) | ✅ se queda lo básico (historia factual) |
| D23 | Sitemap.xml | 📋 bloqueado por dominio |
| D32 | Detail pages `/proyectos/[slug]` | 📋 ligado a C15 |
| D33 | Modo claro/oscuro | ⚪ nice-to-have |
| D37 | Analytics privacy-friendly | ⚪ nice-to-have |
| D38 | Form de contacto funcional | ⚪ nice-to-have |
| F02 | Mascota variantes thinking/bye (redibujo a mano) | 📋 diseño |

---

## Decisión pendiente C05 — el tile "E2E"

Hoy el HUD muestra 4 tiles: `+4 Años de experiencia · 2 Productos activos · ~800 Usuarios/día · E2E Diseño→deploy`. El "E2E" desentona porque no es un número. Opciones:

- **A) Explicarlo mejor (mantener):** dejarlo pero con label inequívoco de *alcance*, no de métrica — ej. value `E2E` / label "Diseño → deploy, yo solo". Sigue sin ser número.
- **B) Número honesto (recomendado):** reemplazar por un dato contable real. Candidatos: `4 · Stacks en producción` (Next · FastAPI · Flutter · Django) o `6+ · Integraciones enviadas` (Culqi, MUX, UploadThing, OAuth…).
- **C) Descartarlo:** quitar el 4º tile y dejar 3 métricas (requiere reajustar el layout del bento).

## Abierto / próximos

1. **C06** — outcome real de Zefiron cuando lo tengas (para cerrar la prueba de "Product Engineer").
2. **C14** — glyphs de cabecera de categoría: decidir dirección (¿icono representativo por categoría, set monocromo coherente, o dejar glyphs mejorados?).
3. **C11** — pasada de layout a Select Character (opcional, si aún se siente cargado).
4. **D32 / C15** — detail page básica por caso (vuelve clicables los cartuchos).
