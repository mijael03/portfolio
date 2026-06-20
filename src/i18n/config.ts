// Núcleo i18n. Una sola fuente de verdad para los locales soportados.

export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

/** Normaliza cualquier string (p.ej. Astro.currentLocale) a un Locale válido. */
export function toLocale(value: string | undefined | null): Locale {
  return value === "en" ? "en" : "es";
}

/** Prefijo de ruta para un locale: "" para el default, "/en" para EN. */
export function localePrefix(locale: Locale): string {
  return locale === defaultLocale ? "" : `/${locale}`;
}

/** El "otro" idioma respecto al actual (para el toggle). */
export function otherLocale(locale: Locale): Locale {
  return locale === "es" ? "en" : "es";
}

/** Helper para elegir valor por locale: t(locale, valorES, valorEN). */
export function t<T>(locale: Locale, es: T, en: T): T {
  return locale === "en" ? en : es;
}
