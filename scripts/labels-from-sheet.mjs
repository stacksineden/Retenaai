#!/usr/bin/env node
/* ============================================================================
 * Turn the filled-in labelling sheet into content/ads.labels.json
 * ============================================================================
 *   node scripts/labels-from-sheet.mjs docs/ads-labelling.csv
 *
 * Export the sheet as CSV first (File > Download > CSV). Columns used:
 *   asset_key, client_or_sample, client_name_if_client, ai_presenter,
 *   publish_in_first_batch
 *
 * Anything with an empty publish_in_first_batch stays unpublished, so an
 * unfinished sheet can't push half-labelled work onto the site.
 * ========================================================================== */

import { readFileSync, writeFileSync } from "node:fs";

const yes = (v) => /^(y|yes|true|1|x)$/i.test((v ?? "").trim());

/** Minimal CSV reader — handles quoted fields and embedded commas. */
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ",") { row.push(field); field = ""; }
    else if (c === "\n") { row.push(field); rows.push(row); row = []; field = ""; }
    else if (c !== "\r") field += c;
  }
  if (field || row.length) { row.push(field); rows.push(row); }

  const [header, ...body] = rows.filter((r) => r.some((c) => c.trim()));
  return body.map((r) => Object.fromEntries(header.map((h, i) => [h.trim(), r[i] ?? ""])));
}

const file = process.argv[2] ?? "docs/ads-labelling.csv";
const rows = parseCsv(readFileSync(file, "utf8"));

const labels = {};
const problems = [];

for (const r of rows) {
  const key = (r.asset_key ?? "").trim();
  if (!key) continue;

  const kind = (r.client_or_sample ?? "").trim().toLowerCase();
  if (kind !== "client" && kind !== "sample") {
    problems.push(`${key}: client_or_sample is "${r.client_or_sample}" — must be client or sample`);
    continue;
  }

  const clientName = (r.client_name_if_client ?? "").trim();
  if (kind === "client" && !clientName) {
    problems.push(`${key}: marked client but no client_name_if_client`);
    continue;
  }

  labels[key] = {
    client_or_sample: kind,
    client_name: kind === "client" ? clientName : null,
    ai_presenter: yes(r.ai_presenter),
    published: yes(r.publish_in_first_batch),
  };
}

const out = JSON.parse(readFileSync("content/ads.labels.json", "utf8"));
out.labels = labels;
writeFileSync("content/ads.labels.json", JSON.stringify(out, null, 2) + "\n");

const published = Object.values(labels).filter((l) => l.published).length;
console.log(`${Object.keys(labels).length} labelled, ${published} published.`);

if (problems.length) {
  console.log(`\n${problems.length} row(s) skipped:`);
  for (const p of problems) console.log(`  - ${p}`);
  process.exitCode = 1;
}
