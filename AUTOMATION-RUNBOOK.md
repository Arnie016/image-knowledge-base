# ImageGen2 Experiment Automation Runbook

This runbook is binding for the recurring image knowledge-base automation. It is intentionally ambitious. The automation should behave like a self-directed visual research lab with a very high degree of freedom, not like a template that repeatedly produces the same operational atlas, UI, board, material study, workflow, tool sheet, notebook, and room. The purpose is to build a wide, strange, useful, browsable corpus of generated PNG images and prompt knowledge across many domains, visual languages, scales, media types, and speculative formats.

The automation should still be disciplined about file hierarchy, catalog records, prompt cards, memory updates, and generated-image provenance. Freedom applies to theme choice, visual form, image count, conceptual scale, research sources, prompt strategy, and composition, not to bookkeeping.

## Core Mission

Each run must expand the image knowledge base in a way a later run can learn from. A strong run should leave behind:

- Final PNG images that are worth browsing as images.
- Prompt cards that record the exact creative request and constraints.
- Research notes that explain what the run tested and what it learned.
- Catalog JSONL records that make the corpus indexable.
- Memory updates that reduce repetition and improve future runs.

The product direction is a **Speculative Design Reference Atlas** with an agentic search layer. The site should serve specific niche users who need hard-to-find visual references, not a generic audience looking for random AI images. Strong default audiences include creative directors, game artists, worldbuilders, UI designers, teachers, curriculum authors, prompt engineers, prop designers, exhibit designers, tabletop/RPG creators, indie filmmakers, packaging designers, and researchers who need precise visual analogies.

Each run must make the archive more useful for one or more niche groups. It should produce images and metadata that a search agent can reason over: clear theme, audience, use case, format, scale, prompt pattern, concrete hooks, and image-edit affordances.

Practical explainer plates are first-class outputs. A useful image can be a beautiful, structured visual reference like a "types of coffee" chart, a nitrogen cycle poster, a lab safety diagram, a tool taxonomy, a cooking method comparison, a language grammar map, a music theory reference, a materials guide, or a classroom science process plate. These should be designed as polished searchable knowledge artifacts: clear title, labeled parts, concise definitions, coherent layout, real-world examples, and enough visual specificity that teachers, students, creators, or agents can retrieve and reuse them.

Film and animation preproduction assets are also first-class outputs when they are concrete and reusable. High-value examples include character turnaround sheets, mascot species dossiers, expression packs, prop handling references, storyboard beat pages, camera blocking boards, shot-continuity contact sheets, animation-pose ladders, scene-to-scene edit planners, and post-production handoff boards. These should behave like production assets for filmmakers, storyboard artists, previsualization teams, animation directors, game-cinematic designers, and editors rather than like generic fandom art or moodboards.

The automation may explore art direction, UI design, diagrams, browser-game assets, film frames, visual encyclopedias, posters, packaging systems, speculative product families, scientific diagrams, interiors, vehicles, maps, fashion artifacts, editorial spreads, architectural studies, icon systems, storyboards, comic panels, operating-room diagrams, food systems, jewelry studies, maps of imaginary places, invented instruments, material boards, type-safe layouts, mechanical cutaways, ecological scenes, field notebooks, signage, city fragments, rituals, manufacturing lines, shop windows, toys, museum displays, spacecraft interiors, folk craft, failed prototypes, educational plates, infographics, and any other imageable subject that is safe and useful.

Do not let the accumulated memory become a cage. Memory should prevent stale repetition, not prevent surprise.

## Required Start

At the beginning of every run:

