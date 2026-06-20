// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false, // ES en "/", EN en "/en/"
    },
  },
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
