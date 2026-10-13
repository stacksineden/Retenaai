import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { caseStudyMeta, OG_IMAGE, ROUTE_META, SITE_URL, SOCIAL_PROFILES } from './src/data/seo.ts'
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

        /*
         * Organization markup, homepage only. Tells Google what RetenaAI is,
         * where it operates and how to reach it — the same facts a Business
         * Profile carries, so the two corroborate each other. Every value here
         * is one already shown on the site; nothing is invented for the robot.
         */
        const jsonLd =
          meta.path === '/'
            ? [
                `<script type="application/ld+json">${JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'ProfessionalService',
                  name: 'RetenaAI',
                  url: SITE_URL,
                  description: meta.description,
                  email: 'hello@retenaai.com',
                  telephone: '+2348022211241',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Lagos',
                    addressCountry: 'NG',
                  },
                  areaServed: { '@type': 'Country', name: 'Nigeria' },
                  logo: OG_IMAGE,
                  image: OG_IMAGE,
                  ...(SOCIAL_PROFILES.length ? { sameAs: SOCIAL_PROFILES } : {}),
                })}</script>`,
                // Tells Google the site is called "RetenaAI", so results show
                // the name rather than the bare domain.
                `<script type="application/ld+json">${JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'WebSite',
                  name: 'RetenaAI',
                  url: SITE_URL,
                })}</script>`,
              ]
            : []

        const social = [
          ...jsonLd,
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

      // Sitemap from the same route list, so it can't drift. Anything marked
      // noindex is left out — listing a page we've asked Google to ignore
      // just sends mixed signals.
      const urls = pages
        .filter((m) => !m.robots?.includes('noindex'))
        .map((m) => `${SITE_URL}${m.path === '/' ? '/' : m.path}`)

      writeFileSync(
        resolve(outDir, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n` +
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
          urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n') +
          `\n</urlset>\n`
      )
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), routeHeadTags()],
})