1. Read `image-knowledge-base/MEMORY.md`.
2. Read this runbook fully enough to apply its current rules.
3. Check `image-knowledge-base/queue/` for optional user-supplied topic files.
4. Inspect recent records in `image-knowledge-base/catalog/runs.jsonl` and `image-knowledge-base/catalog/images.jsonl`.
5. Read the automation memory at `${CODEX_HOME:-$HOME/.codex}/automations/imagegen2-knowledge-base/memory.md` if it exists.
6. Inspect at least one relevant `.md` file from `${CODEX_HOME:-$HOME/.codex}/skills/` or `${CODEX_HOME:-$HOME/.codex}/plugins/cache/` when the selected run direction overlaps a skill or plugin. If no relevant plugin applies, inspect the ImageGen skill and one adjacent creative skill anyway.
7. Identify a niche audience and search intent before selecting the theme. Write down who would search for this image set, what they would type, and why the result would help them.
8. Select a theme that expands the corpus. Prefer a surprising move across scale, medium, subject matter, or purpose.

Use `rg --files` to discover local skill and plugin Markdown files. Do not bulk-read the whole Codex cache. Read only targeted `SKILL.md`, reference, or product-spec `.md` files that can enrich the current run.

Do not generate images before completing the research pass. If the run cannot produce a credible research note with audience, search intent, scale choices, skill/plugin influences, and candidate themes, it is not ready to generate.

## Research-First Gate

Every run must create a pre-generation research brief before the first image prompt. This can live inside the run research note and must include:

- `Niche audience`: the specific user group the run serves.
- `Search intent`: 8-15 realistic queries that the generated pages should satisfy.
- `Agentic retrieval value`: what an image-search or knowledge-base agent should infer from the image set.
- `Primary and secondary scales`: chosen from the Scale System below.
- `Browser/search scale`: whether the run targets single-image long-tail pages, run collection pages, format pages, education pages, licensing pages, or future topic pages.
- `Skill/plugin research`: at least ImageGen plus one relevant local skill/plugin Markdown file, with the visual lessons extracted.
- `Existing-corpus gap`: what is missing or overrepresented in recent runs.
- `Five candidate themes`: each with a different scale, domain, or format.
- `Selected theme rationale`: why this theme is useful, searchable, niche-relevant, and non-random.

If the run is a film, animation, mascot, or story-world branch, the research brief must also define:

- `Production asset lane`: character bible, species dossier, storyboard pack, animation reference, edit-planning kit, prop bible, environment continuity pack, or another concrete film asset family.
- `Narrative continuity value`: what a director, editor, animator, or story agent should be able to infer or preserve across the set.
- `Shot or beat scope`: whether the run serves one sequence, one character, one location, or one larger story world.
- `Toolchain handoff`: which downstream tools or stages the asset is intended to support, such as GPT image iteration, Seedance motion generation, CapCut editing, previs, game cinematic planning, or voice-directed prompt mutation.

The research brief should behave like product discovery for images. It should ask: who is this for, what problem does it solve, what vocabulary will make it findable, what pages will Google and local search expose, and what would a downstream agent do with the metadata?

## Degree-of-Freedom Mandate

Every run must deliberately open the creative search space before selecting a theme. Do this by choosing values from at least five of these axes:

- Scale: microscopic, handheld, tabletop, room, building, street, landscape, planetary, cosmic, abstract-system.
- Time: ancient, historical, present-day, near-future, far-future, timeless, seasonal, disaster-recovery, dawn, night, festival, maintenance window.
- Medium: photoreal, documentary, editorial, clay model, paper model, CGI render, pixel art, watercolor, printmaking, risograph, diagram, UI, comic, storyboard, technical plate, catalog photography, museum label system.
- Function: teaching, selling, warning, navigating, repairing, playing, performing, governing, archiving, measuring, healing, cooking, transporting, celebrating, debugging, remembering.
- Domain: science, craft, civic life, games, fashion, architecture, food, medicine, ecology, education, logistics, ritual, sports, music, cinema, space, tools, furniture, toys, finance, weather, agriculture, privacy, law, construction.
- Emotional register: quiet, playful, severe, lush, eerie, comic, ceremonial, utilitarian, luxurious, improvised, damaged, tender, bureaucratic, theatrical, domestic.
- Formal strategy: grid, sequence, cutaway, exploded view, close-up, panorama, diptych, map, typographic poster, object family, contact sheet, user interface, annotated scene, split-screen, instruction card, comic page, cinematic still, packaging set.
- Reality level: real-world plausible, alternate-history, speculative but buildable, deliberately impossible, dreamlike, symbolic, educational abstraction.

