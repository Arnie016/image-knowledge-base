# Image Knowledge Base Memory

Created: 2026-04-24 03:42 +08

This file is the persistent memory for the hourly image generation automation. Each run should read and update it.

## Operating Principles

- Build a browsable PNG corpus, not just a pile of unrelated images.
- Alternate between visual breadth and deeper follow-up on promising directions.
- Prefer generated raster images for visual experiments.
- Document enough prompt and research context that later runs can learn from earlier runs.
- Keep the hierarchy tidy and never overwrite previous images.
- Treat `AUTOMATION-RUNBOOK.md` as a high-freedom creative governance document, not just an output checklist.
- Future runs should vary scale, medium, domain, emotional register, and format aggressively, and should consult relevant local Codex skill/plugin Markdown files when choosing or enriching a theme.
- Refresh `image-knowledge-base/site/data.js` with `node image-knowledge-base/scripts/build-site-data.mjs` after future image catalog updates so the static gallery stays current.
- Public gallery deployment: `https://image-knowledge-base.vercel.app`. The local gallery updates after `site/data.js` refresh; the public deployment needs `vercel --prod --yes` from `image-knowledge-base/` after new images are generated.

## Active Taxonomy

Use these tags consistently when cataloging outputs:

- `ui-mockup`
- `infographic-diagram`
- `scientific-educational`
- `product-mockup`
- `photorealistic-natural`
- `illustration-story`
- `stylized-concept`
- `historical-scene`
- `ads-marketing`
- `productivity-visual`
- `logo-brand`
- `material-study`
- `atlas-contact-sheet`
- `speculative-object`
- `typographic-layout`
- `environment-concept`
- `data-visual`
- `mixed-format`
- `character-bible`
- `species-dossier`
- `storyboard-sequence`
- `animation-reference`
- `film-preproduction`

## Recent Run Notes

- `20260521-1452-protective-braiding-training-guides` at `2026-05-21T14:52:06+08:00` expanded the corpus into cosmetology education, textured-hair training, mannequin-practice geometry, salon-station setup, and classroom planning directly after the lantern-kite film-asset success and a cluster of uncataloged fragrance, mushroom, knot, orchid, and predictive-history research branches. Primary scale `page`, secondary scale `room`. The most useful learning was that beauty-adjacent explainers stay concrete and non-generic when they lean on service nouns instead of inspiration language: knotless root start, square part grid, feed-in cornrow, rat-tail comb, duckbill clip, edge brush, pre-stretched extension bundle, braid cuff, sanitation jar, mirror station, and mannequin-head shelf. `imagegen/SKILL.md` and `imagegen/references/prompting.md` reinforced one-question-per-image prompts with short labels, `documents/SKILL.md` kept each page answering one teaching problem instead of becoming a cluttered worksheet, and `iconography-lab/SKILL.md` helped the repeated comb, clip, swatch, mannequin, and rosewood-station kit behave like one internal training code without drifting into beauty-brand packaging. Avoid next time: another immediate braid-training rerun with the same cream-board, rosewood-station, mint-line, mannequin-head classroom kit, influencer selfie framing, luxury-salon glamour, or product-brand drift. Strong follow-up seeds should pivot toward `aquarium-nitrogen-cycle-starter-posters`, `relief-print-registration-and-brayer-course-plates`, `beekeeping-brood-and-hive-inspection-posters`, or `fruit-tree-grafting-and-pruning-decision-sheets`.

- `2026-05-20-film-asset-direction` at `2026-05-20T17:20:00+08:00` recorded a product-direction shift from the user: future atlas work should deliberately favor reusable film and animation production assets like mascot character sheets, species dossiers, expression packs, storyboard pages, shot-blocking guides, continuity boards, and edit-planning sheets rather than only practical explainers or standalone image walls. Searchability lesson: these branches stay useful when every image names concrete production nouns such as character role, species, costume anchors, recurring props, shot size, camera angle, beat purpose, motion cue, and downstream toolchain context like GPT, Seedance 2.0, or CapCut. Memory correction: earlier avoid-lists often discouraged mascot drift because it usually produced branding fluff or generic cuteness; future runs should still avoid empty mascot branding, but should actively pursue mascot and story-world work when it behaves like a production dossier with continuity value. Strong next seeds: `mascot-film-asset-bibles`, `character-turnaround-and-expression-dossiers`, `training-montage-storyboard-packs`, `shot-blocking-and-edit-planning-boards`, and a later retry of `cinematography-shot-size-and-blocking-visual-guides` with a more character-driven slant.

- `20260514-0205-bicycle-repair-commuter-reference-sheets` at `2026-05-14T02:05:12+08:00` expanded the corpus into commuter bicycle maintenance, curbside repair infrastructure, public mobility teaching, toolkit packing, and drivetrain or brake literacy directly after the pastry-training and tabletop pedagogy explainer runs. Primary scale `object`, secondary scale `street`. The most useful learning was that a practical bike explainer branch stays highly searchable when it leans on concrete commuter hardware and wear-state nouns: brake cable noodle, disc rotor, chain checker, master link, vulcanizing patch, repair stand jaws, powder-coated repair stand, rack stay, wet curb paint, and reflective ankle strap. `imagegen/SKILL.md` and `imagegen/references/prompting.md` reinforced query-first prompts with short labels and mechanic nouns, `documents/SKILL.md` kept each image solving one repair question, `presentations/SKILL.md` kept the toolkit, street view, and cutaway distinct at thumbnail scale, and `iconography-lab/SKILL.md` helped the repeated orange callouts, taped cream boards, mint repair hardware, and greasy commuter props behave like one internal training code without slipping into branding. Avoid next time: another immediate bike-maintenance rerun with the same cream-poster, mint-stand, wet-curb, and orange-callout kit, race-bike product polish, or generic hardware-store repair clutter. Strong follow-up seeds should pivot toward `museum-exhibit-label-hierarchy-guides`, `fragrance-family-scent-wheel-and-tester-bar`, `mushroom-lookalike-field-course-posters`, or a later cycling return through winter grit or cargo-bike locking instead of repeating the basics.
- `20260514-0105-bakery-icing-tip-comparison-wall` at `2026-05-14T01:05:04+08:00` expanded the corpus into pastry-school training, buttercream texture literacy, nozzle taxonomy, troubleshooting evidence, tool-tray object study, and spatial cake-finishing setup directly after the tabletop game-design pedagogy branch. Primary scale `object`, secondary scale `page`. The most useful learning was that a practical food explainer run stays searchable when it uses direct decorator nouns and real pastry proof objects: basketweave tip, flower nail, reusable piping bag, coupler, rosette sample, split buttercream, border board, piping-bag rack, parchment dispenser, and cake-box shelf. `imagegen/SKILL.md` and `imagegen/references/prompting.md` reinforced query-first prompts with short labels and physical tool language, `documents/SKILL.md` kept each image answering one decorating question, `presentations/SKILL.md` kept the tray, wall, and section views distinct at thumbnail scale, and `iconography-lab/SKILL.md` helped the repeated pastry props behave like one internal training code without becoming branding. Avoid next time: another immediate pastry-training rerun with the same buttercream pink, pistachio green, stainless bench, and tiled-wall kit, glossy dessert-ad polish, wedding-cake romance, or scrapbook baking clutter. Strong follow-up seeds should pivot toward `bicycle-repair-commuter-reference-sheets`, `fragrance-family-scent-wheel-and-tester-bar`, `mushroom-lookalike-field-course-posters`, or `museum-exhibit-label-hierarchy-guides`.
- `20260514-0002-board-game-mechanics-comparison-guides` at `2026-05-14T00:02:34+08:00` expanded the corpus into tabletop game-design pedagogy, mechanic-comparison teaching, board-surface spatial logic, portable player-aid objects, and critique-room deployment directly after the ceramics, sewing, museum-label, and cinematography explainer streak. Primary scale `tabletop`, secondary scale `page`. The most useful learning was that a practical explainer run can jump domains without losing SEO discipline when it uses direct mechanic nouns and real tabletop proof objects: cloth draw bags, worker meeples, scoring tracks, crown markers, hex tiles, ring-bound player aids, cork critique walls, and grease-pencil arrows. `imagegen/SKILL.md` and `imagegen/references/prompting.md` reinforced query-first prompts with short labels and concrete component nouns, `game-ui-frontend/SKILL.md` kept the teaching surfaces readable instead of turning into dashboard clutter, `documents/SKILL.md` kept each page focused on one mechanic claim, and `presentations/SKILL.md` helped the board map, taxonomy sheet, and room view stay distinct at thumbnail scale. Avoid next time: another immediate tabletop pedagogy rerun with the same mustard-teal felt-and-cork kit, fantasy-box spectacle, collector-edition glamour, or ten more flat posters without real board or room deployment. Strong follow-up seeds should pivot toward `bicycle-repair-commuter-reference-sheets`, `bakery-icing-tip-comparison-wall`, `museum-exhibit-label-hierarchy-guides`, or `rpg-encounter-pacing-handouts`.
- `2026-05-13-gallery-app-refactor` at `2026-05-13T23:19:23+08:00` redefined the browsing surface for the atlas without changing catalog counts. The gallery now behaves more like a product: persistent left navigation, top-level view tabs, a shorter overview, a theme library that uses actual images as covers, and an inspector panel so clicking an image or run opens focused context instead of burying details in a single scrolling page. A new education workbench also landed with document-text intake, audience/goal controls, explanatory-pack planning, and GPT-image preview slots through `api/education-pack.js`, which makes the site meaningfully more agentic even before full document parsing is added. Searchability lesson: strong metadata still matters, but browsing confidence now also depends on visual chunking, clear navigation lanes, and click-to-expand context rather than front-loading descriptive copy. Next product seeds: real upload parsing for PDF/DOCX, saved agentic packs tied back to existing corpus items, and a live browser QA pass once a local preview can be opened reliably.
- `20260513-2301-cinematography-shot-size-and-blocking-visual-guides` at `2026-05-13T23:01:33+08:00` was a blocked but worthwhile anti-pattern branch aimed at indie filmmakers, film-school instructors, storyboard artists, and creator educators. The pre-generation research was strong: direct film-grammar queries, primary scale `page`, secondary scale `room`, and a deliberate jump away from workshop evidence and civic standards into shot ladders, angle stacks, focal-length strips, camera-axis diagrams, coverage boards, laminated viewfinder cards, storyboard beat sheets, blocking floor maps, magnetic planning walls, and apartment set sections. `imagegen/SKILL.md` and `imagegen/references/prompting.md` reinforced query-first labeled teaching plates, `presentations/SKILL.md` kept each image anchored to one proof object that would survive thumbnail view, and `documents/SKILL.md` kept the slate from collapsing into overpacked worksheet pages. Searchability lesson: entertainment-craft explainers can broaden the archive while still serving real educational queries if they stay grounded in physical planning artifacts rather than festival branding or software mockups. Avoid next time if generation is still unstable: spending another full film-language batch after a failed smoke test; the right pattern is to preserve the slate and pivot or retry only when connectivity is back. Strong follow-up seeds remain `board-game-mechanics-comparison-guides`, `bakery-icing-tip-comparison-wall`, `museum-exhibit-label-hierarchy-guides`, and a direct retry of `cinematography-shot-size-and-blocking-visual-guides` once ImageGen connectivity returns.
- `20260513-2159-museum-exhibit-label-hierarchy-guides` at `2026-05-13T22:08:04+08:00` was a blocked but worthwhile anti-pattern branch aimed at exhibit designers, museum educators, and interpretation teams. The pre-generation research was strong: direct design queries, primary scale `page`, secondary scale `architecture`, and a deliberate pivot away from sewing, ceramics, and workshop proof objects into gallery white, frosted acrylic, linen label stock, donor bands, caption rails, wall elevations, vitrine sections, foamcore maquettes, and pocket style guides. `imagegen/SKILL.md` and `imagegen/references/prompting.md` reinforced query-first label prompts with short canonical text, `documents/SKILL.md` kept the hierarchy boards breathable, `presentations/SKILL.md` pushed thumbnail-proof installation and section views, and `iconography-lab/SKILL.md` helped acrylic tabs, braille chips, donor strips, and alignment rules behave like one internal museum graphics code. Searchability lesson: practical explainers can stay fresh by targeting professional design-review queries rather than maintenance or classroom poster queries. Avoid next time if generation is still unstable: spending another full batch on a network-blocked branch without testing the API path early. Strong follow-up seeds remain `bakery-icing-tip-comparison-wall`, `bicycle-repair-commuter-reference-sheets`, and a retry of `museum-exhibit-label-hierarchy-guides` when image generation connectivity returns.
- `20260513-2043-sewing-machine-tension-and-stitch-troubleshooting-guides` at `2026-05-13T21:18:58+08:00` expanded the corpus into textile troubleshooting, garment-workroom pedagogy, machine anatomy, stitch evidence, and portable swatch references directly after the weather and ceramics explainer streak. Primary scale `object`, secondary scale `page`. The most useful learning was that a practical explainer run can stay fresh when it trades neutral workshop posters for sewing-lab proof objects: bobbin cases, presser feet, tension disks, muslin seam samples, ring-bound swatch cards, thread racks, and a transparent acrylic cutaway model. `imagegen/SKILL.md` and `imagegen/references/prompting.md` reinforced query-first prompts with direct tool-and-failure nouns, `documents/SKILL.md` kept each sheet focused on one sewing problem, `presentations/SKILL.md` kept the batch varied at contact-sheet scale, and `iconography-lab/SKILL.md` helped feet, swatches, arrows, and binder tabs behave like one internal teaching code. Avoid next time: another immediate textile troubleshooting rerun, pastel hobby-blog styling, generic maker-room cork boards without garment specificity, or another stack of muslin-and-cork posters with no new format jump. Strong follow-up seeds should pivot toward `museum-exhibit-label-hierarchy-guides`, `bicycle-repair-commuter-reference-sheets`, or `bakery-icing-tip-comparison-wall`.
- `20260513-1942-ceramics-glaze-firing-reference-posters` at `2026-05-13T19:42:56+08:00` expanded the corpus into ceramics studio craft education, kiln-room pedagogy, glaze chemistry, witness-cone literacy, and model-making directly after the weather-front field-guide streak. Primary scale `object`, secondary scale `page`. The most useful learning was that a practical explainer run can stay fresh when it trades sky maps and civic standards for fired material evidence: grogged clay bars, witness cones, glaze powders, pine tile racks, cinderblock kiln rooms, rolling ware carts, and basswood cutaway models. `imagegen/SKILL.md` and `imagegen/references/prompting.md` reinforced query-first prompt structure with short ceramic labels and concrete studio nouns, `documents/SKILL.md` kept each plate focused on one teaching claim, `presentations/SKILL.md` pushed one proof object per image, and `iconography-lab/SKILL.md` encouraged a shared label and silhouette grammar across cards, boards, racks, and room views. Avoid next time: another immediate ceramics rerun, beige generic maker charts with no fired-surface specificity, decorative pottery beauty shots, or flame-heavy kiln drama. Strong follow-up seeds should pivot toward `museum-exhibit-label-hierarchy-guides`, `bicycle-repair-commuter-reference-sheets`, or `sewing-machine-tension-and-stitch-troubleshooting-guides`.
- `20260513-1842-weather-front-and-cloud-reading-field-guides` at `2026-05-13T19:03:27+08:00` successfully revived the earlier blocked meteorology branch and expanded the corpus into sky-reading science, synoptic map symbols, cloud taxonomies, portable field aids, ranger-station deployment, and terrain-section pedagogy right after the transit, pond, stage-lighting, and woodshop explainer streak. Primary scale `abstract`, secondary scale `landscape`. The most useful learning was that a practical explainer run stays fresh when it leaves the workshop wall and repeats one disciplined meteorology kit across posters, map plates, foldout journals, ring cards, briefing-room deployment, and basswood-acrylic models: cloud white, slate blue, storm gray, prairie wheat, cork edges, drafting tape, binder rings, graphite field notes, and laser-cut contour layers. `imagegen/SKILL.md` and `imagegen/references/prompting.md` reinforced query-first prompt structure with short labels and concrete weather nouns, `documents/SKILL.md` kept the plates from turning into textbook clutter, `presentations/SKILL.md` kept one proof object per image, and `life-science-research:research-router-skill/SKILL.md` helped split the weather topic into cloud, storm, map, breeze, field-tool, and terrain-model lanes. Avoid next time: another immediate weather poster rerun, disaster-movie storm drama, radar-dashboard drift, cozy ranger-cabin overload, or generic sky collages with no map or field-hardware specificity. Strong follow-up seeds should pivot toward `ceramics-glaze-firing-reference-posters`, `museum-exhibit-label-hierarchy-guides`, or `bicycle-repair-commuter-reference-sheets`.
- `20260513-1639-weather-front-and-cloud-reading-field-guides` at `2026-05-13T16:39:04+08:00` was a blocked practical-explainer branch rather than a corpus expansion, but the preserved research and prompt slate are still worth revisiting when generation works again. The chosen anti-repetition move was strong: direct meteorology education queries, primary scale `abstract`, secondary scale `landscape`, and a deliberate jump away from the indoor standards-wall streak into cloud taxonomy, frontal systems, weather-map reading, portable field cards, a ranger-station briefing wall, and a terrain-section model. `imagegen/SKILL.md` and `imagegen/references/prompting.md` reinforced query-first labeled prompts with short canonical weather labels, `documents/SKILL.md` kept each planned plate to one main claim, `presentations/SKILL.md` kept one proof object per image, and `life-science-research:research-router-skill/SKILL.md` was useful for decomposing the branch into cloud taxonomy, fronts, pressure and wind reading, local breeze cycles, and field tools. Avoid next time: generic blue STEM poster styling, aurora or radar-app drift, and another indoor classroom wall if this branch is retried. Operational lesson: the local CLI can dry-run and import `openai`, but future runs should expect failure if outbound image generation still returns `Connection error.` across the full batch.
- `20260513-1324-transit-wayfinding-symbol-anatomy-sheets` at `2026-05-13T13:24:01+08:00` expanded the corpus into civic graphic standards, transit accessibility hardware, station-sign hierarchy, bus-stop module design, and review-model photography immediately after the `freshwater-pond-ecology-revision-posters`, `stage-lighting-gel-and-rigging-guides`, and `woodshop-joinery-reference-plates` explainer streak. Primary scale `page`, secondary scale `architecture`. The most useful learning was that a practical explainer run can stay fresh when it leaves the classroom wall and repeats one disciplined civic kit across standards sheets, installation views, architectural sections, and foamcore mockups: signal yellow, route blue, matte black, porcelain white, brushed aluminum, concrete gray, tactile-warning strips, hanging sign bands, line bullets, and map frames. `imagegen/SKILL.md` and `imagegen/references/prompting.md` reinforced direct query-shaped prompts with short labels and concrete transit nouns, `documents/SKILL.md` kept the standards pages breathable instead of overpacked, `iconography-lab/SKILL.md` kept pictograms, arrows, interchange lozenges, and stop blades behaving like one internal code, and `presentations/SKILL.md` helped the installation and model images keep one proof object each. Avoid next time: another immediate transit standards branch, smart-city neon drift, generic corporate wayfinding mood boards, accessibility surfaces treated as abstract patterns, or another black-yellow poster rail composition right after this run. Strong follow-up seeds should pivot toward `weather-front-and-cloud-reading-field-guides`, `museum-exhibit-label-hierarchy-guides`, or `ceramics-glaze-firing-reference-posters`.
- `20260513-1222-freshwater-pond-ecology-revision-posters` at `2026-05-13T12:22:40+08:00` expanded the corpus into bright inland freshwater education, pond-scale ecological process diagrams, watershed cartography, portable field aids, and classroom model-making immediately after the `stage-lighting-gel-and-rigging-guides`, `woodshop-joinery-reference-plates`, and `barista-training-reference-posters` explainer streak. Primary scale `abstract`, secondary scale `landscape`. The most useful learning was that a practical explainer run stayed fresh when it pivoted from indoor hardware to living systems and repeated one disciplined field kit across posters, maps, objects, comics, and maquettes: duckweed green, tannin brown, pond blue, basswood tan, laminated cream, muddy sediment, reeds, sample jars, dip nets, and boardwalk rails. `imagegen/SKILL.md` and `imagegen/references/prompting.md` reinforced direct query-shaped prompts with short labels and concrete organism nouns, `documents/SKILL.md` kept the teaching pages from collapsing into textbook clutter, `presentations/SKILL.md` helped the map, comic, and maquette keep one proof object each, and `life-science-research:research-router-skill/SKILL.md` encouraged breaking the branch into clear lanes like food web, life cycle, indicators, habitat structure, and watershed context. Avoid next time: another immediate freshwater classroom branch, generic blue science infographics with no organisms, tropical reef drift, mascot-cartoon biology, or overreliance on poster-only formats after this run already opened map and maquette territory. Strong follow-up seeds should pivot toward `weather-front-and-cloud-reading-field-guides`, `transit-wayfinding-symbol-anatomy-sheets`, or `ceramics-glaze-firing-reference-posters`.
- `20260513-1119-stage-lighting-gel-and-rigging-guides` at `2026-05-13T11:19:33+08:00` expanded the corpus into dark theatrical education, backstage electrics, gel-color vocabulary, rigging infrastructure, and procedural safety right after the `woodshop-joinery-reference-plates` and `barista-training-reference-posters` explainer streak. Primary scale `page`, secondary scale `room`. The most useful learning was that a practical explainer run can stay fresh if it inverts the previous daylight workshop habit with matte black drape, cinderblock, aluminum truss hardware, tungsten spill, cyan or magenta gel accents, and real booth nouns like ellipsoidal, fly rail, cue strip, and gel swatch book. `imagegen/SKILL.md` and `imagegen/references/prompting.md` reinforced direct query-shaped prompts with short labels, `documents/SKILL.md` kept the poster and paperwork pages breathable, and `presentations/SKILL.md` helped the run pass the thumbnail test by giving each page one proof object instead of another generic theater collage. Avoid next time: another immediate black-box lighting explainer branch, concert-poster styling, purple-neon entertainment branding, ornate opera-house nostalgia, or exact-text-heavy stage paperwork. Strong follow-up seeds should pivot toward `bicycle-repair-bench-training-plates`, `ceramics-glaze-firing-reference-posters`, or `transit-wayfinding-symbol-anatomy-sheets`.
- `20260513-1025-woodshop-joinery-reference-plates` at `2026-05-13T10:25:00+08:00` expanded the corpus into sober craft education, bench-scale tool anatomy, query-shaped workshop posters, portable bench references, and one believable training-bay installation immediately after the `barista-training-reference-posters` explainer branch. Primary scale `page`, secondary scale `object`. The most useful learning was that a practical explainer run stayed fresh when every format repeated one disciplined maker-school kit: drafting cream, pine and walnut wood blocks, graphite linework, oxide red correction marks, laminated paper, steel hardware, plywood walls, and light sawdust. `imagegen/SKILL.md` and `imagegen/references/prompting.md` reinforced short labeled prompts with direct search-query phrasing, `documents/SKILL.md` kept the posters breathable instead of spreadsheet-tight, and `presentations/SKILL.md` helped each page hold one claim and one proof object instead of becoming another generic instruction wall. Avoid next time: another immediate workshop-poster branch, beige generic infographics with no hardware specificity, hardware-store flyer styling, or drifting back toward cafe training while the explainer seed is still hot. Strong follow-up seeds should pivot toward `bicycle-repair-bench-training-plates`, `stage-lighting-gel-and-rigging-guides`, or `mushroom-foraging-course-revision-posters`.
- `20260501-0100-storm-glass-pigeon-postal-bathhouse` at `2026-05-01T01:00:52+08:00` expanded the corpus into humid civic architecture, animal-post logistics, weather-reading hardware, handled route papers, and a rain-clearing comic sequence after a cluster of reef pedagogy, aquarium entertainment, winter fair, and moon-garden jewelry branches. Primary scale `architecture`, secondary scale `object`. The most useful learning was that a compact public-service branch stayed specific when every format repeated one disciplined kit: wet slate, steam white, pigeon gray, cedar brown, oxidized teal, brass, and muted yellow. `frontend-skill/SKILL.md` helped the opener and section stay spatially legible instead of becoming novelty-bathhouse mood pieces, `doc/SKILL.md` kept the ticket and route suite tactile rather than brochure-clean, and `iconography-lab/SKILL.md` helped harnesses, storm tubes, route tags, perch gloves, and brass message tins behave like one internal civic code without becoming a logo system. Avoid next time: another pigeon-post or steam-bathhouse branch immediately, mascot-bird drift, luxury-spa spectacle, or ornate fantasy bathhouse architecture. Strong follow-up seeds should pivot toward `portable-ash-beekeeping-chapel-kit`, `paper-kite-puppet-hospital-playroom`, or `brackish-river-violin-repair-campsite`.
- `20260501-0024-moon-garden-seismograph-jewelry-studio` at `2026-05-01T00:24:15+08:00` expanded the corpus into nocturnal jewelry craft, analog tremor instrumentation, handled calibration paper, greenhouse architecture, and quiet worker identity immediately after the aquarium-pier entertainment branch. Primary scale `object`, secondary scale `room`. The most useful learning was that a night atelier branch stayed specific when every format repeated one disciplined kit: moonstone white, smoked glass, oxidized brass, midnight velvet, limestone dust, moss green, pale blossoms, and graph-paper traces. `frontend-skill/SKILL.md` helped the opener, section, and closer stay compositionally direct instead of turning into boutique clutter, `documents/SKILL.md` kept the calibration booklet and measurement suite handled rather than stationery-clean, `iconography-lab/SKILL.md` helped pendants, trace marks, clips, tool rolls, and lamp gloves behave like one internal code without becoming a brand, and `myth-merch-studio/SKILL.md` helped the locket family feel like an earned collectible system instead of luxury retail. Avoid next time: another moonlit jewelry branch immediately, astrological-symbol overload, steampunk costume drift, or glossy high-fashion campaign polish. Strong follow-up seeds should pivot toward `paper-kite-puppet-hospital-playroom`, `winter-canal-biscuit-zoology-fair`, or `public-quarry-wedding-cake-inspection-hangar`.
- `20260430-2356-mineral-sunscreen-reef-classroom` at `2026-04-30T23:56:00+08:00` expanded the corpus into daylight coastal science, reef-safe pedagogy, handled sunscreen goods, paper fieldwork, and open-air civic architecture after the immediate orchard-festival, laundromat-athletics, and apartment-cookbook cluster. Primary scale `landscape`, secondary scale `micro`. The most useful learning was that a bright ecology branch stayed specific when every format repeated one disciplined kit: zinc white paste, sea-glass teal water, lime shade cloth, shell cream, coral blush, basalt black, and weathered timber. `frontend-skill/SKILL.md` helped the openers and pavilion stay spatially legible instead of travel-brochure generic, `documents/SKILL.md` kept the teaching plate and paper suite tactile rather than brochure-clean, and `iconography-lab/SKILL.md` helped shell tags, rinse droplets, coral silhouettes, sleeve icons, and refill tins behave like one internal shoreline code without becoming a logo system. Avoid next time: another child reef-classroom branch immediately, sunscreen-beauty-product drift, aquamarine-resort fantasy, or over-reliance on readable worksheet text. Strong follow-up seeds should pivot toward `paper-kite-puppet-hospital-playroom`, `winter-canal-biscuit-zoology-fair`, or `moon-garden-seismograph-jewelry-studio`.
- `20260430-2152-mineral-sunscreen-reef-classroom` at `2026-04-30T21:52:30+08:00` expanded the corpus into daylight shoreline ecology, public child-facing science, underwater observation, educational starter-kit goods, and concrete reef infrastructure after an immediate streak dominated by orchard ritual, laundromat athletics, apartment food, and ceremonial lantern/procession worlds. Primary scale `landscape`, secondary scale `micro`. The strongest learning was that the branch stayed specific when every format repeated one disciplined kit: zinc white, reef aqua, shell beige, concrete gray, mangrove green, faded coral, mesh bags, cardboard labels, aluminum tins, and chalk symbols. `frontend-skill/SKILL.md` helped the opener, split-view plate, and section stay compositionally legible instead of collapsing into busy classroom collage, `documents/SKILL.md` helped the kit-atlas and artifact prompts stay tactile rather than brochure-clean, and `iconography-lab/SKILL.md` helped shell marks, tide symbols, straps, tags, and shade patches behave like one internal civic code without becoming a formal brand. Avoid next time: another tropical reef classroom immediately, resort-luxury deck styling, glossy cosmetic-sunscreen drift, dense classroom-poster text, or sleek lab instrumentation. Strong follow-up seeds should pivot toward `paper-kite-puppet-hospital-playroom`, `winter-canal-biscuit-zoology-fair`, or `brackish-river-violin-repair-campsite`. Note for future reef follow-ups: the underwater observation and toolkit/material branches outperformed the initial lineup and paper-suite attempts.
- `20260430-1929-orchard-festival-needlepoint-weather-banners` at `2026-04-30T19:29:39+08:00` expanded the corpus into daylight orchard public ritual, needlepoint weather iconography, handled route print, timber festival architecture, and closing-time procession after the immediate cluster of laundromat athletics, apartment cooking, lantern procession ritual, and seed-vault science. Primary scale `street`, secondary scale `object`. The most useful learning was that a textile-heavy branch stayed specific when every format repeated one disciplined kit: oat cloth, indigo thread, cider amber, russet apples, tarnished brass, weathered wood, and hill-sky blue. `frontend-skill/SKILL.md` helped the opener, lineup, and ridge procession stay compositionally direct, `documents/SKILL.md` kept the route map and judging booklet tactile rather than brochure-clean, and `iconography-lab/SKILL.md` helped sun, rain, frost, wind, and harvest sheaf motifs behave like one internal civic code without becoming a brand. Avoid next time: another orchard banner festival immediately, ren-fair costume drift, generic bunting, or another oat-indigo-brass palette branch. Strong follow-up seeds should pivot toward `mineral-sunscreen-reef-classroom`, `paper-kite-puppet-hospital-playroom`, or `winter-canal-biscuit-zoology-fair`.
- `20260430-1827-chalk-track-laundromat-medal-lookbook` at `2026-04-30T18:27:46+08:00` expanded the corpus into daylight neighborhood athletics, coin-laundry fashion, medal repair culture, handled meet paperwork, and body-scale amateur competition after the immediate cluster of warm apartment cooking, lantern procession ritual, midnight taxicab rehearsal, and cold seed-vault science. Primary scale `street`, secondary scale `object`. The most useful learning was that an athletics branch stayed specific when every format repeated one disciplined kit: chalk white, faded track red, detergent blue, sun-bleached yellow, brushed steel, heather gray cotton, mesh laundry bags, and brass medal glints. `frontend-skill/SKILL.md` helped the opener, lineup, and cutaway stay compositionally direct instead of collapsing into collage or card-like clutter, `documents/SKILL.md` kept the meet program and claim-ticket suite tactile rather than flat design collateral, and `iconography-lab/SKILL.md` helped ribbon sashes, claim tags, clothespins, medal rows, and patched warmups behave like one internal neighborhood code without becoming a sports brand. Avoid next time: another trackside laundromat or medal-ribbon branch immediately, trophy-display fetishism, glossy sportswear-ad polish, or red-white-blue ribbon dominance as a default palette crutch. Strong follow-up seeds should pivot toward `mineral-sunscreen-reef-classroom`, `paper-kite-puppet-hospital-playroom`, or `orchard-festival-needlepoint-weather-banners`.
- `20260430-1727-sunlit-tamarind-dumpling-apartment-cookbook` at `2026-04-30T17:27:25+08:00` pushed the corpus into warm domestic food, apartment architecture, cookbook tactility, and balcony aftermath after an immediate streak of cold archive science, wet transit-night rehearsal, and ceremonial public-lantern ritual. Primary scale `room`, secondary scale `object`. The most useful learning was that a food branch stayed specific when every format repeated one disciplined apartment kit: basil-green tile, apricot enamel, tamarind brown sauce, brushed steel lunch tins, faded coral cloth, cane baskets, honey wood, and soft late-morning to late-afternoon light. `frontend-skill/SKILL.md` helped the opener and cutaway stay spatially clear without drifting into staged hero shots, `documents/SKILL.md` kept the cookbook spread and fridge board tactile instead of flat design comps, and `iconography-lab/SKILL.md` helped lunch tins, fold cards, tape corners, and towel checks behave like one internal domestic code without becoming a brand system. Avoid next time: another apartment dumpling or cookbook branch immediately, repeated basil-tile plus apricot-enamel palettes, restaurant glamor, influencer brunch polish, or too many checked-cloth props. Strong follow-up seeds should pivot toward a daylight athletics or rehearsal world, a reef-or-mineral classroom that uses warm daylight instead of freezer palettes, or a child-facing handmade craft branch.
- `20260430-1128-desert-tollbooth-perfume-test-track` at `2026-04-30T11:28:46+08:00` expanded the corpus into adult roadside commerce, desert automotive circulation, fragrance hardware, route-testing paper systems, and twilight service atmosphere after the immediate streak of monastic kitchen safety, curbside aquarium rental, rooftop instrument culture, and toy-emporium retail. Primary scale `landscape`, secondary scale `object`. The most useful learning was that a speculative perfume branch stayed specific when every format repeated one disciplined kit: chalk concrete, oxidized mint paint, rust red striping, amber glass, dusty shade mesh, black rubber, chrome rails, and pale lavender basin haze. `frontend-skill/SKILL.md` helped the route board and section stay poster-clear without dashboard drift, `documents/SKILL.md` kept the receipt and sample suite tactile instead of stationery-clean, and `iconography-lab/SKILL.md` helped lane symbols, bottle tags, and apron pockets behave like one internal roadside code without turning into a formal logo system. Avoid next time: another desert roadside service branch immediately, luxury perfume-ad polish, collectible-car fetishism, too much circular-symbol branding, or another chalk-mint-rust material world. Strong follow-up seeds should pivot toward pocket glacier wrestling sticker leagues, public quarry wedding-cake inspection hangars, or midnight mushroom taxicab choir depots.
- `20260430-0309-summer-pavement-aquarium-rental-booth` at `2026-04-30T03:09:06+08:00` expanded the corpus into harsh daylight neighborhood commerce, translucent water hardware, rental ephemera, modular curbside architecture, and kid-scale temporary stewardship after the immediate run streak of rooftop music culture, toy retail, and flood-repair service space. Primary scale `street`, secondary scale `object`. The most useful learning was that a summer public-service branch stayed specific when every format repeated one disciplined kit: bleached mint, pool blue, coral straps, lemon clips, galvanized steel, chalk white, damp concrete, acrylic glare, and algae-green accents. `documents/SKILL.md` helped the pass suite and route board behave like handled municipal artifacts instead of clean layout comps, while `iconography-lab/SKILL.md` helped the bucket, strap, caution-chip, and species-icon language stay recognizable without turning into explicit branding. Avoid next time: another curbside summer-rental branch immediately, pet-store glamour, beach-resort fantasy, cute mascot overload, or too many pristine top-down spreads. Strong follow-up seeds should pivot toward cardboard dinosaur dentist playsets, pocket glacier wrestling sticker culture, or monastic kite kitchen safety worlds.
- `20260430-0018-citrus-parade-wind-up-toy-emporium` at `2026-04-30T00:18:38+08:00` expanded the corpus into bright suburban retail toy culture, mail-order print surfaces, sectional play architecture, tabletop route maps, and child-facing commercial narrative after a late cluster of wet repair concourses, foggy pastry weather rooms, moon-opera fairgrounds, tattoo archives, and greenhouse fashion worlds. Primary scale `street`, secondary scale `object`. The most useful learning was that a toy branch stayed specific when every format repeated one disciplined kit: tangerine, lemon, lime, cobalt, cherry red, cream cardboard, brushed tin, scuffed plastic, halftone badges, and striped awnings. `documents/SKILL.md` helped the packaging, order-form, playmat, and catalog pages behave like handled print goods rather than flat mock screens, while `iconography-lab/SKILL.md` helped the mascot silhouettes, badge circles, keys, pennants, and parade carts read as one recognizable commercial family without copying any existing franchise. Avoid next time: another retro toy-emporium branch immediately, collector-box fetishism, mascot overload in every frame, and reliance on readable catalog copy when object shape can carry the idea. Strong follow-up seeds should pivot toward rooftop meteor choir instruments, summer aquarium rental booths, or cardboard dinosaur dentist playset worlds.
- `20260429-1933-glass-canopy-aviary-fashion-catalog` at `2026-04-29T19:33:44+08:00` expanded the corpus into daylight civic ecology, greenhouse architecture, migratory observation tools, occupational fashion, and wordless child-scale narrative after the pollen-observatory field-guide branch plus the fossil-nail academy, sea-glass bathhouse, volcanic perfume exchange, and basalt board-game cluster. Primary scale `architecture`, secondary scale `body`. The most useful learning was that a lush public-building world stays specific when every format repeats one disciplined kit: ribbed glass, celadon weather capes, apricot stamps, brass tokens, wet stone, waxed canvas, and clipped bird-route glyphs. `documents/SKILL.md` helped the passports, foldout map, and section behave like handled artifacts rather than clean vector layouts, while `iconography-lab/SKILL.md` helped the steward wardrobe, route symbols, and token family read as one institutional code without becoming a mascot brand. Avoid next time: another glazed conservatory branch immediately, another greenhouse-adjacent publishing world, Victorian winter-garden nostalgia, zoo-marketing polish, overloaded map microcopy, or a repeat of the same rainy exterior facade beat. Strong follow-up seeds should pivot toward pastry weather labs, orchid boot-repair kiosks, or dune-stage performance worlds.
- `20260429-1305-basalt-coast-night-rail-heist-board-game` at `2026-04-29T13:05:00+08:00` expanded the corpus into nocturnal tabletop entertainment, world-scale cartography, companion UI, and adult board-game play culture after a dense morning cluster of schoolyard launch craft, domestic stained-glass repair, and market-band public events. Primary scale `world`, secondary scale `tabletop`. The most useful learning was that a severe game-product branch stays specific when every format repeats one disciplined kit: basalt black, storm blue, tarnished brass, cream rule paper, burgundy wax, wet rail metal, and surf-gray mist. `game-ui-frontend/SKILL.md` kept the companion HUD playable and edge-weighted rather than dashboard-like, while `documents/SKILL.md` helped the box, board, tickets, and dossier suite read as handled printed artifacts instead of fantasy merch. Avoid next time: another boxed-game branch immediately, steampunk mystery cosplay, dense readable rule text, heroic-action poster poses, and overly pristine luxury product styling. Strong follow-up seeds should pivot toward fashion catalogs, circus seating diagrams, or perfume-exchange worlds that keep the severe palette discipline without reusing trains or heists.
- `20260429-0600-schoolyard-solar-balloon-workshop` at `2026-04-29T06:00:47+08:00` expanded the corpus into bright public-school aeronautics, handmade youth uniforms, chalk logistics, rooftop launch architecture, and student poster culture after a late-night cluster of brass-band markets, basement arcades, aquarium boutiques, and desert caravans. Primary scale `schoolyard`, secondary scale `object`. The most useful learning was that a daylight education branch stays specific when every format repeats one disciplined kit: cream nylon, sky-blue trim, faded orange, foil patch tape, chalk white, plywood, blacktop, and cheap fan hardware. `documents/SKILL.md` helped the permission suite and poster wall stay tactile and symbol-forward rather than brochure-clean, while `iconography-lab/SKILL.md` helped the wardrobe and poster glyphs stay recognizable without becoming a branded mascot system. Avoid next time: another school-club or classroom branch immediately, STEM-advertising polish, aerospace heroics, patriotic cues, and overreliance on readable slogans. Strong follow-up seeds should pivot toward domestic repair picnics, harbor camps, or transit-night performance worlds.
- `20260428-2133-salt-quarry-mirror-signal-foundry` at `2026-04-28T21:58:00+08:00` expanded the corpus into dry analog communication infrastructure, quarry-scale labor, handled permit systems, map-board bureaucracy, and apprenticeship narrative after a humid cluster of ceremony, toy-franchise culture, museum pedagogy, and civic sport. Primary scale `landscape`, secondary scale `page`. The most useful learning was that a severe relay world stays specific when every format repeats one disciplined kit: chalk white quarry walls, mirror silver, smoked visors, oxidized brass, bleached canvas, faded indigo cloth, timber catwalks, and salt crust. `iconography-lab/SKILL.md` helped the relay symbols, visors, and tower cues stay recognizable without becoming a brand deck, while `documents/SKILL.md` reinforced the permit, booklet, board, and section logic. Avoid next time: another quarry branch immediately, steampunk ornament, sci-fi laser spectacle, military-signaling romance, or overly clean industrial paper systems. Strong follow-up seeds should pivot toward forensic archives, winter greenhouse events, or quiet public-night teaching worlds.
- `20260428-1831-monsoon-rice-terrace-lantern-wedding` at `2026-04-28T18:54:24+08:00` expanded the corpus into hot-weather ceremony, flooded agricultural landscape, weather-adapted fashion, feast surfaces, and dawn aftermath after the museum, toy-franchise, and winter-rail cluster. Primary scale `landscape`, secondary scale `object`. The most useful learning was that a ceremonial world stays specific when every format repeats one disciplined monsoon kit: indigo rain cloth, saffron marigold paste, wet bamboo, terracotta, brass rice bells, cream lotus paper, and tea-brown wood. `ritual-engine/SKILL.md` helped the roles and artifacts feel repeatable rather than romantic-symbolic, while `impeccable/SKILL.md` reinforced strong physical composition for the paper and section images. Avoid next time: another wedding branch immediately, luxury bridal glamour, invitation-stationery polish, fantasy palace architecture, and making food images look like hotel buffets. Strong follow-up seeds should pivot away from ceremony into repair yards, salt-flat industry, abstract signal systems, or other dry utilitarian worlds.
- `20260428-1628-pocket-marsh-spirits-starter-league` at `2026-04-28T16:28:53+08:00` expanded the corpus into original toy-and-game franchise culture, pixel handheld interfaces, sprite assets, kid-bedroom documentary space, mall retail shelving, and motion-design commercial mythmaking after a dense cluster of civic museum, dessert-science, and public-festival branches. Primary scale `object`, secondary scale `interface`. The most useful learning was that a fictional franchise stays specific when every format repeats one disciplined kit: translucent swamp-green plastics, apricot and lilac accessory notes, cream paper inserts, muted marsh icon circles, brushed metal battery doors, blister shells, and matte map stock. `game-ui-frontend/SKILL.md` kept the battle screen readable without dashboard drift, `sprite-pipeline/SKILL.md` improved sprite consistency by forcing facing-direction and silhouette discipline, and `myth-merch-studio/SKILL.md` helped the merch family stay affordable and collectible instead of luxury toy-brand glossy. Avoid next time: direct nostalgia mimicry of real monster franchises, bright primary-color toy-aisle chaos, another packaging-heavy bedroom-media branch immediately after this, and overreliance on readable franchise text. Strong follow-up seeds live outside youth retail: fashion systems, edible worlds, landscapes, ceremonial objects, or quieter manual-page sequences.
- `20260428-1457-public-museum-edible-meteorites` at `2026-04-28T14:57:34+08:00` expanded the corpus into civic museum architecture, educational confection geology, handled public print systems, and child-scale public storytelling alongside the newer municipal-gelato and shared-courtyard branches that were added later in the day. Primary scale `architecture`, secondary scale `object`. The most useful learning was that a playful museum branch stays specific when every format repeats one disciplined institutional material kit: pale terrazzo, celadon cards, charcoal sugar crust, amber sugar glass, brushed aluminum trays, chalk-cream paper, and restrained orange accession dots. `documents/SKILL.md` helped the tasting cards, posters, and route ephemera read as municipal learning tools instead of branding collateral, `iconography-lab/SKILL.md` helped orbit circles and cross-section cues stay recognizable without turning into mascots, and `sprite-pipeline/SKILL.md` was a useful reminder that the silent comic page needed strict palette and silhouette continuity from panel to panel. Avoid next time: candy-shop nostalgia, gourmet dessert glamour, black-and-gold packaging luxury, mascot-heavy children’s branding, science-center spectacle, and too many top-down trays without public-space relief.
- `20260428-1528-municipal-gelato-seismology-lab` at `2026-04-28T15:28:52+08:00` expanded the corpus into bright civic food-science, municipal public architecture, educational print artifacts, and playful urban ritual after recent beauty retail, commuter branding, and basement leisure runs. Primary scale `architecture`, secondary scale `object`. The most useful learning was that a playful branch stays specific when every format repeats one disciplined municipal-dessert kit: pistachio tile, vanilla paper and stone, apricot and berry frozen strata, stainless spoons, terrazzo, basalt waffle-cone black, and cherry-red trace ink. `frontend-skill/SKILL.md` helped the public poster and interior hierarchy stay bold without becoming generic branding, and `documents/SKILL.md` helped the foldout plate, poster, and cutaway read like photographed civic artifacts rather than flat comps.
- `20260426-0151-cinder-bloom-eclipse-cosmetics` at `2026-04-26T01:51:08+08:00` expanded the corpus into speculative beauty retail, editorial makeup styling, and premium packaging after a dense sequence of civic systems, backstage rehearsal worlds, and mechanical neighborhood leisure. Primary scale `object`, secondary scale `storefront`. The most useful learning was that a commercial beauty branch stays coherent when every format repeats one disciplined material kit: basalt-black lacquer, dusty apricot pigment, pearl cream paper, muted copper foil, moon-silver hardware, and deep wine ribbon. `iconography-lab/SKILL.md` helped the eclipse motifs and closures stay recognizable without turning into a logo exercise, and `documents/SKILL.md` helped the editorial spread and paper inserts read as tactile artifacts rather than flat brand comps.
- `20260425-1913-basement-planetarium-pinball-hall` at `2026-04-25T19:13:43+08:00` expanded the corpus into neighborhood mechanical leisure and low-tech celestial game culture. Primary scale `room`, secondary scale `interface`. The most useful learning was that a pinball world stays coherent when every format repeats one disciplined material kit: midnight blue enamel, cream paint, chrome rails, smoked acrylic, amber bulbs, pale cyan star charts, paper score slips, cherry red buttons, and dusty velvet. `game-ui-frontend/SKILL.md` helped the playfield interface stay scene-first instead of dashboard-like, `documents/SKILL.md` kept the paper suite tactile instead of collateral-clean, and `iconography-lab/SKILL.md` helped the cabinet family share one recognizable internal code without drifting into licensed nostalgia.
- `20260425-1430-tidal-library-broken-amusement-park-maps` at `2026-04-25T14:30:23+08:00` expanded the corpus into page-first cartographic storytelling and public coastal archive architecture. Primary scale `page`, secondary scale `landscape`. The most useful learning was that a map-repair world stays coherent when every format repeats one disciplined seaside paper kit: sea-glass teal, faded coral, cream paper, brass clips, driftwood, salt crust, rippled glass, tide stains, and route circles. `documents/SKILL.md` kept the paper suite tactile instead of drifting into flat comps, and `remotion/SKILL.md` helped the projection frame read like a real motion keyframe instead of a concert still.
- `20260425-1006-funeral-salon-retired-weather-balloons` at `2026-04-25T10:06:08+08:00` expanded the corpus into ceremonial weather infrastructure and civic mourning. Primary scale `landscape`, secondary scale `page`. The most useful learning was that a weather-funeral branch stays coherent when every format repeats one disciplined symbolic kit: patched translucent latex, brass valves, black ribbons, altitude tags, indigo work coats, memorial paper, gravel rooftops, and one faded signal-orange accent. `documents/SKILL.md` kept the memorial paper suite tactile instead of drifting into clean invitation branding, and `iconography-lab/SKILL.md` helped the cloud emblem, brass badges, ribbons, and uniforms stay consistent without overdesigning the world.
- `20260425-0902-portable-desert-opera-wardrobe-exchange` at `2026-04-25T09:02:36+08:00` expanded the corpus into theatrical fashion logistics and moonrise performance architecture. Primary scale `object`, secondary scale `room`. The most useful learning was that a traveling costume world stays coherent when every format repeats one disciplined caravan kit: canvas trunks, brass claim tags, gauze veils, mirror bulbs, rug paths, lanterns, stage boards, and faded aubergine-and-teal textiles. `documents/SKILL.md` kept the paper suite artifact-first instead of collapsing into poster comps, and `myth-merch-studio/SKILL.md` helped the accessory family feel like an earned internal product system instead of generic beauty merch.
- `20260425-0801-apartment-block-fermentation-olympics` at `2026-04-25T08:01:20+08:00` expanded the corpus into playful domestic public sport. Primary scale `street`, secondary scale `object`. The most useful learning was that a neighborhood event world stays coherent when every format repeats ordinary nouns like ceramic crocks, chalk numbers, striped towels, amber jars, pennants, aprons, and warm concrete. `game-ui-frontend/SKILL.md` helped keep the HUD playfield-first instead of dashboard-like, and `documents/SKILL.md` kept the map and rulebook prompts tactile instead of flat.
- `20260425-0601-cathedral-of-manual-elevators` at `2026-04-25T06:12:27+08:00` expanded the corpus into hard-daylight alternate-history civic architecture. Primary scale `architecture`, secondary scale `page`. The most useful learning was that a public ceremonial world stays coherent when every format repeats a disciplined institutional kit: limestone, brass, iron lattice, vellum passes, oxblood rope, smoke-blue cloth, and cap-badge numerals. `documents/SKILL.md` helped keep the passport, map, and souvenir prompts artifact-first instead of drifting into flat branding or luxury retail.
- `20260425-0458-night-pollens-field-guide` at `2026-04-25T05:17:45+08:00` expanded the corpus into a page-first night-science publishing world. Primary scale `micro`, secondary scale `page`. The most useful learning was that a quiet educational branch stays specific when every format repeats the same material nouns: indigo cloth, cream paper, brass loupes, vellum envelopes, pollen gold dust, and dusty lilac botanicals. `documents/SKILL.md` helped keep the page and kit images grounded in hierarchy and artifact framing instead of flat design comps or merch packaging.
- `20260425-0357-mossbank-snail-derby-summer-picnic` at `2026-04-25T03:57:34+08:00` expanded the corpus into bright outdoor miniature sport. Primary scale `tabletop`, secondary scale `landscape`. The most useful learning was that a playful world stays specific when it repeats material nouns like moss, shell, ribbon, wicker, cotton, and berry enamel across atlas, HUD, map, packaging, comic, and documentary frames. `game-ui-frontend/SKILL.md` helped keep the HUD scene-first instead of dashboard-like, and `iconography-lab/SKILL.md` helped keep identity cues consistent across costumes and packaging.

