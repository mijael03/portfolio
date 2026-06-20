// Ficha de personaje (sección Player 1). Datos del CV, localizados ES/EN.

import { t, type Locale } from "../i18n/config";

export type Stat = {
  label: string;
  value: string;
};

export function getStats(locale: Locale): Stat[] {
  return [
    { label: "LOCATION", value: t(locale, "Lima, PE", "Lima, PE") },
    { label: "CLASS", value: "Full Stack Dev" },
    { label: "LEVEL", value: t(locale, "4+ años", "4+ years") },
    { label: "EDU", value: "TECSUP '22" },
    { label: "LANG", value: "ES · EN(B1)" },
    { label: "MODE", value: t(locale, "Noches", "Nights") },
  ];
}

export function getAbilities(locale: Locale): string[] {
  return t(
    locale,
    [
      "Detectar antipatrones y huecos funcionales antes que escalen",
      "Levantamiento de requerimientos entre áreas",
      "Comunicación clara y traducción negocio → técnico",
      "Resolución práctica orientada a buenas prácticas",
      "Liderazgo técnico y soporte a usuarios finales",
    ],
    [
      "Spot anti-patterns and functional gaps before they escalate",
      "Requirements gathering across teams",
      "Clear communication and business → technical translation",
      "Pragmatic problem-solving grounded in best practices",
      "Technical leadership and end-user support",
    ],
  );
}

export function getHobbies(locale: Locale): string[] {
  return t(locale, ["Deporte", "Cómics"], ["Sports", "Comics"]);
}
