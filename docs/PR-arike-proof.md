# ARÍKẸ́: the first case study that proves ads bring orders

Four commits on top of `main`.

Macbite, IzzyCrafts and the Colloquium all prove we build pages. Nothing on the site proved the ads layer does anything, which is the layer most of the homepage sells. This adds the case study that closes that loop: the creative, the enquiries it produced, the orders, and the client's words.

## What changed

**ARÍKẸ́ review** — Kehinde Ruth, CEO, verbatim, with its first sentence as the pull quote. The first review about ad creative rather than a build.

**ARÍKẸ́ case study** at `/work/arike` — the first on the ads layer and the first with a result:

> **The result** — 3 orders from the campaign — ARÍKẸ́'s own count.

**Customer enquiry screenshots**, published with ARÍKẸ́'s permission: a WhatsApp thread where a customer sends the ad and asks for delivery to Akure, and an Instagram DM saying *"Please I need this. And can it be delivered to Lagos?"* The page now reads creative → enquiries → orders → review.

**`HERO_REVIEW`** — with two reviews, whichever one the content loader happened to read first would have taken the hero strip. It's named explicitly now, so adding a review can't quietly change what leads the homepage.

**`Screenshot.display`** — an optional `"phone"` that caps a figure at 340px and centres it. Wide stays the default, so the existing build screenshots are untouched.

## What a reviewer should check

**The screenshots were masked before publishing.** ARÍKẸ́'s consent covers ARÍKẸ́, not their customers, who agreed to nothing. Painted out: the Instagram handle in the "Liked by" line, and both customer profile photos. No customer name appears in either image — the contact was already saved as "MK IG Customer". Both captions state that the screenshots are shared with permission and masked. Please confirm nothing identifying survived.

**The result is deliberately not pinned to one creative.** The ad visible inside those screenshots — cream outfit on pale steps — is not on the site; every `men_slide` asset we hold is the black-on-marble shoot. Saying "this creative brought 3 orders" next to a different creative would be the kind of claim this site has avoided throughout. When that video is uploaded, the result can name it.

**The attribution on the result is intentional.** "ARÍKẸ́'s own count" follows the rule used everywhere else: a result is a measured figure from the client's own data, or it is `null`.

## Checks

Typecheck, lint and build pass. Verified on `/work/arike` and `/work`: all three images load with alt text and captions, the review renders under the result, the card shows the result, and `live_url` is null here — we did ads, not a site — so no live link renders and nothing breaks. Phone screenshots render at 340px wide rather than the 2205px they were before.

## Still open

- The creative that drew the orders needs uploading to Cloudinary and adding to the labelling sheet.
- ARÍKẸ́'s `problem` line and city are unwritten; the page renders only the fields that are filled.
- The client strip says "Arike" while the brand writes itself "ARÍKẸ́". Worth unifying.

🤖 Generated with [Claude Code](https://claude.com/claude-code)