## Explored Themes

- `20260430-0309-summer-pavement-aquarium-rental-booth` — Summer Pavement Aquarium Rental Booth. Focused on a noon curbside booth documentary, six-kit rental lineup, handled pass-and-care suite, route-and-refill board, modular sectional cutaway, dense accessory atlas, late-day return rinse scene, and silent six-panel comic continuity.
- `20260428-2133-salt-quarry-mirror-signal-foundry` — Salt Quarry Mirror-Signal Foundry. Focused on relay-tool atlases, worker lineups, noon quarry relay landscapes, handled permit suites, buildable salt-cliff sections, brine-scarred workbenches, district signal boards, and apprentice comic continuity.
- `20260428-1831-monsoon-rice-terrace-lantern-wedding` — Monsoon Rice-Terrace Lantern Wedding. Focused on a ceremonial tool atlas, multigenerational procession lineup, blue-hour flooded-terrace documentary still, feast tabletop, buildable bamboo pavilion section, handled invitation-and-route suite, preparation-room dressing bench, and a dawn aftermath recovery landscape.
- `20260428-1457-public-museum-edible-meteorites` — Public Museum of Edible Meteorites. Focused on a specimen atlas, skylit atrium, school-arrival civic facade, tasting-card suite, architectural section cutaway, conservation-bench documentary still, poster-and-wayfinding family, museum-shop packaging family, and a silent rooftop-visit comic page.
- `20260428-1528-municipal-gelato-seismology-lab` - Municipal Gelato Seismology Lab. Focused on a fault-core specimen atlas, noon public tasting hall, foldout flavor seismogram plate, civic building cross-section, survey-cart family, plaza reading shift, risograph festival poster, silent rooftop-delivery comic page, and ingredient-and-instrument board.
- `20260426-0151-cinder-bloom-eclipse-cosmetics` — Cinder Bloom Eclipse Cosmetics Launch. Focused on a dense product atlas, blue-hour counter hall, beauty lookbook lineup, packaging family review, editorial magazine spread, vanity-after-testing still life, street-facing window installation, silent launch comic page, and a tactile material-and-pigment board.
- `20260425-1913-basement-planetarium-pinball-hall` — Basement Planetarium Pinball Hall. Focused on a celestial parts atlas, opening-hour interior still, embedded playfield interface, handled score-slip paper suite, storefront section cutaway, side-art cabinet family, repair-bench labor, league-night tournament frame, and a silent closing-time comic page.
- `20260425-1430-tidal-library-broken-amusement-park-maps` — Tidal Library of Broken Amusement-Park Maps. Focused on a salt-warped map atlas, repair-bench documentary still, sea-facing reading room, seawall archive section cutaway, foldout paper suite, projection keyframe, counter family of map goods, silent recovery comic page, and a blue-hour coastal exterior.
- `20260425-1006-funeral-salon-retired-weather-balloons` — Funeral Salon for Retired Weather Balloons. Focused on a rooftop farewell landscape, balloon reliquary atlas, memorial paper suite, hilltop salon section, caretaker lineup, keepsake counter family, reservoir deflation documentary, silent comic page, and night vigil interior.
- `20260425-0902-portable-desert-opera-wardrobe-exchange` — Portable Desert Opera Wardrobe Exchange. Focused on a costume trunk atlas, performer-and-fitter lineup, program-and-alteration paper suite, temporary amphitheater cutaway, mirror-tent repair documentary still, accessory-and-stage-paint family, moonrise camp exterior, and overture comic page.
- `20260425-0801-apartment-block-fermentation-olympics` — Apartment-Block Fermentation Olympics. Focused on a fermentation equipment atlas, resident apron lineup, balcony relay HUD, building cutaway route map, rulebook-and-pennant paper suite, judges' tasting still life, rooftop finals environment, prize tote family, and stairwell championship comic page.
- `20260425-0601-cathedral-of-manual-elevators` — Cathedral of Manual Elevators Opening Week. Focused on a disciplined artifact atlas, attendant-and-pilgrim lineup, passport-and-route print suite, monumental basilica section, public queue square, cage-elevator interior documentary frame, silent ascent comic page, and coherent souvenir family.
- `20260425-0458-night-pollens-field-guide` — Pocket Field Guide to Luminous Spores and Night Pollens. Focused on specimen plates, field-guide kits, foldout atmospheric maps, sticker-and-badge sheets, pop-up paper engineering, reading-tent interiors, documentary macro sampling, and silent comic storytelling.
- `20260424-0445-materials-instrument-atlas` — Imaginary Materials & Instruments Lab. Focused on specimen atlases, expert-tool interfaces, controlled material boards, a process diagram, and an archive environment.
- `20260424-0546-tactile-service-interface-ecosystem` — Tactile Civic Service Interface Ecosystem. Focused on public-service artifacts, kiosk and wall-panel UIs, printed claim systems, process diagrams, handheld staff tools, and a civic access hall environment.
- `20260424-0647-backoffice-signage-document-logistics` — Archive Signage & Document Logistics Back Office. Focused on archive-routing artifacts, sign standards boards, back-office operations UI, transport furniture sheets, process diagrams, tray material comparisons, and a unified processing-room environment.
- `20260424-0748-intertidal-reef-microclimate-observatory` — Intertidal Reef Microclimate Observatory. Focused on coastal field-science artifacts, rugged survey UI, physical data boards, wet material comparisons, process diagrams, marine tool families, notebook systems, and a dawn shoreline field station.
- `20260424-0849-volcanic-observatory-support-system` — Volcanic Observatory Support System. Focused on ash-monitoring shelter artifacts, hazard UI, physical situation boards, ash-ready material studies, workflow tables, tool-family sheets, and a blue-hour observatory interior.
- `20260424-0952-wildfire-smoke-coordination-system` — Wildfire Smoke Coordination System. Focused on smoke-response artifact atlases, route-operations UI, physical situation boards, filter-cartridge material studies, deployment workflow tables, roadside tool sheets, shelter-adjacent command environments, and notebook-layout planning systems.
- `20260424-1052-orchard-pest-scouting-support-system` — Orchard Pest-Scouting Support System. Focused on orchard scouting atlases, handheld inspection UI, physical pressure boards, lure-hardware material studies, sample-routing workflow tables, canopy-cart tool families, tag-and-notebook systems, and a dawn scout shed environment.
- `20260424-1152-cold-chain-produce-inspection-depot` — Cold-Chain Produce Inspection Depot. Focused on refrigerated receiving atlases, rugged intake UI, physical cooler-route boards, insulated-liner material studies, quarantine-release workflow tables, depot inspection tool families, notebook-layout systems, and a blue-hour receiving environment.
- `20260424-1254-seed-bank-intake-viability-audit` — Seed-Bank Intake and Viability Audit. Focused on seed-bank accession atlases, expert viability UI, physical cold-room routing boards, preservation material studies, intake-to-retest workflow tables, freezer-and-germination tool families, ledger-layout systems, and a blue-hour seed-bank intake room.
- `20260424-1355-library-conservation-freeze-dry-recovery-lab` — Library Conservation Freeze-Dry Recovery Lab. Focused on salvage atlases, expert recovery console, physical queue boards, damp-paper material studies, crate-to-shelf workflow systems, orthographic conservation hardware, ledger-layout systems, and a blue-hour recovery lab environment.
- `20260424-1457-aquaculture-hatchery-egg-monitoring-support-system` — Aquaculture Hatchery Egg-Monitoring Support System. Focused on hatchery object atlases, incubation-monitoring UI, physical false-color routing boards, wet incubation material studies, egg-to-larval-transfer workflow tables, orthographic tool families, waterproof ledger layouts, and a blue-hour hatchery prep room.
- `20260424-1558-glacier-crevasse-survey-support-system` — Glacier Crevasse Survey Support System. Focused on glacier survey atlases, route-planning UI, physical hazard foldout boards, cold-weather material studies, survey handoff workflow tables, orthographic hardware families, field-log layouts, and a blue-hour survey shelter environment.
- `20260424-1659-greenhouse-pollination-logistics-system` — Greenhouse Pollination Logistics System. Focused on greenhouse pollination atlases, bloom-timing UI, physical zone-routing boards, humidity-and-pollen material studies, tray-to-row workflow tables, blossom-support tool families, pollination ledger layouts, and a blue-hour greenhouse staging aisle.
- `20260424-1800-museum-mount-making-prep-studio` — Museum Mount-Making Prep Studio. Focused on museum-prep atlases, an expert mount-planning console, physical routing boards, cradle material studies, object-to-case workflow tables, preparator tool-family sheets, mount logbook layouts, and a blue-hour prep studio environment.
- `20260424-1917-monsoon-parade-toy-fair` — Monsoon Parade Toy Fair. Focused on a playful anti-pattern shift into toy-catalog atlases, packaging families, family board-game surfaces, low-chrome arcade HUDs, comic storytelling, festival posters, canal-side storefronts, and a city-scale parade finale.
- `20260424-2253-cliffside-mineral-bathhouse-solstice-season` — Cliffside Mineral Bathhouse Solstice Season. Focused on ritual bath-object atlases, robe lookbooks, tiled wayfinding artifacts, invitation kits, architectural cutaways, steam-hall interiors, moonlit terraces, dessert tea service, and a handcrafted bathhouse maquette.
- `20260425-0154-subterranean-acrobatics-conservatory` — Subterranean Acrobatics Conservatory Open Rehearsal. Focused on rehearsal-apparatus atlases, apprentice costume lookbooks, cue-console UI, theatrical poster-and-ticket systems, underground architectural sections, practice kits, documentary ring interiors, and a blue-hour quarry arrival court.
- `20260425-0357-mossbank-snail-derby-summer-picnic` — Mossbank Snail Derby Summer Picnic. Focused on a racing-shell atlas, steward-and-junior-racer lineup, protected-playfield garden HUD, foldout course map suite, premium board-game surface, starter-kit packaging family, finish-line comic page, and golden-hour documentary picnic race.

## Explored Formats