The selected theme should not merely be "another support system" unless the support-system frame is genuinely new and visually necessary. The previous corpus is heavy on operational field and back-room systems. Future runs should often jump to other kinds of image production: narrative, entertainment, editorial, branding, toys, games, fashion, architecture, diagrams, magical realism, food, sculpture, museum display, spatial installation, and pure visual experiments.

## Freedom Budget

Assign each run one freedom budget before generating prompts:

- `conservative`: continue a promising thread, but change at least two axes.
- `wide`: choose a new domain and at least three new formats.
- `wild`: choose an unfamiliar domain, a strong visual language, and at least one format the corpus has rarely used.
- `mutation`: combine two unrelated prior themes into a new hybrid.
- `anti-pattern`: intentionally do the opposite of the last three runs in subject, palette, medium, and composition.

Default to `wide` or `wild`. Use `conservative` only when memory shows a specific thread that deserves deeper follow-up. Record the freedom budget in the research note and run report.

## Plugin and Skill Markdown Protocol

The automation should use local Codex skill and plugin Markdown files as creative accelerants. These files live under `${CODEX_HOME:-$HOME/.codex}/skills/` and `${CODEX_HOME:-$HOME/.codex}/plugins/cache/`. They are not only execution manuals; they are also maps of available creative domains. Each run should consult them with restraint and purpose.

Examples of useful sources:

- `skills/imagegen/SKILL.md` for generation workflow, taxonomy, constraints, and prompt structure.
- `skills/imagegen/references/prompting.md` and `skills/imagegen/references/sample-prompts.md` for prompt craft.
- Build Web Apps plugin skills for dashboard, website, hero, and product interface visual direction.
- Game Studio plugin skills for browser-game UI, sprite systems, Phaser, Three.js, 3D asset pipelines, and playtest-oriented visual needs.
- Figma plugin skills for design systems, component libraries, UI surfaces, design tokens, and layout discipline.
- Presentations and Documents plugin skills for slide systems, document artifacts, editorial layouts, reports, and narrative sequencing.
- Remotion plugin skills for motion design frames, video title cards, caption systems, and storyboard-like sequences.
- Life Science Research plugin skills for scientific subjects, evidence-oriented diagrams, biological atlases, molecular or clinical visuals.
- macOS Icon Bars and local creative skills such as iconography, folder, clipboard, ritual, network, and product-spec skills for interface metaphors and small-system visual languages.

The run should record which skill or plugin Markdown files were consulted in the research note. If a plugin suggests a workflow that does not fit image generation, extract only the visual implications. For example, a game skill might inspire HUD states, sprite sheets, maps, inventory objects, boss telegraphs, and playtest scenes, even if the run produces only PNGs.

Do not require live plugin tool calls unless the run genuinely needs them. The baseline requirement is to inspect relevant `.md` files and use them to increase diversity and specificity.

## Scale System

Each run must choose at least one primary scale and one secondary scale. The output set should visibly use both.

Scale menu:

- `micro`: cells, grains, fibers, chips, seeds, pigments, corrosion, tiny mechanisms.
- `object`: a single tool, garment, device, dish, toy, vessel, icon, package, artifact.
- `family`: many related objects with coherent rules.
- `interface`: screens, controls, HUDs, dashboards, instruments, menu systems.
- `page`: posters, spreads, zines, cards, labels, manuals, comics, type systems.
- `tabletop`: trays, boards, kits, process tables, game boards, workshop surfaces.
- `room`: interiors, studios, shops, labs, homes, classrooms, stages.
- `architecture`: buildings, facades, pavilions, transit nodes, exhibit halls.
- `street`: markets, sidewalks, civic scenes, processions, storefronts, public service points.
- `landscape`: farms, coasts, forests, deserts, mines, mountains, weather systems.
- `world`: maps, regions, planets, ecosystems, alternate histories, fictional cultures.
- `abstract`: visualizations of invisible systems, rules, data, emotion, memory, or language.

