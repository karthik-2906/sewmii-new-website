import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const productsCollection = defineCollection({
  loader: glob({ base: './src/content/products', pattern: '**/*.mdx' }),
  schema: ({ image }) =>
    z.object({
      slug: z.string(),
      title: z.string(),
      price: z.number(),
      shortDescription: z.string(),
      description: z.string(),
      image: image(),
    }),
});

export const collections = { products: productsCollection };
