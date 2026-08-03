# RetenaAI — Landing Site

Vite + React + TypeScript + Tailwind CSS v4 + Framer Motion.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

---

## The two files you'll actually edit

| File | What's in it |
|---|---|
| `src/data/media.ts` | **All videos, images and logo paths.** Every asset slot on the site. |
| `src/data/content.ts` | **All copy.** Headlines, body text, FAQ, nav labels. |

Pricing numbers live in `src/data/pricing.ts`. Change a tier there and it updates
the tier cards, the calculator, and the comparison table at once.

---

## Adding your videos and images

Open `src/data/media.ts`. Every slot looks like this:

```ts
{ src: "", poster: "", kind: "video", alt: "Skincare routine ad concept" }
```

Fill in `src` and the real asset replaces the placeholder immediately. Two ways:

**Local files** — drop them in `/public`, then reference by path:

```ts
src: "/videos/hook-01.mp4"     // file lives at public/videos/hook-01.mp4
```

**Hosted files** — paste the direct URL:

```ts
src: "https://cdn.example.com/hook-01.mp4"
```

> **It must be a direct file link** ending in `.mp4` / `.webm` / `.jpg` / `.png` /
> `.webp`. A Google Drive, Dropbox or Notion *page* link won't play — those serve
> an HTML viewer, not the video. If that's all you have, say so and the player can
> be swapped for an embed instead.

**Videos and images are interchangeable.** Every slot accepts either — the type
is detected from the file extension, so a `.jpg` renders as an image and a
`.mp4` as a looping video with no other change. You can mix them in the same
grid. Local files in `/public` and hosted URLs both work the same way.

**Formats:** use `.mp4` (H.264) or `.webm` for video, `.jpg` / `.png` / `.webp`
for images. **Avoid `.mov`** — Safari plays it, Chrome and Firefox usually
don't, and it fails quietly back to the placeholder.

**Weight:** the home page has eleven video slots. Videos only play while on
screen, so they don't all load at once, but keep each clip under ~2–3 MB and
add a `poster` image or the first paint will still feel slow on mobile.

`poster` is the still frame shown before a video plays. Optional, but it makes the
page feel faster.

### The slots, in order

| Constant | Where it shows | How many |
|---|---|---|
| `HERO_REEL` | Centre card of the fanned hero showreel | 1 |
| `HERO_FAN` | The four cards flanking it — keep these 9:16 video | 4 |
| `WORK_SAMPLES` | The "Work" masonry grid | 12 (add/remove freely) |
| `HOOK_VARIANTS` | The strip in the hook-variants explainer | 4 |
| `LOGO` | Navbar + footer | light / dark / mark |

Set `ratio` on each work sample to match the asset's real shape (`"9:16"`,
`"4:5"`, `"3:4"`, `"1:1"`, `"16:9"`) or it gets cropped to fill. The grid is
masonry, so mixed shapes sit together without ragged rows.

Videos autoplay muted on loop, so keep hero clips short (6–15s).

## The logo

Already wired up. Your four originals sit untouched in `/public`; web-ready
versions were generated into `/public/brand`:

| Your file | Built as | Used for |
|---|---|---|
| `retenatextW.png` | `brand/logo-light.png` | navbar (white background) |
| `retenatextB.png` | `brand/logo-dark.png` | footer (dark navy) |
| `retenaL.png` | `brand/mark-light.png` | square mark + favicon |
| `retenaLW.png` | `brand/mark-dark.png` | spare mark for dark surfaces |

Each was trimmed of transparent padding (~19% dead space below the artwork,
which would have made the logo render undersized and sit high in the navbar)
and downscaled from ~4300px to 600px. Favicon and apple-touch-icon are
generated from the black-circle mark.

To swap a logo later, replace the file in `/public/brand` at the same path, or
point `LOGO` in `src/data/media.ts` somewhere else.

## Adding your logo (reference)

Put the files in `/public`, then set the paths in `src/data/media.ts`:

```ts
export const LOGO = {
  light: "/logo.svg",        // navbar (light background)
  dark:  "/logo-white.svg",  // footer (dark background)
  mark:  "/logo-mark.svg",   // square icon, optional
};
```

Until those are filled, `src/components/Logo.tsx` renders a built-in wordmark
placeholder. Nothing else needs changing — the swap is automatic.

Also replace `public/favicon.svg` with your own icon.

---

## The lead form