- Sidewalk-to-window documentary opener where a public track and neighborhood laundromat share one frame, keeping athletics grounded in ordinary civic texture rather than stadium scale.
- Straight-on medal-and-uniform lineup proving the corpus can hold a body-centered lookbook family without luxury fashion drift.
- Dense relay-laundry contact-sheet atlas of medals, pins, detergent tools, claim tags, patched socks, and mesh bags staged as one tactile object language rather than a trophy display.
- Handled meet-program and claim-ticket paper suite photographed as worn local ephemera with tape, staple holes, chalk marks, and clipped receipts instead of flat event collateral.
- One-story laundromat section cutaway with washer rows, drying loft, medal bench, claim counter, and track edge, treating the branch as buildable neighborhood infrastructure.
- Silent six-panel rookie-repair comic page linking washing, drying, stitching, baton handoff, and return-to-track motion in one recurring daytime location.
- Dense relay-tool atlas of mirror plates, angle gauges, visor aprons, horizon flags, notebooks, tokens, and repair tins photographed as a handled quarry system rather than retail flatlay.
- Straight-on worker lineup showing six related signal uniforms with smoked visors, bleached aprons, brass tools, and sunburned labor texture instead of glamor fashion or parade posture.
- Brutal-noon quarry panorama with relay towers, flashing mirrors, dust carts, stepped salt cuts, and visible calibration work spread across one buildable industrial basin.
- Handled permit-and-manual suite with short readable public-industrial text, clipped cards, a folded sector map, and drafting-board residue instead of invitation polish or vector mockup cleanliness.
- Full salt-cliff section plate showing mirror casting, backing, storage, paperwork, lifts, and rooftop dispatch stacked into one coherent quarry complex.
- Quiet mirror-backing bench still life focused on flaking foil, scratched glass, salt bloom, resin streaks, and exhausted work residue.
- Dense district relay board combining quarry geography, noon windows, flare zones, wind lanes, and dispatch chips as a tactile analog map rather than a glowing dashboard.
- Four-panel apprentice comic proving the branch can hold repeated geography, costume continuity, and practical correction beats instead of only static worldbuilding.
- Dense museum-specimen atlas of edible meteorite slices, amber sugar shards, truffles, crumb trays, and sealed sample envelopes photographed like public-collection evidence rather than confection advertising.
- Skylit civic-museum atrium with suspended sugar-comet mobiles, circular display islands, school visitors, and broad daytime circulation proving the corpus can hold bright public educational space without drifting into mall or theme-park imagery.
- Street-facing museum facade with queue, banners, planters, and school-arrival energy, extending the branch into believable city-scale public architecture.
- Tasting-tray and classification-card suite photographed as handled museum-learning ephemera with punch tickets, sample spoons, wax-pencil marks, and short noncritical label text.
- Full architectural section cutaway of a speculative but buildable museum spanning atrium, tasting classroom, specimen vault, cafe, gift shop, and rooftop crater garden.
- Conservation-bench documentary closeup that treats the edible meteorite as a cared-for public artifact rather than a dessert plate or lab prop.
- Poster-and-wayfinding family staged as municipal museum graphics with pinned sheets, banners, folded route handouts, and taped evidence rather than digital mockups.
- Museum-shop packaging family that reads as affordable institutional goods rather than luxury confection branding or mascot merchandise.
- Silent gouache comic page about a child museum visit that keeps object language, palette, and route cues coherent across six panels.
- Dense civic dessert-science atlas of frozen core cylinders, scoop molds, basalt waffle cones, stainless spoons, syrup vials, graph-paper slips, freezer drawers, and sensor probes arranged as a coherent municipal object family.
- Noon public tasting-hall documentary still proving the branch can hold school groups, technicians, counter service, charts, windows, and institutional architecture without slipping into boutique hospitality.
- Foldout educational plate photographed as a real paper artifact with layered gelato diagrams, tremor traces, city section, spoon logic, and clipped field slips rather than a flat classroom poster.
- Detailed municipal building cross-section with tasting hall, spoon-calibration room, cold archive vault, freezer storage, rooftop deck, and tremor-pipe basement stacked into one believable civic block.
- Straight-on family review of six neighborhood survey carts that behave like a maintained municipal fleet rather than merch props or nostalgic dessert wagons.
- Hard-sun plaza documentary frame where public sampling and spoon-vibration measurement read as an ordinary city ritual rather than an event spectacle.
- Risograph civic festival poster with loud title hierarchy, graph-line radiance, building facade, strata band, and icon row strong enough to survive imperfect small-type rendering.
- Silent six-panel comic page following a junior technician from interior labor to rooftop reading, proving the branch can support sequential storytelling and worker continuity.
- Ingredient-and-instrument board translating architecture, print, and public ritual into reusable material nouns for later prompts.
- Dense eclipse-cosmetics atlas of compacts, refill pans, lip tints, perfume vials, brushes, sampler cards, lacquered cases, and foil envelopes photographed as a coherent commercial family rather than generic beauty clutter.
- Blue-hour department-store counter hall with glowing mirror niches, curved test counter, product trays, makeup artists, and browsing customers proving the branch can support inhabited premium retail space.
- Full-length beauty lookbook lineup where six coordinated figures share one mineral-night palette without turning into runway spectacle or costume fantasy.
- Premium packaging family review with rigid gift boxes, sleeves, discovery sets, inserts, seals, and ribbon closures arranged like a manufacturable SKU system.
- Editorial beauty spread treated as a photographed print artifact rather than a flat design comp, with readable text kept decorative instead of mission-critical.
- Warm vanity still life after makeup testing with residue, smudges, paper inserts, and half-finished preparation cues to keep the branch from becoming packaging-only.
- Street-facing storefront window installation with moon-disc plinths, mannequin bust, product layers, and city reflections proving the branch can scale to public display.
- Silent comic page about the final launch hour, showing that commercial beauty worlds can still support sequential storytelling when the material kit remains disciplined.
- Tactile material-and-pigment board that translates a beauty branch into reusable color, surface, and component knowledge for future prompt design.
- Dense mechanical-atlas wall of constellation score panels, comet flippers, moon bumpers, orbit lanes, ticket cups, and mini cabinet fronts photographed as working specimens rather than collector merchandise.
- Opening-hour neighborhood pinball hall interior with one modest star dome, paper slips, coin desk, stair arrival, and celestial cabinets reading as a local venue rather than a themed attraction.
- Embedded playfield HUD frame that treats score logic as physical machine surface instead of floating software chrome.
- Top-down paper suite of score sheets, maintenance tickets, stamp cards, coin sleeves, and short rules cards photographed as handled local ephemera.
- Handcrafted storefront section cutaway showing the stair entry, basement machine rows, parts cage, repair bench, and league backroom as one buildable leisure organism.
- Straight-on family review of six celestial cabinet side panels and aprons that behave like an internal machine taxonomy rather than merch packaging.
- Documentary repair bench with lifted playfield, score reel, loose flippers, solder smoke, and star-chart schematics proving the branch can sustain mechanical labor.
- Late-night league frame with chalk leaderboard, crowd clustering, and dome projection proving communal competition can live inside this branch without nightlife spectacle.
- Silent closing-time comic page that carries one player through arrival, repair handoff, final ball, and quiet street exit while preserving the same machine world.
- Dense contact-sheet atlas of salt-warped promenade maps, ride-route fragments, ticket booklets, rolled charts, brass clips, and repair tissue arranged as public archive specimens rather than tool hardware.
- Documentary repair-bench still with one practical archivist flattening a master promenade map beside sea-facing windows, drawers, and drying fragments.
- Wide public reading-room environment with map tables, hanging repairs, tall cabinets, and storm-cleared coastal views rather than generic library coziness.
- Giant seawall archive section cutaway showing intake, drying, repair, tube storage, projection, reading, and lookout rooms stacked above rough water.
- Foldout tide-route paper suite photographed as handled civic ephemera with slips, postcards, seals, and repair tissue instead of as flat digital layout.
- Motion-design keyframe of repaired maps projected onto a seawall at night for a small public audience beside surf and pier silhouettes.
- Counter family of map tubes, tide tokens, repair packets, and route envelopes staged as internal archive goods rather than glossy merch.
- Silent six-panel comic page carrying one archivist from flooded drawer through tracing, projection, and next-morning display.
- Blue-hour coastal exterior of the map library with wet promenade reflections, warm windows, ruined rides, and civic-scale public access.
- Dawn observatory rooftop farewell with patched balloons on trestles, rain capes, brass tags, and one restrained release over water.
- Reliquary-style contact-sheet atlas of balloon fragments, brass valves, altitude tags, weather gauges, mourning ribbons, and lacquered keepsake boxes.
- Memorial program, route map, condolence card, seal, and logbook suite photographed as handled ephemera on limestone.
- Hilltop observatory funeral-salon section cutaway spanning archive rooms, hanging hall, writing room, and release terrace.
- Practical caretaker lineup with rain capes, brass badges, notebook satchels, and one signal-orange release trim kept workmanlike rather than fashionable.
- Keepsake counter family of cloud boxes, brass medallions, swatch vials, enamel pins, postcards, pennants, and patch kits.
- Reservoir-edge deflation rite showing balloon-folding labor, tray-based tags and ribbons, and unsentimental shoreline weather.
- Silent watercolor comic page linking archive drawer, repair bench, stair procession, rooftop release, drifting aftermath, and paper memorial.
- Night hanging-hall vigil with suspended balloons, table lamps, archive drawers, and rainy skylight atmosphere.
- Dense civic artifact atlas of floor seals, lattice gates, gloves, queue rope, stamped passes, handbells, and brass inspection hardware.
- Museum-fashion lineup of attendants and pilgrims using keys, badges, sashes, satchels, and floor-coded garments instead of theatrical costume spectacle.
- Passport, foldout district map, queue chits, stamp cards, and etiquette notices photographed as worn public ephemera.
- Monumental public-architecture section plate built around stacked manual elevator shafts, bridges, chapels, and counterweight rooms.
- Hard-daylight civic square exterior with queue ropes, ticket kiosks, floor banners, and elevator towers rising through the surrounding city.
- Documentary cage-elevator interior that frames the cathedral void through iron lattice rather than through a grand wide establishing shot.
- Silent vertical comic page that carries one pilgrim through queue ritual, stamping, ascent, release, and city overlook.
- Museum-shop souvenir family of token tin, enamel floor badges, bell miniature, pocket guide, panorama card, and stamped postcards.
- Dense micro-science specimen plate mixing slides, spores, seed heads, vellum envelopes, and loupe hardware.
- Clothbound pocket field-guide cover set with bookmark, stamp, envelopes, checklist card, and sample pouch.
- Foldout night-meadow cross-section map that treats atmospheric drift as a paper artifact instead of a flat infographic.
- Educational sticker-and-badge sheet positioned as a publishing-world collectible rather than generic merch.
- Pop-up paper-engineering spread photographed as a book object under reading-lamp light.
- Quiet reading-tent observation corner that turns the publishing branch into an inhabitable room without becoming venue design.
- Documentary macro sampling closeup with gloved hands, black paper, glass slides, and drifting pollen.
- Silent four-panel science comic page ending in a moonlit rooftop-garden reveal.
- Dense contact-sheet specimen atlas with 30 varied vessels.
- Orthographic speculative object sheet for handheld analysis tools.
- Two expert desktop UI surfaces with different task structures.
- Controlled repeated-form material board.
- Exploded product kit sheet.
- Physical-scene process diagram.
- Wide environment concept frame.
- Dense atlas of civic-service artifacts and queue paraphernalia.
- Portrait self-service kiosk UI with ticketing, scanning, and accessibility flows.
- Wide public wall-panel routing interface for counter assignments and queue logic.
- Printed service-kit tabletop layout of forms, sleeves, tickets, and stamps.
- Orthographic sheet of handheld civic-service tools for floor staff.
- Early-morning civic hall environment with kiosks, counter islands, and document tables.
- Archive wayfinding standards board with hanging signs, icon strips, floor markers, and shelf-end plates.
- Orthographic sheet of transport carts, tray dollies, drawer inserts, and document bins.
- Controlled tray-and-sleeve material board with repeated calibration forms.
- Back-office archive processing room with cart lanes, transfer alcove, and tall shelving.
- Dense coastal field-instrument atlas mixing sensors, anchors, sleeves, vials, and calibration tools.
- Rugged reef-survey tablet UI with tide map, offline sync, transect checkpoints, and anomaly flags.
- Mixed-format shoreline atlas board with false-color contours, overlay panels, and sensor insets.
- Repeated sample-capsule material board for wet, salt-exposed marine hardware.
- Intertidal observation notebook spread with sleeves, swatches, tiny maps, and route markers.
- Dawn shoreline field-station environment with tide pools, survey racks, canopy worktables, and buoy hardware.
- Mixed-format volcanic situation board with acetate overlays, clipped sensor insets, shelter markers, and crater cross-sections.
- Repeated ash-sampler material board using ceramic, dusty glass, and rubber seal variants.
- Physical volcanic response workflow table built from trays, arrows, route cards, and sample handoff stations.
- Orthographic sheet of volcanic shelter tools and rugged hazard-support hardware.
- Blue-hour observatory shelter interior with respirator racks, map tables, rugged devices, and distant crater glow.
- Fashion-editorial lineup of six related rehearsal costumes for a fictional performance school.
- Poster-and-ticket ephemera system photographed as a disciplined theatrical print world rather than a branding deck.
- Underground limestone conservatory section with ring chamber, workshops, dormitory niches, and lift arrival.
- Compact institutional starter-kit tabletop study with chalked wear, rope fragments, and paper instruction cards.
- Documentary rehearsal ring interior with visible rigging, teachers, and open floor geometry rather than finished spectacle.
- Quarry-wall arrival court exterior with brass lift tower and students carrying practice kits at blue hour.
- Volcanic field notebook spread with sleeves, swatches, route fragments, acetate pockets, and clipped watch-post evidence.
- Dense smoke-coordination atlas of roadside sensors, filter tins, route markers, shelter signs, cases, and mounting hardware.
- Rugged route-operations tablet UI with AQI corridors, shelter occupancy, school alerts, trailer battery status, and filter inventory.
- Mixed-format smoke drift situation board built from laminated maps, acetate overlays, marker chips, and supply pockets.
- Repeated filter-cartridge material board with soot loading, translucent windows, gaskets, and ceramic prefilters.
- Physical roadside deployment workflow table using trays, route cards, bins, and shelter-supply handoff stations.
- Orthographic sheet of roadside sensor-trailer hardware, warning adapters, filter tools, and shelter-support accessories.
- Blue-hour roadside command post beside a clean-air shelter with canopy map table, supply racks, and sensor mast trailer.
- Smoke coordination notebook spread with route fragments, AQI swatches, wristbands, acetate overlays, and clipped dispatch notes.
- Dense orchard scouting atlas of traps, lure capsules, frass envelopes, row tags, tally tools, canopy mirrors, cooler hardware, and route cards.
- Rugged orchard inspection handheld UI with row maps, trap counts, fruit damage tiles, degree days, cooler status, and route tasks.
- Mixed-format orchard pressure board built from laminated block grids, trap insets, acetate overlays, severity chips, and specimen pockets.
- Repeated lure-capsule weathering board using sticky liners, translucent reservoirs, UV fade, pollen residue, and worn clip mounts.
- Physical orchard scouting workflow table using trays, fruit inspection stations, sample bags, cooler pouches, and bin-routing tokens.
- Orthographic canopy-cart tool family sheet with inspection poles, branch mirrors, cooler pods, and row-end docking accessories.
- Orchard scout notebook spread with row tags, acetate overlays, sample sleeves, wax-pencil marks, and cooler claim slips.
- Dawn orchard scout shed opening onto row lanes with staging carts, hanging traps, wash station, and cooler shelves.
- Dense cold-chain depot atlas of insulated pallet sleeves, probes, seals, sample kits, dock tools, route markers, and cooler hardware.
- Rugged refrigerated intake handheld UI with lane maps, probe readings, hold-release controls, and sample-queue modules.
- Mixed-format cooler-route situation board assembled from maps, pockets, magnets, and thermal-log printouts.
- Repeated insulated-liner and condensation-control material board using foil wraps, foam inserts, gaskets, frost, and damp corrugate.
- Physical quarantine-release workflow table using trays, sample vials, route cards, hold tags, and cooler assignment stations.
- Orthographic depot inspection tool family sheet spanning temperature, seal, triage, and sample-handling hardware.
- Cold-chain notebook spread with sleeves, tags, route fragments, temperature strips, and clipped thermal receipts.
- Blue-hour receiving depot with wet floor reflections, cooler curtains, insulated pallets, lane signage, and inspection benches.
- Dense seed-bank accession atlas of packets, cryoboxes, vials, desiccant canisters, freezer hardware, ledgers, clips, and tray inserts.
- Expert accession and viability console with freezer drawer maps, humidity monitoring, germination scheduling, duplicate sample status, and retest cards.
- Physical cold-room routing board with rack maps, clipped packets, humidity-watch zones, duplicate routes, and retest queues.
- Repeated seed-preservation material board using foil packets, waxed envelopes, cryobox lids, desiccant canisters, frost, and wear states.
- Physical intake-to-viability workflow table built from trays, cards, bins, transfer caddies, germination stations, and retest pockets.
- Orthographic family sheet of seed-bank transfer, drawer-handling, humidity, counting, and retest tools.
- Accession ledger spread with sleeves, drawer tags, humidity chips, seed-count circles, and clipped records.
- Blue-hour seed-bank intake room with stainless benches, freezer banks, route boards, packet shelves, and germination trays.
- Dense salvage artifact atlas of crates, blotters, sleeves, racks, probes, clips, and damp-paper specimens.
- Expert recovery console for chamber occupancy, intake triage, humidity watch, page-level treatment queue, and reshelving readiness.
- Physical freeze-dry queue wall board with rack maps, cycle tickets, specimen pockets, acetate overlays, and quarantine routes.
- Repeated damp-paper material board using book-block samples across buckling, frost, foxing, cloth darkening, and blotter-contact states.
- Physical crate-to-shelf recovery workflow table built from trays, arrows, cards, book blocks, carts, and treatment stations.
- Orthographic conservation tool-and-rack family sheet with cradles, chamber trays, carts, hose tools, and reboxing supports.
- Salvage intake ledger spread with sleeves, humidity chips, condition swatches, clipped evidence, and route fragments.
- Blue-hour recovery lab with freeze-dry chambers, salvage carts, humidification bench, drying racks, quarantine shelves, and reshelving prep.
- Dense hatchery object atlas of incubation jars, sieves, mesh cups, oxygen probes, pipettes, float rings, trays, manifolds, timing tags, and gelatinous egg masses.
- Portrait incubation-status console with rack maps, embryo checks, flow watch, hatch timing, alarm lanes, and transfer readiness.
- Physical false-color hatch-routing board with tank maps, overlays, clipped sample insets, batch pockets, route arrows, and water-quality tokens.
- Repeated egg-tray material board using cups, mesh baskets, foam rings, tubing, shell fragments, and damp labels across wear and residue states.
- Physical egg-to-larval-transfer workflow table built from trays, probes, baskets, route cards, and sanitizer checkpoints.
- Orthographic hatchery tool family sheet spanning inspection lights, scoops, nets, pipettes, tubing controls, and tray hardware.
- Waterproof hatch ledger spread with laminated batch cards, status chips, sleeves, timing wheels, and clipped photo insets.
- Blue-hour hatchery prep room with incubation racks, glowing tanks, wet benches, tubing manifolds, route boards, and transfer bins.
- Dense glacier survey atlas of probes, route wands, anchor plates, sample tubes, rope bags, radar modules, flags, and insulated field wraps.
- Expert route-planning console with crevasse corridors, checkpoint cards, rope-team chips, thermal drift warnings, and weather-window timelines.
- Physical crevasse hazard foldout board assembled from laminated route maps, acetate overlays, depth strips, route chips, and clipped inspection cards.
- Repeated cold-resistant material board using rope sleeves, probe grips, anchor caps, map-case corners, frost, and closure hardware.
- Physical crevasse survey handoff workflow table built from trays, ropes, route sleeves, thermal print fragments, timers, and return-log pockets.
- Orthographic glacier survey hardware family sheet spanning probe modules, radar sled parts, anchor plates, insulated battery pods, and field cases.
- Glacier field logbook spread with route fragments, snow-density swatches, acetate sleeves, checkpoint tags, and clipped thermal strips.
- Blue-hour glacier survey shelter with route tables, rope hooks, radar sled modules, map overlays, drying gear, and a pale glacier backdrop.
- Dense greenhouse pollination atlas of pollen vials, blossom sleeves, bloom tags, route chips, support rings, timing wheels, mist nozzles, tray handles, and laminated task cards.
- Expert bloom-timing console with greenhouse maps, bloom density heat fields, humidity watch, tray queues, route chip lanes, cart docks, and pollen readiness cards.
- Physical greenhouse routing board assembled from laminated zone maps, acetate overlays, blossom density chips, timing arcs, tray cards, and hanging pockets.
- Repeated pollen capsule material board using translucent cups, mesh sleeves, silicone collars, support rings, brush heads, condensation, and powder residue.
- Physical tray-to-row pollination workflow table built from trays, sleeves, route cards, timer clips, quality-check pockets, and return-log stations.
- Orthographic blossom-support tool family sheet spanning pollination wands, sleeve applicators, mist nozzles, tray handles, clip-on timers, docks, and carrying modules.
- Pollination ledger notebook spread with route fragments, humidity swatches, bloom-count stickers, sleeves, timing references, and clipped dispatch slips.
- Blue-hour greenhouse staging aisle with benches, route boards, hanging sleeves, carts, tool docks, and humid crop rows kept secondary.
- Dense museum mount-making atlas of foam cradles, felt saddles, brass rods, acrylic risers, Tyvek tags, case-map chips, route cards, and bench tools.
- Expert mount-planning operations console with object silhouettes, support geometry cards, bend-angle queues, tray routes, fit-check states, and install readiness.
- Physical mount-routing foldout board assembled from laminated case maps, silhouette cards, acetate overlays, revision tabs, and padded tray staging strips.
- Repeated cradle material board using ethafoam, felt, acrylic feet, silicone bumpers, brass tabs, linen wraps, and archival tissue across wear states.
- Physical object-to-case workflow table built from measurement tools, foam blanks, bend jigs, fit-check cradles, route cards, and install tokens.
- Orthographic preparator bench tool family sheet spanning support-bending jigs, cradle clamps, rod-foot blocks, riser adapters, and tray-docking accessories.
- Mount logbook spread with contour sketches, fit-check notes, material swatches, tray tags, and clipped revision evidence.
- Blue-hour museum prep studio with long benches, foam-cutting stations, padded carts, case-map boards, rod-bending jigs, and half-finished support cradles.
- Toy-catalog atlas of handcrafted weather toys, tickets, whistles, bead charms, lantern koi, ribbon batons, and parade pennants.
- Retail packaging family review with boxed toys, blister packs, die-cut windows, foil accents, and repeated icon cues.
- Family board-game tabletop spread with route board, pass tickets, event cards, spinner, tokens, and visible game box.
- Compact arcade racing HUD that preserves the playfield while keeping a themed speed cluster, lap strip, and transient boost prompt.
- Vertical comic page with rain-soaked festival storytelling and a wide payoff panel.
- Vertical festival poster with short decorative title text, tactile print wear, and icon-driven border motifs.
- Canal-side toy pop-up storefront with merchandising, prize counter, awnings, and wet-street threshold view.
- City-scale monsoon parade finale with lantern koi floats, dancers in shallow water, umbrellas, crowds, and reflective canal light.
- Dense ritual-bath atlas of basins, ladles, towels, brass tokens, salt jars, brushes, burners, and soap dishes on stone.
- Quiet robe lookbook lineup with six related bathhouse garments, cords, sandals, and mineral-bead accessories.
- Tiled cliffside bathhouse mosaic guide with brass route studs, tassel markers, and decorative short text.
- Invitation and access-kit flat lay with stitched program booklet, brass entry tokens, wax seals, robe bands, and herb sachet.
- Wide architectural section cutaway of a cliffside bathhouse with stacked pools, steam rooms, terraces, and wave-level salt chambers.
- Cedar steam-hall interior with stone benches, folded indigo towels, damp plaster, lantern glow, and screened plunge-pool glimpses.
- Moonlit bathhouse exterior with lantern stairways, glowing terraces, robe-clad guests, and waves below.
- Cooling dessert and herbal tea service tabletop with poached pears, translucent jellies, brass tea pot, and stone-slab staging.
- Handcrafted bathhouse maquette study with plaster, cork, basswood, acetate water, and surrounding material swatches.
- Dense miniature-sports atlas of decorated shells, pit tools, lane markers, pennants, trophies, and cloth accessories.
- Daylight community-sports fashion lineup with officiating smocks, straw visors, ribbon sashes, and shell medals.
- Low-chrome browser-game race HUD that keeps the miniature racecourse dominant and pushes status chips to the frame edge.
- Foldout event map and picnic paper suite photographed as tactile ephemera instead of a flat infographic poster.
- Premium outdoor board-game surface with active play, handcrafted components, and dappled real-world light.
- Youth-facing starter-kit packaging family that feels collectible without slipping into generic toy merchandising.
- Six-panel finish-line comic page carrying the same material world as the object, print, and documentary images.
- Golden-hour documentary sports frame proving the miniature premise can read like a local event rather than a joke.

## Useful Prompt Patterns

- Dry industrial branches stay coherent when one severe material kit repeats across cliffs, uniforms, cards, tools, and boards: chalk white, mirror silver, smoked glass, oxidized brass, bleached canvas, faded indigo, timber, and salt crust were enough for this run.
- Analog communication prompts become more useful when relay logic appears through angle cards, tower spacing, shade cloth, maintenance tools, and route paperwork instead of through fantasy light effects alone.
- Short readable text works best in paper and map artifacts when the support surface remains the main composition and the text stays decorative rather than exhaustive.
- For ceremonial agricultural worlds, repeat one weather-and-material kit across every format: indigo rain cloth, saffron paste, wet bamboo, brass bells, terracotta, and cream paper kept the wedding run coherent without relying on logos or text.
- For ritual prompts, require setup, carrying, tying, drying, cooking, or recovery labor in most frames; otherwise the branch drifts into generic glamour, tourism, or pure spectacle.
- For invitation and paper prompts inside broader worldbuilding runs, treat the output as handled route ephemera with stains, clips, folds, and secondary text marks rather than as pristine stationery comps.
- For low-tech leisure systems, repeat one disciplined machine kit across every format: midnight blue enamel, cream paint, chrome rails, smoked acrylic, amber bulbs, pale cyan star maps, paper score slips, and cherry red buttons kept this run coherent.
- For arcade and play prompts, explicitly describe the venue as neighborhood-scale, mechanical, and slightly handmade; otherwise the image drifts toward casino polish, nightclub lighting, collector-showroom nostalgia, or esports spectacle.
- For game-adjacent interface prompts, require one compact score cluster and one narrow secondary strip so the playfield stays dominant and the result reads like hardware, not a SaaS dashboard.
- For paper ephemera in entertainment worlds, describe them as handled local paperwork with stamps, folds, penciled scores, and worn counters; otherwise the branch slips into polished collateral or invitation design.
- For cabinet-family prompts, ask for internal identity cues and hand-painted side art while explicitly banning copyrighted references, toy-packaging gloss, and generic space-shooter poster art.
- For page-first cartographic worlds, repeat one restrained seaside paper kit across every format: sea-glass teal, faded coral, cream paper, brass clips, driftwood, salt crust, tide stains, and rippled glass kept this run coherent.
- For map and paper outputs, frame them as photographed public ephemera with folds, clips, repair tissue, and shallow shadows; otherwise the branch drifts into flat layout comps or stationery polish.
- For damaged-amusement prompts, explicitly ban mascots, candy branding, souvenir kitsch, and active theme-park spectacle or the world stops feeling archival and public.
- For archive rooms, call the spaces public, serviceable, and sea-facing; otherwise the model drifts toward cozy bookstores, haunted archives, or grand museum halls.
- For projection prompts, treat the image as one frozen public keyframe with damp stone, seated viewers, and physical projector hardware so it stays grounded instead of becoming a rave or hologram show.
- For comic-page recovery stories, keep the worker practical and the storytelling tool-and-paper driven; otherwise the sequence slips into melodrama, fantasy magic, or cute illustrated nostalgia.
- For ceremonial weather worlds, repeat one restrained symbolic kit across every format: patched translucent latex, brass valves, altitude tags, black ribbons, indigo coats, memorial paper, and one faded signal-orange accent kept this run coherent.
- For weather-balloon mourning scenes, explicitly ban party balloons, hot-air-balloon nostalgia, military-funeral language, disaster spectacle, and sci-fi launchpad cues or the branch loses its institutional tone.
- For memorial paper outputs, treat them as handled ephemera with folds, wax seals, route fragments, and softened edges on stone or wood; otherwise the image drifts into wedding stationery or clean invitation branding.
- For institutional lineups, say the subjects are caretakers and workers, not performers or models, and explicitly ban runway glam, superhero silhouettes, and beauty retouching.
- For hanging-hall interiors and sections, call the architecture serviceable, archive-heavy, and labor-bound; otherwise the model drifts toward cathedral grandeur, haunted-museum mood, or fantasy ritual.
- For traveling performance worlds, repeat one portable costume kit across every format: canvas trunks, brass claim tags, gauze veils, mirror bulbs, rug paths, lanterns, stage boards, and one restrained aubergine-teal palette kept this branch coherent without needing logos or long copy.
- For costume lineups, explicitly ban runway glam, superhero silhouettes, crowns, cosplay armor, and luxury campaign polish or the wardrobe will lose its workmanlike caravan logic.
- For theatrical paper prompts, frame the output as handled backstage ephemera with clips, folds, swatches, and wax seals on wood or stone rather than as a poster comp or clean invitation mockup.
- For stage cutaways, say the structure is temporary and serviceable, the wardrobe exchange must visibly share space with the performance venue, and people are only scale markers; otherwise the model drifts into palace fantasy or event spectacle.
- For moonlit caravan exteriors, ban luxury glamping, blockbuster fireworks, fantasy skyline silhouettes, and sci-fi camp tech to keep the night branch intimate and believable.
- For domestic-sport worlds, repeat ordinary household materials across every format: ceramic crocks, chalk numbers, striped towels, amber jars, aprons, pennants, and warm concrete kept this run coherent without needing logos or mascots.
- For food-adjacent public worlds, explicitly ban restaurant glamour, rustic farmhouse nostalgia, gourmet gift-box polish, and luxury rooftop-party cues or the branch will lose its neighborhood specificity.
- For playful public-event HUDs, describe the playfield first and keep the interface to compact edge clusters; `game-ui-frontend/SKILL.md` guidance prevented the fermentation relay scene from turning into a dashboard.
- For alternate-history civic worlds, repeat one institutional material kit across every prompt: limestone, brass, iron lattice, vellum tickets, oxblood rope, smoke-blue wool, and stamped seals made this run coherent.
- For ceremonial architecture, explicitly ban steampunk overload, fantasy relic symbolism, gothic-horror mood, and theme-park crowding or the model will drift away from believable public ritual.
- For giant cutaways, say that architecture is the star, human figures are secondary scale markers, and the hierarchy must read cleanly from foundation to tower.
- For passport, map, and souvenir prompts, frame the output as worn public ephemera or institutional merchandise photographed on stone rather than flat graphic comps or luxury product shots.
- For micro-to-page science runs, repeat a small artifact vocabulary like indigo cloth, cream paper, brass loupes, vellum envelopes, pollen dust, and one botanical accent across every format so the world holds together without needing logos or long copy.
- For educational print images, frame the output as a photographed artifact on a table or under a lamp instead of asking for a flat layout comp; the paper edges, clips, folds, and shadows make the result far more browsable.
- For quiet child-facing science worlds, explicitly ban spellbook, astrology-kit, mascot-merch, and fairy-light excess so the model stays in observational publishing rather than fantasy gifting.
Seed patterns for early runs:

- Dense visual encyclopedia plate with 24 to 50 small objects, clean spacing, no labels unless needed.
- Split UI research board showing several interface states for one fictional tool.
- Material and lighting atlas with repeated object forms under controlled style changes.
- 3D product family sheet with consistent camera angle and varied surface finish.
- Diagrammatic scene that explains a process visually without relying on lots of text.
- Editorial diptych contrasting two visual worlds around one shared structure.
- For dense atlas plates, specify object count, background tone, spacing rigor, and a small set of material families so density stays readable.
- For expert UIs, describe task modules and information density explicitly to avoid generic consumer SaaS layouts.
- For material studies, repeat one calibration object across many finishes and ask the lighting to reveal surface behavior.
- For explanatory images, frame the diagram as a physical tabletop or wall system with trays, arrows, and stations instead of asking for abstract infographic shapes alone.
- For public-service ecosystems, name operational artifacts like tickets, claim slips, scanners, accessibility controls, and privacy sleeves so the images stay specific and non-generic.
- For printed systems, emphasize paper types, stamp hardware, sleeves, receipt stock, and folding formats instead of asking for typography-heavy layouts.
- For civic hardware, describe durable municipal materials and maintenance-friendly shapes to avoid drifting into sleek consumer electronics.
- For signage systems, frame the output as a physical standards board with real mounting hardware and rely on arrows, pictograms, and numbering blocks more than readable copy.
- For archive back-office worlds, repeat nouns like trays, shelf assignment, seal stations, transfer alcoves, cart lanes, and drawer inserts across prompts so every format stays in one operating system.
- For furniture sheets, explicitly ban readable labels, dimension lines, and blueprint callouts or the model will drift into a text-heavy spec board.
- For field-science worlds, combine hard sensors with soft supports like sleeves, gloves, trays, tethers, swatches, and route markers so the ecosystem feels lived-in.
- For data-heavy coastal images, frame them as laminated expedition boards with taped insets and transparent overlays rather than flat infographic posters.
- For rugged UIs, mention offline sync, transects, anomaly flags, compass heading, and wet bezel cues so the surface stays operational instead of generic.
- For notebook-layout studies, let sleeves, swatches, small maps, and translucent tabs carry the structure instead of relying on readable copy.
- For shoreline environments, explicitly subordinate people to field infrastructure so the scene reads as an operating system, not travel photography.
- For volcanic observatory worlds, anchor prompts in shelters, route closures, respirator hardware, ash canisters, gas readings, and clipped evidence rather than eruption spectacle.
- For hazard UIs, name route status, shelter occupancy, particulate and sulfur readings, camera thumbnails, and field check-ins so the layout stays operational.
- For volcanic data-heavy images, describe physical wall boards with acetate overlays, marker tokens, and sample pockets instead of flat posters.
- For volcanic material studies, repeat sealed capsules and filter assemblies so dust, sulfur staining, and ceramic plus rubber combinations carry the differences.
- For observatory interiors, keep the crater outside as a secondary light source while the room's infrastructure remains the main subject.
- For wildfire smoke worlds, anchor prompts in AQI corridors, roadside sensor trailers, school alerts, clean-air shelters, filter swaps, and route staging instead of active-fire tactics.
- For smoke UIs, pair map exposure zones with trailer battery status, shelter occupancy, filter inventory, and dispatch queues so the layout stays operational instead of generic climate-tech.
- For smoke situation boards, describe laminated maps, acetate overlays, shelter magnets, route arrows, school alert packets, and supply pockets instead of flat warning posters.
- For smoke environments, keep the fire distant and atmospheric while shelter lights, command trailers, canopy tables, and roadside staging remain the main subjects.
- For orchard systems, anchor prompts in traps, lure replacement, row blocks, fruit damage, cooler routing, and canopy carts rather than in harvest or lifestyle imagery.
- For agricultural UIs, use row maps, trap counts, degree days, fruit thumbnails, and route tasks so the screen reads as field operations instead of generic agritech SaaS.
- For orchard boards, describe laminated block grids, acetate overlays, sector chips, specimen pockets, and route arrows instead of chart posters.
- For orchard environments, put staging hardware, bins, carts, wash stations, and hanging traps in the foreground while tree rows provide repeating structure behind them.
- For cold-chain logistics, anchor prompts in receiving docks, cooler zones, probe checks, seal verification, condensation risk, sample pulls, and hold-release routing instead of food merchandising or warehouse-generic imagery.
- For refrigerated material studies, repeat liners, foil wraps, foam inserts, gaskets, frost states, and damp corrugate so moisture behavior becomes the subject rather than a generic package board.
- For depot boards, describe maps, magnetic route chips, vinyl pockets, clipped thermal traces, and hold-release tags so the output stays tactile and operational.
- For cold-chain environments, keep wet floors, cooler curtains, staging pallets, inspection benches, and route signage in the foreground while trucks remain secondary.
- For seed-bank systems, anchor prompts in accession packets, freezer drawers, cryoboxes, desiccant checks, humidity watch, duplicate storage, and germination retests instead of generic lab or biotech imagery.
- For storage UIs, name drawer maps, occupancy matrices, humidity strips, retest queues, and packet-condition modules so the interface stays operational rather than drifting into analytics SaaS.
- For seed-bank boards, describe clipped packets, route cards, rack maps, watch zones, pocketed specimens, and transfer lanes instead of poster-like charts.
- For seed-archive environments, foreground benches, packets, trays, freezer banks, and route boards while keeping the room calm, institutional, and materially cold.
- For library conservation worlds, anchor prompts in wet crates, blotters, freeze-dry chambers, humidity sleeves, mold isolation, book cradles, and reshelving routes instead of generic rare-book imagery.
- Recovery UIs stay specific when they track chamber occupancy, crate intake, humidity watch, page-level treatment queues, and shelf-return readiness instead of generic document management.
- Physical recovery boards work best when they include rack maps, chamber tickets, clipped specimen pages, acetate overlays, quarantine pockets, and route strips.
- Conservation environments improve when chambers, carts, racks, and task-lit benches dominate the frame while damage remains implied through materials rather than disaster spectacle.
- For hatchery worlds, anchor prompts in incubation jars, oxygen lines, hatch baskets, embryo checks, salinity strips, tubing manifolds, and larval transfer bins instead of generic aquaculture or aquarium language.
- Hatchery data-like images stay specific when they use batch pockets, clipped sample photos, false-color chips, route tabs, and wet-room overlays rather than flat posters.
- For playful miniature-sports worlds, repeat a small material kit like moss, shell, ribbon, wicker, cotton, chalk, and berry enamel across every format so the world feels coherent rather than random-cute.
- For bright whimsical runs, explicitly ban mascot-cartooning, toy-aisle clutter, casino polish, and glossy plastic so the result stays tactile and browsable.
- For game HUD prompts in playful settings, define the race scene first and push status chips, prompts, and maps to the periphery so the playfield remains readable.
- For map-and-paper suites, use icons, paths, tickets, and tokens to convey function and keep readable text short and non-critical.
- For youth-facing packaging, ask for handcrafted community-event charm and limit foil or gloss so the image avoids both discount merch and luxury perfume drift.

## Avoid List

- Do not follow this immediately with another quarry branch, another mirror-relay world, or another white-mineral industrial basin.
- Do not let future analog communication prompts drift into steampunk ornament, sci-fi laser spectacle, heroic military signaling, or tourist-industrial nostalgia.
- Do not overclean dry industrial paper suites, map boards, or workbenches; residue, wear, and shade matter as much as the objects themselves.
- Do not immediately repeat weddings, brides, or lantern processions now that this branch has landed cleanly.
- Do not let ceremonial fashion prompts drift into luxury bridal campaigns, couture fantasy, or palace-architecture spectacle.
- Do not let communal food prompts become fine-dining still lifes, hotel buffet scenes, or premium wedding-industry styling.
- Do not let civic-ritual architecture drift into steampunk gadgetry, occult cathedral fantasy, perfume-ad souvenir styling, or event-venue hero-shot repetition.
- Do not default back to enclosed venues, blue-hour interiors, or operational back-room systems on the next run unless the format shift is strong enough to justify it.
- Avoid readable-text dependence in uniforms, packaging, and maps; short decorative text is safer than content-bearing text.
- Avoid turning playful premises into mascot worlds, theme-park spectacle, or novelty-joke compositions.

## Next-Run Seeds

- Legal Herbarium of Counterfeit Coins with specimen leaves, evidence folios, and drawer stains.
- Winter Greenhouse Calligraphy Regatta with fogged panes, ink-stained gloves, and canal-course banners.
- Rooftop Astronomy Picnic Club with blanket maps, thermos kits, and quiet public-night teaching boards.
- A salt-flat ceramic repair yard with kiln carts, crack-mapping slips, aprons, shade rigs, and dust-bloomed storage sheds.
- A dry-season canal signal workshop built from flags, pulleys, painted boards, ladder racks, and maintenance logbooks.
- An abstract monsoon-to-dry-season transition atlas using tools, fabrics, soil samples, route markers, and sound-making devices instead of people.
- A quarry school of monument repair with crane tags, chalk lines, plaster studies, scaffold courts, and route cards.
- A counterfeit-coin herbarium where legal evidence boxes, pressed leaves, magnifiers, and clerk tools share one paper-and-metal vocabulary.
- A bright public tide observatory with harbor charts, flood markers, classroom kits, and civic wave-machine interiors.
- A civic folk-sport world at street scale with improvised jury stands, kites, banners, and rule cards.
- A micro-to-world scientific picture book built from spores, seeds, minerals, or coral structures.
- A bright daylight publishing run focused on sticker sheets, field-guide covers, and educational plates.
- Hatchery material studies work best when they repeat translucent cups, mesh baskets, foam rings, damp labels, shell residue, and gel clusters so moisture behavior becomes the subject.
- Hatchery document layouts improve when they foreground waterproof paper, laminated cards, sleeves, timing wheels, and clipped references rather than branded print design.
- For glacier survey worlds, anchor prompts in snow-bridge checks, route wands, probe bundles, anchor plates, radar sweeps, battery warmers, and shelter logging instead of generic alpine expedition language.
- Glacier survey UIs stay specific when they track crevasse corridors, stake positions, snow-density logs, rope-team status, thermal drift, and weather windows rather than generic expedition dashboards.
- Glacier boards work best when described as foldout laminated map systems with acetate overlays, depth strips, route chips, and clipped inspection cards instead of flat hazard posters.
- Cold-weather material studies improve when they repeat rope sleeves, probe grips, anchor caps, and map-case corners so frost behavior and substrate contrast become the subject.
- Glacier shelter environments stay believable when route tables, rope hooks, sled modules, clipped maps, and drying gear dominate while the outside glacier remains secondary.
- For greenhouse pollination worlds, anchor prompts in bloom windows, pollen batches, humidity watch, blossom sleeves, support rings, cart docks, route chips, and tray handoffs instead of generic greenhouse or floral language.
- Greenhouse UIs stay specific when they track row-by-row bloom readiness, pollen batch status, humidity drift, cart staging, team routes, and sleeve inventory rather than generic agritech analytics.
- Greenhouse boards work best when described as laminated zone maps with acetate overlays, clipped tray cards, timing arcs, blossom density chips, and hanging pockets instead of flat posters.
- Pollination material studies improve when they repeat translucent cups, mesh sleeves, silicone collars, brush heads, and condensation so humidity and powder transfer become the subject.
- Greenhouse environments stay believable when benches, carts, task lights, hanging sleeves, and route boards dominate while plant rows remain secondary.
- For museum mount-making worlds, anchor prompts in ethafoam cradles, felt saddles, acrylic feet, brass rods, Tyvek tags, case maps, fit checks, and padded trays instead of generic museum or gallery language.
- Mount-planning UIs stay specific when they track object silhouettes, support geometry, bend-angle queues, tray routes, bench assignments, and install-day readiness rather than generic collection-management screens.
- Mount-routing boards work best when described as laminated case maps with acetate overlays, silhouette cards, revision tabs, queue strips, and support tokens instead of flat museum diagrams.
- Mount material studies improve when they repeat one cradle geometry across foam, felt, acrylic, brass, silicone, and tissue variants so fit surfaces and edge finish become the subject.
- Prep-studio environments stay believable when benches, carts, foam dust, taped diagrams, and half-finished supports dominate while public gallery cues stay absent.
- Consumer-world runs stay specific when 5 to 7 recurring motifs travel across all formats: a compact icon system is stronger than inventing new symbols in every image.
- Packaging prompts hold together when they name cardboard form factors, blister packs, die-cut windows, ribbon handles, foil accents, and line-review staging instead of generic cute branding.
- Board-game prompts become richer when they specify board routes, tokens, event cards, ticket shapes, spinner hardware, and the opened box, making the image both a product shot and a rules-world artifact.
- Game HUD prompts improve when they explicitly protect the center playfield and constrain the persistent interface to one primary cluster plus one transient prompt.
- Poster and comic prompts can use short decorative text as long as the image remains understandable without perfect legibility.
- Quiet hospitality worlds hold together when 5 to 7 recurring motifs travel across objects, garments, print, food, and architecture: indigo cloth, cedar slats, brass tokens, limestone, tiled pool edges, pale steam, and lantern glow.
- Bathhouse prompts stay specific when they name robe bands, locker tokens, stitched booklets, route studs, poached pears, and cedar screens instead of vague spa or wellness language.
- Hospitality cutaways work best when framed as architectural plates or maquette-informed studies rather than glossy hotel brochures.
- Food-service images remain in-world when the vessels, linens, stone, and palette echo the architecture and garments instead of shifting into standalone restaurant advertising.
- Performance-school worlds hold together when training nouns repeat across every format: chalk dust, rope geometry, lantern cues, oxblood velvet, cobalt tape, limestone, and brass hardware kept this run coherent.
- Acrobatics prompts stay specific when they name rehearsal artifacts like rosin tins, cue lamps, lift timing, ring maps, rigging lofts, and ankle wraps instead of vague circus spectacle.
- Theatrical UIs improve when a central ring or stage map anchors the layout and side modules handle cues, safety checks, and rotations instead of full-screen management tables.
- Performance print systems work best when framed as institutional poster, ticket, and program artifacts rather than vintage circus broadsides or glossy entertainment ads.
- Underground performance architecture reads best when circulation, workshops, dormitory niches, and arrival thresholds are visible alongside the dramatic chamber.

## Avoid List

- Do not repeatedly make only posters.
- Do not rely on generic gradient backgrounds.
- Do not make all outputs the same aspect ratio in a run unless the theme requires it.
- Do not overuse vague words like futuristic, cinematic, beautiful, or premium without concrete visual constraints.
- Do not use exact living-artist style imitation.
- Do not leave UI prompts underspecified; they drift toward generic dashboards when the workflow objects are not named.
- Do not depend on legible in-image text for explanation outside of intentional UI tests.
- Do not let civic-interface prompts collapse into fintech checkout flows or enterprise analytics dashboards.
- Do not let print-layout prompts become wedding stationery or branding systems.
- Do not make public infrastructure look like flashy sci-fi holograms when the goal is believable service hardware.
- Do not let signage prompts drift into corporate identity boards when the goal is operational wayfinding.
- Do not let object sheets become blueprint-label dumps unless the run explicitly wants text-heavy specs.
- Do not treat archive back rooms like empty museum galleries; keep transfer hardware, tray clutter, and routing surfaces present.
- Do not let ecology prompts drift into aquarium gift-shop styling or glossy nature-brand packaging.
- Do not let coastal environments collapse into tourism imagery; keep workstations, trays, sensors, and route markers visible.
- Do not let marine hardware drift into luxury dive gear or militarized equipment language when the goal is scientific field gear.
- Do not let map and data boards flatten into classroom posters; keep overlays, contour logic, and physical panel assembly explicit.
- Do not let volcanic prompts collapse into disaster-movie spectacle, apocalyptic crowds, or tourism vistas.
- Do not let observatory hardware drift into military, tactical, or survivalist gear language.
- Do not let shelter interiors turn into sci-fi bunkers or sleek command centers.
- Do not let wildfire prompts collapse into firefighter hero scenes, tanker-aircraft spectacle, or visible flame fronts as the main subject.
- Do not let smoke-coordination UIs drift into climate-tech SaaS, generic weather apps, or corporate alert dashboards.
- Do not make clean-air shelter worlds look like disaster camps, tactical staging, or military operations.
- Do not let orchard prompts drift into harvest-festival decor, winery branding, rural nostalgia, or cute farm-market packaging.
- Do not let orchard equipment become tactical gear, camping gear, or generic drones unless a run explicitly needs them.
- Do not let agritech prompts flatten into clean white dashboards or classroom posters when the goal is tactile field infrastructure.
- Do not let cold-chain prompts drift into grocery-store aisles, premium food styling, or clean retail merchandising.
- Do not let depot UIs drift into inventory SaaS, white startup admin panels, or e-commerce operations screens.
- Do not over-sterilize depot imagery into pristine lab scenes; keep damp logistics texture, pallets, seals, and staging hardware present.
- Do not let seed-bank prompts drift into boutique apothecary packaging, premium stationery, or cosmetic flat-lay styling.
- Do not let seed-storage UIs collapse into biotech marketing dashboards or generic admin panels.
- Do not make seed-bank boards look like classroom science posters; keep clipped packets, pockets, routes, and drawer logic visible.
- Do not push seed-bank environments into sci-fi clean rooms or hospital wards; keep archive benches, freezer banks, and material clutter present.
- Do not let library conservation prompts drift into cozy reading-room nostalgia, premium stationery, or antiquarian merchandise photography.
- Do not let freeze-dry recovery labs collapse into hospital wards, biotech clean rooms, or sci-fi sterilized interiors.
- Do not let conservation UIs become generic document-management dashboards or compliance software.
- Do not let salvage ledger spreads turn into scrapbook craft layouts or wedding-stationery compositions.
- Do not let hatchery prompts drift into seafood service, aquarium tourism, or generic marine-brand imagery.
- Do not let hatchery UIs collapse into analytics dashboards, wellness apps, or biotech-monitoring software.
- Do not over-sterilize hatchery rooms into sci-fi wet labs; keep damp benches, tubing clutter, trays, and route tools visible.
- Do not let hatchery document layouts become scrapbook craft boards or branded collateral.
- Do not let glacier prompts drift into ski tourism, summit-poster heroics, or branded outdoor-catalog styling.
- Do not let glacier survey hardware become tactical rescue gear, military hardware, or glossy camping-product ads when the goal is route-assurance infrastructure.
- Do not let glacier shelters read like luxury alpine cabins, sci-fi bunkers, or disaster-movie staging areas.
- Do not let greenhouse pollination prompts drift into flower-shop romance, bouquet styling, wedding-venue greenhouse imagery, or decorative botanical photography.
- Do not let greenhouse UIs collapse into climate-tech SaaS, clean agritech dashboards, or wellness-app control panels.
- Do not let pollination material studies turn into cosmetic packaging or premium skincare flat lays.
- Do not let greenhouse environments become luxury architecture photography, pristine lifestyle scenes, or sci-fi plant labs.
- Do not let museum mount-making prompts drift into luxury gallery branding, jewelry-display styling, pristine exhibition glamour, or boutique-object photography.
- Do not let mount-planning UIs collapse into collection-management databases, generic asset trackers, or museum CMS dashboards.
- Do not let mount logbooks or paperwork turn into premium stationery, art-book spreads, or scrapbook craft layouts.
- Do not let prep studios read like public galleries, white-box showrooms, or theatrical installation reveals; keep bench clutter and fabrication evidence present.
- Do not let playful consumer prompts drift into existing toy-brand mimicry, mascot-franchise lookalikes, holiday-store cliches, or generic theme-park merch.
- Do not flatten playful worlds into pure cute-icon vector art; keep tactile print wear, cardboard, lacquer, wet stone, and rain light present.
- Do not let poster-led runs become tourism postcards, decorative travel art, or souvenir-shop nostalgia when the goal is a fully inhabited fictional public world.
- Do not let game HUD prompts revert to admin-panel composition or cover the lower-middle playfield with boxed chrome.
- Do not let bathhouse prompts drift into tropical resort marketing, wedding stationery, perfume campaigns, or wellness-brand minimalism.
- Do not overdecorate hospitality runs with candles, petals, and luxury cosmetics props when stone, steam, cloth, and brass already carry the mood.
- Do not turn quiet hospitality architecture into fantasy palaces, giant resort towers, or futuristic wellness megastructures.
- Do not let robe and textile prompts become runway glamour or swimwear catalog imagery.
- Do not let performance-world prompts drift into circus kitsch, carnival nostalgia, Broadway-tourist marketing, or franchise-like show branding.
- Do not let acrobat costume prompts become superhero uniforms, burlesque wardrobes, sequined spectacle, or glossy runway styling.
- Do not let underground rehearsal spaces read like horror catacombs, fantasy dungeons, or steampunk megacities.
- Do not let practice-kit product shots become merch-table styling, cosplay prop photography, or subscription-box packaging.

## Next Run Seeds

- Interface atlas for imaginary expert tools: map room, prompt lab, materials browser, signal dashboard.
- 3D material boards: glass, soft plastic, clay, anodized metal, ceramic, paper pulp, translucent resin.
- Visual dictionary of impossible instruments, machines, furniture, containers, or wearables.
- Educational diagrams that explain abstract systems using physical scenes.
- Contact sheets of layout systems: dense dashboards, editorial grids, tabletop catalogs, museum labels, exploded views.
- Repair and deepen the materials lab theme with a smaller follow-up run focused on drawer interiors, cart systems, and specimen storage furniture.
- Build a run around tactile service interfaces: kiosk, console, wall panel, handheld, and printout living in one operational ecosystem.
- Try a pure encyclopedia run of tools or containers with stricter silhouette families and more unusual substrate combinations.
- Follow the civic service world into back-office processing rooms, storage carts, drawer inserts, and counter hardware.
- Build a signage and iconography run for multilingual public-service systems, keeping text secondary to symbols and layout.
- Explore a more document-heavy run around mailers, envelopes, seals, trays, bins, and transport carts.
- Push deeper into storage micro-architecture: drawer interiors, shelf-end indexing, cart docking, and bin nests.
- Explore a mailroom-transfer chain with sealed crates, chute hardware, conveyor handoff boards, and receiving-room consoles.
- Build a reading-room support-system run around call slips, retrieval markers, privacy partitions, desk tools, and lamp/sign combinations.
- Explore river-restoration measurement systems with bank-side shelters, sediment trays, handheld consoles, and current-flow boards.
- Explore urban heat shelter logistics with cooling buses, refill stations, shade rigs, and route boards.
- Explore river restoration field-measurement systems with bank-side shelters, current sensors, sediment trays, and route boards.
- Build a hospital sterile-supply turnaround system around cart staging, wrap integrity, decontam routing boards, and tray labels.
- Build a sterile-supply turnaround run around cart staging, wrap-integrity checks, wash-to-pack routing, and tray labeling.
- Explore a shellfish depuration support system with wash tanks, tray routing boards, sample kits, and water-quality consoles.
- Explore glacier meltwater monitoring with borehole kits, thaw-season route boards, sample benches, and shelter drying racks.
- Explore a greenhouse graft-clinic follow-up with healing carts, quarantine boards, clip families, and propagation ledgers.
- Explore an exhibit crate-packing and travel-prep station with shock indicators, cavity foam, route ledgers, and staging carts.
- Explore a fossil casting prep room with mold racks, powder bins, cure charts, and bench-side tool atlases.
- Explore a traveling clockwork picnic brand system with wagons, hamper packaging, route posters, and toy-food artifacts.
- Explore a public bathhouse board-game and signage universe with towels, tokens, tiled diagrams, and glowing night interiors.
- Explore a night library puppet festival with stage posters, toy catalogs, lantern maps, and backstage stagecraft.
- Explore a tidal bathhouse ferry service with tickets, luggage tags, deck maps, pier uniforms, and dawn harbor rooms.
- Explore a winter tea-house observatory with dessert carts, robe storage, lantern maps, and snow-facing terraces.
- Explore a ritual bakery architecture atlas with wrappers, uniforms, tiled counters, maquettes, and cooling-room interiors.
- Explore a cliffside puppet-flight conservatory with paper bird rigs, repair benches, bridge rehearsal courts, and lantern diagrams.
- Explore a municipal underwater marching band school with brass-maintenance kits, bubble-notation posters, locker iconography, and night pool rehearsals.
- Explore a traveling eclipse wrestling academy with mat-sign systems, patched uniforms, arena print artifacts, and dormitory cutaways.

## Run Log

- `2026-04-25 14:30 +08` — `20260425-1430-tidal-library-broken-amusement-park-maps` completed with 9 PNGs. Added a damaged-map atlas, repair-bench documentary still, sea-facing reading room, archive section cutaway, foldout paper suite, projection keyframe, counter-family goods, silent comic page, and a blue-hour coastal exterior while opening a page-first cartographic storytelling branch for the corpus.
- `2026-04-25 05:18 +08` — `20260425-0458-night-pollens-field-guide` completed with 8 PNGs. Added a micro specimen plate, field-guide kit, atmospheric foldout map, sticker-and-badge sheet, pop-up paper-engineering spread, reading-tent observation corner, documentary sampling closeup, and a silent rooftop comic page while opening a page-first educational publishing branch for the corpus.
- `2026-04-25 08:01 +08` — `20260425-0801-apartment-block-fermentation-olympics` completed with 9 PNGs. Added an equipment atlas, resident lineup, protected-playfield balcony HUD, apartment cutaway route map, paper rulebook suite, judges' table still life, rooftop finals frame, prize family, and a stairwell comic page while opening a domestic public-sport branch for the corpus.
- `2026-04-24 18:29 +08` — Automation governance upgraded. `AUTOMATION-RUNBOOK.md` was expanded into a 2,651-word high-diversity operating spec with freedom budgets, scale systems, broader run shapes, plugin/skill Markdown consultation, candidate-theme slates, and cross-run diversity requirements.
- `2026-04-24 website` — Static gallery website added under `image-knowledge-base/site/` with searchable image cards, run and taxonomy filters, topic chips, detail preview, prompt links, report links, and PNG download controls. Added `scripts/build-site-data.mjs` to regenerate gallery data from JSONL catalogs and prompt cards.
- `2026-04-25 deploy` — Broadened topic extraction to 1,534 global topics, refreshed `site/data.js`, added a root gallery redirect, deployed the static site to Vercel production at `https://image-knowledge-base.vercel.app`, and verified root, `/site/`, and `/site/data.js` return HTTP 200.
- `2026-04-25 product-ui` — Upgraded the public site into Image Atlas with a landing section, hero image wall, readable theme cards, education use-case section for A-level/AP/IB/course packs, adjustable panels, topic filtering, prompt/edit-brief copy actions, and static Stripe pricing scaffolding.
- `2026-04-25 product-site` — Reworked the static gallery into a multi-view professional site with Home, Catalog, Themes, Education, and Licensing navigation, million-scale catalog positioning, proof metrics, catalog preview, footer, and in-browser tagged PNG downloads that render a small Image Atlas watermark plus image/run ID before saving.
- `2026-04-24 04:45 +08` — `20260424-0445-materials-instrument-atlas` completed with 8 PNGs. Established strong atlas/contact-sheet, speculative object, ui-mockup, material-study, infographic-diagram, and environment-concept references.
- `2026-04-24 05:56 +08` — `20260424-0546-tactile-service-interface-ecosystem` completed with 7 PNGs. Added public-service artifact atlases, kiosk and wall-panel UIs, paper-service layouts, handheld civic tools, and a unifying civic access hall environment.
- `2026-04-24 07:03 +08` — `20260424-0647-backoffice-signage-document-logistics` completed with 7 PNGs. Added archive-routing artifact atlases, sign standards boards, back-office operations UI, transport-furniture sheets, tray material studies, and a cohesive processing-room environment.
- `2026-04-24 08:05 +08` — `20260424-0748-intertidal-reef-microclimate-observatory` completed with 8 PNGs. Added coastal field-science atlases, rugged survey UI, physical data boards, marine material studies, process diagrams, tool-family sheets, notebook systems, and a shoreline field-station environment.
- `2026-04-24 09:09 +08` — `20260424-0849-volcanic-observatory-support-system` completed with 8 PNGs. Added volcanic shelter atlases, expert hazard UI, physical situation boards, ash-ready material studies, workflow tables, rugged tool-family sheets, and a blue-hour observatory interior.
- `2026-04-24 09:52 +08` — `20260424-0952-wildfire-smoke-coordination-system` completed with 8 PNGs. Added smoke-response atlases, route-operations UI, physical situation boards, filter-cartridge material studies, deployment workflow tables, roadside tool sheets, shelter-adjacent command environments, and notebook planning systems.
- `2026-04-24 11:13 +08` — `20260424-1052-orchard-pest-scouting-support-system` completed with 8 PNGs. Added orchard scouting atlases, handheld inspection UI, pressure boards, lure-hardware material studies, sample-routing workflow tables, canopy-cart tool families, notebook layouts, and a dawn scout shed environment.
- `2026-04-24 12:19 +08` — `20260424-1152-cold-chain-produce-inspection-depot` completed with 8 PNGs. Added refrigerated receiving atlases, rugged intake UI, physical cooler-route boards, insulated-liner material studies, quarantine-release workflow tables, depot inspection tool families, notebook systems, and a blue-hour receiving environment.
- `2026-04-24 13:15 +08` — `20260424-1254-seed-bank-intake-viability-audit` completed with 8 PNGs. Added accession atlases, expert viability UI, physical cold-room routing boards, preservation material studies, intake workflow tables, freezer-and-germination tool families, ledger layouts, and a blue-hour seed-bank intake room.
- `2026-04-24 14:16 +08` — `20260424-1355-library-conservation-freeze-dry-recovery-lab` completed with 8 PNGs. Added salvage atlases, an expert recovery console, physical queue boards, damp-paper material studies, crate-to-shelf workflows, conservation hardware sheets, ledger layouts, and a blue-hour recovery lab environment.
- `2026-04-24 15:27 +08` — `20260424-1457-aquaculture-hatchery-egg-monitoring-support-system` completed with 8 PNGs. Added hatchery object atlases, an incubation-status console, false-color routing boards, wet incubation material studies, transfer workflow tables, tool-family sheets, waterproof ledgers, and a blue-hour hatchery prep room.
- `2026-04-24 15:58 +08` — `20260424-1558-glacier-crevasse-survey-support-system` completed with 8 PNGs. Added glacier survey atlases, a route-planning operations console, physical hazard foldout boards, cold-resistant material studies, survey handoff workflow tables, hardware family sheets, field-log layouts, and a blue-hour survey shelter.
- `2026-04-24 16:59 +08` — `20260424-1659-greenhouse-pollination-logistics-system` completed with 8 PNGs. Added greenhouse pollination atlases, a bloom-timing operations console, physical zone-routing boards, pollen-capsule material studies, tray-to-row workflow tables, blossom-support tool families, pollination ledger layouts, and a blue-hour greenhouse staging aisle.
- `2026-04-24 18:21 +08` — `20260424-1800-museum-mount-making-prep-studio` completed with 8 PNGs. Added museum-prep atlases, an expert mount-planning operations console, physical routing boards, cradle material studies, object-to-case workflow tables, preparator tool-family sheets, mount logbook layouts, and a blue-hour prep studio.
- `2026-04-24 19:41 +08` — `20260424-1917-monsoon-parade-toy-fair` completed with 8 PNGs. Added a toy-catalog atlas, coherent packaging family, family board-game surface, low-chrome arcade HUD, comic page, festival poster, canal-side storefront, and a city-scale parade finale while deliberately breaking the prior institutional run streak.
- `2026-04-24 23:13 +08` — `20260424-2253-cliffside-mineral-bathhouse-solstice-season` completed with 9 PNGs. Added a ritual bath-object atlas, robe lookbook, mosaic guide, invitation kit, architectural section, steam-hall interior, moonlit exterior, dessert tea service, and maquette study while shifting the corpus into quiet ceremonial hospitality.
- `2026-04-24 23:54 +08` — `20260424-2350-salt-flat-wind-regatta` failed before raster generation. Planned a wild sports-and-landscape departure centered on a speculative salt-flat wind-racing championship with eight images: vehicle atlas, pilot lineup, protected-playfield HUD, tactile foldout map, repair bench, overtake still, floodlit paddock, and dawn aerial.
- `2026-04-25 01:20 +08` — `20260425-0117-museum-of-artificial-weather` completed with 8 PNGs. Added a weather-instrument atlas, visitor ticket-and-map kit, storm-chamber kiosk UI, condensation learning wall, civic museum section cutaway, coherent gift-shop packaging line, lightning corridor installation, and an opening-night exterior while shifting the corpus into public cultural architecture and exhibition design.
- `2026-04-25 01:54 +08` — `20260425-0154-subterranean-acrobatics-conservatory` completed with 8 PNGs. Added a rehearsal-apparatus atlas, apprentice costume lineup, center-protective cue-console UI, poster-and-ticket print system, underground limestone section, practice-kit tabletop study, documentary rehearsal interior, and quarry-wall arrival exterior while opening a new performance-and-training branch for the corpus.
- `2026-04-25 03:19 +08` — `20260425-0256-glass-orchard-dessert-casino` completed with 10 PNGs. Added a dessert-and-token atlas, service-uniform lineup, orchard-wheel table UI, paper ephemera system, conservatory section, collectible packaging family, documentary glasshouse interior, twilight exterior, narrative comic page, and wayfinding map while opening a bright food-and-ritual branch for the corpus.

## Failure Learnings

- The current environment cannot complete bundled ImageGen CLI runs unless a local Python already has `openai` installed or package fetches are allowed.
- The default built-in output path under `~/.codex/generated_images/` and the default `uv` cache under `~/.cache/uv` are not writable from this sandboxed workspace.
- If this blocker persists on a future run, do one writable-path retry at most, then immediately switch to the failed-run bookkeeping path.
- Museum runs can still use the built-in ImageGen path successfully as long as the automation copies selected PNGs from `~/.codex/generated_images/` into the workspace hierarchy instead of trying to write there directly.

## New Seeds