Runs should vary scale aggressively. If the previous run was mostly tabletop and room, consider micro and world. If recent runs were object atlases, consider cinematic scenes, editorial sequences, or public space. If recent runs were realist, consider stylized, symbolic, or playful forms.

Scale tags are not just visual notes. They are search facets. Prompt cards must use scale words that help retrieval, such as `object`, `interface`, `page`, `street`, `architecture`, `world`, or `micro`, plus one or two more specific phrases when useful, such as `ferry toolkit`, `repair campsite`, `classroom poster`, or `game HUD`.

## SEO and Agentic Search Requirements

Every image should be treated as a future search result, not as a throwaway generation.

Before generation, define:

- One primary SEO lane: `speculative design reference`, `visual prompt pattern`, `fictional place or institution`, `educational diagram`, `game asset reference`, `UI reference`, `packaging/product reference`, or another specific lane.
- The target long-tail queries for individual image pages.
- The target collection queries for the run page.
- The likely edit/query actions an agent should support, such as "find similar map-like images", "adapt this for AP Biology", "make a UI version", "turn this into a board-game asset", or "show me all packaging systems with coastal materials".

For each image, the prompt card and catalog title should support crawlability and agentic retrieval:

- Use short, descriptive filenames and titles with concrete nouns.
- Write alt-worthy titles: avoid vague names like "Concept 01" or "Visual System".
- Keep 6-12 concrete search hooks per image through the prompt fields and notes.
- Include visible page-relevant context in `Intended learning value`, `Composition notes`, and `Format notes`.
- Avoid stuffing keywords. The best metadata reads like a useful curator wrote it.

For educational/reference explainers, prioritize query shapes people already search for:

- `types of <thing> chart`
- `<process> diagram`
- `<subject> visual guide`
- `<topic> infographic`
- `<exam/course> revision poster`
- `<tool/material/food> comparison chart`
- `<system> labeled diagram`

The image should answer the query directly in the first viewport of the static image page. Use prompt-card notes to capture the exact audience, such as "middle-school biology", "coffee shop staff training", "AP Environmental Science", "game prop artist reference", or "culinary school visual handout".

After running `node image-knowledge-base/scripts/build-site-data.mjs`, confirm the generated static pages and sitemap exist. Google's image guidance emphasizes discoverable image landing pages, descriptive filenames/titles/alt-adjacent text, crawlable image URLs, and sitemaps for images that might otherwise be found only through JavaScript. The builder should continue generating per-image pages, per-run pages, structured data, canonical URLs, and sitemap entries.

## Run Shapes

Use the default target only when it fits the selected concept:

- Default: 6 to 15 final PNG images.
- Small focused study: 4 to 6 images, allowed for highly refined visual direction or expensive generation.
- Standard diverse run: 8 to 12 images.
- Large atlas run: 12 to 20 images, allowed when the theme benefits from breadth.
- Paired experiment: 6 to 10 images arranged as contrasts, such as old/new, handmade/digital, public/private, real/speculative.
- Sequence run: 6 to 12 frames that form a story, process, animation reference, game loop, or educational progression.
- Reference explainer run: 6 to 12 polished chart, diagram, guide, comparison, taxonomy, or process images aimed at concrete search queries and niche learning or training use cases.

Every successful run must include at least three visual families unless the run report explains why a narrower study was stronger. At least one image should test a less-common format for the corpus. Less-common formats include comic page, cinematic frame, packaging family, board-game surface, game HUD, sprite sheet, fashion lookbook, map, storefront, installation view, architectural section, book cover, album cover, theatrical set, event poster, scientific plate, model-making photograph, kid-toy catalog, or motion-design keyframe.

Reference explainer formats count as valuable variety when they are genuinely useful: comparison chart, labeled taxonomy, process cycle, cause/effect diagram, timeline, decision tree, anatomy plate, vocabulary board, method comparison, equipment guide, safety poster, or course revision sheet.

Dense images are encouraged, but density is not the only goal. A quiet single scene can be valuable if it explores a new scale, mood, or composition.

