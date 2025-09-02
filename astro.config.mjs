// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: true }), react(), mdx()],
  adapter: vercel()
});
// TODO: Look at adding astrojs/image plugin
// TODO: Add sitemap generation
