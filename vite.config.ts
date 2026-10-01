import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { caseStudyMeta, OG_IMAGE, ROUTE_META, SITE_URL } from './src/data/seo.ts'
import type { RouteMeta } from './src/data/seo.ts'

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
  let config_root = process.cwd()
  return {
    name: 'retenaai-route-head-tags',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
      config_root = config.root
    },
    closeBundle() {
      const template = readFileSync(resolve(outDir, 'index.html'), 'utf8')

      // One file per case study, each with its own OG image, so a shared
      // /work/<slug> link previews as that client's work and not the site mark.
      const studyDir = resolve(config_root, 'content/case-studies')
      const studies = readdirSync(studyDir)
        .filter((f) => f.endsWith('.json'))
        .map((f) => JSON.parse(readFileSync(resolve(studyDir, f), 'utf8')))
        .filter((c) => c.published)
        .map(caseStudyMeta)

      if (studies.length > 0) mkdirSync(resolve(outDir, 'work'), { recursive: true })

      const pages: (RouteMeta & { ogImage?: string })[] = [
        ...Object.values(ROUTE_META),
        ...studies,
      ]

      for (const meta of pages) {
        const title = escapeAttr(meta.title)
        const description = escapeAttr(meta.description)
        const url = `${SITE_URL}${meta.path === '/' ? '' : meta.path}`

        const robots = meta.robots
          ? [`<meta name="robots" content="${escapeAttr(meta.robots)}" />`]
          : []

        const ogTitle = escapeAttr(meta.ogTitle || meta.title)
        const ogDescription = escapeAttr(meta.ogDescription || meta.description)
        const image = escapeAttr(meta.ogImage || OG_IMAGE)

        const social = [
          ...robots,
          `<meta property="og:type" content="website" />`,
          `<meta property="og:site_name" content="RetenaAI" />`,
          `<meta property="og:title" content="${ogTitle}" />`,
          `<meta property="og:description" content="${ogDescription}" />`,
          `<meta property="og:url" content="${url}" />`,
          `<meta property="og:image" content="${image}" />`,
          `<meta name="twitter:card" content="summary" />`,
          `<meta name="twitter:title" content="${ogTitle}" />`,
          `<meta name="twitter:description" content="${ogDescription}" />`,
          `<meta name="twitter:image" content="${image}" />`,
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