For film and animation branches, a strong run usually mixes at least three of these families: character turnaround or species sheet, expression or pose lineup, prop or costume detail plate, storyboard or beat page, camera/blocking guide, environment continuity board, edit or timing planner, and one cinematic proof frame that shows the asset language working in-scene.

## Public-Facing Batch Standard

The automation should treat `10` final PNGs as the normal public-ready floor for a successful run. Fewer than 10 is only acceptable when the run report explicitly marks the run as a scarce, expensive, or precision study.

For broad practical lanes such as explainers, storyboard packs, continuity kits, doctrine sheets, pressure maps, and commercial prompt boards, prefer:

- `10 to 16` images for a standard public run.
- `12 to 24` images when the theme benefits from family breadth.
- at least `3` visual families inside the batch so the run page feels substantial rather than repetitive.

If a theme deserves far more coverage, do not dump hundreds of unrelated images into one flat run. Split the work into a coherent series of sibling runs with a shared series name, each individually searchable and each strong enough to stand as its own landing page.

## Throughput and Scale

The atlas should aim for volume without turning into sludge. When generation throughput is available, scale by batching coherent families instead of weakening prompts.

Preferred scale-up pattern:

- Queue a series, not a blob: for example `5` related runs with `10 to 20` images each instead of one shapeless `75` image drop.
- Reuse the same research brief, audience, SEO lane, and continuity anchors across the sibling runs.
- Vary the family focus across sibling runs: character, setting, prop, action, style, doctrine, timeline, or scenario.
- Keep prompt cards dense and specific enough that each page remains useful on its own.

When a user asks for "hundreds of images," interpret that as a request for a larger indexed corpus, not a license for generic bulk generation. The correct response is to increase run cadence, widen public sync windows, and produce series-based batches that preserve retrieval quality.

## Theme Selection Protocol

Do not pick the first plausible theme. Generate a short internal slate of at least five candidate themes, each with a different scale or domain. Choose the one that best satisfies:

- It is meaningfully different from the last three runs.
- It can support multiple visual formats.
- It has concrete nouns that can make prompts specific.
- It can produce at least one image that the corpus has not seen before.
- It serves a named niche audience and clear search intent.
- It can generate crawlable page titles, hooks, and run-page copy without keyword stuffing.
- It improves the Speculative Design Reference Atlas or its prompt-pattern layer.
- It avoids direct living-artist imitation and copyrighted characters.
- It can be documented in prompt cards without relying on unreadable in-image text.

Candidate theme types:

- `domain leap`: a new professional, cultural, scientific, playful, or domestic domain.
- `format leap`: a run organized around a new image format instead of a topic.
- `style leap`: the same sort of subject in a radically different medium or mood.
- `scale leap`: jump from objects to landscapes, rooms to microstructures, or UIs to public space.
- `hybrid`: combine two distant domains, such as courtroom x board game, pastry x space habitat, textile x weather radar.
- `anti-last-run`: intentionally avoid the last run's palette, scale, materials, and composition.
- `production pack`: build a reusable asset bundle for character, animation, game-cinematic, or film-preproduction work with explicit continuity metadata.

Record the chosen theme, discarded candidates, and reason for selection in the research note.

## Prompt Strategy

Use the ImageGen skill and built-in image generation path by default. For distinct images, issue distinct generation calls with distinct prompts. The prompts should be structured, specific, and aware of the intended use case. They should include concrete subject nouns, composition, lighting, palette, materials, constraints, and avoid-list terms.

Each run should mix prompt strategies. Examples:

- `atlas prompt`: many objects with count, grouping, background, and material families.
- `scene prompt`: a place with foreground, midground, background, light, and human or non-human activity.
- `interface prompt`: a screen or HUD with modules, states, controls, and density level.
- `diagram prompt`: a visual explanation that uses physical or graphic hierarchy.
- `style prompt`: a medium-aware image such as risograph poster, clay maquette, editorial photo, technical plate, or comic page.
- `asset prompt`: a reusable item such as icon grid, sprite sheet, product render, label family, texture sheet, or package mockup.
- `sequence prompt`: frames that share continuity across a process, story, game mechanic, or installation.
- `reference explainer prompt`: a polished poster or infographic with a clear title, labeled sections, concise captions, consistent icon/image treatment, and enough content structure to teach or compare a topic at a glance.

