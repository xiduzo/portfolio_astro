import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import compress from "astro-compress";
import { defineConfig } from "astro/config";
import { remarkReadingTime } from './lib/remark-reading-time.mjs';

// @shikijs/transformers is broken - for now
// https://www.reddit.com/r/astrojs/comments/1atheyx/integrating_shiki_transformers_with_astrojs/
import {
    transformerNotationDiff,
    transformerNotationErrorLevel
    // transformerMetaWordHighlight, // Not working
    // transformerMetaHighlight // Not working
    ,
    transformerNotationFocus,
    transformerNotationHighlight,
    transformerNotationWordHighlight
} from 'shikiji-transformers';

const isProduction = process.env.NODE_ENV === 'production';

const imageSettings = {
    domains: ['astro.build'],
    remotePatterns: []
  }
// https://astro.build/config
export default defineConfig({
  site: "https://www.sanderboer.nl/",
  image: imageSettings,
  markdown: {
    syntaxHighlight: "shiki",
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      // https://docs.astro.build/en/guides/markdown-content/#shiki-configuration
      // https://shikiji.netlify.app/packages/transformers
      transformers: [
        transformerNotationDiff(),
        transformerNotationFocus(),
        transformerNotationWordHighlight(),
        transformerNotationErrorLevel(),
        transformerNotationHighlight(),
      ],
      theme: 'github-dark',
      // experimentalThemes: {
      //   light: 'github-dark',
      //   dark: 'github-light'
      // },
      wrap: true,
    },
  },
  integrations: [
    mdx(),
    sitemap({
      lastmod: new Date(),
      changefreq: "monthly",
    }),
    tailwind(),
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
    clientPrerender: true,
  },
  adapter: vercel({
    webAnalytics: {
      enabled: isProduction,
    },
    imagesConfig: {
      ...imageSettings,
      sizes: [320, 640, 1280, 1920],
    },
    imageService: isProduction,
  })
});
