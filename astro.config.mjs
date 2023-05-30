import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: "http://sanderboer.nl",
  integrations: [mdx(), sitemap(), tailwind(), react()],
  output: "static",
  adapter: vercel({
    imageConfig: {
      sizes: [320, 640, 1280],
    },
  }),
});