Never ask for direct imitation of a living artist. Do not use copyrighted characters, logos, or watermarks. Avoid generic style words when concrete visual choices would work better. If a prompt requests in-image text, keep it short, intentional, and non-critical unless the image is specifically a UI, poster, label, or typographic layout test.

For text-heavy reference explainers, reduce risk by keeping labels short, using simple repeated section anatomy, avoiding tiny paragraphs, and storing full canonical text in the prompt card even if the generated image text is imperfect. If exact text accuracy is essential, mark the image as exploratory unless verified.

## Image Generation and File Handling

Use the ImageGen skill and built-in image generation path for generated raster images. If generated PNGs land under `${CODEX_HOME:-$HOME/.codex}/generated_images/`, copy the selected PNG outputs into the workspace hierarchy. Leave originals in place unless the user explicitly asks to delete them.

For each run, create a slug such as `20260424-0400-material-ui-atlas`.

Create:

- `image-knowledge-base/images/YYYY/MM/DD/<run-slug>/`
- `image-knowledge-base/prompts/YYYY/MM/DD/<run-slug>/`
- `image-knowledge-base/research/YYYY/MM/DD/<run-slug>/`

Save each selected final PNG as:

`NN-short-descriptive-slug.png`

Do not overwrite prior outputs. If a filename exists, choose a new deterministic suffix. If image generation is unavailable or blocked, do not fake images with SVG, HTML, screenshots, placeholders, or copied old images. Save planned prompts and diagnostics under `image-knowledge-base/failed/YYYY/MM/DD/<run-slug>/`, append failed catalog records, update memory with the blocker, and write a run report.

## Gallery Website Refresh

The workspace includes a static website at `image-knowledge-base/site/index.html`. It is the browsable front door for all generated images. After appending successful or partial catalog records, refresh the site data by running:

```sh
node image-knowledge-base/scripts/build-site-data.mjs
```

This script reads `catalog/runs.jsonl`, `catalog/images.jsonl`, and prompt cards, then writes `image-knowledge-base/site/data.js`. Future runs should treat this refresh as part of normal bookkeeping, just like catalog and memory updates. If Node is unavailable, record the blocker in the run report and leave the existing gallery data intact.

The public deployment is currently `https://image-knowledge-base.vercel.app`. Refreshing `site/data.js` updates the local website immediately. To update the public site after a run, deploy from `image-knowledge-base/` with `vercel --prod --yes` when Vercel credentials and network access are available.

## Prompt Cards

For each PNG, create a matching prompt card in the prompt folder:

`NN-short-descriptive-slug.prompt.md`

Each card must include:

- Title.
- Use case taxonomy.
- Final prompt.
- Negative constraints.
- Intended learning value.
- Composition notes.
- Format notes.
- Scale tags.
- Skill or plugin Markdown influences, if any.
- File path of the PNG.
- Generation status.

If the output was partial, explain what failed and whether the PNG should be treated as final, exploratory, or rejected.

When the run serves film, animation, mascot, or story-world production, also capture concise structured metadata below the required sections whenever it helps future retrieval:

- `Character or subject identity`: name, role, age band, silhouette traits, species, costume anchors, and key props.
- `Performance or motion cues`: expression range, pose logic, action loop, timing, or animation emphasis.
- `Scene or shot purpose`: beat summary, shot function, camera angle, blocking logic, or continuity role.
- `Toolchain context`: intended downstream use such as GPT image iteration, Seedance motion pass, CapCut edit planning, previs board, or game cinematic reference.

These additions should stay concrete and searchable. Prefer production nouns like `front turnaround`, `reaction pose`, `paddle prop`, `torii courtyard sunrise`, `training montage beat`, or `CapCut timing board` over vague notes like `cute anime energy`.

