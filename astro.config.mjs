import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/static";
import compress from "astro-compress";


const isProduction = process.env.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({
  site: "https://www.sanderboer.nl/",
  prefetch: true,
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      experimentalThemes: {
        light: 'github-light',
        dark: 'github-dark'
      }
    },
  },
  integrations: [
    mdx(),
    sitemap({
      changefreq: "monthly",
      lastmod: new Date().toISOString(),
      priority: 0.7,
    }),
    tailwind(),
    react(),
    compress({
      css: true,
      html: true,
      js: true,
      svg: true,
      img: false,
    }),
  ],
  output: "static",
  outDir: "./.vercel/output/static",
  experimental: {},
  adapter: vercel({
    analytics: isProduction,
    imageService: isProduction,
    imageConfig: {
      sizes: [320, 640, 1280, 1920]
    }
  })
});