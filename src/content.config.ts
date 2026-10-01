import { defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";
import { z } from "astro/zod";

const productsCollection = defineCollection({
    loader: glob({ base: "./src/content/products", pattern: "**/*.mdx" }),
    schema: ({ image }) =>
        z.object({
            featured: z.boolean(),
            label: z.string(),
            title: z.string(),
            shortDescription: z.string(),
            description: z.string(),
            difficulty: z.string(),
            price: z.number(),
            etsyLink: z.string(),
            tutorialLink: z.string(),
            image: image(),
            imageHover: image(),
            imageCarousel: z.array(
                z.object({
                    src: image(),
                    alt: z.string(),
                }),
            ),
        }),
});

const testimonialsCollection = defineCollection({
    loader: glob({ base: "./src/content/testimonials", pattern: "**/*.mdx" }),
    schema: ({ image }) =>
        z.object({
            review: z.string(),
            name: z.string(),
            shop: z.string(),
            image: image(),
            productLink: z.string(),
            target: z.string().optional()
        }),
});

const blogsCollection = defineCollection({
    loader: glob({ base: "./src/content/blogs", pattern: "**/*.mdx" }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            excerpt: z.string(),
            category: z.string(),
            tags: z.array(z.string()).optional(),
            pubDate: z.date(),
            readTime: z.string(),
            image: image(),
            imageAlt: z.string(),
            video: z.string().optional(),
            videoPubDate: z.date().optional(),
        }),
});

export const collections = {
    products: productsCollection,
    testimonials: testimonialsCollection,
    blogs: blogsCollection
};
