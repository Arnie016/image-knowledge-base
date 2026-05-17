# Image Atlas

This folder is the persistent workspace for an hourly image-generation research automation.

Public GitHub snapshot note: this repo currently publishes a lightweight seed slice of the atlas rather than the full local corpus, so image assets, catalog rows, and generated site pages stay small enough for a normal GitHub repository push.

The automation should produce an expanding digest of PNG images plus prompt, research, and catalog notes. It is intentionally broad: art forms, 3D looks, interface formats, dense visual taxonomies, speculative objects, diagrams, editorial compositions, visual systems, material studies, and prompt experiments are all valid.

## Structure

- `AUTOMATION-RUNBOOK.md`: binding instructions for each automation run.
- `MEMORY.md`: persistent ledger of explored topics, prompts, styles, and lessons.
- `images/`: final PNG outputs, grouped by date and run.
- `prompts/`: one prompt card per generated image.
- `research/`: run-specific research notes and visual hypotheses.
- `contact-sheets/`: dense overview images, grids, and visual maps.
- `run-reports/`: concise report for each automation run.
- `catalog/`: JSONL records for runs and images.
- `catalog/curation.json`: explicit platform archive overrides for redundant or superseded runs/images.
- `catalog/CURATION-AUDIT-20260506.md`: latest platform audit notes and removal rationale.
- `site/`: static searchable gallery website for browsing and downloading the generated images.
- `scripts/build-site-data.mjs`: regenerates `site/data.js` from the JSONL catalogs and prompt cards.
- `STRIPE-SCAFFOLD.md`: payment-plan scaffold for future paid study packs, watermark-free downloads, and licenses.
- `failed/`: failed or blocked generation attempts with diagnostics.
- `queue/`: optional hand-written topics or constraints for future runs.

## Expected Output

Each successful run should create 6 to 15 final PNG files by default. The automation may create fewer only when generation is blocked, and may create more when the run is intentionally producing small atlas, grid, or contact-sheet images.

Every PNG should have a matching prompt card and catalog entry. The goal is not just images, but an image knowledge base that can be browsed, searched, and learned from later.

## Gallery Website

Production deployment:

- https://image-knowledge-base.vercel.app
- Direct gallery path: https://image-knowledge-base.vercel.app/site/

Open `site/index.html` directly, or serve the folder locally from `image-knowledge-base/` for the best browser behavior:

```sh
python3 -m http.server 4173
```

Then visit `http://localhost:4173/site/`. The site now has separate top-level views for Home, Catalog, Themes, Education, and Licensing. The catalog supports full-text search, run filters, taxonomy filters, topic chips, grouped views, image details, prompt-card links, run-report links, and tagged PNG downloads. Public downloads are generated in-browser through canvas with a small Image Atlas watermark and image/run ID tag.

The catalog now also exposes a public curation rubric and hides explicitly archived redundant runs by default. Use `Show archived` in the sidebar if you need to inspect superseded branches.

After each automation run, refresh the gallery data:

```sh
node image-knowledge-base/scripts/build-site-data.mjs
```

That updates the local gallery. To update the public Vercel deployment after new images are generated, run this from `image-knowledge-base/`:

```sh
vercel --prod --yes
```
