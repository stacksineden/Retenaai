# Reviews

One JSON file per review in this folder. A review renders **only** when
`permission_confirmed` is `true`. Nothing is ever paraphrased — trim for length
only, never reword.

Copy this and fill it in:

```json
{
  "id": "2026-09-macbite",
  "quote": "Their exact words, trimmed only for length.",
  "name": "Full name",
  "role": "Owner",
  "business": "Business name",
  "city": "Ibadan",
  "month": "September 2026",
  "screenshot": null,
  "video_url": null,
  "permission_confirmed": false
}
```

- `screenshot` — path to the WhatsApp screenshot of the original message, only
  where the client agreed to it being shown. Blur customer names and phone
  numbers first.
- `video_url` — a video testimonial. Videos go first on the page, click-to-play.
- `permission_confirmed` — set to `true` only with written permission.

There are no reviews yet, so the hero proof strip and the "In their words"
section render nothing. That's deliberate: the section is never padded.
