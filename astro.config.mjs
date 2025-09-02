// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

import vercel from "@astrojs/vercel";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({ applyBaseStyles: true }),
    react(),
    mdx(),
    sitemap()
  ],
  adapter: vercel(),
  site: "https://cormaccureton.com"
});
