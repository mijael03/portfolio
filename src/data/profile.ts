// Ficha de personaje (sección Player 1). Datos extraídos del CV.
// Centralizado acá como pre-requisito del i18n (D27): cuando llegue la
// traducción EN, este archivo se duplica/parametriza sin tocar componentes.

export type Stat = {
  label: string;
  value: string;
};

export const stats: Stat[] = [
  { label: "LOCATION", value: "Lima, PE" },
  { label: "CLASS", value: "Full Stack Dev" },
  { label: "LEVEL", value: "4+ años" },
  { label: "EDU", value: "TECSUP '22" },
  { label: "LANG", value: "ES · EN(B1)" },
  { label: "MODE", value: "Noches" },
];

export const abilities: string[] = [
  "Detectar antipatrones y huecos funcionales antes que escalen",
  "Levantamiento de requerimientos entre áreas",
  "Comunicación clara y traducción negocio → técnico",
  "Resolución práctica orientada a buenas prácticas",
  "Liderazgo técnico y soporte a usuarios finales",
];

export const hobbies: string[] = ["Deporte", "Cómics"];