- Explore an underpass school for storm lantern puppetry with soot-black cue cards, folded props, rain-channel stages, and damp rehearsal courts.
- Explore a legal herbarium of counterfeit coins with evidence leaves, courtroom specimen drawers, metal rubbings, and magnifier kits.
- Explore a public greenhouse for midnight kite repairs with bamboo spars, weather cards, hanging silk panels, and glass-roof night humidity.
- Explore a legal herbarium of counterfeit coins with pressed evidence leaves, courtroom drawers, specimen trays, and magnifier kits.
- Explore a rooftop astronomy picnic club with blanket maps, thermos kits, chart folios, and warm public-night teaching boards.
- Explore a city botany puzzle-game branch with street maps, clue cards, hidden-garden signage, and protected-playfield exploration HUDs.
- Explore kitchen microscopy of sugars, starches, glazes, and edible failures with slips, trays, magnified crusts, and teaching cards.
- Explore a rooftop astronomy picnic club with blanket kits, chart folios, thermos packaging, and warm civic-night illustrations.
- Explore a city botany puzzle-game branch with specimen cards, map fragments, hidden-path comics, and protected-playfield street scenes.
- Revisit the salt-flat wind regatta once a working local image runtime is available.
- Push further into weather-flag typography, team identity systems, route ephemera, pitside repair tabletop studies, and aerial course geometry.
- Explore a public museum of artificial tides with lunar charts, harbor models, flood markers, and wave classrooms.
- Explore a climate reading room with paper engineering, cloud-light ceilings, soft furniture, and quiet public-facing graphics.
- Explore a volcanic glass conservatory market with stall kits, civic signage, packaging, and humid night interiors.
- Carry one institutional vocabulary across all formats when building public cultural worlds: cloud chambers, brass weather vanes, frosted glass, slate paper, terrazzo, and oxidized metal held this run together.
- Do not let invented museums drift into steampunk fantasy, children's science-center kitsch, theme-park spectacle, cosmetics packaging, or admin-dashboard interfaces.
- `game-ui-frontend/SKILL.md` translated well to a museum kiosk because the primary-panel plus compact-side-module guidance produced a disciplined public interface.
- `documents/SKILL.md` helped keep the visitor kit and wall-installation prompts grounded in layout hierarchy and restrained text use.
- Carry one limited performance vocabulary across all formats when building rehearsal worlds: chalk dust, oxblood velvet, cobalt tape, limestone, brass cue hardware, and rope geometry held this run together.
- `game-ui-frontend/SKILL.md` translated well beyond games because the protected-center, dominant-primary-panel guidance produced a convincing rehearsal console.
- `documents/SKILL.md` helped keep the poster-and-ticket image grounded in hierarchy, paper texture, and restrained text instead of invitation-suite polish.
- Carry one bright venue vocabulary across all formats when building food-and-ritual worlds: cream stone, sage structure, apricot paper, amber glass, brushed brass, citrus foliage, cloches, and terrazzo held this run together.
- Casino-adjacent prompts stay fresh when they center on hosted tasting rounds, tokens, cloches, tables, and paper artifacts instead of cards, slots, jackpots, or black-box gaming.
- Food worlds scale better when at least one prompt is a documentary public interior and one is a narrative page; otherwise the branch risks collapsing into packaging and beauty-shot repetition.
- Map and print images became stronger when framed as photographed wall panels or paper artifacts instead of flat digital layouts.

## Recent Additions

- Explored theme: `20260425-1430-tidal-library-broken-amusement-park-maps` — Tidal Library of Broken Amusement-Park Maps.
- Explored formats: salt-warped map atlas, repair-bench documentary still, sea-facing reading room, seawall archive section, foldout paper suite, projection keyframe, counter-family goods, silent comic page, and blue-hour coastal exterior.
- Avoid-list additions: cozy bookstore nostalgia, theme-park mascots, candy branding, souvenir-shop kitsch, storm-apocalypse framing, and cyberpunk projection excess.
- Next-run seeds:
  - Underpass school for storm lantern puppetry with soot-black cue cards and rain-channel stages.
  - Legal herbarium of counterfeit coins with courtroom drawers and evidence leaves.
  - Public greenhouse for midnight kite repairs with bamboo spars and glass-roof night humidity.
- Explored theme: `20260425-0801-apartment-block-fermentation-olympics` — Apartment-Block Fermentation Olympics.
- Explored formats: crock atlas, resident lineup, protected-playfield balcony HUD, building cutaway route map, rulebook-and-pennant suite, judges' table still life, rooftop finals frame, prize family, and stairwell comic page.
- Avoid-list additions: rustic farmhouse nostalgia, restaurant-service glamour, gourmet gift-hamper polish, stadium bombast, sponsorship cues, and influencer-rooftop-party styling.
- Next-run seeds:
  - Legal herbarium of counterfeit coins with pressed evidence leaves and courtroom specimen boxes.
  - Rooftop astronomy picnic club with thermos kits, blanket maps, and public-night teaching boards.
  - City botany puzzle-game street ephemera with hidden-garden clues and low-chrome exploration HUDs.

## Latest Update

- Run slug: `20260425-1430-tidal-library-broken-amusement-park-maps`
- Timestamp: `2026-04-25T14:30:23+08:00`
- Theme shift: moved the corpus into page-first cartographic storytelling and public coastal archive architecture after recent funeral ritual, theatrical wardrobe, and domestic-sport runs.
- New formats: damaged-map atlas, repair-bench documentary still, sea-facing reading room, seawall archive section cutaway, foldout paper suite, projection keyframe, counter-family goods, silent comic page, and blue-hour coastal exterior.
- Useful prompt patterns:
  - Carry one restrained seaside paper kit across paper, room, section, projection, and exterior images: sea-glass teal, faded coral, cream paper, brass clips, driftwood, salt crust, rippled glass, and tide stains held the run together.
  - For map-heavy outputs, ask for photographed artifacts, wall projections, or public rooms instead of flat design comps so the branch stays browsable as imagery.
  - Motion-design stills stay coherent when they remain tied to physical projection hardware, damp public space, and one frozen moment rather than digital spectacle.
- Avoid-list additions:
  - Do not let map-library worlds drift into cozy bookstore nostalgia, cottagecore repair romance, or quaint seaside-shop sentimentality.
  - Do not let amusement prompts slip into mascots, candy branding, tourist-souvenir kitsch, or active theme-park spectacle.
  - Do not let projection images become cyberpunk neon, holograms, rave staging, or oversized crowds.
- Scale and skill learning: `documents/SKILL.md` kept the paper outputs tactile rather than flat, while `remotion/SKILL.md` helped the seawall projection frame read like a motion keyframe without breaking the still-image corpus.
- Next-run seeds:
  - Underpass school for storm lantern puppetry with folded props, cue diagrams, and rain-channel rehearsal rooms.
  - Legal herbarium of counterfeit coins with evidence leaves, courtroom drawers, and print folios.
  - Public greenhouse for midnight kite repairs with bamboo spars, weather cards, and damp city glass roofs.
- Run slug: `20260425-0801-apartment-block-fermentation-olympics`
- Timestamp: `2026-04-25T08:01:20+08:00`
- Theme shift: moved the corpus into domestic neighborhood sport and playful public food craft after recent music pedagogy, civic architecture, and quiet night-publishing runs.
- New formats: equipment atlas, resident lineup, protected-playfield HUD, building cutaway route map, paper suite, judges' table documentary still life, rooftop finals frame, prize family, and stairwell comic page.
- Useful prompt patterns:
  - Carry one everyday material kit across objects, paper, interfaces, and environments: ceramic crocks, amber jars, chalk numbers, striped towels, aprons, pennants, and warm concrete held the run together.
  - Food-adjacent prompts stay fresh when framed as carrying, judging, routing, and cheering rather than plating, serving, or luxury gifting.
  - For playful event maps and paper systems, ask for photographed artifacts with folds, clips, tape, and shallow shadow so the output stays tactile instead of flat.
- Avoid-list additions:
  - Do not let domestic-sport worlds drift into rustic farmhouse branding, restaurant glam, or gourmet-subscription aesthetics.
  - Do not let rooftop scenes slip into concert spectacle, fireworks, luxury party energy, or sports-stadium heroics.
  - Do not let prize-family prompts become corporate sponsorship kits, polished merch drops, or souvenir-shop clutter.
- Scale and skill learning: `game-ui-frontend/SKILL.md` helped keep the HUD scene-first and edge-bound, while `documents/SKILL.md` kept the map and paper suite tactile rather than screen-native.
- Next-run seeds:
  - Legal herbarium of counterfeit coins with pressed evidence leaves, courtroom drawers, and specimen boxes.
  - Rooftop astronomy picnic club with blanket maps, thermos kits, and public-night teaching boards.
  - City botany puzzle-game branch with hidden-garden clues, street maps, and exploration HUDs.

## Latest Update

- Run slug: `20260425-1530-underpass-school-for-storm-lantern-puppetry`
- Timestamp: `2026-04-25T15:30:26+08:00`
- Theme shift: moved the corpus into street-scale narrative public performance and improvised civic craft after recent cartographic archive, ceremonial weather, and wardrobe-logistics runs.
- New formats: hanging puppet atlas, apprentice lineup, weather-cue storyboard wall, dusk rehearsal still, flood-channel section cutaway, handled ticket-and-cue-card suite, repair-bench documentary still, midnight parade, and vertical comic page.
- Useful prompt patterns:
  - Carry one underpass material kit across objects, people, sequence surfaces, sections, and parade scenes: soot-dark concrete, indigo tarps, lantern amber, oxidized copper, waxed paper, bamboo ribs, chalk marks, and restrained safety orange held the run together.
  - For civic-performance worlds, describe subjects as apprentices, workers, and neighborhood participants rather than performers, heroes, or models to prevent glam and fantasy drift.
  - For underpass and night-event prompts, explicitly ban cyberpunk neon, lasers, fireworks, theme-park spectacle, and magic or the branch quickly leaves the realm of buildable public craft.
- Avoid-list additions:
  - Do not let lantern-puppet worlds slip into cosplay sheen, ornate masks, fairy-tale glow, or luxury theater polish.
  - Do not let cue-board and paper prompts become clean corporate infographics, motion-graphics software screens, or boutique invitation suites.
  - Do not let under-bridge scenes become dystopian battle arenas, abandoned-ruin emptiness, or disaster-porn flooding.
- Scale and skill learning: `framecrawler/SKILL.md` helped keep the sequence and cinematic staging coherent across the rehearsal, parade, and comic frames; `documents/SKILL.md` kept the paper suite tactile; `game-ui-frontend/SKILL.md` was a useful guardrail against letting the storyboard wall collapse into a generic dashboard.
- Next-run seeds:
  - Basement planetarium pinball hall with score reels, cabinet art, and low-glow arcade aisles.
  - Legal herbarium of counterfeit coins with courtroom drawers, magnifier kits, and print folios.
  - Public greenhouse for midnight kite repairs with bamboo spars, hanging silk panels, and damp glass roofs.

## Latest Update

- Run slug: `20260425-2059-commuter-ferry-kelp-soda-launch`
- Timestamp: `2026-04-25T20:59:45+08:00`
- Theme shift: moved the corpus into bright commercial transit branding and public consumer culture after recent blue-hour archives, street puppetry, and basement mechanical leisure runs.
- New formats: flavor-family atlas, terminal kiosk still, launch-crew workwear lineup, ticket-and-cap paper suite, vending-machine interior, open-deck commuter still, terminal wall poster, dock-cart delivery still, and tray-liner comic page.
- Useful prompt patterns:
  - Carry one working-harbor retail kit across products, paper, workers, machines, and transit scenes: cream labels, navy type, sea-glass bottle greens, citrus yellows, galvanized metal, rope handles, oxidized teal paint, damp paper, and safety-orange accents held this run together.
  - Consumer-brand prompts stay specific when framed as commuter service, restocking, ticketing, and public retail instead of lifestyle aspiration, nightlife, or wellness marketing.
  - Print-heavy outputs became stronger when treated as handled terminal matter with rings, creases, clips, and worn surfaces rather than as clean brand-deck layouts.
- Avoid-list additions:
  - Do not let transit-beverage worlds drift into craft-beer minimalism, resort gift-shop styling, or surfer beach-town nostalgia.
  - Do not let kelp or algae prompts slip into biotech futurism, slime imagery, greenwashed lab aesthetics, or generic wellness branding.
  - Do not let poster and retail prompts become celebrity campaigns, hype-drop streetwear launches, or polished billboard advertising.
- Scale and skill learning: `iconography-lab/SKILL.md` helped keep the bottle icon, route-color logic, and workwear cues coherent across the family; `documents/SKILL.md` helped the paper suite and poster read as handled print matter instead of flat comps.
- Next-run seeds:
  - Municipal gelato seismology lab with freezer drawers, tremor charts, cone carriers, and public science plates.
  - Shared courtyard sun-laundry record label with clothespin singles, folding tables, balcony listening scenes, and bright paper sleeves.
  - Noon market for folded tin kites with chalked price boards, rooftop demos, repair clips, and packaging families.

## Latest Update

- Run slug: `20260428-1528-municipal-gelato-seismology-lab`
- Timestamp: `2026-04-28T15:28:52+08:00`
- Theme shift: moved the corpus into civic food-science, daylight public architecture, educational paper artifacts, and municipal street ritual after recent premium retail, commuter branding, and pinball leisure runs.
- New formats: fault-core atlas, tasting-hall interior, flavor seismogram foldout plate, municipal building cross-section, survey-cart family, plaza documentary still, civic festival poster, silent comic page, and ingredient-and-instrument board.
- Useful prompt patterns:
  - Carry one disciplined civic-dessert material kit across architecture, paper, street, and object frames: pistachio tile, vanilla paper and stone, apricot and berry strata, stainless spoons, terrazzo, basalt waffle-cone black, and cherry-red trace ink held this run together.
  - Food-science prompts stay specific when framed as public halls, survey fleets, field readings, cutaway rooms, foldout plates, and graph artifacts instead of menus, dessert branding, or luxury product shots.
  - Text-bearing artifacts remain useful when treated as photographed paper with decorative, non-critical copy rather than flat layouts that depend on exact legibility.
- Avoid-list additions:
  - Do not let future civic food worlds drift into boutique gelato branding, influencer dessert photography, chalkboard-menu kitsch, or mascot-driven novelty.
  - Do not let educational branches become dense textbook pages that only work if all type renders perfectly.
  - Do not let section cutaways or instruments slide into sci-fi lab overload or theme-park spectacle when municipal buildability is the point.
- Scale and skill learning: `frontend-skill/SKILL.md` helped the poster and public hall keep one bold visual thesis without generic UI clutter, while `documents/SKILL.md` helped the foldout plate, poster, and cutaway behave like tactile civic artifacts rather than flat comps.
- Next-run seeds:
  - Shared courtyard sun-laundry record label with balcony listening scenes, bright sleeve stacks, folding tables, and rooftop playback rituals.
  - Legal herbarium of counterfeit coins with evidence drawers, field plates, stamp slips, and public archive halls.
  - Public greenhouse for midnight kite repairs with glasshouse sections, roof tests, folded manuals, and lantern-lit repair tables.
- Run slug: `20260426-0151-cinder-bloom-eclipse-cosmetics`
- Timestamp: `2026-04-26T01:51:08+08:00`
- Theme shift: moved the corpus into speculative beauty retail, editorial styling, premium packaging, and storefront installation after recent transit-brand, lantern-puppet, pinball-hall, and archive-heavy runs.
- New formats: product atlas, counter-hall retail still, beauty lookbook lineup, packaging family, editorial spread, vanity still life, storefront window installation, silent launch comic page, and material-and-pigment board.
- Useful prompt patterns:
  - Carry one limited beauty-material kit across product, packaging, fashion, retail, and narrative frames: basalt-black lacquer, dusty apricot pigment, pearl cream paper, muted copper foil, moon-silver hardware, and deep wine ribbon held this run together.
  - Consumer-fashion prompts stay specific when framed as counters, trays, discovery sets, magazine spreads, vanity residue, and window installations instead of celebrity campaigns, influencer lifestyle, or abstract luxury mood boards.
  - Editorial layouts remain useful to the corpus when treated as photographed print artifacts with decorative text rather than as flat comps that depend on perfect legibility.
- Avoid-list additions:
  - Do not let speculative beauty worlds drift into generic perfume-ad gloss, influencer vanity clichés, sterile skincare minimalism, or cyberpunk neon.
  - Do not let fashion prompts slip into couture fantasy, superhero styling, costume drama, or runway spectacle.
  - Do not let packaging prompts become holiday gifting kitsch, ornate jewelry-box excess, or anonymous all-black luxury sameness.
- Scale and skill learning: `iconography-lab/SKILL.md` helped the eclipse motif, closures, and repeated internal cues stay recognizable without collapsing into logo-making, while `documents/SKILL.md` kept the editorial spread and paper inserts tactile enough to remain browsable images.
- Next-run seeds:
  - Municipal gelato seismology lab with tremor charts, freezer drawers, cone carriers, and public science plates.
  - Shared courtyard sun-laundry record label with clothespin singles, balcony listening scenes, folding tables, and bright paper sleeves.
  - Noon market for folded tin kites with rooftop demos, chalked price boards, repair clips, and packaging families.

## Recent Additions

- Explored theme: `20260428-1533-shared-courtyard-sun-laundry-record-label` - Shared Courtyard Sun-Laundry Record Label.
- Explored formats: hanging sleeve family portrait, courtyard listening exchange, balcony editorial lineup, risograph release-route poster, stamping-and-repair tabletop still life, rain-break listening booth, dusk apartment-facade broadcast, and silent comic page.
- Avoid-list additions: craft-beer branding drift, record-store nostalgia cosplay, influencer balcony-party energy, concert-stage spectacle, audiophile showroom fetish polish, cyberpunk rain alleys, and clean brand-deck poster graphics.
- Next-run seeds:
  - Legal herbarium of counterfeit coins with specimen leaves, courtroom drawers, and evidence folios.
  - Rooftop astronomy picnic club with blanket maps, thermos kits, and quiet public-night teaching boards.
  - Municipal gelato seismology lab with freezer drawers, tremor charts, cone carriers, and public science plates.

## Recent Additions

- Explored theme: `20260428-1533-fountain-chess-carnival` - Civic Fountain Chess Carnival.
- Explored formats: ceramic tournament atlas, daylight public-square documentary, civic uniform lineup, match-table overhead, architectural section cutaway, blue-hour finals still, event poster-and-prize suite, and silent comic page.
- Useful prompt patterns:
  - Carry one restrained civic-play material kit across objects, people, architecture, print, and narrative frames: cream glaze, teal tile, brass clocks, apricot parasols, ribbon badges, pale limestone, pastry paper, and worn linen held the run together.
  - Public game prompts stay specific when framed as ritual, spectatorship, mentorship, pastry commerce, and city habit rather than winning, sports hype, or fantasy pageantry.
  - Board-surface prompts improve when the board remains dominant and support objects behave like evidence of play instead of merch, UI chrome, or snack clutter.
- Avoid-list additions:
  - Do not let future public-game worlds drift into esports branding, casino styling, collectible-box art polish, or luxury hobby merchandise.
  - Do not let civic-festival prompts slide into parade spectacle, fireworks, giant screens, or sponsor-heavy sports marketing.
  - Do not let lineup prompts become costume drama, school-uniform nostalgia, or luxury campaign glamour.
- Scale and skill learning: `game-ui-frontend/SKILL.md` translated well into board-surface prompt discipline by protecting the playfield from clutter, while `frontend-skill/SKILL.md` helped the poster and lineup stay organized around one dominant visual idea instead of decorative sprawl.
- Next-run seeds:
  - Legal herbarium of counterfeit coins with specimen leaves, courtroom drawers, and evidence folios.
  - Rooftop astronomy picnic club with blanket maps, thermos kits, and quiet public-night teaching boards.
  - Public greenhouse for midnight kite repairs with glasshouse sections, folded manuals, and lantern-lit bench rituals.

## Latest Update

- Run slug: `20260428-1533-fountain-chess-carnival`
- Timestamp: `2026-04-28T15:33:22+08:00`
- Theme shift: moved the corpus into civic play, public-square ritual, everyday fashion, and narrative board culture after fresh runs in domestic music courtyards, civic food science, premium cosmetics, and commuter retail branding.
- New formats: ceramic tournament atlas, daylight square documentary, civic lineup editorial, match-table overhead, architectural section, lantern finals still, poster-and-prize ephemera, and a quiet comic page.
- Useful prompt patterns:
  - Public-play worlds became stronger when every format repeated fountain emblems, ceramic glaze wear, brass timekeeping, pastry traces, and linen work formality instead of inventing new decorative systems image by image.
  - Event prompts stayed grounded when framed as city habit and slow ceremony rather than tournament spectacle or festival hype.
  - A short decorative text anchor can work on poster artifacts if the layout still succeeds without perfect legibility.
- Avoid-list additions:
  - Do not follow this immediately with another civic festival, poster suite, uniform lineup, or public-square pageant.
  - Do not let future board-game images become boxed-product mockups, casino tables, or strategy-app screens.
  - Do not let day-to-night civic scenes drift into nostalgia tourism or fantasy market cliches.
- Scale and skill learning: `game-ui-frontend/SKILL.md` usefully reinforced playfield protection for match surfaces, and `frontend-skill/SKILL.md` kept the lineup and poster images bold and simple enough to browse quickly.
- Next-run seeds:
  - Legal herbarium of counterfeit coins with specimen leaves, courtroom drawers, and evidence folios.
  - Rooftop astronomy picnic club with blanket maps, thermos kits, and quiet public-night teaching boards.
  - Public greenhouse for midnight kite repairs with glasshouse sections, folded manuals, and lantern-lit bench rituals.

## Latest Update

- Run slug: `20260428-1533-shared-courtyard-sun-laundry-record-label`
- Timestamp: `2026-04-28T15:33:01+08:00`
- Theme shift: moved the corpus away from speculative retail polish and the recurring atlas-plus-paper routine into domestic public music culture, vertical apartment choreography, photographed print matter, and improvised listening infrastructure.
- New formats: hanging sleeve family portrait, documentary listening exchange, balcony lineup editorial, risograph route poster, stamping-and-repair worktable still life, rain-break listening booth, dusk facade broadcast, and a quiet comic page.
- Useful prompt patterns:
  - Carry one domestic music material kit across artifacts, people, weather, architecture, and pages: cream sleeves, cobalt stamp ink, faded coral accents, pale mint stucco, tomato-red clips, black vinyl, brushed aluminum turntables, and striped towels held the run together.
  - Public music prompts stay specific when framed as browsing, clipping, stamping, carrying, sheltering, and window-broadcasting instead of stage performance, nightlife, or lifestyle aspiration.
  - Poster and comic outputs remain useful to the corpus when treated as printed objects with grain, tape, and handling rather than flat screen-native graphics.
  - Vertical line-hung compositions and facade rhythms are a useful anti-pattern against the repo's repeated bench-level atlas and cutaway structures.
- Avoid-list additions:
  - Do not let neighborhood music worlds drift into craft-beer branding, indie-shop nostalgia cosplay, or premium-audiophile fetish polish.
  - Do not let balcony and courtyard scenes slip into influencer-party energy, rooftop-concert spectacle, or festival staging.
  - Do not let rain images become cyberpunk alleys, emergency-weather framing, or urban ruin mood.
  - Do not let posters and pages become text-dependent brand decks or generic vector infographics.
- Scale and skill learning: `iconography-lab/SKILL.md` helped repeated sleeve symbols, clips, and object cues stay recognizable without turning into logos, while `doc/SKILL.md` reinforced paper-grain, print-object, and layout-surface thinking for the route poster and comic page.
- Next-run seeds:
  - Legal herbarium of counterfeit coins with specimen leaves, courtroom drawers, and evidence folios.
  - Rooftop astronomy picnic club with blanket maps, thermos kits, and quiet public-night teaching boards.
  - Municipal gelato seismology lab with freezer drawers, tremor charts, cone carriers, and public science plates.

## Recent Additions

- Explored theme: `20260428-1730-night-apiary-sleeper-train` - Night Apiary Sleeper Train.
- Explored formats: wax-and-wool travel atlas, blue-dawn valley rail crossing, labor-uniform lineup editorial, foldout bloom-route paper suite, nocturnal sleeper compartment, vehicle section cutaway, midnight platform transfer still, and silent arrival comic page.
- Useful prompt patterns:
  - Carry one restrained winter-travel material kit across every format: beeswax amber glow, midnight rail paint, cream paper, brass clips, waxed canvas, wool, frost, and dark wood held the run together without logos or mascot systems.
  - Rail and labor prompts stayed specific when framed as sleeping, carrying, stamping, mapping, and transferring rather than as adventure spectacle, emergency response, or nostalgia tourism.
  - Paper artifacts remain useful when treated as handled route matter with decorative, non-critical text instead of as flat infographics or bureaucracy boards.
  - Cross-sections improve when the plate can explain itself through compartments, materials, and hierarchy rather than labels.
- Avoid-list additions:
  - Do not follow this immediately with another train, mountain winter journey, station-transfer documentary, or honey-and-paper artifact suite.
  - Do not let future rail prompts drift into holiday nostalgia, steampunk romance, or locomotive fandom spectacle.
  - Do not let page artifacts become text-legibility tests unless the run is explicitly about typography or interface accuracy.
  - Do not let bee-related prompts slide into mascots, whimsical cottagecore, or glowing fantasy terrariums.
- Scale and skill learning: `iconography-lab/SKILL.md` helped the lineup stay identity-rich without becoming costume theater, while `documents/SKILL.md` kept the route-map suite and teaching-plate logic grounded in handled paper and editorial layout behavior rather than flat screen comps.
- Next-run seeds:
  - Monsoon cliff laundry observatory with wet ropes, stone ledgers, and repair aprons.
  - Desert veterinary cinema caravan with fold chairs, medicine chests, and dust-screen projection.
  - Orchard dusk fencing school with padded jackets, tally ribbons, and fruit-row procession lanes.

## Recent Additions

- Explored theme: `20260428-1932-dry-season-analog-radio-repair-bazaar` - Dry-Season Analog Radio Repair Bazaar.
- Explored formats: handled radio atlas, labor lineup editorial, noon market documentary, bench macro study, guarantee-paper suite, stacked repair-house section, rooftop antenna landscape, closing-time parts room, and silent narrative comic page.
- Useful prompt patterns:
  - Carry one dry repair material kit across objects, people, rooftops, paper, and interiors: faded teal paint, oxidized copper, amber dial windows, chalk paper, dust bloom, canvas shade cloth, and worn wood held the branch together.
  - Old-electronics prompts stay specific when framed as fixing, sorting, carrying, tuning, and listening rather than collecting, nostalgia worship, or consumer-tech fetishism.
  - Bazaar and paper images stay useful when text remains decorative and the tactile logic is carried by folds, tags, tins, twine, and shallow counter depth.
  - A rooftop relief image helps repair worlds avoid collapsing into endless bench views or support-system diagrams.
- Avoid-list additions:
  - Do not follow this immediately with another radio bazaar, dusty electronics bench, rooftop listening family, or guarantee-card paper suite.
  - Do not let future old-electronics prompts drift into retro-luxury collector glamour, steampunk ornament, museum vitrines, or cyberpunk market clichés.
  - Do not let interior parts rooms become cozy antique shops, nostalgic curiosity cabinets, or clean modern maker spaces.
- Scale and skill learning: `iconography-lab/SKILL.md` helped tags, tins, and coat-pocket cues repeat across artifacts and people without turning into a brand deck, while `impeccable/SKILL.md` reinforced bold compositional hierarchy for the section, paper suite, and rooftop panorama.
- Next-run seeds:
  - Salt quarry mirror-signal foundry with heliograph fins, chalk routes, visor aprons, and horizon test towers.
  - Legal herbarium of counterfeit coins with specimen leaves, evidence folios, and courtroom drawers.
  - Rooftop astronomy picnic club with blanket maps, thermos kits, and quiet public-night teaching boards.

## Latest Update

- Run slug: `20260428-1932-dry-season-analog-radio-repair-bazaar`
- Timestamp: `2026-04-28T19:32:15+08:00`
- Theme shift: moved the corpus away from ceremony, winter rail travel, youth-retail packaging, and civic museum pedagogy into a dusty public repair-and-listening world built from street labor, paper handoff, interior sorting, stacked workshop architecture, and domestic rooftops.
- New formats: handled radio atlas, worker lineup editorial, noon bazaar documentary, open-chassis macro study, frequency-and-guarantee suite, repair-house section cutaway, antenna-forest rooftop landscape, closing-time inventory room, and a quiet rooftop comic page.
- Useful prompt patterns:
  - A branch stays coherent when one dry repair kit repeats across radios, coats, paperwork, buildings, and rooftops: faded teal paint, oxidized copper, amber dial glass, chalk paper, dust bloom, and worn canvas did most of the work.
  - Repair prompts become broader and more useful when at least one image shows the repaired object in domestic use rather than only in the workshop.
  - Dust, harsh light, and fan-shadow interiors are a strong anti-pattern against the repo's recent wet, festive, wintry, or toy-commercial clusters.
- Avoid-list additions:
  - Do not follow this immediately with another radio-market branch, another open-electronics bench, or another rooftop family listening payoff.
  - Do not let future repair worlds become collector nostalgia, retro-tech fetish display, or cyberpunk market spectacle.
  - Do not let paper suites become text-legibility tests or clean service-bureau graphics.
- Scale and skill learning: `iconography-lab/SKILL.md` helped repeatable service cues stay legible without over-branding, and `impeccable/SKILL.md` pushed the broad scene composition toward stronger silhouettes and room hierarchy.
- Next-run seeds:
  - Salt quarry mirror-signal foundry with heliograph fins, chalk routes, visor aprons, and horizon test towers.
  - Legal herbarium of counterfeit coins with specimen leaves, evidence folios, and courtroom drawers.
  - Rooftop astronomy picnic club with blanket maps, thermos kits, and quiet public-night teaching boards.

## Latest Update

- Run slug: `20260428-1730-night-apiary-sleeper-train`
- Timestamp: `2026-04-28T17:30:07+08:00`
- Theme shift: moved the corpus away from civic food science, museum pedagogy, and youth-retail franchise culture into adult winter rail travel, quiet landscape scale, labor-aware uniforms, handled route ephemera, and restrained transport interiors.
- New formats: object atlas, valley landscape still, lineup editorial, foldout route paper suite, nocturnal compartment still, train section cutaway, platform transfer documentary, and silent narrative comic page.
- Useful prompt patterns:
  - A world can stay specific when one material kit repeats across motion, paper, clothing, tools, rooms, and vehicles: waxed canvas, wool, brass, cream stock, frosted glass, amber hive light, and navy-painted steel created continuity without slogans.
  - Large landscape prompts become more useful to the corpus when the human system remains present only as a warm thread inside a much colder frame.
  - Travel-paper images work best when text remains decorative and the route logic is carried by folds, stamps, icons, and wear.
- Avoid-list additions:
  - Do not follow this immediately with another rail branch, another snowy valley, or another labor-uniform lineup.
  - Do not let future transport scenes become disaster response, heroic action cinema, or nostalgia-tourism postcards.
  - Do not let bee-related imagery become mascot-driven, magical, or cottagecore-sweet.
- Scale and skill learning: `iconography-lab/SKILL.md` helped the uniform branch hold one disciplined code of veils, clips, aprons, and satchels, while `documents/SKILL.md` sharpened both the handled paper suite and the section-plate thinking.
- Next-run seeds:
  - Monsoon cliff laundry observatory with wet ropes, stone ledgers, and repair aprons.
  - Desert veterinary cinema caravan with fold chairs, medicine chests, and dust-screen projection.
  - Orchard dusk fencing school with padded jackets, tally ribbons, and fruit-row procession lanes.

## Recent Additions

- Explored theme: `20260428-2033-municipal-steam-bath-fencing-league` - Municipal Steam-Bath Fencing League.
- Explored formats: bathhouse gear atlas, civic athlete lineup editorial, noon match documentary, public print suite, bathhouse section cutaway, quiet aftermath bench, neighborhood queue exterior, and silent novice comic page.
- Useful prompt patterns:
  - Carry one humid municipal sports kit across every format: celadon tile, cream plaster, bleached cotton whites, damp pine, brass tokens, charcoal mesh, cherry-red score bulbs, and eucalyptus accents kept the run coherent without brands or mascots.
  - Athletic prompts stay specific when framed as checking tokens, folding towels, drying masks, learning footwork, and waiting in line rather than winning, glamor posing, or arena spectacle.
  - Public-print images work best here when text stays short and the tactile logic comes from ticket strips, route cards, folds, water rings, and brass trays.
  - Sports architecture becomes more useful when wet leisure, dry administration, and active competition remain visible in the same section rather than separating into single-purpose rooms.
- Avoid-list additions:
  - Do not follow this immediately with another fencing branch, another humid locker-room world, or another bathhouse paper suite.
  - Do not let future athletic branches drift into Olympic spectacle, luxury wellness branding, fantasy uniforms, or elite private-club interiors.
  - Do not let humid civic interiors become dry brochure spaces; keep labor traces, token systems, and damp surfaces present.
