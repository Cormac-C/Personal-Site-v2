import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
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