Every CTA on the site goes to `/free-ad`, which carries the qualifying form.
That page is also a clean URL to drop straight into cold outreach emails.

**To activate it (2 minutes, free, no card):**

1. Go to <https://web3forms.com> and enter `hello@retenaai.com`
2. They email you an access key
3. Paste it into `ACCESS_KEY` in `src/data/forms.ts`

That's the whole setup. Submissions then arrive as an email in that inbox, and
are logged in the Web3Forms dashboard.

**Until you add the key**, the form still works — it falls back to opening the
user's mail client with every answer pre-written into the body. Nothing is
broken while you set it up, but add the key before launch: the fallback has the
same delivery problem as a plain `mailto:` link.

The form asks exactly the three screening questions and nothing else. Clicking
a CTA from the pricing calculator or a tier card carries the answers through as
URL parameters, so those questions arrive already selected.

**Optional — booking step.** Set `BOOKING_URL` in `src/data/forms.ts` to a
Calendly or Cal.com link and the success screen offers a 15-minute call. Leave
it empty and that step is hidden.

**Note on the success message.** Nothing is emailed to the person who submits —
the on-screen message is the only confirmation they get, so it says *we'll
review it and come back to you*, never "check your inbox." If you later switch
on an autoresponder so they do get a confirmation email, update that copy in
`SuccessState` inside `src/components/LeadForm.tsx` to match.

**Switching providers:** Formspree, Basin and Netlify Forms accept the same kind
of POST. Change `ENDPOINT` in `src/data/forms.ts` and the payload shape in
`src/components/LeadForm.tsx`.

## Before you go live

- [ ] **Entity details (after CAC registration)** — `LEGAL` in
      `src/data/content.ts` (`entityName`, `registeredAddress`, `rcNumber`).
      They're empty on purpose: until they're filled the site makes no claim of
      incorporation, and no placeholder text is shown. Fill them once and the
      privacy policy, terms **and** footer all update. Use a virtual-office
      address, not your home — it renders publicly.
- [ ] **Legal review** — `src/pages/Privacy.tsx` and `src/pages/Terms.tsx` now
      reflect Nigerian operations (NDPA 2023, no UK/EU adequacy decision,
      IDTA/SCCs, NDPC complaint route) and assign IP with a generative-tools
      caveat. Still **not lawyer-reviewed**. Three questions worth paying for:
      Article 27 representative for UK/EU outreach, NDPC classification and
      whether a formal DPO is needed, and whether governing law is sensible.
- [ ] **Governing law** — defaults to Nigeria via `LEGAL.governingLaw`. Switch
      to Delaware/Wyoming if you form the US LLC.
- [ ] **Founding rate** — the "$1,500, first three clients" founding rate is shown
      publicly on the home page, the pricing page and the calculator. If that was
      meant to stay private, set `founding: null` in `src/data/pricing.ts` and the
      toggle disappears.
- [x] ~~Form access key~~ — set. The form posts live to Web3Forms.
      (This key is meant to be public — it's a client-side form endpoint, not a
      secret, so it's fine sitting in source.)
- [ ] **Send one real test submission** and confirm it lands in the inbox
      registered with the key.
- [x] ~~Logo files~~ — done, including favicon and apple-touch-icon.
- [ ] **Third-party brands in the work samples** — the creative shows Face Facts,
      Wellman/Vitabiotics and Curlumi branding. The section is framed as work
      samples with no performance or client relationship implied. Worth a
      deliberate decision that you're comfortable displaying each one.
- [ ] **Analytics** — none installed. If you add any, update the cookies section of
      the privacy policy.

## Pages

| Route | File |
|---|---|
| `/` | `src/pages/Home.tsx` |
| `/pricing` | `src/pages/Pricing.tsx` |
| `/free-ad` | `src/pages/FreeAd.tsx` — the lead form |
| `/privacy` | `src/pages/Privacy.tsx` |
| `/terms` | `src/pages/Terms.tsx` |
| 404 | `src/pages/NotFound.tsx` |

Home page sections live in `src/components/sections/` and are composed in
`Home.tsx` — reorder or remove by editing that one file.

## Deploying

Static build, so any host works (Vercel, Netlify, Cloudflare Pages):

- Build command: `npm run build`
- Output directory: `dist`

Because this is a single-page app, the host must rewrite all routes to
`index.html`, or `/pricing` will 404 on a hard refresh. On Netlify add a
`public/_redirects` file containing `/* /index.html 200`. Vercel and Cloudflare
Pages detect it automatically.
