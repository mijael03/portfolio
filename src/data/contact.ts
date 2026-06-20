// Canales de contacto, localizados ES/EN. Única fuente de verdad para
// Continue?, Footer y cualquier CTA de email.

import { t, type Locale } from "../i18n/config";

export type Channel = {
  label: string;
  value: string;
  href: string;
  icon: string;
  /** Mostrar también en el footer */
  inFooter: boolean;
};

export const email = "mijaelcama@gmail.com";

export function getChannels(locale: Locale): Channel[] {
  return [
    {
      label: "Email",
      value: email,
      href: `mailto:${email}`,
      icon: "✉",
      inFooter: true,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/mijael-cama",
      href: "https://linkedin.com/in/mijael-cama",
      icon: "in",
      inFooter: true,
    },
    {
      label: "GitHub",
      value: "github.com/mijael03",
      href: "https://github.com/mijael03",
      icon: "▷_",
      inFooter: true,
    },
    {
      label: t(locale, "Teléfono", "Phone"),
      value: "+51 915 392 941",
      href: "tel:+51915392941",
      icon: "☏",
      inFooter: false,
    },
  ];
}

export function getFooterLinks(locale: Locale): Channel[] {
  return getChannels(locale).filter((c) => c.inFooter);
}
