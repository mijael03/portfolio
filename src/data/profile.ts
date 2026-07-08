// Ficha de personaje (sección Player 1). Datos del CV, localizados ES/EN.

import { t, type Locale } from "../i18n/config";

export type Stat = {
  label: string;
  value: string;
};

export function getStats(locale: Locale): Stat[] {
  return [
    { label: "LOCATION", value: t(locale, "Lima, PE", "Lima, PE") },
    { label: "CLASS", value: t(locale, "Product Eng.", "Product Eng.") },
    { label: "LEVEL", value: t(locale, "4+ años", "4+ years") },
    { label: "EDU", value: "TECSUP '22" },
    { label: "LANG", value: "ES · EN(B1)" },
  ];
}

// Métricas de cabecera (Stats HUD, cerca del inicio). Números honestos del CV.
export type HeadlineMetric = {
  value: string;
  label: string;
  tone: "cobalt" | "tomato" | "mustard" | "mint";
};

export function getHeadlineMetrics(locale: Locale): HeadlineMetric[] {
  return [
    { value: "+4", label: t(locale, "Años de experiencia", "Years of experience"), tone: "cobalt" },
    { value: "2", label: t(locale, "Productos activos", "Live products"), tone: "tomato" },
    { value: "~800", label: t(locale, "Usuarios/día (pico)", "Users/day (peak)"), tone: "mustard" },
    { value: "4", label: t(locale, "Stacks en producción", "Stacks in production"), tone: "mint" },
  ];
}

export function getAbilities(locale: Locale): string[] {
  return t(
    locale,
    [
      "Detectar antipatrones y huecos funcionales antes que escalen",
      "Levantamiento de requerimientos entre áreas",
      "Traducción negocio → técnico",
      "Liderazgo técnico y soporte a usuarios finales",
    ],
    [
      "Spot anti-patterns and functional gaps before they escalate",
      "Requirements gathering across teams",
      "Business → technical translation",
      "Technical leadership and end-user support",
    ],
  );
}
