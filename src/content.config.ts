import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each case study is one .mdx file in src/content/work/.
// The frontmatter below drives the home page card AND the case study header.
const work = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),            // one or two sentences, shown on the card
      company: z.string(),
      years: z.string(),              // "2026" or "2023 - 2025"
      tags: z.array(z.string()),      // "Product management", "Self-service"
      tint: z.enum(['blue', 'sand', 'sage', 'lilac']).default('blue'),
      order: z.number(),              // lower = higher on the home page
      cover: image().optional(),      // e.g. ./images/self-service/cover.png
      coverAlt: z.string().optional(),
      coverBleed: z.boolean().default(false), // true = cover is a finished thumbnail, shown edge to edge
      coverOnPage: z.boolean().default(true), // false = cover only on the home page card, not the case study
      intro: z.string().optional(),   // longer paragraph for the case study header (falls back to summary)
      introCta: z.string().optional(), // bold line shown under the intro, e.g. "Reach out…"
      // Header facts. A list renders one item per line.
      role: z.union([z.string(), z.array(z.string())]).optional(),
      team: z.union([z.string(), z.array(z.string())]).optional(),
      timeline: z.string().optional(),
      tools: z.array(z.string()).optional(),
      draft: z.boolean().default(false), // true = hidden from the site
    }),
});

export const collections = { work };
