# Add IzzyCrafts, and link every case study to its live site

One commit on top of `main` after site v2 merged.

## What changed

**IzzyCrafts is a new case study.** The screenshot was captured from the live site at 1440px rather than cropped out of a browser window, so there's no tab bar or URL bar in it. Its `what_we_built` describes only what's visible on the site — the problem line and the city are still to be written.

**Case studies now carry a `live_url`,** and all three have one, with the clients' consent:

| Case study | Live site |
|---|---|
| IzzyCrafts | https://www.izzycrafts.com/ |
| Macbite | https://www.macbite.com.ng/ |
| The Yemi Farounbi Colloquium | https://www.tyfcolloquium.org/ |

A "Visit the live site" link appears on the card, on the case study page, and on the layer 2 preview. Each opens in a new tab with `rel="noopener noreferrer"`, each is a 44px tap target, and each fires a `live_site_click` event so we'll see which portfolio pieces people actually open.

**Layer 2 on the homepage shows IzzyCrafts** instead of Macbite, and the preview image itself now opens the real store — a visitor can walk around a page we shipped instead of taking our word for it. It's selected explicitly by slug through `LAYER_2_CASE_STUDY`, not by whichever file the content loader reads first, so it won't change silently when the next case study is added.

## Worth a reviewer's attention

The case study card had to be restructured. It was a single anchor wrapping the whole card, and **an anchor cannot contain another anchor** — adding the live-site link inside it would have produced invalid markup that browsers silently rearrange. The card is now a container, with the image and the title linking to the case study and the live site as its own sibling link. Verified zero nested anchors on `/work`.

## Checks

Typecheck, lint and build pass. All three live links verified in the browser: correct URLs, `target="_blank"`, `rel="noopener noreferrer"`, 44px tap targets, no nested anchors. The IzzyCrafts image is served (200, image/jpeg) and renders on both the homepage and its case study page. The build writes `dist/work/izzycrafts.html` with its own title.

## Known gaps

- The IzzyCrafts screenshot is 800×500, where Macbite's is 1400×758 — the capture was scaled down. Fine on the card, slightly soft on the case study page at full width. Replacing `public/work/izzycrafts.jpg` needs no code change.
- IzzyCrafts has no `problem` line yet, so its card renders only "What we built".

🤖 Generated with [Claude Code](https://claude.com/claude-code)
