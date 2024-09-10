import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"

import sitemap from "@astrojs/sitemap"

import react from "@astrojs/react"

import tailwind from "@astrojs/tailwind"

import vercelStatic from "@astrojs/vercel/static"

// https://astro.build/config
export default defineConfig({
  site: "https://taffo.dev",
  integrations: [
    mdx(),
    sitemap(),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: "static",
  adapter: vercelStatic({
    webAnalytics: {
      enabled: true,
    },
    maxDuration: 8,
  }),
})
