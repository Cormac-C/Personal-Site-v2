import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tech: z.string(),
    blurb: z.string(),
    hero_image: z.string().optional(),
    hero_image_alt: z.string().optional(),
    endDate: z.string(),
    hide: z.string().transform(v => v === 'true' ? 'true' : 'false')
  })
});

export const collections = { projects };
