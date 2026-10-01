# How to add work to the site

Everything on `/work` comes from JSON files in `/content`. Adding work means
adding or editing a file — no code changes, no deploy config.

Three rules the code enforces for you, so nothing can slip out early:

- a **case study** shows only when `"published": true`
- an **ad** shows only when its label has `"published": true`
- a **review** shows only when `"permission_confirmed": true`

Until then the section says it's waiting rather than filling itself with
placeholders. An empty section is fine. An invented one is not.

---

## Add a case study

Create `content/case-studies/<slug>.json`. The slug becomes the URL, so
`macbite.json` is served at `/work/macbite`. Use lowercase and hyphens.

```json
{
  "slug": "macbite",
  "client_name": "Macbite",
  "city": "Ibadan",
  "layers": ["branding", "pages", "systems"],
  "problem": "Customers ordering through long chats.",
  "what_we_built": "Branding, then an online ordering platform.",
  "screenshots": [
    {
      "src": "/work/macbite.jpg",
      "alt": "Macbite home page with the menu and ordering options",
      "caption": "Home page — order for delivery or pickup"
    }
  ],
  "video": null,
  "result": null,
  "quote_id": null,
  "og_image": null,
  "featured": true,
  "published": false
}
```

| Field | What goes in it |
|---|---|
| `layers` | Any of `ads`, `pages`, `systems`, `branding`. Shown under the client name. |
| `screenshots` | Put the image in `public/work/`. **`alt` is required** — describe what's on screen, not "screenshot". |
| `video` | A URL, or `null`. |
| `result` | **A measured figure from the client's own data, or `null`.** Never an estimate, never "more sales". If nobody sent us a number, it's `null`. |
| `quote_id` | The `id` of a review in `content/reviews/`, or `null`. |
| `og_image` | A 1200×630 image for link previews. `null` falls back to the site mark, which previews fine but looks generic. |
| `featured` | `true` puts it on the homepage as well as `/work`. |
| `published` | `false` until the client has agreed. |

Then set `"published": true` and deploy. The build writes
`dist/work/<slug>.html` with that case study's own title, description and OG
image, so the link previews properly in WhatsApp.

---

## Add a review

Create `content/reviews/<id>.json` — see `content/reviews/README.md` for the
template and the permission rules.

The important one: `"permission_confirmed": true` means someone actually asked
and they actually said yes. Not "they seemed happy".

Link a review to a case study by putting its `id` in that case study's
`quote_id`.

---

## Publish ads

The 94 ads live in `src/data/ads.ts`, generated from `docs/ads-labelling.csv`.
None of them show until they're labelled.

1. Fill in `docs/ads-labelling.csv` — see `docs/HOW-TO-LABEL-ADS.md`. The
   columns that matter are `client_or_sample`, `client_name_if_client`,
   `ai_presenter` and `publish_in_first_batch`.
2. Export the sheet as CSV over that file.
3. Run:

   ```bash
   node scripts/labels-from-sheet.mjs docs/ads-labelling.csv
   ```

That rewrites `content/ads.labels.json`. It prints how many are labelled and
how many are published, and refuses any row marked `client` without a client
name.

Rows with an empty `publish_in_first_batch` stay hidden, so a half-finished
sheet can't push unlabelled work onto the site.

Every published ad is badged on the page: **Sample ad** or **Client ad**, plus
**AI-generated presenter** where that applies. That's not decoration — it's the
claim we're making about the work, so the sheet has to be right.

### Filtering

`/work?category=face_serum` opens the grid pre-filtered — useful in outreach.
Category keys come from `src/data/ads.ts`; their display names live in
`CATEGORY_LABELS` in `src/data/work.ts`.

---

## Client names

`content/clients.json` drives the "Businesses we've worked with" strip in the
hero and on `/work`. Names only, no logos — we don't have their logo files, and
a wordmark we set ourselves isn't their mark.

Set a name's `"published": false` to take it down everywhere at once.