- Scale and skill learning: `iconography-lab/SKILL.md` helped repeatable insignia, tokens, and uniform cues stay coherent without turning into a brand deck, `impeccable/SKILL.md` helped the poster and section hierarchy feel designed rather than templated, and `framecrawler/SKILL.md` was useful as a reminder to keep the comic page beat-by-beat and scene-coherent.
- Next-run seeds:
  - Legal herbarium of counterfeit coins with specimen leaves, evidence folios, and courtroom drawers.
  - Salt quarry mirror-signal foundry with heliograph fins, visor aprons, and horizon test towers.
  - Winter greenhouse calligraphy regatta with fogged panes, ink-stained gloves, and canal-course banners.

## Latest Update

- Run slug: `20260428-2033-municipal-steam-bath-fencing-league`
- Timestamp: `2026-04-28T20:58:30+08:00`
- Theme shift: moved the corpus away from repair bazaars, monsoon ceremony, and winter rail interiors into municipal sports, humid public architecture, civic print culture, and novice-scale narrative.
- New formats: bathhouse artifact atlas, athlete lineup editorial, live noon match documentary, poster-and-ticket suite, buildable section cutaway, aftermath bench still life, street-entry queue exterior, and silent teaching comic page.
- Useful prompt patterns:
  - One wet civic sports kit can unify action, fashion, paper, interiors, and architecture when the nouns stay practical: towels, brass tokens, score bulbs, fogged glass, mesh masks, pine benches, and glazed tile did the heavy lifting.
  - Sports images become more distinctive when framed as public ritual and labor rather than prestige competition.
  - Short readable text is safer than dense brackets or rules copy when a print artifact is part of a wider visual-world run.
- Avoid-list additions:
  - Do not follow this immediately with another fencing world, bathhouse ritual, or towel-token paper family.
  - Do not let future sports prompts slide into private-club luxury, spa calm, or arena spectacle.
  - Do not overuse humid tiled interiors in the next few runs.
- Scale and skill learning: `iconography-lab/SKILL.md` strengthened the repeatable public-sport identity cues, `impeccable/SKILL.md` pushed stronger compositional hierarchy in the print and section images, and `framecrawler/SKILL.md` reinforced continuity across the comic beats.
- Next-run seeds:
  - Legal herbarium of counterfeit coins with specimen leaves, evidence folios, and courtroom drawers.
  - Salt quarry mirror-signal foundry with heliograph fins, visor aprons, and horizon test towers.
  - Winter greenhouse calligraphy regatta with fogged panes, ink-stained gloves, and canal-course banners.

## Recent Additions

- Explored theme: `20260428-2242-rooftop-astronomy-picnic-club` - Rooftop Astronomy Picnic Club.
- Explored formats: starter-kit atlas, public-night lineup editorial, rooftop lesson documentary, foldout ephemera suite, apartment-roof section cutaway, dewy residue still life, handled teaching board, and silent departure comic page.
- Useful prompt patterns:
  - A quiet public-night branch stays specific when one warm practical kit repeats across objects, paper, clothing, roofs, and story beats: navy wool, brick-red filters, cream paper, brass optics, oatmeal blankets, enamel thermoses, and tar-paper black held the world together without branding.
  - Astronomy prompts become more useful when framed as neighborly teaching, borrowing, warming, and packing up rather than solitary genius, prestige science, or romance.
  - Paper and teaching-board formats work best when clips, folds, skyline traces, tokens, and overlays carry the logic and the text remains brief and non-critical.
  - Night scenes need warm counterweights such as pastries, stairwell light, tea steam, and handled paper or they flatten into monochrome mood boards.
- Avoid-list additions:
  - Do not follow this immediately with another rooftop astronomy branch, another skyline-at-night social club, or another blanket-and-thermos paper suite.
  - Do not let future astronomy or night-learning prompts drift into luxury date-night framing, observatory prestige, sci-fi laser spectacle, or wilderness camping brand language.
  - Do not let handmade teaching boards collapse into textbook-flat star posters or glossy science-center signage.
- Scale and skill learning: `iconography-lab/SKILL.md` helped the repeated prop and silhouette kit stay recognizable without becoming merch-like, `documents/SKILL.md` sharpened the handled paper suite and board logic, and `frontend-skill/SKILL.md` reinforced strong hierarchy in the lineup, section, and teaching-surface compositions.
- Next-run seeds:
  - Legal herbarium of counterfeit coins with evidence leaves, drawer stains, and clipped testimony folios.
  - Winter greenhouse calligraphy regatta with fogged panes, canal-course banners, and ink-warmed gloves.
  - Desert veterinary cinema caravan with medicine chests, fold chairs, and dust-screen projection rituals.

## Recent Additions

- Explored theme: `20260429-0054-winter-greenhouse-calligraphy-regatta` - Winter Greenhouse Calligraphy Regatta.
- Explored formats: race-kit atlas, civic lineup editorial, greenhouse race documentary, handled scorecard suite, venue section cutaway, wear-state material board, public teaching board, and silent apprentice comic page.
- Useful prompt patterns:
  - A humid civic-sport branch stays coherent when the same restrained kit repeats everywhere: moss green, burgundy lacquer, cream paper, tarnished brass, cedar brown, black ink, and frosted glass unified object, page, room, and architecture scales.
  - Sports prompts feel fresher in this corpus when framed as public teaching, maintenance, and municipal festivity rather than victory spectacle, sponsorship, or elite-team branding.
  - Teaching boards and paper suites work best when ribbons, pins, folds, clipped insets, and swatches carry the logic so the text can stay short and non-critical.
  - Greenhouse scenes become more useful when steam pipes, canal edges, wet stone, citrus beds, and bridge circulation keep them civic and buildable instead of romantic or tropical.
- Avoid-list additions:
  - Do not follow this immediately with another calligraphy-sport greenhouse branch or another fogged-glass winter public festival.
  - Do not let future ink, paper, or regatta prompts drift into wizard-school magic, wedding conservatory styling, rowing-club cliché, or luxury stationery polish.
  - Do not let teaching boards or paper suites become OCR tests or flat poster comps.
- Scale and skill learning: `iconography-lab/SKILL.md` helped the lineup and prop kit stay recognizable without becoming branded athletics, `documents/SKILL.md` sharpened the paper-suite and teaching-board hierarchy, and `myth-merch-studio/SKILL.md` was useful as a restraint against collectible-product slickness in the object families.
- Next-run seeds:
  - Desert veterinary cinema caravan with medicine chests, fold chairs, and dust-screen projection routines.
  - Velvet aquarium lost-and-found boutique with damp claim tags, velvet trays, and orphaned glass charms.
  - Ceramic kite hospital at spring dust season with repair racks, painted braces, and courtyard test flights.

## Latest Update

- Run slug: `20260429-0054-winter-greenhouse-calligraphy-regatta`
- Timestamp: `2026-04-29T00:54:29+08:00`
- Theme shift: moved the corpus away from legal archive daylight, rooftop teaching nights, and dry quarry infrastructure into a humid public-sport world built from pen-oars, frosted glass, steam heat, damp paper, and canal choreography.
- New formats: race-kit atlas, wool-cape lineup editorial, documentary regatta scene, handled scorecard-and-pass suite, greenhouse venue section cutaway, wear-state material board, public teaching board, and silent apprentice comic page.
- Useful prompt patterns:
  - Strange sports become more visually specific when their logic is stored in tools, passes, bells, drying systems, and venue circulation instead of in medals, score digits, or branded uniforms.
  - A winter glasshouse branch needs public utility cues such as steam pipes, citrus beds, wet stone, and cedar benches to resist wedding or fantasy drift.
  - Paper-bearing formats stay strongest when the hierarchy is physical and tactile rather than text-dependent.
- Avoid-list additions:
  - Do not follow this immediately with another municipal regatta or indoor canal festival branch.
  - Do not let future humid public worlds collapse into tropical conservatory tourism, couture posing, or collectible product polish.
  - Do not let ink motifs become magical special effects.
- Scale and skill learning: `documents/SKILL.md` reinforced the physical paper and board logic, `iconography-lab/SKILL.md` helped the competitors read as one institution, and `imagegen/references/prompting.md` was especially useful for keeping text-bearing surfaces concrete but not text-dependent.
- Next-run seeds:
  - Desert veterinary cinema caravan with medicine chests, fold chairs, and dust-screen projection routines.
  - Velvet aquarium lost-and-found boutique with damp claim tags, velvet trays, and orphaned glass charms.
  - Ceramic kite hospital at spring dust season with repair racks, painted braces, and courtyard test flights.

## Recent Additions

- Explored theme: `20260428-2353-legal-herbarium-counterfeit-coins` - Legal Herbarium of Counterfeit Coins.
- Explored formats: evidence atlas, archive-clerk lineup editorial, daylight herbarium documentary, handled folio suite, institutional section cutaway, forensic microplate, physical route board, and silent procedural comic page.
- Useful prompt patterns:
  - A forensic branch stays specific when one restrained kit repeats across paper, metal, plant residue, architecture, and costume: sage felt, walnut drawers, tobacco paper, oxidized silver, smoke-blue linen, mulberry wax, and dry pressed leaves carried the whole world.
  - Archive-paper and board prompts become stronger when folds, pins, ribbons, pockets, and clipped tabs carry the logic so readable text can stay short and non-critical.
  - Micro imagery becomes genuinely reusable once it ties back to the broader world through pitting, graphite dust, fibers, pollen, and leaf-vein traces instead of becoming generic microscopy.
  - Coin-forensics prompts feel fresher when framed as patient comparison work and specimen handling rather than detective-noir drama or collector glamour.
- Avoid-list additions:
  - Do not follow this immediately with another counterfeit-coin or archival-forensics branch.
  - Do not let future evidence worlds drift into treasure-room romance, police-procedural neon, conspiracy-board chaos, or steampunk vault theater.
  - Do not let botanical branches soften into cottagecore herbarium prettiness that overwhelms the legal and numismatic logic.
- Scale and skill learning: `documents/SKILL.md` sharpened both the handled paper suite and the physical evidence board, while `impeccable/SKILL.md` helped the lineup, room scene, and section keep strong hierarchy without turning into generic archive comps.
- Next-run seeds:
  - Winter greenhouse calligraphy regatta with fogged panes, ink-warmed gloves, and canal-course pennants.
  - Desert veterinary cinema caravan with medicine chests, fold chairs, and dust-screen projection routines.
  - Velvet aquarium lost-and-found boutique with damp claim tags, velvet trays, and orphaned glass charms.

## Latest Update

- Run slug: `20260428-2353-legal-herbarium-counterfeit-coins`
- Timestamp: `2026-04-28T23:53:00+08:00`
- Theme shift: moved the corpus away from rooftop night-teaching, quarry relay infrastructure, bathhouse sport, and repair-bazaar hardware into a daylight forensic archive built from specimen leaves, counterfeit coins, residue-scale comparison, and handled legal paper.
- New formats: evidence atlas, archive-clerk lineup editorial, daylight room documentary, handled affidavit-and-rubbing suite, buildable herbarium section cutaway, forensic microplate, district route evidence board, and silent procedural comic page.
- Useful prompt patterns:
  - Counterfeit-coin worlds stay coherent when the same physical kit appears everywhere: drawer wood, felt, wax, paper fibers, pressed leaves, and oxidized metal did more work than any symbolic motif.
  - Archive and teaching surfaces are more useful than flat diagrams when strings, pins, pockets, and clips hold the visual hierarchy.
  - Quiet daylight and administrative care are stronger differentiators here than noir shadows or dramatic legal spectacle.
- Avoid-list additions:
  - Do not follow this immediately with another botanical-forensics archive or another counterfeit mint investigation branch.
  - Do not let future legal evidence prompts become collector luxury, thriller darkness, or overdesigned institutional grandeur.
  - Do not let text-bearing paper artifacts become OCR tests.
- Scale and skill learning: `documents/SKILL.md` reinforced the run's page logic, `impeccable/SKILL.md` helped the broader compositions avoid flat archive monotony, and `imagegen/references/prompting.md` was especially useful for keeping the text-bearing formats concrete but non-dependent on readable copy.
- Next-run seeds:
  - Winter greenhouse calligraphy regatta with fogged panes, ink-warmed gloves, and canal-course pennants.
  - Desert veterinary cinema caravan with medicine chests, fold chairs, and dust-screen projection routines.
  - Velvet aquarium lost-and-found boutique with damp claim tags, velvet trays, and orphaned glass charms.

## Latest Update

- Run slug: `20260428-2242-rooftop-astronomy-picnic-club`
- Timestamp: `2026-04-28T22:42:44+08:00`
- Theme shift: moved the corpus away from quarry infrastructure, steam-bath sport, repair-bazaar hardware, and monsoon ceremony into a domestic public-night teaching world built around blankets, thermoses, paper sky maps, borrowed optics, and small shared rituals.
- New formats: starter-kit object atlas, stargazer lineup editorial, rooftop lesson documentary, foldout paper suite, architectural roof section, residue still life, handled teaching board, and silent comic page.
- Useful prompt patterns:
  - A restrained material kit can make a night branch coherent across scales when it repeats through warmth, wear, and public handling rather than through logos or hero props.
  - Astronomy becomes visually fresh in this corpus when it is staged as a neighborly rooftop gathering with pastries, borrowed tools, and hand-drawn teaching aids.
  - Physical boards and paper suites are stronger than flat posters when pins, folds, stamps, and tape hold the hierarchy.
- Avoid-list additions:
  - Do not follow this immediately with another rooftop astronomy world or another skyline-night social-club branch.
  - Do not let future night branches become luxury party scenes, sci-fi observatory spectacle, or wilderness-camping catalog imagery.
  - Do not overuse blue-only palettes without warm paper, pastry, stairwell, and enamel counterpoints.
- Scale and skill learning: `iconography-lab/SKILL.md` tightened the repeatable club kit, `documents/SKILL.md` strengthened paper-and-board realism, and `frontend-skill/SKILL.md` helped maintain clean hierarchy in the less-common formats.
- Next-run seeds:
  - Legal herbarium of counterfeit coins with evidence leaves, drawer stains, and clipped testimony folios.
  - Winter greenhouse calligraphy regatta with fogged panes, canal-course banners, and ink-warmed gloves.
  - Desert veterinary cinema caravan with medicine chests, fold chairs, and dust-screen projection rituals.

## Recent Additions

- Explored theme: `20260429-0155-desert-veterinary-cinema-caravan` - Desert Veterinary Cinema Caravan.
- Explored formats: road-kit atlas, wagon fleet review, sunset care documentary, dusk public-screening scene, handled paper suite, caravan section cutaway, repair wear board, and silent apprentice comic page.
- Useful prompt patterns:
  - A dry road branch stays coherent when the same practical kit repeats everywhere: indigo canvas, enamel white, brushed brass, cedar brown, dust beige, wool gray, and patched cloth unified object, page, street, and architectural scales.
  - Animal-care prompts feel freshest in this corpus when framed as ordinary labor, watering, wrapping, waiting, and shared dusk rest rather than rescue spectacle or heroics.
  - Projection imagery is strongest when the screen is only one node in a wider social arrangement of blankets, lanterns, carts, and animals.
  - Vehicle-family reviews can work as a less-common corpus format when the comparison is driven by hardware, proportion, and maintenance logic instead of by branded labels.
- Avoid-list additions:
  - Do not follow this immediately with another desert veterinary caravan branch or another dusk road-cinema world.
  - Do not let future desert public-service prompts drift into safari glamour, cowboy romance, circus ornament, or post-apocalyptic grit cosplay.
  - Do not let wagon or trailer studies become steampunk hardware showcases or luxury-camper nostalgia.
- Scale and skill learning: `documents/SKILL.md` helped the passes, posters, and ticket suite stay tactile and non-dependent on clean OCR, while `presentations/SKILL.md` sharpened the screen-first public-night staging and the stronger fleet/section compositions.
- Next-run seeds:
  - Velvet aquarium lost-and-found boutique with damp claim tags, velvet trays, and orphaned glass charms.
  - Ceramic kite hospital at spring dust season with repair racks, painted braces, and courtyard test flights.
  - Night orchard weather-vane cooking school with soot pans, gust maps, and pear-wood benches.

## Recent Additions

- Explored theme: `20260429-0500-civic-tomato-crate-brass-band-finals` - Civic Tomato-Crate Brass Band Finals.
- Explored formats: equipment atlas, riverside market documentary, civic-uniform lineup, route-paper suite, grandstand section cutaway, wear board, portable cart family, and silent late-runner comic page.
- Useful prompt patterns:
  - A bright public-music branch stays coherent when one ordinary market kit repeats everywhere: tomato red, oxidized brass, waxed crate wood, striped cotton, green twine, cream paper, blue shade cloth, and concrete can unify street, page, object, and architecture scales without logos.
  - Music worlds in this corpus feel fresher when treated as civic labor, neighborly judging, and heat-management logistics rather than concert spectacle or parade glamor.
  - Symbol-heavy route maps and judge cards outperform readable-text paperwork when the hierarchy is carried by folds, clips, numerals, arrows, and stains.
  - Vehicle or cart family plates work better when the prompt emphasizes buildability, loading logic, and maintenance wear instead of novelty, toy, or mascot cues.
- Avoid-list additions:
  - Do not follow this immediately with another tomato-market band world or another bright civic-festival branch built from striped awnings and brass.
  - Do not let future music prompts drift into military-pageant posture, rustic-tourism nostalgia, concert-stage spectacle, or luxury heritage branding.
  - Do not let red-stain material studies turn into food styling, produce advertising, or decorative rustic mood boards.
- Scale and skill learning: `documents/SKILL.md` helped the route-paper suite and section read as handled civic artifacts instead of flat posters, while `iconography-lab/SKILL.md` helped the aprons, visors, sashes, carts, and ribbon boards behave like one repeatable public identity system.
- Next-run seeds:
  - Schoolyard solar balloon workshop with patched envelopes, rolling cart kits, chalk launch maps, and dawn inflation fields.
  - Public beach fossil karaoke library with shell lyric cards, lifeguard shelves, and stage-canopy shade bands.
  - Tram depot shadow-puppet tournament with perforated screens, ticket lanterns, rehearsal jackets, and platform cue maps.

## Latest Update

- Run slug: `20260429-0500-civic-tomato-crate-brass-band-finals`
- Timestamp: `2026-04-29T05:00:06+08:00`
- Theme shift: moved the corpus away from basement play, damp retrieval retail, desert dusk care, and winter greenhouse ceremony into a harsh daylight public-music world built from tomato crates, striped aprons, oxidized brass, cream paper, and blue shade cloth.
- New formats: equipment atlas, riverside finals documentary, civic-uniform lineup, route-and-judge paper suite, grandstand section cutaway, wear board, mobile band-cart family, and silent late-runner comic page.
- Useful prompt patterns:
  - The strongest branch images came from treating the band world as public service and neighborly competition rather than as stage spectacle.
  - The section cutaway and lineup made the world reusable because they defined both social roles and spatial logic.
  - Symbol-first paper artifacts kept the run out of OCR trouble while still carrying route and scoring hierarchy.
  - The cart family stayed useful only because the prompt insisted on buildable hardware instead of toy or steampunk charm.
- Avoid-list additions:
  - Do not follow this immediately with another produce-market music branch or another midday civic-band competition.
  - Do not let future brass-band prompts become military pageants, rustic travel posters, heritage-festival cosplay, or giant stage-event spectacle.
  - Do not let red wear cues become food-styling clutter.
- Scale and skill learning: `imagegen/references/prompting.md` was especially useful for keeping the paper suite and wear board away from text dependence and food-styling drift, while `documents/SKILL.md` and `iconography-lab/SKILL.md` helped the artifacts and uniforms feel like one coherent municipal world.
- Next-run seeds:
  - Schoolyard solar balloon workshop with patched envelopes, rolling cart kits, chalk launch maps, and dawn inflation fields.
  - Public beach fossil karaoke library with shell lyric cards, lifeguard shelves, and stage-canopy shade bands.
  - Tram depot shadow-puppet tournament with perforated screens, ticket lanterns, rehearsal jackets, and platform cue maps.

## Recent Additions

- Explored theme: `20260429-0256-velvet-aquarium-lost-and-found-boutique` - Velvet Aquarium Lost-and-Found Boutique.
- Explored formats: recovery-object atlas, occupational clerk lineup, rain-dark storefront exterior, handled claim-paper suite, architectural backroom section, repair wear board, tidal provenance map, quiet return documentary, and silent retrieval comic page.
- Useful prompt patterns:
  - Wet night-retail worlds stay coherent when the same recovery kit repeats everywhere: teal velvet, tagged drawers, smoked glass, shallow tank light, pearl paper, and tarnished brass unified object, page, room, and street scales.
  - Aquarium-adjacent prompts work better when fish and marine life remain secondary light sources and the main subjects are trays, tags, drawers, routes, and handoffs.
  - District maps can widen the corpus beyond interiors when they are framed as pinned printed artifacts with currents, runoff, benches, locker zones, and route circles instead of as glossy modern UIs.
  - Quiet retrieval scenes hold better than melodrama when the prompt emphasizes ordinary service labor, restrained gestures, and damp city weather.
- Avoid-list additions:
  - Do not follow this immediately with another teal aquarium boutique or another tagged-drawer recovery branch.
  - Do not let marine-adjacent prompts drift into pirate treasure, mermaid fantasy, aquarium spectacle, or cyberpunk neon.
  - Do not let velvet and brass cues become jewelry-ad glamour, luxury retail polish, or sentiment-heavy reunion staging.
- Scale and skill learning: `frontend-skill/SKILL.md` helped the storefront and map keep clean hierarchy without dashboard drift, while `iconography-lab/SKILL.md` helped the drawers, tags, brooches, trays, and hook silhouettes behave like one recognizable service world.
- Next-run seeds:
  - Basement origami earthquake arcade with folded hazard markers, coin trays, cabinet maps, and shockwave scoreboards.
  - Night orchard weather-vane cooking school with soot pans, gust maps, pear-wood benches, and recipe pennants.
  - Cloud bank for borrowed wedding gloves with drying cabinets, satin wear studies, claim slips, and storm-window displays.

## Latest Update

- Run slug: `20260429-1409-volcanic-orchard-perfume-exchange`
- Timestamp: `2026-04-29T14:09:20+08:00`
- Theme shift: moved the corpus away from nocturnal tabletop heists, schoolyard launch culture, apartment repair labor, and rain-soaked recovery retail into a speculative fragrance-and-commodity branch built from cooled fruit crates, basalt halls, condensation haze, occupational wardrobes, handled ledgers, and public exchange ritual.
- New formats: fragrance-object atlas, blue-hour civic exchange documentary, occupational fashion lookbook, auction terminal UI, terraced cooling-vault section, paper-and-label suite, rainy tram transfer still, and storefront installation photography.
- Useful prompt patterns:
  - Fragrance worlds stay specific when trade mechanics repeat everywhere: cooling windows, scent lots, blotter handling, bottle movement, and crate logic work better than bottle-only luxury language.
  - The same mineral kit carried this branch across object, fashion, interface, architecture, and street scales: basalt charcoal, sulfur cream paper, amber glass, olive leaf, bruised plum, oxidized brass, and wet stone.
  - Fashion and storefront prompts were strongest when they stayed occupational and public-facing instead of drifting into generic beauty advertising.
  - UI prompts worked best when framed as auction-and-allocation tools with one protected center and small edge modules rather than dense market dashboards.
- Avoid-list additions:
  - Do not follow this immediately with another perfume-exchange world, another rainy storefront branch, or another commodity-market UI.
  - Do not let future fragrance prompts become spa branding, tropical-resort perfume ads, mall-cosmetics counters, or luxury-minimalist emptiness.
  - Do not let volcanic atmosphere drift into lava spectacle, disaster cinema, dungeon fantasy, or rail-heist echoes.
- Scale and skill learning: `frontend-skill/SKILL.md` helped the exchange terminal and storefront hierarchy stay image-led instead of card-heavy, `iconography-lab/SKILL.md` helped the wardrobe and bottle-display codes stay coherent without branding drift, and `documents/SKILL.md` reinforced the handled-paper suite and cutaway discipline.
- Next-run seeds:
  - Glass-canopy aviary fashion catalog with migratory charts, silk weather capes, and roost-side fitting stools.
  - Inland salt circus seating atlas with striped usher uniforms, wedge tickets, and night-lot rigging plans.
  - Harbor tidepool typewriter camp with shell-key legends, damp ribbon tins, and evening copy desks.

## Latest Update

- Run slug: `20260429-0358-basement-origami-earthquake-arcade`
- Timestamp: `2026-04-29T03:58:10+08:00`
- Theme shift: moved the corpus away from damp nocturnal recovery retail, desert road care, and winter-regatta ceremony into a playable neighborhood game branch built from folded hazard markers, cabinet glow, ticket paper, cinderblock stairs, and ordinary laundromat life overhead.
- New formats: folded-prize atlas, after-school street entrance, cabinet HUD, handled ticket-and-map suite, laundromat-basement section cutaway, wear-and-repair board, no-text youth equipment family, and closing-time repair comic page.
- Useful prompt patterns:
  - Arcade branches stay specific when the same restrained kit repeats everywhere: cobalt cabinet shells, safety-orange fold lines, mint exit paint, cream ticket stock, pale concrete, charcoal rubber mats, and brushed aluminum carried the world across street, page, object, architecture, and interface scales.
  - Game UI prompts work better when they are framed as a real cabinet display with small edge clusters and a protected playfield instead of as a generic app dashboard.
  - Basement worlds become more believable when a mundane public layer sits above them; the laundromat and snack shop grounded the speculative venue without extra lore.
  - Equipment-family prompts need unusually strong no-text and no-logo constraints or they drift into fake branded merch.
- Avoid-list additions:
  - Do not follow this immediately with another youth-arcade basement or another folded-paper disaster play branch.
  - Do not let future arcade prompts become 1980s nostalgia shorthand, cyberpunk neon, mascot merch, varsity-logo clutter, or military-tactical gear.
  - Do not let disaster language turn playful tremor simulations into apocalypse rubble or bunker paranoia.
- Scale and skill learning: `game-ui-frontend/SKILL.md` helped protect the HUD playfield from dashboard drift, `frontend-skill/SKILL.md` reinforced the image-led hierarchy of the paper suite and section, and `imagegen/references/prompting.md` was useful for keeping both the UI and the printed matter away from dense readable text.
- Next-run seeds:
  - Schoolyard solar balloon workshop with patched envelopes, rolling cart kits, chalk launch maps, and dawn inflation fields.
  - Night orchard weather-vane cooking school with soot pans, gust pennants, pear-wood benches, and recipe weather boards.
  - Tram depot shadow-puppet tournament with perforated screens, ticket lanterns, rehearsal jackets, and platform cue maps.

## Latest Update

- Run slug: `20260429-0701-apartment-courtyard-stained-glass-repair-picnic`
- Timestamp: `2026-04-29T07:01:43+08:00`
- Theme shift: moved the corpus away from schoolyard launch culture, brass-band finals, basement arcades, aquarium retrieval retail, and desert caravan spectacle into a daylight domestic repair branch built from chipped stucco, bottle-green and amber fragments, putty, aprons, laundry lines, lunch tables, and repaired light.
- New formats: salvaged-pane atlas, inhabited courtyard documentary, balcony sun-test architecture, repair-ledger paper spread, clothesline accessory family, caustic wear board, folding support-rig family, and silent dusk reinstallation comic page.
- Useful prompt patterns:
  - Colored glass works best in this branch when it behaves like handled repair material first and a light effect second.
  - Ordinary apartment texture keeps the imagery from drifting into heritage-museum reverence or boutique craft branding.
  - Quiet object, paper, and architecture formats can replace the recurring section-and-poster rhythm without shrinking the branch.
- Avoid-list additions:
  - Do not follow this immediately with another stained-glass restoration branch or another lunch-in-a-courtyard social scene.
  - Do not let future colored-glass prompts become cathedral fantasy, wedding sentiment, or luxury-home renovation branding.
  - Do not let paper evidence suites drift into readable-note dependence.
- Scale and skill learning: `documents/SKILL.md` reinforced handled-paper hierarchy, `iconography-lab/SKILL.md` helped keep the apron and rig language coherent without branding drift, and `imagegen/references/prompting.md` was useful for keeping the documentary and paper prompts specific without overpolishing them.
- Next-run seeds:
  - Harbor tidepool typewriter camp with shell-key legends, tideproof cases, and damp instruction cards.
  - Rooftop mosquito-screen weaving club with patched mesh, citronella tins, and evening shadow tests.
  - Glacier tollhouse perfume archive with scent blotters, cold trays, and frost-marked travel receipts.

## Latest Update

- Run slug: `20260429-0256-velvet-aquarium-lost-and-found-boutique`
- Timestamp: `2026-04-29T02:56:14+08:00`
- Theme shift: moved the corpus away from dry road care, winter greenhouse sport, and legal daylight archive worlds into a damp nocturnal retail-recovery branch built from velvet trays, tagged drawers, shallow tank light, rain-dark masonry, and quiet return rituals.
- New formats: recovery-object atlas, occupational lineup, night storefront, claim-paper suite, boutique section cutaway, repair board, tidal provenance map, documentary return scene, and silent retrieval comic page.
- Useful prompt patterns:
  - A wet retail branch becomes more specific when the same claim-and-storage system appears in paper, trays, architecture, maps, and handoff scenes rather than only in props.
  - Decorative aquatic light works best as an environmental source, not as spectacle.
  - Map and comic formats are strong ways to widen a branch that might otherwise collapse into only interiors and still lifes.
- Avoid-list additions:
  - Do not follow this immediately with another aquarium recovery boutique or another city-rain retrieval story.
  - Do not let future wet-retail prompts become pirate fantasy, luxury jewelry branding, or sentimental reunion drama.
  - Do not let paper or map artifacts become dense readability tests.
- Scale and skill learning: `imagegen/references/prompting.md` was useful for constraining the map and paper suite away from readable-text dependence, `frontend-skill/SKILL.md` improved hierarchy in the storefront and map, and `iconography-lab/SKILL.md` helped the branch keep one consistent object-and-uniform code.
- Next-run seeds:
  - Basement origami earthquake arcade with folded hazard markers, coin trays, cabinet maps, and shockwave scoreboards.
  - Night orchard weather-vane cooking school with soot pans, gust maps, pear-wood benches, and recipe pennants.
  - Cloud bank for borrowed wedding gloves with drying cabinets, satin wear studies, claim slips, and storm-window displays.

## Latest Update

- Run slug: `20260429-0155-desert-veterinary-cinema-caravan`
- Timestamp: `2026-04-29T01:55:02+08:00`
- Theme shift: moved the corpus away from humid winter sport, daylight legal archives, and rooftop night-teaching into a dry road world built from patched wagons, humane animal care, lantern projection, dust-worn paper, and communal dusk instruction.
- New formats: road-kit atlas, wagon fleet review, sunset care documentary, dusk public-screening scene, handled paper suite, caravan section cutaway, repair wear board, and silent apprentice comic page.
- Useful prompt patterns:
  - Road branches become more specific when projection, treatment, storage, and public seating all share one physical language instead of behaving like separate themes.
  - Animal-care imagery stays more useful than rescue drama when it emphasizes wrapping, watering, waiting, and rest.
  - Vehicle-family reviews and tactile sections are a good way to widen the corpus beyond the recurring lineup-plus-board rhythm.
- Avoid-list additions:
  - Do not follow this immediately with another veterinary roadshow or another lantern-screen desert gathering.
  - Do not let future caravan prompts become steampunk spectacle, safari fantasy, or sentimental rescue posters.
  - Do not let paper artifacts or placards become text-legibility tests.
- Scale and skill learning: `documents/SKILL.md` reinforced the handled-paper hierarchy, `presentations/SKILL.md` helped the public-screening and fleet-review logic, and `imagegen/references/prompting.md` was especially useful for keeping the cinema surfaces non-critical and concrete.
- Next-run seeds:
  - Velvet aquarium lost-and-found boutique with damp claim tags, velvet trays, and orphaned glass charms.
  - Ceramic kite hospital at spring dust season with repair racks, painted braces, and courtyard test flights.
  - Night orchard weather-vane cooking school with soot pans, gust maps, and pear-wood benches.

## Latest Update

