import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/static";
import compress from "astro-compress";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "http://sanderboer.nl",
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    react(),
    compress({
      css: true,
      html: true,
      js: true,
      svg: true,
      img: false,
    }),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
  output: "static",
  outDir: "./.vercel/output/static",
  adapter: vercel({
    analytics: true,
    imageService: true,
    imageConfig: {
      sizes: [320, 640, 1280]
    }
  })
});