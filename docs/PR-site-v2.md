# Site v2: Lagos positioning, /work portfolio, and the first client review

Rebuilds the site around the Nigerian agency positioning — ads, a page to land on, and a WhatsApp setup that closes the sale — and moves the creative-supply site to `/creative`.

21 commits, 42 files, +4,149/−24.

## What a visitor sees

**`/` — new homepage.** Headline is "Get seen. Get chosen. Get paid." Three verbs, one per layer; the earlier line named the leak rather than the journey and made the ads read as an afterthought. The hero carries the three layers as one picture: a real ad, the real Macbite page, and an illustrated chat card.

**`/work` and `/work/[slug]`.** Full portfolio — 101 ads filterable by campaign, two case studies, reviews. Each published case study gets its own HTML file with its own title and OG image, so a shared link previews as that client's work.

**`/creative`.** The creative-supply site, intact.

## Proof is real or absent

Nothing on the page invents a client, a result or a price. Every proof section is data-driven and renders nothing when empty:

- **Ads** show only when labelled in `content/ads.labels.json`, and are badged "Sample ad" or "Client ad". The two Macbite ads are the first client-badged ones.
- **Case studies** show only when `published` is true.
- **Reviews** show only when `permission_confirmed` is true. The placeholders used to check the layout are deleted now a real one exists.
- **`result`** on a case study is a measured figure from the client's own data, or `null`. Never an estimate.

First review is from Amb. Dr. Yemi Farounbi OON, stored word for word.

## Corrections to claims we were making

The page said "We shoot on location", "Property is always filmed for real", and quoted travel for shoots outside Lagos. None of that was true — clients send photos and production happens in-house. All corrected, and the property note now says accurately that whatever we generate is built from photos of the real thing, with a new FAQ covering artist's impressions for unbuilt projects.

## Performance

- Homepage ads autoplay with no frame and no play button. No `<video>` exists until the strip is within 300px of the viewport, video is requested at `w_600` (the three originals are 10.8MB, 15.5MB and 43.4MB; they come down as 1.9MB, 1.4MB and 3.2MB), and playback pauses off-screen.
- The hero showcase is `display:none` below 1024px **and** its `play()` is guarded on the same breakpoint — `display:none` alone still lets `play()` pull the whole file. Verified at 375px: nothing buffered.
- Bundle: 171 KB gzipped JS, 10.8 KB CSS.

## Checks

Typecheck, lint and build pass. Verified in the browser at 375px and desktop: one H1, no horizontal overflow, no tap target under 44px, no missing alt text. All 8 WhatsApp links point to one number and carry the `?ref=` code. Bundle greps clean for placeholder reviews, the old phone number and unfilled email tokens.

## Known gaps, none blocking

- `[ANALYTICS_TOOL]` — every CTA is wired to fire events, but they no-op until a tool is named. Anything before that is lost.
- TYFQ's case study still says only "A landing page for the colloquium".
- Five `ugc` ad keys need confirming for the "AI-generated presenter" badge — I only applied it where a Veo watermark is visible.
- One Macbite still is AI-generated; worth confirming it came from their own product photos.

🤖 Generated with [Claude Code](https://claude.com/claude-code)