- Run slug: `20260429-1515-sea-glass-bathhouse-roller-disco`
- Timestamp: `2026-04-29T15:15:29+08:00`
- Theme shift: moved the corpus away from volcanic commodity exchange, nocturnal heist play, and domestic repair labor into a bright civic leisure branch built from sea-glass tile, coral railings, terrazzo rink curves, checkerboard lockers, striped servicewear, shell emblems, and coastal queue culture.
- New formats: crowd-filled bathhouse interior documentary, occupational lookbook, rink plan diagram, service-gear atlas, poster-and-ticket suite, floor-control console UI, full bathhouse cutaway, closing-lap key art, and street-scale exterior queue photography.
- Useful prompt patterns:
  - Bright leisure worlds stay specific when the same institutional kit repeats everywhere: sea-glass aqua, cream tile, coral rails, chrome, striped scarves, shell badges, citrus bottles, and terrazzo curves held the branch across room, page, object, interface, and street scales.
  - Roller imagery works better as municipal recreation than as disco nostalgia when the prompts emphasize queue rails, rental desks, locker rooms, ushers, claim tags, soda service, and ordinary multigenerational attendance.
  - Poster and plan prompts stayed stronger when readable copy was short and graphic hierarchy carried the image.
  - UI prompts improved when framed around pace, crowd flow, rentals, music, and concessions rather than security or abstract analytics.
- Avoid-list additions:
  - Do not follow this immediately with another retro roller venue, another checkerboard ticket branch, or another street-queue facade.
  - Do not let future skate prompts drift into derby violence, nightclub darkness, sports-brand merch, or nostalgia parody.
  - Do not let shell and sea-glass cues become resort hospitality branding, aquarium spectacle, or wedding stationery.
- Scale and skill learning: `iconography-lab/SKILL.md` helped the scarves, shells, and service accessories read as one civic leisure code, `brand-kit/SKILL.md` sharpened the poster and exterior emblem direction without pushing the branch into corporate branding, and `documents/SKILL.md` helped the plan, ticket, and cutaway prompts behave like printed artifacts rather than UI surfaces.
- Next-run seeds:
  - Apricot dune puppet opera with folding shade rigs, painted stage wagons, and linen usher uniforms.
  - Inland salt circus seating atlas with striped wedges, brass queue standards, and night-lot rigging.
  - Glass-canopy aviary fashion catalog with migratory scorecards, roost ladders, and silk weather capes.

## Latest Update

- Run slug: `20260429-1616-fossil-nail-academy-tropical-mall-atrium`
- Timestamp: `2026-04-29T16:16:01+08:00`
- Theme shift: moved the corpus away from sea-glass civic leisure, volcanic perfume exchange, and basalt heist tabletop play into a humid beauty-training retail branch built from fossil gray terrazzo, shell pink lacquer, celadon glass, amber resin, chrome tools, handled paper, and tropical atrium greenery.
- New formats: public documentary salon interior, occupational fashion lookbook, dense tool-and-polish atlas, museum-school manicure stratigraphy diagram, handled certificate-and-foil print suite, shade-matching kiosk UI, full academy cutaway, and rainy storefront campaign scene.
- Useful prompt patterns:
  - Beauty-world prompts became specific when framed around teaching, scheduling, tool handling, and public mall circulation rather than luxury pampering or influencer glamour.
  - The branch held together because the same material kit repeated across every scale: terrazzo, chrome, resin, vellum, foil, paper tabs, palms, translucent cases, and fossil swatches.
  - Diagram, ephemera, and UI prompts stayed much stronger when text was declared non-critical and graphic hierarchy did the explanatory work.
  - The storefront and cutaway formats stopped the run from collapsing into only close hands, bottles, and tablet surfaces.
- Avoid-list additions:
  - Do not follow this immediately with another nail salon, cosmetics academy, or tropical mall retail branch.
  - Do not let future beauty prompts drift into beige spa hospitality, cyberpunk neon salons, or generic cosmetics-ad branding.
  - Do not overload future print, diagram, or UI images with readable microcopy.
- Scale and skill learning: `iconography-lab/SKILL.md` helped the uniforms, gloves, cases, and fossil cues read as one occupational code without becoming a logo system, while `documents/SKILL.md` reinforced the paper suite and diagram as handled artifacts instead of abstract layouts. `imagegen/references/prompting.md` and `imagegen/references/sample-prompts.md` were useful reminders to keep the asset intent explicit and the text load low.
- Next-run seeds:
  - Public orchid boot repair kiosk in a flood-season concourse with waxed laces, puddled tile, and care cards.
  - Glass-canopy aviary fashion catalog with migratory scorecards, roost ladders, silk weather capes, and maintenance rails.
  - Indoor rain observatory for pastry glazes with humidity charts, test trays, mirrored drains, and tiled demo counters.

## Latest Update

- Run slug: `20260429-1752-night-meadow-pollen-observatory-field-guide`
- Timestamp: `2026-04-29T19:56:37+08:00`
- Theme shift: moved the corpus away from bright bathhouse leisure, perfume commerce, and tabletop heist play into a nocturnal civic-science publishing branch built from indigo cloth, cream paper, moss greens, amber task light, damp grasses, loupe hardware, folded inserts, and restrained cyan pollen glow.
- New formats: specimen contact sheet, pocket field-guide kit, foldout cross-section map, sticker-and-badge issue sheet, pop-up paper-engineering spread, observation-corner documentary, macro sampling closeup, and silent procedural comic page.
- Useful prompt patterns:
  - Micro-science branches stay specific when the same physical kit repeats across page, object, room, and process scales: field drawers, slides, envelopes, tabs, clothbinding, and damp grasses kept this run coherent.
  - Subtle sample glow works only when treated as a minor evidentiary cue; too much luminous emphasis pushes the branch into fantasy or sci-fi.
  - Publishing artifacts are stronger when text stays sparse and graphic hierarchy does the explanatory work.
  - A quiet room-scale bridge image prevents a print-heavy run from collapsing into only desk-bound flatlays.
- Avoid-list additions:
  - Do not follow this immediately with another pollen observatory, another greenhouse publishing branch, or another indigo-cream educational artifact suite.
  - Do not let future moth, pollen, or specimen prompts become occult fieldwork, butterfly-house tourism, or whimsical fairy-garden fantasy.
  - Do not turn collectible sheets into trendy merch or overstuff map/comic formats with readable copy.
- Scale and skill learning: `documents/SKILL.md` was the key non-ImageGen influence for keeping the map, badge sheet, and pop-up spread grounded as handled print artifacts rather than branding collateral. `imagegen/references/prompting.md` and `imagegen/references/sample-prompts.md` were useful for keeping every prompt explicit about asset intent and negative drift.
- Next-run seeds:
  - Harbor fog pastry meteorology almanac with laminated tide-dessert charts, sugar weather balloons, and rain-warped bakery paperwork.
  - Glass-canopy aviary fashion catalog with migratory scorecards, perch ladders, weather capes, and maintenance rails.
  - Municipal eclipse tattoo archive with carbon transfer sheets, civic appointment kiosks, skin-tone study cards, and blackout parade posters.

## Latest Update

- Run slug: `20260429-1933-glass-canopy-aviary-fashion-catalog`
- Timestamp: `2026-04-29T19:33:44+08:00`
- Theme shift: moved the corpus away from nocturnal micro-science publishing, tropical beauty training, retro civic leisure, and commodity exchange into a daylight public-ecology branch built from ribbed glass, celadon weather capes, apricot stamps, brass route tokens, wet stone, waxed canvas, and folded observation paper.
- New formats: conservatory interior documentary, steward fashion lookbook, passport-and-scorecard print suite, foldout flight-corridor map, full architectural section, dense keeper-tools atlas, rainy civic exterior, and silent comic page.
- Useful prompt patterns:
  - Public-ecology prompts stayed specific when they emphasized observation, guidance, maintenance, and visitor etiquette rather than conservation heroics or zoo spectacle.
  - The branch held together because one kit repeated across every scale: ribbed glass, celadon cloth, apricot paper accents, brass tags, wet stone, clipped glyph cards, and translucent feather sleeves.
  - Print and diagram prompts stayed stronger when text was kept short and the explanatory work moved into glyphs, routes, stamps, and folds.
  - The comic page and rainy exterior stopped the run from collapsing into only static object and section studies.
- Avoid-list additions:
  - Do not follow this immediately with another conservatory, aviary, or greenhouse-adjacent branch.
  - Do not let future bird prompts drift into mascot merch, Victorian winter-garden nostalgia, or zoo-family-marketing polish.
  - Do not overload future maps or paper suites with microcopy when the visual system can carry the image.
- Scale and skill learning: `documents/SKILL.md` reinforced the passports, map, and section as handled public artifacts rather than abstract layouts, while `iconography-lab/SKILL.md` helped the steward wardrobe, route tokens, and observation symbols read as one institutional code. `imagegen/references/prompting.md` and `imagegen/references/sample-prompts.md` were useful reminders to keep the asset intent explicit and the text burden low.
- Next-run seeds:
  - Public orchid boot repair kiosk in a flood-season concourse with waxed laces, puddled tile, and care cards.
  - Indoor rain observatory for pastry glazes with mirrored drains, humidity charts, and tiled demo counters.
  - Apricot dune puppet opera with folding shade rigs, painted stage wagons, and linen usher uniforms.

## Latest Update

- Run slug: `20260429-2003-municipal-eclipse-tattoo-archive`
- Timestamp: `2026-04-29T20:03:25+08:00`
- Theme shift: moved the corpus away from nocturnal micro-science publishing, tropical beauty training, bright civic leisure, and glass-canopy ecology into alternate-history body-marking bureaucracy built from soot transfer paper, oxidized copper, parchment folders, frosted glass, wax-seal oxblood, rainy stone, and muted skin-tone studies.
- New formats: civic intake-hall documentary, skin-tone study-card suite, eclipse transfer-sheet contact plate, poster-and-permit wall, appointment kiosk UI, full archive-building cutaway, public-service aftercare kit, and rainy exterior queue photography.
- Useful prompt patterns:
  - Tattoo-adjacent prompts stayed specific when framed around public service, filing, consent, queueing, consultation, and aftercare rather than rebellion, celebrity culture, or luxury self-expression.
  - The branch held together because the same institutional kit repeated across every scale: transfer paper, drawers, frosted glass, seals, stamps, manila stock, brass rails, and wet stone.
  - Interface, poster, and study-card prompts were strongest when text stayed non-critical and symbols, chips, body diagrams, and drawer references carried the explanatory work.
  - A street-scale exterior and a full cutaway section prevented the run from collapsing into only paper boards, kiosks, and flatlays.
- Avoid-list additions:
  - Do not follow this immediately with another permit-heavy archive, another eclipse bureaucracy, or another rainy public-queue facade.
  - Do not let future tattoo prompts drift into biker-shop flash, occult moon cult theater, fashion-week glamor, luxury salon branding, or graphic body-horror closeups.
  - Do not overuse black-circle eclipse motifs without enough secondary nouns such as sleeves, cards, seals, envelopes, rails, drawers, or aftercare objects.
- Scale and skill learning: `documents/SKILL.md` was the main non-ImageGen influence for keeping the permit wall, study cards, and cutaway grounded as handled civic artifacts, while `game-ui-frontend/SKILL.md` helped the kiosk stay dense and thematic without drifting into SaaS dashboard patterns. `imagegen/references/prompting.md` was useful for keeping the prompts explicit about asset intent and negative drift.
- Next-run seeds:
  - Harbor fog pastry meteorology almanac with laminated tide-dessert charts, sugar weather balloons, and rain-warped bakery paperwork.
  - Inland salt circus seating atlas with striped wedges, brass queue standards, paper wrist maps, and night-lot rigging.
  - Apricot dune puppet opera with folding shade rigs, painted stage wagons, linen usher uniforms, and lantern ticket lanes.

## Latest Update

- Run slug: `20260429-2104-stitched-moon-opera-fairground`
- Timestamp: `2026-04-29T21:04:43+08:00`
- Theme shift: moved the corpus away from permit-heavy civic filing, aviary ecology, pollen publishing, beauty training, bathhouse leisure, and boxed entertainment into a temporary public-performance branch built from stitched lunar cloth, apricot canvas, indigo print fields, oxblood ropes, dusty timber, brass lanterns, shellac, and worn paper.
- New formats: twilight fairground exterior documentary, rehearsal-wear lineup, poster-and-ticket suite, dense prop atlas, seating-and-cue diagram, full amphitheater cutaway, commemorative record keepsake set, and narrative performance key art.
- Useful prompt patterns:
  - Performance prompts stayed specific when they emphasized stage labor, seating logic, temporary construction, printed access tools, and handmade rigging instead of mystical spectacle or fantasy lore.
  - The branch held together because the same kit repeated across every scale: moon-white stitched cloth, apricot canvas, indigo print, oxblood rope, dusty timber, brass lanterns, and handled paper.
  - The print and diagram images were strongest when readable text stayed non-critical and the explanatory work moved into wedges, discs, punched cards, arrows, and folds.
  - The arrival exterior and performance climax were necessary bookends that kept the run from collapsing into only object plates, diagrams, and archival paper.
- Avoid-list additions:
  - Do not follow this immediately with another moon-opera, puppet-fairground, circus-lot, or indigo-apricot public-night branch.
  - Do not let future performance prompts drift into occult carnival symbolism, luxury festival merch, superhero staging, or generic concert-poster branding.
  - Do not overuse giant celestial discs without enough secondary nouns such as wagons, wedges, cue cards, pulleys, lanterns, masks, and bleacher rails.
- Scale and skill learning: `documents/SKILL.md` and `presentations/references/presentation-design-workflow.md` helped the print suite, diagram, and cutaway behave like handled public artifacts with clear hierarchy rather than like generic design boards. `imagegen/references/prompting.md` and `imagegen/references/sample-prompts.md` were useful for keeping every asset explicit about use case, composition, and drift control.
- Next-run seeds:
  - Harbor fog pastry meteorology almanac with laminated tide-dessert charts, sugar weather balloons, and rain-warped bakery paperwork.
  - Public orchid boot-repair concourse in flood season with waxed laces, puddled tile, care cards, and bench-side fittings.
  - Rooftop meteor choir instrument catalog with brass throat lamps, felt cases, wind pennants, and twilight rehearsal benches.

## Latest Update

- Run slug: `20260429-2240-harbor-fog-pastry-meteorology-almanac`
- Timestamp: `2026-04-29T22:40:22+08:00`
- Theme shift: moved the corpus away from temporary night-performance repetition, permit-heavy civic filing, greenhouse ecology, and micro-science publishing into a damp food-and-weather branch built from slate fog, butter glaze, cream paper, damp teak, copper hardware, flour dust, striped aprons, and sugar-balloon skins.
- New formats: dawn bakery-counter documentary, occupational apron lineup, almanac-and-claim-slip suite, harbor pressure wall chart, full bakery-loft section, sugar-balloon tool atlas, blue-hour storm window exterior, and silent apprentice comic page.
- Useful prompt patterns:
  - Food-system prompts stayed specific when framed around public utility, shift labor, handled stock, and weather interpretation rather than indulgence, branding, or luxury patisserie polish.
  - The branch held together because the same material kit repeated across every scale: fogged glass, striped aprons, cream paper, butter glaze, copper gauges, damp teak, flour dust, and sugar-balloon skins.
  - Print and diagram images were strongest when text stayed non-critical and explanation moved into gauges, wedges, pastry silhouettes, tide bands, and route stamps.
  - The room-scale counter scene, building section, and comic page were necessary bridges that kept the branch from collapsing into only object trays and paperwork.
- Avoid-list additions:
  - Do not follow this immediately with another pastry-weather branch, another harbor bakery system, or another sugar-balloon forecasting world.
  - Do not let future food prompts drift into mascot branding, brunch-lifestyle advertising, luxury patisserie glamor, or fantasy pastry magic.
  - Do not overuse barometers and pressure dials without enough secondary nouns such as trays, glaze tags, racks, cuffs, laminated strips, or rain-warped window cards.
- Scale and skill learning: `documents/SKILL.md` was the main non-ImageGen influence for keeping the almanac suite, wall chart, and section grounded as handled public artifacts, while `iconography-lab/SKILL.md` helped the apron insignia, chart tags, and token logic stay coherent without becoming a brand deck. `imagegen/references/prompting.md` and `imagegen/references/sample-prompts.md` were useful for keeping every asset explicit about use case and drift control.
- Next-run seeds:
  - Public orchid boot-repair concourse in flood season with waxed laces, puddled tile, care cards, and bench-side fittings.
  - Rooftop meteor choir instrument catalog with brass throat lamps, felt cases, wind pennants, and twilight rehearsal benches.
  - Inland salt circus seating atlas with striped wedges, brass queue standards, paper wrist maps, and night-lot rigging.

## Latest Update

- Run slug: `20260429-2317-flood-season-orchid-boot-repair-concourse`
- Timestamp: `2026-04-29T23:17:54+08:00`
- Theme shift: moved the corpus away from fog-bakery weather systems, performance-night spectacle, tattoo filing, and greenhouse civics into hard-daylight monsoon repair culture built from cream tile, algae green, oxblood leather, brass eyelets, black rubber, clipped claim tags, wet concrete, and pale orchid lilac.
- New formats: concourse documentary scene, occupational wardrobe lineup, care-card and claim-tag suite, flood-depth wall chart, full transit-repair section, dense tool atlas, elevated walkway exterior, intimate fit-check still, and silent commuter comic page.
- Useful prompt patterns:
  - Repair-service prompts stayed specific when framed around queueing, fitting, waterproofing, wear judgment, and everyday public labor rather than nostalgia, luxury retail, or disaster spectacle.
  - The branch held together because the same kit repeated across every scale: cream tile, algae green, oxblood leather, brass eyelets, black rubber, orchid lilac, wet concrete, and clipped repair tags.
  - Diagram prompts were strongest when the logic stayed physical and symbol-led, using depth bands, treads, sole samples, arrows, and dials instead of readable body text or dashboard chrome.
  - The intimate fit-check and silent comic page were necessary so the run did not collapse into only charts, sections, and flat object systems.
- Avoid-list additions:
  - Do not follow this immediately with another flood-repair concourse, another wet-transit civic service branch, or another orchid-coded public utility world.
  - Do not let future footwear prompts drift into luxury shoe-store glamor, nostalgic cobbler-shop romance, greenhouse fantasy, or disaster-movie melodrama.
  - Do not overuse claim-tag paperwork and tiled wall charts once the branch's material kit is already established.
- Scale and skill learning: `game-ui-frontend/SKILL.md` helped the wall chart stay edge-weighted and physical instead of dashboard-like, while `iconography-lab/SKILL.md` helped the wardrobe accents, lace clips, tags, and kiosk cues read as one recognizable civic code. `imagegen/references/prompting.md` and `imagegen/references/sample-prompts.md` kept the asset intent explicit and the text burden low.
- Next-run seeds:
  - Rooftop meteor choir instrument catalog in dry winter sun with felt cases, wind pennants, and throat-lamp fittings.
  - Noon quarry lifeguard training ground with chalk rafts, zinc whistles, striped ramps, and heat-blasted concrete.
  - Pocket glacier wrestling sticker league with crushed-ice vinyl, mascot towels, coin lockers, and lunch-counter trophies.

## Latest Update

- Run slug: `20260430-0120-rooftop-meteor-choir-instrument-catalog`
- Timestamp: `2026-04-30T01:20:40+08:00`
- Theme shift: moved the corpus away from bright toy retail, wet repair concourses, pastry-weather paperwork, and other public-service branches into adult winter performance culture built from oxidized brass, smoked glass, ash felt, charcoal concrete, cream score paper, muted teal, and pale apricot signal marks.
- New formats: blue-hour rooftop rehearsal documentary, orthographic instrument family sheet, score-and-pennant print spread, physical cue-map wall board, full amphitheater cutaway, dense carry-gear atlas, poster-and-ticket suite, and field-recording album package.
- Useful prompt patterns:
  - Music-world prompts stayed specific when framed around rehearsal labor, cue sequencing, instrument handling, print artifacts, and rooftop circulation instead of mystical lore, celebrity branding, or glossy concert spectacle.
  - The branch held together because the same kit repeated across every scale: oxidized brass, smoked glass, charcoal wool, ash felt, cream paper, muted teal, and pale apricot signal accents.
  - Print-heavy prompts were strongest when text stayed sparse and non-critical while symbols, cue arcs, ticket strips, meteor streaks, and notation fragments carried the explanatory work.
  - The rehearsal scene and full cutaway were necessary anchors so the run did not collapse into only object sheets and paper systems.
- Avoid-list additions:
  - Do not follow this immediately with another rooftop-choir branch, another winter concrete performance world, or another charcoal-and-brass nocturnal music system.
  - Do not let future music prompts drift into wizard-concert fantasy, glossy collector-vinyl fetishism, celebrity portrait covers, or generic indie-poster chic.
  - Do not overuse meteor streaks and circular cue diagrams without enough secondary nouns such as pennants, cases, lamp collars, stair towers, clips, and score rolls.
- Scale and skill learning: `documents/SKILL.md` was the main non-ImageGen influence for keeping the score spread, cue map, poster suite, and album package grounded as handled print artifacts, while `remotion/SKILL.md` was useful as a visual accelerant for cue sequencing and key-art restraint even in single-frame outputs. `imagegen/references/prompting.md` kept the prompts explicit about asset intent and drift control.
- Next-run seeds:
  - Summer pavement aquarium rental booth with translucent buckets, hose reels, chalk tide boards, and curbside canopies.
  - Cardboard dinosaur dentist playset showroom with slot-tab packaging, paper bibs, suction tools, murals, and token sheets.
  - Pocket glacier wrestling sticker league with frosted locker coins, mascot towels, bracket posters, and rinkside lunch-counter artifacts.

## Latest Update

- Run slug: `20260430-0335-monastic-kite-kitchen-safety-manual`
- Timestamp: `2026-04-30T03:35:59+08:00`
- Theme shift: moved the corpus away from bright curbside summer service, rooftop performance culture, toy-retail spectacle, and other public-facing daylight worlds into winter monastic labor built from soot-black timber, ash-white plaster, indigo aprons, pale rice paper, oxidized copper, ochre flour, braided hemp, and tiny vermilion warnings.
- New formats: winter kitchen documentary scene, safety-tool inventory lineup, handled poster-and-token suite, wind-and-smoke route board, full monastery section cutaway, occupational apron lineup, singed-tail repair still life, and silent instructional comic page.
- Useful prompt patterns:
  - Severe institutional prompts stayed specific when framed around labor, patching, tagging, routing, and room adjacencies rather than mysticism, lore, or travel-poster grandeur.
  - The branch held together because the same material kit repeated across every scale: soot-black timber, ash-white plaster, indigo cloth, pale rice paper, copper hardware, ochre flour, hemp cord, and muted vermilion warnings.
  - Diagram and print prompts were strongest when explanation moved into icons, route lines, clipped room cards, seals, and wear marks instead of readable body text.
  - The interior scene, sectional cutaway, and comic page were necessary anchors so the run did not collapse into only tabletop paper suites and tool spreads.
- Avoid-list additions:
  - Do not follow this immediately with another monastery branch, another soot-and-indigo winter institution, or another kite-safety teaching world.
  - Do not let future ritual or craft prompts drift into wizard fantasy, shrine spectacle, costume-pageantry glamor, or heritage-tourism romance.
  - Do not overuse seal tokens, warning posters, and route boards once the branch's internal code is already established.
- Scale and skill learning: `documents/SKILL.md` helped the poster suite and route board stay tactile, symbol-led, and handled instead of brochure-clean, while `iconography-lab/SKILL.md` helped the bell tags, apron badges, seal tokens, and warning marks read as one institutional code without becoming explicit branding. `imagegen/references/prompting.md` kept each asset explicit about drift control and intended use.
- Next-run seeds:
  - Pocket glacier wrestling sticker league with crushed-ice vinyl, locker coins, frosted bracket posters, lunch-counter trophies, and towel graphics.
  - Desert tollbooth perfume test track with heat-warped sample cards, gas receipts, scent cones, and asphalt mirage lanes.
  - Cardboard dinosaur dentist playset showroom with slot-tab packaging, paper bibs, suction tools, murals, and waiting-room token sheets.

## Latest Update

- Run slug: `20260430-1127-pocket-glacier-wrestling-sticker-culture`
- Timestamp: `2026-04-30T11:49:01+08:00`
- Theme shift: moved the corpus away from service counters, winter safety paperwork, toy-retail spectacle, and other branch-like public systems into improvised neighborhood sports culture built from glacier cyan, safety orange, bruised plum, tape white, scratched aluminum, wet concrete, frosted vinyl, and charcoal rubber.
- New formats: finals-night sinkhole panorama, sticker-and-patch identity atlas, straight-on wrestler lineup, suspended bracket scoreboard, full sinkhole arena section, concession-and-entry artifact suite, after-match repair bench closeup, and silent underdog comic page.
- Useful prompt patterns:
  - Amateur sports prompts stayed specific when framed around local spectators, damp labor, municipal improvisation, patched equipment, and public circulation rather than heroic victory poses or glossy franchise branding.
  - The branch held together because the same material kit repeated across every scale: glacier cyan, safety orange, plum bruises, tape white, frosted vinyl, scratched aluminum, wet concrete, and grip rubber.
  - Venue-display prompts were strongest when treated as suspended arena hardware with plexi, cables, bracket tabs, and penalty lamps instead of app UI cards.
  - The wide arena still, sectional cutaway, and silent comic page were necessary anchors so the run did not collapse into only merch spreads and wardrobe studies.
- Avoid-list additions:
  - Do not follow this immediately with another youth ice-sports branch, another sinkhole-arena world, or another cold cyan-and-orange neighborhood finals story.
  - Do not let future sports prompts drift into pro-league sponsor polish, mascot branding, superhero combat poses, or Olympic-facility slickness.
  - Do not overuse sticker flat lays, bracket boards, and concession suites once the league code is already established.
- Scale and skill learning: `iconography-lab/SKILL.md` was the crucial non-ImageGen influence for keeping stickers, belt markers, pennants, and wardrobe accents recognizable without turning into explicit team branding. `imagegen/references/prompting.md` helped keep every asset explicit about scale, object intent, and drift control so the run could jump from arena panorama to comic page without losing the core kit.
- Next-run seeds:
  - Cardboard dinosaur dentist playset showroom with x-ray bibs, rinse-sink accessories, slot-tab boxes, mural teeth, and token reward sheets.
  - Cliffside rain organ playground with brass pipes, wet concrete slides, queue pennants, echo tunnels, and waterproof learning plaques.
  - Desert tollbooth perfume test track with heat-warped sample cards, scent cones, gas receipts, asphalt mirage lanes, and roadside fitting uniforms.

## Latest Update

- Run slug: `20260430-1126-pocket-glacier-wrestling-sticker-league`
- Timestamp: `2026-04-30T11:26:08+08:00`
- Theme shift: moved the corpus away from winter monastic labor, curbside aquarium service, rooftop music culture, and other handled institutional worlds into neighborhood youth sports fandom built from crushed-ice aqua, freezer white, cherry syrup red, cobalt gloves, butter-yellow laces, frosted vinyl, brushed aluminum, and damp snack-bar plexi.
- New formats: rinkside documentary scene, dense sticker sheet, locker-shelf memorabilia lineup, bracket-and-ticket print suite, full arena cutaway, handheld officiating console, prize-counter packaging family, and silent championship comic page.
- Useful prompt patterns:
  - Playful sports prompts stayed specific when framed around sticker swapping, bracket ritual, snack-counter commerce, taped repairs, kid-handled gear, and miniature venue logic instead of professional-sports spectacle or toy-store polish.
  - The branch held together because the same material kit repeated across every scale: crushed-ice aqua, freezer white, cherry syrup red, cobalt, butter yellow, frosted vinyl, brushed aluminum, and cloudy plexiglass.
  - Collectible prompts were strongest when text stayed short and noncritical while mask silhouettes, belt charms, token chips, halftone, and wear carried the explanatory work.
  - The documentary opener, cutaway, and comic page were necessary anchors so the run did not collapse into only merch spreads and product groupings.
- Avoid-list additions:
  - Do not follow this immediately with another youth-sports sticker world, another cherry-red and ice-aqua neighborhood spectacle, or another merch-driven winter league branch.
  - Do not let future sports prompts drift into hockey broadcast realism, esports polish, superhero combat, or luxury resort advertising.
  - Do not overuse lunchboxes, bracket posters, and token sleeves once this branch's object vocabulary has already been established.
- Scale and skill learning: `myth-merch-studio/SKILL.md` was the key non-ImageGen influence for making the sticker sheet, prize packets, lunchbox, and bonus-card logic feel like local fandom goods rather than generic toy retail, while `iconography-lab/SKILL.md` kept the wrestler masks, belt charms, nicknames, and penalty chips inside one coherent icon system. `presentations/SKILL.md` helped the bracket suite, scoreboard console, and comic pacing stay playful without sliding into generic dashboard or brochure layouts. `imagegen/references/prompting.md` kept the prompts explicit about drift away from pro-sports and esports cliches.
- Next-run seeds:
  - Desert tollbooth perfume test track with heat-warped sample cards, gas receipts, scent cones, and mirage lane markers.
  - Cardboard dinosaur dentist playset showroom with slot-tab packaging, suction tools, paper bibs, murals, and token sheets.
  - Tidal library lifeboat mascot camp with damp pennants, bunk cards, oar tags, and rescue-story comic strips.

## Latest Update

- Run slug: `20260430-1221-public-quarry-wedding-cake-inspection-hangar`
- Timestamp: `2026-04-30T12:21:56+08:00`
- Theme shift: moved the corpus away from desert roadside commerce, youth sports-fandom objects, monastic safety systems, curbside animal-rental service, and toy-retail spectacle into edible civic architecture built from whipped-cream white, limestone beige, apricot safety trim, cherry seals, pale sage tarps, brushed steel, and powdered sugar dust.
- New formats: dawn quarry arrival documentary, edible core-sample atlas, handled clipboard-and-gauge suite, physical tier-load inspection board, full hangar sectional cutaway, inspector workwear lineup, blue-hour release convoy, and silent inspection-to-departure comic page.
- Useful prompt patterns:
  - Food-world prompts stayed specific when framed around public labor, routing, structural checks, wrapping, and release procedure instead of romance, bakery luxury, or fantasy spectacle.
  - The branch held together because the same material kit repeated across every scale: whipped-cream white, limestone beige, apricot safety accents, cherry tags, sage cloth, brushed steel, and powder dust.
  - Diagram and paperwork prompts were strongest when explanation moved into clipped overlays, wedge icons, sample trays, tags, seals, and lane markings instead of readable body text.
  - The cutaway and comic page were necessary anchors so the run did not collapse into only object atlases and paper spreads.
- Avoid-list additions:
  - Do not follow this immediately with another quarry institution, another giant-food inspection branch, or another cream-limestone-apricot civic world.
  - Do not let future ceremonial-food prompts drift into wedding-magazine romance, luxury patisserie styling, fantasy palace decor, or cute confectionery whimsy.
  - Do not overuse specimen trays, clipboard suites, and wall boards once this branch's internal code is already established.
- Scale and skill learning: `documents/SKILL.md` helped the clipboard suite and board stay tactile, clipped, and hierarchy-driven instead of stationery-clean, while `game-ui-frontend/SKILL.md` helped the board and cutaway stay legible through grouped modules and protected negative space rather than dashboard drift. `imagegen/references/prompting.md` and `imagegen/references/sample-prompts.md` reinforced explicit use-case labeling and anti-drift prompt structure.
- Next-run seeds:
  - Midnight mushroom taxicab choir depot with damp fare cards, route rehearsals, meter lights, and bioluminescent uniforms.
  - Cardboard dinosaur dentist playset showroom with slot-tab packaging, paper bibs, suction tools, murals, and reward tokens.
  - Cliffside rain organ playground with wet brass pipes, concrete echo tunnels, queue pennants, and waterproof learning plaques.

## Latest Update

