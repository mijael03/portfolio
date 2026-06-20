// Canales de contacto. Única fuente de verdad para Continue?, Footer
// y cualquier CTA de email.

export type Channel = {
  label: string;
  value: string;
  href: string;
  icon: string;
  /** Mostrar también en el footer */
  inFooter: boolean;
};

export const email = "mijaelcama@gmail.com";

export const channels: Channel[] = [
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
    label: "Teléfono",
    value: "+51 915 392 941",
    href: "tel:+51915392941",
    icon: "☏",
    inFooter: false,
  },
];

export const footerLinks = channels.filter((c) => c.inFooter);
