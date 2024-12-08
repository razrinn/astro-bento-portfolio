import { defineCollection } from 'astro:content';
import { rssSchema } from '@astrojs/rss';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  schema: rssSchema.extend({
    minutesRead: z.string().optional(),
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
  }),
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
});

export const collections = { blog };
