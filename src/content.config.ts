import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    tech: z.string(),
    blurb: z.string(),
    hero_image: z.string().optional(),
    hero_image_alt: z.string().optional(),
    demo_gif: z.string().optional(),
    endDate: z.string(),
    hide: z.boolean().default(false),
    pdf_url: z.string().optional()
  })
});

export const collections = { projects };
