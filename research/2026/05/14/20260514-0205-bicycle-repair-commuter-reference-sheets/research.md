# Research Note

- Run theme: Bicycle Repair Commuter Reference Sheets
- Run slug: `20260514-0205-bicycle-repair-commuter-reference-sheets`
- Timestamp: `2026-05-14T02:05:12+08:00`
- Status: `success`
- Niche audience: bike co-op trainers, municipal mobility educators, commuter-cycling workshop leaders, cycling journalists building explainer kits, new city riders searching visual repair help, and prompt engineers who need concrete bike-maintenance nouns
- Search intent:
  - `rim brake vs disc brake chart`
  - `how to patch a bike tube visual guide`
  - `bike chain wear gauge chart`
  - `bike chain cleaning and lube guide`
  - `hex key sizes bike bolts`
  - `bicycle brake pad wear chart`
  - `rotor rub troubleshooting guide`
  - `front and rear derailleur diagram`
  - `bike saddle bag essentials chart`
  - `bike repair stand setup`
  - `public bike repair station reference`
  - `bicycle wheel cross section diagram`
- Agentic retrieval value: a search or editing agent should be able to infer which images are best for brake-system comparison, puncture repair teaching, chain-wear diagnosis, commuter toolkit packing, repair-stand setup, public curbside repair infrastructure, or adaptation into bike-shop onboarding sheets and city-cycling class handouts
- SEO lane: `educational diagram`
- Target collection query: `commuter bike repair visual guide`
- Browser/search scale: single-image long-tail pages plus education pages, format pages, and future topic pages for bike repair charts, commuter toolkit references, public repair stations, and bicycle maintenance teaching aids
- Freedom budget: `anti-pattern`
- Primary scale: `object`
- Secondary scale: `street`
- Primary and secondary scales: `object`, `street`
- Existing-corpus gap: the recent corpus has practical explainers for coffee, woodshop, lighting, pond ecology, transit, weather, ceramics, sewing, tabletop design, and pastry training, but it still lacks a direct-search bike-maintenance branch despite repeated internal seeds. There is no current run answering everyday queries like `rim brake vs disc brake chart`, `bike chain wear gauge chart`, or `what to carry in a saddle bag` with grease-marked commuter hardware and public repair infrastructure.
- Skill and plugin Markdown files consulted:
  - `imagegen/SKILL.md`
  - `imagegen/references/prompting.md`
  - `documents/SKILL.md`
  - `presentations/SKILL.md`
  - `iconography-lab/SKILL.md`
- Skill/plugin research:
  - `imagegen/SKILL.md` reinforced using the built-in generator, keeping prompts as short labeled production specs, and preserving clean output provenance from the built-in cache into the workspace hierarchy.
  - `imagegen/references/prompting.md` reinforced query-first scene and subject lines, short labels only, and direct avoid lists to stop the run from drifting into lifestyle cycling ads or dashboard-like clutter.
  - `documents/SKILL.md` reinforced the lightest readable structure rule: each sheet should answer one bike-maintenance question cleanly instead of collapsing into a cram-heavy worksheet.
  - `presentations/SKILL.md` reinforced the contact-sheet test and the need for one dominant proof object per image so the run stays legible at thumbnail scale.
  - `iconography-lab/SKILL.md` reinforced building one internal commuter-repair code through repeated silhouettes and props such as rotor cutouts, tire levers, mini pumps, chain tools, spoke keys, reflective straps, curbside repair stands, and laminated workshop tags rather than overdesigning a logo system.
- Primary SEO lane rationale: this branch answers common commuter-repair queries directly with visible bicycle hardware, grit, and maintenance evidence instead of brand-heavy cycling marketing or abstract mechanical diagrams.

## Candidate Themes

1. `bicycle-repair-commuter-reference-sheets`
   - Scale: `object` + `street`
   - Domain: urban bicycle maintenance
   - Format: brake comparison chart, puncture sequence poster, chain-wear guide, toolkit atlas, repair-stand wall, street repair station, wheel section cutaway
   - Mood: practical curbside grease discipline
   - Audience: bike co-op trainers, beginner commuters, mobility educators
2. `fragrance-family-scent-wheel-and-tester-bar`
   - Scale: `object` + `page`
   - Domain: fragrance education
   - Format: scent-family wheel, concentration chart, tester-strip tray, note-family guide, retail tester wall
   - Mood: dry sensory precision
   - Audience: fragrance sales trainers, packaging designers, perfume reviewers
