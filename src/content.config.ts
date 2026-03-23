import { defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";
import { z } from "astro/zod";

const productsCollection = defineCollection({
    loader: glob({ base: "./src/content/products", pattern: "**/*.mdx" }),
    schema: ({ image }) =>
        z.object({
            slug: z.string(),
            title: z.string(),
            price: z.number(),
            shortDescription: z.string(),
            description: z.string(),
            image: image(),
            imageHover: image(),
            imageCarousel: z.array(z.string())
        }),
});

const testimonialsCollection = defineCollection({
    loader: file("./src/content/testimonials/testimonials.json"),
    schema: z.object({
        id: z.string(),
        review: z.string(),
        name: z.string(),
        shop: z.string(),
    }),
});

export const collections = {
    products: productsCollection,
    testimonials: testimonialsCollection,
};