## Research Notes

Create one research note per run:

`research/YYYY/MM/DD/<run-slug>/research.md`

Keep it concise but more useful than a receipt. Include:

- Run theme.
- Niche audience.
- Search intent queries.
- Agentic retrieval value.
- SEO lane and target collection query.
- Freedom budget.
- Primary and secondary scales.
- Browser/search scale.
- Candidate themes considered.
- Skill and plugin Markdown files consulted.
- Existing-corpus gap.
- Visual families explored.
- Prompt variables tested.
- What each image is meant to teach.
- Successful patterns.
- Weak patterns to avoid.
- Ideas for next runs.

The research note should make the next run smarter. It should explain why the run was different, not just list files.

## Memory Update

At the end of each successful, partial, or failed run, update `image-knowledge-base/MEMORY.md`:

- Add the run slug and timestamp.
- Add new explored themes and formats.
- Add useful prompt patterns.
- Add avoid-list items for weak repetition.
- Add next-run seeds.
- Add scale and plugin-learning notes when they matter.

Also update `${CODEX_HOME:-$HOME/.codex}/automations/imagegen2-knowledge-base/memory.md` with a short summary of what changed and the current run time. The automation memory should prevent repeated work across recurring executions.

## Catalog Schema

Append one JSON object per run to `catalog/runs.jsonl`:

```json
{"type":"run","run_slug":"YYYYMMDD-HHMM-theme","timestamp":"ISO-8601","theme":"short theme","image_count":0,"status":"success|partial|failed","report_path":"..."}
```

Append one JSON object per image to `catalog/images.jsonl`:

```json
{"type":"image","run_slug":"YYYYMMDD-HHMM-theme","index":1,"title":"...","taxonomy":"...","png_path":"...","prompt_path":"...","status":"success|failed"}
```

The schema may remain compact, but prompt cards and research notes should carry richer detail such as scale, freedom budget, and skill/plugin influences.

## Quality Bar

Prefer breadth with intent, not random noise. A good run should have images that are interesting to browse and notes that compound knowledge. The automation should take risks, but the images should still feel designed, specific, and deliberate.

Avoid:

- Direct imitation of living artists.
- Logos, watermarks, and copyrighted characters.
- Reusing the same run shape too often.
- Reusing the same palette, lighting, room angle, material board, or object atlas formula by habit.
- Producing only single-subject beauty shots unless the run is explicitly a focused product, fashion, or portrait study.
- Producing only operational support systems.
- Producing only educational posters.
- Letting UIs become generic SaaS dashboards.
- Letting diagrams become flat classroom posters unless that is the chosen format.
- Letting story or mascot branches collapse into generic anime screenshots, empty character glamor, fandom moodboards, or text-poor hero posters without production metadata.
- Dense in-image text unless text rendering is the experiment.
- Overwriting previous outputs.

## Diversity Requirements Across Runs

Across any four consecutive successful runs, the corpus should include:

- At least one run outside logistics, field science, conservation, or back-room operations.
- At least one run whose primary scale is not tabletop or room.
- At least one run with a narrative, entertainment, editorial, fashion, game, architecture, food, map, toy, or public-space component.
- At least one run that can serve a film, animation, mascot, or story-preproduction workflow when recent runs have skewed too far toward generic operational explainers.
- At least one run influenced by a local skill or plugin Markdown file beyond the ImageGen skill.
- At least one image that is not an atlas, UI, material board, workflow table, tool sheet, notebook, or environment closer.

If the recent catalog violates these requirements, the next run should correct course.

## Final Run Response

The automation should report:

- Run slug.
- Theme.
- Niche audience.
- SEO lane.
- Freedom budget.
- Primary and secondary scales.
- Number of PNGs created.
- Image folder path.
- Gallery website path, whether `site/data.js` was refreshed, and whether static SEO artifacts were regenerated.
- Research note path.
- Run report path.
- Skill/plugin Markdown files consulted.
- Any blockers.

Keep the final response concise, but make the creative leap legible.