- Run slug: `20260430-1324-cliffside-rain-organ-playground`
- Timestamp: `2026-04-30T13:24:43+08:00`
- Theme shift: moved the corpus away from edible inspection infrastructure, roadside perfume commerce, youth sticker leagues, and other branch-like public systems into weather-driven coastal leisure architecture built from oxidized brass, storm-blue water, wet concrete, rope beige, mustard slickers, muted burgundy pennants, and amber lamp glow.
- New formats: fog-damp arrival panorama, rain-hardware atlas, waterproof poster-and-pennant suite, full cliff section cutaway, wet-weather lineup, sudden-shower keyframe, night listening scene, and silent discovery comic page.
- Useful prompt patterns:
  - Rain-world prompts stayed specific when framed around acoustic cause-and-effect, runoff paths, terraces, tuning labor, and public gathering rather than disaster spectacle or fantasy ruin lore.
  - The branch held together because the same material kit repeated across every scale: oxidized brass, wet concrete, storm sea, rope rails, muted pennants, mustard slickers, and small amber lamps.
  - Print prompts were strongest when icons, route numerals, pipe silhouettes, and weathering carried the explanation instead of readable copy.
  - The landscape opener, cliff section, motion keyframe, and comic page were necessary anchors so the run did not collapse into only wall ephemera and object studies.
- Avoid-list additions:
  - Do not follow this immediately with another rain-activated public-instrument branch, another stormy cliff institution, or another oxidized-brass and wet-concrete coastal palette.
  - Do not let future weather-play prompts drift into disaster cinema, fantasy citadel ruins, concert-stage spectacle, or tourism-brochure seaside charm.
  - Do not overuse pennant suites, tiny route numerals, and child-in-rain discovery beats once this branch's visual logic is already documented.
- Scale and skill learning: `frontend-skill/SKILL.md` helped the opener, poster, and night scene stay compositionally clear without dashboard clutter, `documents/SKILL.md` helped the poster suite feel handled and weatherproof rather than brochure-clean, and `remotion/SKILL.md` helped the keyframe and comic page sharpen into distinct sequential beats. `imagegen/references/prompting.md` and `imagegen/references/sample-prompts.md` reinforced explicit use-case framing and anti-drift constraints.
- Next-run seeds:
  - Cardboard Dinosaur Dentist Playset Showroom with slot-tab surgery bays, rinse-sink tools, mural teeth, and token prize sheets.
  - Midnight Mushroom Taxicab Choir Depot with damp fare cards, glowing meters, rehearsal route maps, and spore-soft commuter uniforms.
  - Portable Ash Beekeeping Chapel Kit with soot veils, wax seals, collapsible hive frames, and gray pilgrimage ponchos.

## Latest Update

- Run slug: `20260430-1424-cardboard-dinosaur-dentist-playset-showroom`
- Timestamp: `2026-04-30T14:24:16+08:00`
- Theme shift: moved the corpus away from cliffside rain architecture, quarry inspection labor, desert tollbooth perfume commerce, and youth glacier-sports fandom into tabletop kid-product design built from kraft cardboard, dental teal, bubblegum pink, butter yellow, pale X-ray blue, felt tooth pieces, acetate windows, and paper fasteners.
- New formats: showroom hero photograph, dense accessory atlas, pegboard packaging suite, foldout assembly-and-care board, full clinic sectional cutaway, figure-and-costume lineup, Saturday demo keyframe, and silent assembly-to-sticker comic page.
- Useful prompt patterns:
  - Toy-system prompts stayed specific when anchored to cardboard engineering, die-cut tabs, felt pieces, acetate windows, scuffed demo wear, and reward-token logic rather than franchise lore or glossy collector polish.
  - The branch held together because the same material kit repeated across every scale: kraft cardboard, dental teal, bubblegum pink, butter yellow, pale X-ray blue, felt, acetate, and paper fasteners.
  - Product and print prompts were strongest when icon shapes, arrows, hang tabs, token chips, and silhouette families carried the explanation instead of readable package copy.
  - The opener, cutaway, keyframe, and comic page were necessary anchors so the run did not collapse into only packaging and accessory flat lays.
- Avoid-list additions:
  - Do not follow this immediately with another cardboard toy branch, another dentistry world, or another kraft-brown and bubblegum-pink kid-commercial ecosystem.
  - Do not let future toy prompts drift into known franchise mimicry, mascot overload, collectible-box fetishism, or pristine digital package renders.
  - Do not overuse pegboard packaging walls, sticker-reward beats, and felt-tooth closeups once this branch's vocabulary is already documented.
- Scale and skill learning: `frontend-skill/SKILL.md` helped the packaging wall, foldout board, and keyframe preserve hierarchy without clutter, while `iconography-lab/SKILL.md` helped the cast, bibs, brace strips, and prize chips behave like one internal code instead of a logo-heavy mascot brand. `imagegen/references/prompting.md` and `imagegen/references/sample-prompts.md` reinforced explicit material and anti-drift constraints so the branch could jump from retail hero to comic page without losing its kit.
- Next-run seeds:
  - Midnight Mushroom Taxicab Choir Depot with damp fare cards, glowing meters, route rehearsal maps, and spore-soft commuter uniforms.
  - Portable Ash Beekeeping Chapel Kit with soot veils, wax seals, collapsible hive frames, and gray pilgrimage ponchos.
  - Mineral Sunscreen Reef Classroom with sunscreen stones, tide charts, field notebooks, and reef-safe sample boards.

## Latest Update

- Run slug: `20260430-1543-subzero-seed-bank-accession-vault`
- Timestamp: `2026-04-30T15:43:46+08:00`
- Theme shift: moved the corpus away from cardboard toy retail, cliffside rain-play architecture, edible quarry inspection, and roadside fragrance commerce into cold agricultural preservation science built from frosted polycarbonate, aluminum freezer drawers, pale sage accession packets, cobalt tabs, amber desiccant capsules, graphite gaskets, and frost bloom.
- New formats: documentary cold-room aisle, dense accession artifact atlas, expert viability console, physical routing wall, repeated-form weathering board, handled notebook spread, multi-level freezer cutaway, and silent retest-to-storage comic page.
- Useful prompt patterns:
  - Preservation prompts stayed specific when framed around drawers, trays, gaskets, packet sleeves, desiccant, humidity cards, duplicate routes, and retest flow rather than around visible crops or greenhouse scenery.
  - The branch held together because the same material kit repeated across every scale: frosted polycarbonate, aluminum, pale sage paper, cobalt markers, amber indicator chips, graphite rubber, and frost haze.
  - Diagram and notebook prompts were strongest when pockets, tags, clipped strips, route lanes, and shape hierarchy carried the explanatory work instead of readable prose.
  - The opener, routing wall, cutaway, and comic page were necessary anchors so the run did not collapse into only tabletop grids and flat lays.
- Avoid-list additions:
  - Do not follow this immediately with another cold archive, seed-bank branch, or pale-sage-and-cobalt freezer system.
  - Do not let future preservation prompts drift into greenhouse romance, startup biotech dashboard polish, dystopian sci-fi bunkers, or climate-disaster spectacle.
  - Do not overuse packet spreads, humidity strips, freezer maps, and cryobox wear boards once this branch's visual code is already documented.
- Scale and skill learning: `frontend-skill/SKILL.md` helped the console and cutaway stay legible without dashboard clutter, while `documents/SKILL.md` helped the notebook spread and routing wall feel clipped, handled, and operational rather than brochure-clean. `imagegen/references/prompting.md` and `imagegen/references/sample-prompts.md` reinforced explicit use-case framing and anti-drift constraints so the branch could move from documentary photography to UI to comic continuity without losing its material code.
- Next-run seeds:
  - Midnight Mushroom Taxicab Choir Depot with damp fare cards, glowing meters, rehearsal route maps, and velvet spore-soft commuter uniforms.
  - Mineral Sunscreen Reef Classroom with chalky sunscreen stones, reef-safe sample boards, tide charts, and student field notebooks.
  - Portable Ash Beekeeping Chapel Kit with soot veils, wax seals, collapsible hive frames, and gray pilgrimage ponchos.

## Latest Update

- Run slug: `20260430-1700-velvet-moth-lantern-procession`
- Timestamp: `2026-04-30T17:00:21+08:00`
- Theme shift: moved the corpus away from cold preservation science, toy retail, roadside testing commerce, and other support-heavy systems into ceremonial civic night built from soot-blue velvet, paper-ivory lantern skins, persimmon trim, candle amber, tarnished brass, and rain-dark stone.
- New formats: moonlit street-procession opener, dense ritual-object atlas, wardrobe-and-rig lineup, tactile poster-ticket suite, adaptive-reuse float-atelier cutaway, physical moon-route wayfinding board, canal-bridge keyframe, and quiet courtyard aftermath scene.
- Useful prompt patterns:
  - Ceremony prompts stayed specific when framed around public route logic, lantern handling, garment fasteners, damp paper, bell cues, and adaptive-reuse architecture instead of fantasy lore or generic carnival spectacle.
  - The branch held together because the same material kit repeated across every scale: soot-blue velvet, paper ivory, candle amber, tarnished brass, muted persimmon, and wet stone.
  - Print and wayfinding prompts were strongest when short labels, route bands, clips, seals, and icon silhouettes carried the explanation instead of long readable text.
  - The opener, cutaway, keyframe, and aftermath scene were necessary anchors so the run did not collapse into only object atlases, costume records, and paper spreads.
- Avoid-list additions:
  - Do not follow this immediately with another lantern procession, another ceremonial moth icon world, or another soot-blue-and-amber night festival branch.
  - Do not let future ritual prompts drift into masquerade-ball cliche, theme-park carnival neon, steampunk fantasy, or luxury wedding stationery polish.
  - Do not overuse route boards, paper tickets, and velvet cape lineups once this branch's icon system has already been established.
- Scale and skill learning: `iconography-lab/SKILL.md` helped the moth wings, pennants, clasps, and bells behave like one internal code without turning into explicit branding, while `documents/SKILL.md` kept the poster suite and route board tactile, clipped, and municipally handled rather than brochure-clean. `frontend-skill/SKILL.md` helped the opener, cutaway, and keyframe preserve a strong single focal composition. `imagegen/SKILL.md` kept the prompts explicit about use case, material kit, and anti-drift constraints.
- Next-run seeds:
  - Daylight body-scale athletics or fashion world with warm neutrals and almost no paper artifacts.
  - Domestic food branch with soft daylight, ceramic surfaces, and zero public-route logic.
  - Micro-scale biological or mineral study that avoids public ceremony and architecture entirely.

## Latest Update

- Run slug: `20260430-1524-midnight-mushroom-taxicab-choir-depot`
- Timestamp: `2026-04-30T15:24:40+08:00`
- Theme shift: moved the corpus away from cliffside rain-play architecture, cold agricultural preservation science, cardboard toy retail, and roadside fragrance testing into nocturnal transit labor built from taxi yellow, damp black, sodium amber, paper cream, fungal green, oxblood vinyl, smoked chrome, and rain-dark concrete.
- New formats: route-rehearsal depot documentary, night-shift uniform lineup, fare-card-and-token paper suite, midnight route board, full depot cutaway, dense meter-key atlas, wet curb departure scene, and a silent rookie-route comic page.
- Useful prompt patterns:
  - Strange transit prompts stayed specific when framed around dispatch logic, wet route cards, meter maintenance, bay assignments, and shift ritual rather than retro noir or fantasy mushroom lore.
  - The branch held together because the same material kit repeated across every scale: yellow cab paint, damp papers, meter brass, fungal lamp glow, oxblood vinyl, smoked chrome, and rain-darkened concrete.
  - Paper-heavy prompts were strongest when text stayed sparse and noncritical while route numerals, bay tokens, fare slips, and vocal-part badges carried the explanatory work.
  - The rehearsal opener, depot cutaway, curb departure, and comic page were necessary anchors so the run did not collapse into only props and paperwork.
- Avoid-list additions:
  - Do not follow this immediately with another choir-depot branch, another nocturnal taxi bureaucracy, or another sodium-amber and fungal-green night world.
  - Do not let future transit prompts drift into crime-noir cliché, cyberpunk neon, musical-theater excess, or whimsical fantasy mushroom villages.
  - Do not overuse dispatch ledgers, route boards, and fare slips without enough curb behavior, maintenance context, and depot-room specificity.
- Scale and skill learning: `documents/SKILL.md` kept the fare slips, route cards, bay sheets, and rehearsal board tactile and procedural instead of poster-clean, while `iconography-lab/SKILL.md` helped the route loops, cap badges, lamp symbols, and part tokens behave like one internal municipal code. `imagegen/references/prompting.md` helped keep the branch explicit about labor and anti-drift constraints.
- Next-run seeds:
  - Portable Ash Beekeeping Chapel Kit with soot veils, wax seals, collapsible hive frames, and gray pilgrimage ponchos.
  - Mineral Sunscreen Reef Classroom with chalky sunscreen stones, reef-safe sample boards, tide charts, and student field notebooks.
  - Rainy Civic Accordion Repair Picnic with tarp tables, damp case tags, busker permits, folded stools, and steam-wet tuning charts.

## Latest Update

- Run slug: `20260430-1929-orchard-festival-needlepoint-weather-banners`
- Timestamp: `2026-04-30T19:29:39+08:00`
- Theme shift: moved the corpus away from laundromat athletics, apartment domesticity, and ceremonial night branches into daylight orchard public ritual built from oat cloth, indigo thread, cider amber, russet apples, tarnished brass, weathered wood, and hill-sky blue.
- New formats: dawn lane documentary, stitched-regalia lineup, dense weather-hardware atlas, handled route-and-judging paper suite, timber pavilion section, blue-hour ridge parade, silent repair comic page, and a disciplined material-study closer.
- Useful prompt patterns:
  - Textile-heavy prompts stayed specific when every banner carried a concrete forecast symbol with visible repair, grommets, poles, and stitch families rather than acting as generic decorative bunting.
  - The branch held together because the same material kit repeated across street scenes, portraiture, paper artifacts, architecture, procession, comics, and material boards.
  - Paper prompts were strongest when text stayed sparse and noncritical while fold lines, score slips, legend cards, clips, and stamp marks carried the informational logic.
  - The opener, pavilion section, parade, and comic page were necessary anchors so the run did not collapse into only object atlases and folk costume studies.
- Avoid-list additions:
  - Do not follow this immediately with another orchard banner festival, another judged textile pageant, or another oat-indigo-brass rural branch.
  - Do not let future textile prompts drift into ren-fair parody, generic harvest bunting, tourism-board nostalgia, or costume-drama fantasy.
  - Do not overlabel architectural sections or overdepend on cloth-light procession scenes now that this branch has established both.
- Scale and skill learning: `frontend-skill/SKILL.md` helped the opener, lineup, section, and parade preserve a single dominant visual idea instead of drifting into collage. `documents/SKILL.md` kept the route map and judging booklet tactile, clipped, and handled. `iconography-lab/SKILL.md` helped sun, rain, frost, wind, and harvest sheaf motifs behave like one internal civic code. `imagegen/SKILL.md` kept the prompts explicit about use case, material kit, and anti-drift constraints.
- Next-run seeds:
  - `mineral-sunscreen-reef-classroom`
  - `paper-kite-puppet-hospital-playroom`
  - `winter-canal-biscuit-zoology-fair`

## Latest Update

- Run slug: `20260501-0030-winter-canal-biscuit-zoology-fair`
- Timestamp: `2026-05-01T00:30:22+08:00`
- Theme shift: moved the corpus away from duplicated reef-classroom output and the newly landed aquarium-pier entertainment branch into cold-weather civic food taxonomy built from flour white, canal slate, ginger brown, sugared blue, cranberry wax, brass, wool charcoal, frosted glass, and stamped paper.
- New formats: winter canal documentary opener, dense biscuit specimen atlas, handled field-guide and tasting-passport suite, floating pavilion section, silent child-facing comic page, and a disciplined material-study closer.
- Useful prompt patterns:
  - Biscuit prompts stayed specific when every animal shape behaved like a specimen with trays, habitat cards, migration arrows, crumb brushes, and passport-stamp logic rather than generic bakery styling.
  - The branch held together because the same cold civic kit repeated across street documentary, object taxonomy, paper artifacts, architecture, comics, and materials.
  - Paper prompts were strongest when text stayed sparse and noncritical while flour dust, fold lines, damp marks, twine, and skating-ticket residue carried the educational logic.
  - The six-image focused run was stronger than padding in a lineup or second opener because it kept only distinct visual families.
- Avoid-list additions:
  - Do not follow this immediately with another winter canal fair, another biscuit-taxonomy branch, or another flour-blue-ginger public tasting world.
  - Do not let future food prompts drift into Christmas-market cliché, chalet fantasy, glossy dessert editorial, or mascot-heavy cuteness.
  - Do not overuse specimen trays, tasting passports, or cutaway canal pavilions now that this branch has documented all three.
- Scale and skill learning: `frontend-skill/SKILL.md` helped the street opener and pavilion section stay legible as one dominant scene rather than collage. `documents/SKILL.md` kept the field-guide suite tactile and handled. `iconography-lab/SKILL.md` helped migration arrows, habitat cards, specimen tags, and passport stamps behave like one internal civic code. `imagegen/SKILL.md` and its prompt references kept the edible subject grounded in use case, material kit, and anti-drift constraints.
- Next-run seeds:
  - `paper-kite-puppet-hospital-playroom`
  - `moon-garden-seismograph-jewelry-studio`
  - `legal-snowmelt-mushroom-orchestra-kiosk`

- Run slug: `20260501-0006-brineglass-tide-pinball-aquarium-pier`
- Timestamp: `2026-05-01T00:06:11+08:00`
- Theme shift: moved the corpus away from reef pedagogy, orchard ritual, and the recent atlas-plus-material-board habit into hybrid public entertainment built from sea-glass teal, brass, oyster white, coral signal red, wet wood, ribbed glass, shell tokens, and luminous mechanical playfields.
- New formats: blue-hour boardwalk documentary, civic-uniform lineup, rare top-down pinball playfield, prize-counter product family, handled ticket-and-map suite, full pier-arcade section, public kiosk UI, and silent jelly-dome comic page.
- Useful prompt patterns:
  - Entertainment prompts stayed specific when framed around physical machine parts, queue rails, prize objects, routefinding, and ticket logic rather than around generic neon arcade language.
  - The branch held together because the same material kit repeated across exterior architecture, body-scale uniforms, play surfaces, paper artifacts, retail objects, interface, and narrative panels.
  - UI prompts were strongest when they explicitly rejected enterprise dashboard grammar and instead named chunky touch targets, public-terminal wear, queue states, and countdown behavior.
  - The run stayed fresh because the rare board-surface format and kiosk screen replaced the usual atlas and material-board closers.
- Avoid-list additions:
  - Do not follow this immediately with another aquarium arcade, another shell-token prize branch, or another teal-brass boardwalk entertainment world.
  - Do not let future game prompts drift into casino imagery, cyberpunk HUD clutter, or theme-park spectacle.
  - Do not overuse pinball playfields, ticket maps, or public kiosks now that this branch has documented all three.
- Scale and skill learning: `frontend-skill/SKILL.md` helped the exterior, lineup, section, and kiosk stay compositionally direct without card-grid UI drift. `documents/SKILL.md` kept the paper suite handled and municipal rather than brochure-clean. `remotion/SKILL.md` was useful as a sequence reference for the comic-page pacing, while `imagegen/SKILL.md` and `imagegen/references/sample-prompts.md` kept the prompts explicit about use case, material kit, and anti-drift constraints.
- Next-run seeds:
  - `paper-kite-puppet-hospital-playroom`
  - `moon-garden-seismograph-jewelry-studio`
  - `winter-canal-biscuit-zoology-fair`

## Latest Update

- Run slug: `20260501-0024-moon-garden-seismograph-jewelry-studio`
- Timestamp: `2026-05-01T00:24:15+08:00`
- Theme shift: moved the corpus away from reef pedagogy and public aquarium entertainment into nocturnal ornament craft built from moonstone white, smoked glass, oxidized brass, midnight velvet, limestone dust, moss green, pale blossoms, and graph-paper traces.
- New formats: midnight atelier documentary, dense component atlas, velvet product family, handled calibration paper suite, greenhouse section cutaway, occupational lineup, silent apprenticeship comic page, and after-hours glasshouse closer.
- Useful prompt patterns:
  - Jewelry prompts stayed specific when framed around tuning needles, trace slips, counterweights, lamp gloves, and petal presses rather than generic luxury language.
  - The branch held together because the same material kit repeated across room scenes, micro-object atlases, wearable goods, paper artifacts, architecture, body-scale uniforms, and narrative panels.
  - Night scenes were strongest when warm task lamps stayed local and moonlight remained the dominant spatial light.
  - The run stayed fresh because the quieter after-hours closer replaced the usual material-board ending.
- Avoid-list additions:
  - Do not follow this immediately with another moonlit jewelry atelier, another tremor-instrument ornament family, or another midnight velvet greenhouse branch.
  - Do not let future jewelry prompts drift into horoscope kitsch, steampunk costume excess, or glossy luxury-campaign polish.
  - Do not overuse cutaway greenhouse studios, calibration booklets, or occupational lineups now that this branch has documented all three.
- Scale and skill learning: `frontend-skill/SKILL.md` helped the opener, section, and closer keep one dominant idea per frame rather than boutique clutter. `documents/SKILL.md` kept the paper suite handled, clipped, and artifact-first. `iconography-lab/SKILL.md` helped pendants, trace marks, clips, tool rolls, and lamp gloves behave like one internal code, while `myth-merch-studio/SKILL.md` was useful for keeping the locket family collectible without becoming brand merchandise. `imagegen/SKILL.md` and its prompting references kept the prompts explicit about use case, material kit, and anti-drift constraints.
- Next-run seeds:
  - `paper-kite-puppet-hospital-playroom`
  - `winter-canal-biscuit-zoology-fair`
  - `public-quarry-wedding-cake-inspection-hangar`

## Latest Update

- Run slug: `20260501-0100-storm-glass-pigeon-postal-bathhouse`
- Timestamp: `2026-05-01T01:00:52+08:00`
- Theme shift: moved the corpus away from reef pedagogy, aquarium entertainment, winter-fair pageantry, and moon-garden jewelry craft into a humid canal-side civic-service building built from wet slate, steam white, pigeon gray, cedar brown, oxidized teal, brass, and muted yellow.
- New formats: dawn dispatch-hall documentary, dense bathhouse-postal equipment atlas, occupational lineup, handled ticket-and-route paper suite, canal-side section cutaway, and silent rainbreak dispatch comic page.
- Useful prompt patterns:
  - Public-building prompts stayed specific when they named counters, lofts, pools, tokens, storm tubes, route slips, and towel shelves instead of generic old-world bathhouse atmosphere.
  - The branch held together because the same wet-stone material kit repeated across architecture, objects, clothing, paperwork, and narrative panels.
  - Paper prompts were strongest when text stayed sparse and bathhouse wear, clipped layers, and route icons carried the informational logic.
  - The small focused study felt complete because the comic page replaced the usual material-board closer.
- Avoid-list additions:
  - Do not follow this immediately with another bathhouse-postal branch, another pigeon logistics world, or another wet-slate steam-heavy municipal interior.
  - Do not let future animal-service prompts drift into mascot cuteness, whimsical pet paraphernalia, or fantasy-avian worldbuilding.
  - Do not let future bathhouse prompts become luxury spa architecture, grand palace interiors, or ornate weather-magic spectacle.
- Scale and skill learning: `frontend-skill/SKILL.md` helped the opener and section preserve one dominant spatial idea per frame. `doc/SKILL.md` kept the ticket and route suite handled and artifact-first. `iconography-lab/SKILL.md` helped harnesses, tins, storm tubes, and perch gloves behave like one internal public-service code. `imagegen/SKILL.md` and `imagegen/references/sample-prompts.md` kept the prompts explicit about use case, material kit, and anti-drift constraints.
- Next-run seeds:
  - `portable-ash-beekeeping-chapel-kit`
  - `paper-kite-puppet-hospital-playroom`
  - `brackish-river-violin-repair-campsite`

## Latest Update

- Run slug: `20260509-0711-sun-bleached-roadside-dinosaur-mini-golf-motel`
- Timestamp: `2026-05-09T07:11:44+08:00`
- Theme shift: moved the corpus away from recent hidden-garden route play, humid civic service, reef pedagogy, and moonlit atelier craft into a dry roadside vacation branch built from cracked fiberglass, cream paperboard, turquoise pool light, rust fairway rails, amber plastic, breeze block, wax pencil, and desert gravel.
- New formats: hard-daylight roadside opener, handled scorecard foldout, kid-toy prize catalog, model-making workshop photograph, motel-pool architectural section, blue-hour vacancy entrance, event poster, silent family comic page, and packaging-family souvenir display.
- Useful prompt patterns:
  - Roadside-entertainment prompts stayed specific when they named vacancy arrows, dinosaur egg bunkers, penny-press plates, score ribbons, pool pump rooms, cactus ball markers, and snack-window stools instead of generic retro nostalgia.
  - The branch held together because the same cheap public-vacation kit repeated across exteriors, printed pages, packaging, cutaways, and comics: cracked fiberglass, cream paper, turquoise water, amber plastic, rust rails, halftone ink, and striped awning shade.
  - Page and merch prompts were strongest when they explicitly rejected premium branding, clean white studio backgrounds, and e-commerce polish.
  - The run stayed fresh because the maquette photograph, event poster, and packaging family replaced the more common atlas, HUD, and material-board habits.
- Avoid-list additions:
  - Do not follow this immediately with another dinosaur-attraction motel, another prize-counter merch branch, or another desert roadside family-vacation world.
  - Do not let future roadside prompts drift into generic retro-postcard haze, Las Vegas neon glamour, or irony-heavy kitsch.
  - Do not overuse vacancy arrows, blister-pack souvenir grids, or mini-golf route scorecards now that this branch has documented all three.
- Scale and skill learning: `myth-merch-studio/SKILL.md` helped the souvenir and poster surfaces stay local and manufacturable rather than premium-branded. `doc/SKILL.md` helped the scorecard foldout and comic page behave like handled print artifacts. `iconography-lab/SKILL.md` kept the vacancy arrows, pennants, key floats, trophy pins, and dinosaur silhouettes acting like one object code, while `imagegen/SKILL.md` and its prompt references kept the prompts use-case-specific and anti-drift.
- Next-run seeds:
  - `circus-seating-diagram-bureau`
  - `portable-ash-beekeeping-chapel-kit`
  - `bubblewrap-volcano-vending-toy-catalog`

## Latest Update

- Run slug: `20260513-0917-barista-training-reference-posters`
- Timestamp: `2026-05-13T09:17:45+08:00`
- Theme shift: this run deliberately inverted the recent speculative-world streak by moving into real-world hospitality education, clean comparison posters, maintenance anatomy plates, and training references with cream laminate, sage dividers, espresso browns, stainless steel, kraft cups, dry-erase marks, and clipped paper edges instead of moody civic environments or whimsical object cultures.
- New formats: espresso drink comparison wall chart, milk-texture poster, extraction process diagram, coffee-processing explainer, manual-brew comparison chart, grinder-cleaning anatomy plate, opening-shift checklist poster, cup-marking reference sheet, cafe back-bar training wall installation, and laminated pocket ring-card set.
- Useful prompt patterns:
  - Practical explainer prompts became more searchable when the title and page structure answered a real query directly, such as `types of espresso drinks chart` or `cup marking guide for baristas`, instead of drifting into mood-first poster language.
  - Repeated short-label anatomy with one dominant title band worked better than dense educational text; the prompt cards can hold canonical wording while the PNG stays visually stable.
  - Hospitality posters stayed grounded when each sheet named real service objects such as demitasse cups, milk pitchers, burr grinders, syrup pumps, felt-tip marks, and laminated tape corners.
  - The run stayed coherent because the same cream-sage-espresso-stainless kit repeated across page, room, and object scales without becoming another atlas or material board.
- Avoid-list additions:
  - Do not follow this immediately with another coffee-training or hospitality poster batch, another cream-sage laminate system, or another comparison-chart-heavy wall set.
  - Do not let future explainer runs collapse into generic classroom posters, chain-brand mimicry, vector-flat icon sheets, or overpacked tiny labels.
  - Do not lose the anti-pattern lesson: practical real-world training references can refresh the corpus when the archive starts leaning too far into whimsical interiors, packaging, or comic-world habits.
- Scale and skill learning: `frontend-skill/SKILL.md` reinforced that each poster needed one dominant hierarchy move rather than many boxed modules. `documents/SKILL.md` translated into wider gutters, shorter labels, and cleaner comparison geometry. `presentations/SKILL.md` helped keep the batch varied at contact-sheet scale. `imagegen/SKILL.md` and `imagegen/references/prompting.md` kept the prompts explicit about use case, short-text risk, and concrete object anchors.
- Searchability and SEO learning: the strongest hooks came from ordinary search language plus concrete nouns, not from speculative naming. The installation view and pocket-card object widened the landing-page surface beyond flat posters while preserving crawlable long-tail titles and useful per-image topics.
- Next-run seeds:
  - `ceramic-glaze-firing-reference-sheets`
  - `sewing-machine-troubleshooting-visual-guide`
  - `bakery-icing-tip-comparison-wall`
  - `portable-ash-beekeeping-chapel-kit` after another non-hospitality pivot

## Latest Update

- Run slug: `20260513-1324-transit-wayfinding-symbol-anatomy-sheets`
- Timestamp: `2026-05-13T13:24:01+08:00`
- Theme shift: this run kept the practical explainer lane but pivoted out of classroom and workshop territory into civic graphics, transit accessibility hardware, station sign hierarchy, bus-stop module design, and foamcore review models with signal yellow, route blue, matte black, porcelain white, brushed aluminum, concrete gray, and tactile-warning surfaces.
- New formats: pictogram anatomy chart, exit-number hierarchy guide, tactile paving plate, fare-flow diagram, line-legend chart, bus-stop comparison board, ring-bound legend cards, platform installation wall, mezzanine section plate, and foamcore station study model.
- Useful prompt patterns:
  - Wayfinding explainers became more searchable when the page answered ordinary civic queries directly, such as `transit pictogram chart`, `fare gate flow diagram`, or `bus stop sign layout guide`, instead of leaning on speculative naming.
  - Concrete public-space nouns like `truncated dome warning strip`, `interchange lozenge`, `rapid stop blade`, `fare gate bank`, `aluminum clip rail`, and `foamcore cut edges` produced stronger image topics than broader phrases like signage system or accessibility guide.
  - The branch stayed coherent because the same black-yellow-blue civic kit repeated across page, room, architecture, and object scales without falling back into atlas boards or generic UI panels.
- Avoid-list additions:
  - Do not follow this immediately with another transit graphic-standards or station-poster branch.
  - Do not let future civic-design runs drift into smart-city neon, corporate wayfinding mood boards, luxury-airport renders, or accessibility surfaces treated as abstract pattern art.
  - Do not reuse the black-yellow poster-rail composition too quickly now that this run has documented it at both page and installation scale.
- Scale and skill learning: `documents/SKILL.md` kept the standards plates breathable and query-first. `iconography-lab/SKILL.md` helped pictograms, arrows, line bullets, interchange lozenges, and stop blades behave like one durable internal code. `presentations/SKILL.md` helped the installation and model-study images keep one dominant proof object at thumbnail scale. `imagegen/SKILL.md` and `imagegen/references/prompting.md` kept the prompts strict about short labels, restraint, and public-material specificity.
- Searchability and SEO learning: the best landing-page hooks came from direct search-language titles plus nearby concrete nouns, while the installation wall, section plate, and foamcore model widened the crawlable surface beyond flat charts. The rebuilt site now exposes 10 new per-image pages and one new run page for this branch inside the sitemap.
- Next-run seeds:
  - `weather-front-and-cloud-reading-field-guides`
  - `museum-exhibit-label-hierarchy-guides`
  - `ceramics-glaze-firing-reference-posters`
  - `mushroom-foraging-course-revision-posters`
