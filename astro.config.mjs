// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

import vercel from "@astrojs/vercel";

import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx(), sitemap()],
  adapter: vercel({
    imagesConfig: {
      sizes: [384, 600, 800],
      formats: ["image/avif", "image/webp"],
      dangerouslyAllowSVG: true
    }
  }),
  site: "https://cormaccureton.com",
  vite: {
    plugins: [tailwindcss()]
  }
});
