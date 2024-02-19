import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/static";
import compress from "astro-compress";
import * as transformers from 'shikiji-transformers';


console.log(Object.values(transformers))
const isProduction = process.env.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({
  site: "https://www.sanderboer.nl/",
  prefetch: true,
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      // https://docs.astro.build/en/guides/markdown-content/#shiki-configuration
      // https://shikiji.netlify.app/packages/transformers
      transformers: Object.values(transformers),
      theme: 'github-dark',
      // experimentalThemes: {
      //   light: 'github-light',
      //   dark: 'github-dark'
      // },
      wrap: true,
      langs: [
        
      ]
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
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  experimental: {
    optimizeHoistedScript: true,
    clientPrerender: true,
  },
  adapter: vercel({
    analytics: isProduction,
    imageService: isProduction,
    imageConfig: {
      sizes: [320, 640, 1280, 1920]
    }
  })
});