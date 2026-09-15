import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { OG_IMAGE, ROUTE_META, SITE_URL } from './src/data/seo.ts'

const escapeAttr = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/**
 * Writes one HTML file per route with its own <title>, description and Open
 * Graph tags. Link-preview bots don't run JavaScript, so without this every
 * shared URL previews as the homepage. Vercel's `cleanUrls` serves
 * dist/pricing.html at /pricing. See src/data/seo.ts.
 */
function routeHeadTags(): Plugin {
  let outDir = 'dist'
  return {
    name: 'retenaai-route-head-tags',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const template = readFileSync(resolve(outDir, 'index.html'), 'utf8')

      for (const meta of Object.values(ROUTE_META)) {
        const title = escapeAttr(meta.title)
        const description = escapeAttr(meta.description)
        const url = `${SITE_URL}${meta.path === '/' ? '' : meta.path}`

        const social = [
          `<meta property="og:type" content="website" />`,
          `<meta property="og:site_name" content="RetenaAI" />`,
          `<meta property="og:title" content="${title}" />`,
          `<meta property="og:description" content="${description}" />`,
          `<meta property="og:url" content="${url}" />`,
          `<meta property="og:image" content="${OG_IMAGE}" />`,
          `<meta name="twitter:card" content="summary" />`,
          `<meta name="twitter:title" content="${title}" />`,
          `<meta name="twitter:description" content="${description}" />`,
          `<meta name="twitter:image" content="${OG_IMAGE}" />`,
          `<link rel="canonical" href="${url}" />`,
        ].join('\n    ')

        const html = template
          .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
          .replace(
            /<meta name="description"[^>]*>/,
            `<meta name="description" content="${description}" />`
          )
          .replace('<!-- route-meta -->', social)

        writeFileSync(resolve(outDir, meta.file), html)
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), routeHeadTags()],
})