3. `mushroom-lookalike-field-course-posters`
   - Scale: `page` + `landscape`
   - Domain: foraging field education
   - Format: morphology poster, habitat comparison, spore-print sequence, ranger board, field-card ring
   - Mood: sober trailhead caution
   - Audience: outdoor-school instructors, naturalist guides, field-guide authors
4. `museum-exhibit-label-hierarchy-guides`
   - Scale: `page` + `architecture`
   - Domain: exhibit design
   - Format: intro-panel hierarchy, braille placement guide, vitrine caption section, gallery wall elevation, foamcore model
   - Mood: quiet institutional rigor
   - Audience: exhibit designers, museum educators, interpretation teams
5. `friction-shift-and-derailleur-zine-for-bike-kitchen-volunteers`
   - Scale: `page` + `room`
   - Domain: volunteer bike-kitchen training
   - Format: risograph zine spreads, pegboard wall, greasy workbench still, folding pocket cards
   - Mood: improvised community repair culture
   - Audience: volunteer mechanics, neighborhood bike kitchens, event repair pop-ups

## Selected Theme Rationale

The commuter bike-repair branch wins because it is the strongest anti-pattern move away from the last two successful runs while still answering the practical-explainer queue seed directly. It replaces pastry pinks, felt tables, and classroom poster polish with asphalt gray, safety orange, grease black, curbside hardware, public repair infrastructure, and weathered commuter evidence. It also fills a genuine corpus gap: the bike-maintenance branch has surfaced repeatedly in recent research slates and memory as a strong long-tail search lane, but it has not yet been executed.

## Visual Families

1. Core repair explainers
   - brake-system comparison
   - puncture repair sequence
   - chain-wear and lubrication guide
   - hex-key and bolt-size reference
   - brake-pad wear and rotor-rub troubleshooting
   - derailleur anatomy and adjustment diagram
2. Portable kit and bench references
   - saddle-bag emergency repair kit layout
   - bike co-op repair stand pegboard reference
3. Street deployment and spatial proof
   - public commuter repair station street view
   - commuter rear wheel and brake section cutaway

## Planned Image Slate

1. Rim Brake Versus Disc Brake Comparison Chart
2. How To Patch A Bicycle Tube Poster
3. Bike Chain Wear And Lubrication Guide
4. Hex Key Sizes And Bike Bolt Reference
5. Brake Pad Wear And Rotor Rub Troubleshooting Board
6. Front And Rear Derailleur Anatomy Diagram
7. Saddle Bag Emergency Repair Kit Layout
8. Bike Co-op Repair Stand Pegboard Reference
9. Public Commuter Repair Station Street View
10. Commuter Rear Wheel And Brake Section Cutaway

## Prompt Variables To Test

- Straight-on comparison sheet versus overhead toolkit atlas versus curbside documentary station view
- Short canonical labels only, with richer bike-maintenance language preserved in prompt cards
- Repeated tactile anchors: disc rotors, rim-brake pads, chain checker gauge, master links, tube patch glue, tire levers, mini pump, floor pump, spoke wrench, hex keys, chain lube bottle, repair stand jaws, reflective ankle strap, and damp curb paint
- Palette discipline built from asphalt gray, traffic-cone orange, shop rag red, commuter hi-vis yellow, oxidized steel, rubber black, chain-oil amber, and mint repair-stand paint
- Search-first framing that answers real commuter queries without drifting into performance-road-racing glamour, carbon-bike fetish, or branded bike-shop advertising

## What Each Image Should Teach

