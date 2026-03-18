import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

export default defineConfig({
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

    integrations: [mdx()],
});
