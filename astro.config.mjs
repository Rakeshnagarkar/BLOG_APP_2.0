import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap"
import tailwind from '@astrojs/tailwind';

// import vercel from "@astrojs/vercel/serverless";

const SERVER_PORT = 4321

const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`

const LIVE_URL = "https://blog-app.github.io"

const SCRIPT = Process.env.npm_lifecycle_script || ""
const isBuild = SCRIPT.includes("astro build")
let BASE_URL = LOCALHOST_URL

if (isBuild) BASE_URL = LIVE_URL

// https://astro.build/config
export default defineConfig({
  server: {port: SERVER_PORT},
  site: BASE_URL,
  base: '/blog-theme',
  integrations: [
    sitemap(),
    tailwind({
      config: {applyBaseStyles: false}
    }),
  ],
});