# Labelling the ad portfolio

`docs/ads-labelling.csv` lists every ad in the lookbook — **94 items** (17 video,
77 image) across 15 categories. Generated from `pin_cat` in the dataset, in the
same order the lookbook flattens it.

## Opening it

Upload the CSV to Google Sheets (File → Import → Upload). The `thumbnail` column
is an `=IMAGE()` formula, so thumbnails appear once it's a Sheet. Widen the rows
to see them. `open_full` opens the full-size asset in a new tab.

CSVs don't show images in Excel or Numbers — use Google Sheets.

## Columns to fill

| Column | Who fills it | What to put |
|---|---|---|
| `client_or_sample` | Samuel | Pre-filled `sample`. Change to `client` only for real client work. |
| `client_name_if_client` | Samuel | The client's name — **only** where they've approved being named. Leave blank otherwise. |
| `ai_presenter` | Creative intern | `yes` if a person on screen is AI-generated, `no` if not. One row at a time; this is per ad, not per category. |
| `publish_in_first_batch` | Samuel | `yes` on the 12–20 ads for launch. |
| `notes` | Anyone | Anything the build needs to know. |

Leave `ad_id`, `asset_key`, `category`, `title`, `type`, `thumbnail` and
`open_full` alone — they're generated.

## The rules these columns enforce

- An ad appears on the site **only** when it's labelled and set to publish.
  Everything else stays `published: false`.
- Every ad is labelled honestly on the page: `Client ad`, `Sample ad`, or
  `AI-generated presenter`.
- No client name appears anywhere without confirmed permission.

## When it's filled

Send the sheet back (export as CSV) and it gets converted into
`content/ads.labels.json`, which the site reads.

**Labels are keyed on `asset_key`, not `ad_id`.** `ad_id` is just the position in
the dataset, so it shifts if assets are ever added or reordered. `asset_key` is
the asset's own Cloudinary name and never moves. Don't rename that column.

## Not included

The dataset holds other asset collections from the old product — mockups,
masonry assets, featured shoots, proof assets, video mockups (259 files in
total). They aren't part of the lookbook, so they're not in this sheet. If any
of them are ad work that belongs in the portfolio, say which and they can be
added.