- `Rim Brake Versus Disc Brake Comparison Chart`: compare common commuter brake systems through visible caliper, rotor, pad, rim, cable, and stopping-surface differences
- `How To Patch A Bicycle Tube Poster`: show the practical puncture sequence from levering off the tire bead through tube pull, roughening, gluing, patching, checking, and reinstalling
- `Bike Chain Wear And Lubrication Guide`: show chain checker gauge use, dirty versus cleaned chain texture, and where lube belongs on a commuter drivetrain
- `Hex Key Sizes And Bike Bolt Reference`: connect common bike bolts and clamp points to realistic Allen-key sizes
- `Brake Pad Wear And Rotor Rub Troubleshooting Board`: show wear lines, glazed pads, rotor rub alignment, and the warning cues that matter before a commute
- `Front And Rear Derailleur Anatomy Diagram`: expose cable path, limit screws, jockey wheels, cage position, and hanger relation without becoming a full manual
- `Saddle Bag Emergency Repair Kit Layout`: identify the minimum commuter flat-fix and adjustment kit in one scan-friendly bundle
- `Bike Co-op Repair Stand Pegboard Reference`: show the workshop wall around a stand so trainers can point to where pumps, tire levers, spoke tools, rags, and gauges live
- `Public Commuter Repair Station Street View`: place repair hardware in a believable city sidewalk context with pump, stand, tools, bike frame, and damp commuter surroundings
- `Commuter Rear Wheel And Brake Section Cutaway`: reveal how tire, tube, rim, spokes, hub, cassette, rotor, caliper, and fender stack together in one readable commuter-bike section

## Successful Patterns To Chase

- Query-first titles built from direct mechanic vocabulary such as `disc brake`, `rim brake`, `patch kit`, `chain wear`, `hex key`, `rotor rub`, `derailleur`, `saddle bag`, and `repair stand`
- One dominant repair proof object per image instead of equal-weight clutter
- Short labels only, with the teaching burden carried by visible hardware, wear states, grease marks, and repeated part silhouettes
- Mixed scales so the run reads as both printable class aids and believable public commuter-maintenance evidence

## Weak Patterns To Avoid

- Performance-road racing glamour
- Carbon-bike product-launch polish
- Lycra lifestyle photography
- Generic automotive repair clutter
- Dense paragraphs of tiny shop-manual text
- Branded retail-bike advertising
- Mountain-bike mud spectacle that breaks the commuter search lane

## Outcome

- PNG count: `10`
- Visual families explored:
  - core repair explainers
  - portable kit and bench references
  - street deployment and spatial proof
- Outcome notes:
  - The strongest images were the rim-versus-disc comparison, the chain-wear guide, the saddle-bag kit layout, the public repair station street view, and the rear-wheel cutaway because they widened the branch beyond flat poster repetition while staying anchored to commuter repair nouns.
  - The run held together through one asphalt-and-cream material kit of taped posters, greasy chains, worn rims, orange callout boxes, repair-stand mint paint, damp curb markings, and practical public hardware instead of cycling-brand gloss.
  - The toolkit, repair-bay, and public-station images gave the branch believable deployment evidence, which makes the gallery more useful for trainers, mobility educators, and agentic retrieval.

## Searchability And SEO Lessons

- Search performance stayed strong when titles and notes repeated direct mechanic nouns such as `brake cable noodle`, `disc rotor`, `chain checker`, `master link`, `vulcanizing patch`, `spoke wrench`, `repair stand jaws`, `powder-coated repair stand`, and `rack stay`.
- Long-tail pages are stronger when each image answers one repair question clearly instead of using broad bicycle vocabulary across every sheet.
- The mixed scale set helped the run land across multiple search lanes: brake comparison, tube patching, toolkit packing, workshop setup, public repair infrastructure, and wheel anatomy all surfaced in the rebuilt `site/data.js`.

## Niche Audience Lessons

- Bike co-op trainers and municipal mobility educators benefit most from images that show real commuter wear states and public hardware, not pristine road-bike product photography.
- Beginner riders need recognizable commuter objects like flat-fix kits, repair stands, curbside pumps, and everyday fender or rack hardware more than race-focused components.

## Anti-Repetition Notes

- Avoid another immediate bike-maintenance rerun with the same cream posters, mint repair stand, wet curb palette, orange callout boxes, and commuter-black frame kit.
- If the corpus returns to cycling later, pivot to a clearly different lane such as winter grit and fender care, cargo-bike locking systems, or child-seat commuting rather than repeating the same brake and chain basics.

## Built-In ImageGen Output Directory

- `/Users/arnav/.codex/generated_images/019e2282-5b54-7492-a28a-d343c8fde66d/`

## Next-Run Seeds

- `museum-exhibit-label-hierarchy-guides`
- `fragrance-family-scent-wheel-and-tester-bar`
- `mushroom-lookalike-field-course-posters`
- `cargo-bike-locking-and-commuter-load-reference-guides`

