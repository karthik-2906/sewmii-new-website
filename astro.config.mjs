import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
    site: "https://www.sewmii.com",
    vite: {
        plugins: [tailwindcss()],
    },

    fonts: [
        {
            provider: fontProviders.fontsource(),
            name: "Inter",
            cssVariable: "--font-inter",
            weights: [400, 700, 900],
        },
    ],

    integrations: [mdx(), sitemap()],
});
