# Sitemap and structured data, so Google can find the site

Two commits on top of `main`. Groundwork for getting RetenaAI into Google results and for the Business Profile Samuel is setting up.

## Why

The site had no sitemap, no structured data, and a `robots.txt` that pointed at nothing. Google could eventually crawl its way around, but nothing told it what the pages were, what the business is, or where it operates.

## What changed

**`sitemap.xml`**, generated at build from the same route list that writes the per-route HTML, so the two can't drift apart. Eleven URLs: the homepage, `/work`, the four case studies, `/creative` and the creative site's pages.

Anything marked `noindex` is excluded — `/implementations` is unlisted, and listing a page we've asked Google to ignore just sends mixed signals. `robots.txt` now points at the sitemap.

**`ProfessionalService` markup on the homepage only** — name, Lagos, Nigeria as the service area, the WhatsApp number, the email, the logo. These are the same facts a Google Business Profile carries, so the two corroborate each other once the profile is verified. Every value is one already shown on the site; nothing is invented for the crawler.

**`WebSite` markup**, so results show "RetenaAI" rather than the bare domain.

**`SOCIAL_PROFILES`** in `src/data/seo.ts`, currently an empty array with a comment explaining it. Filled with the Instagram and LinkedIn URLs it emits `sameAs`, which is how Google ties the website, the social accounts and the Business Profile into one business rather than three unrelated things. While it's empty no `sameAs` is emitted at all — better nothing than a guess.

## Worth a reviewer's attention

The structured data is emitted on `/` only, not on every page. Organization markup repeated across a site is tolerated but noisy, and the homepage is the canonical place for it. Verified: present in `dist/index.html`, absent from `work.html`, `creative.html` and `pricing.html`.

The sitemap is derived rather than hand-written, so adding a case study adds a URL automatically. That's the same mechanism already used for the per-route `<head>` tags.

## Checks

Typecheck, lint and build pass. `dist/sitemap.xml` has 11 `<loc>` entries with `/implementations` correctly absent; `dist/index.html` carries both JSON-LD blocks and the other route files carry none.

## Follow-up, outside this PR

- Add the domain in Google Search Console and submit the sitemap — until that happens none of this is doing any work.
- Send the Instagram and LinkedIn URLs to fill `SOCIAL_PROFILES`.
- Google Business Profile setup is Samuel's; it needs his Google account and video verification.

🤖 Generated with [Claude Code](https://claude.com/claude-code)
