# Research Note

- Run theme: Mushroom Lookalike Field Course Posters
- Run slug: `20260521-0719-mushroom-lookalike-field-course-posters`
- Timestamp: `2026-05-21T07:19:05+08:00`
- Status: `planned`
- Niche audience: foraging instructors, nature-center educators, park interpreters, outdoor-school curriculum authors, beginner mushroom hunters, extension-program trainers, and search agents that need precise edible-versus-toxic visual analogies
- Search intent:
  - `mushroom lookalike chart`
  - `chanterelle vs false chanterelle visual guide`
  - `morel vs false morel comparison poster`
  - `jack o lantern mushroom vs chanterelle chart`
  - `amanita parts labeled diagram`
  - `mushroom spore print color chart`
  - `edible vs poisonous mushroom poster`
  - `foraging safety visual guide`
  - `mushroom habitat comparison infographic`
  - `mushroom bruise and gill identification chart`
  - `wild mushroom basket inspection guide`
  - `mushroom field course reference poster`
  - `beginner mushroom identification training chart`
  - `mushroom anatomy labeled poster`
- Agentic retrieval value: a search or editing agent should be able to infer which images explain specific edible-versus-toxic comparisons, which pages teach anatomy or spore-print reasoning, which assets suit ranger-led classes versus trailhead signage, and which images can be adapted into pocket cards, classroom posters, or regional foraging safety packs
- SEO lane: `educational diagram`
- Target collection query: `mushroom lookalike field course posters`
- Browser/search scale: single-image long-tail pages plus run collection pages, education pages, format pages, and future topic pages for mushroom anatomy, toxic lookalikes, spore prints, habitat clues, and field-course safety
- Freedom budget: `wide`
- Primary scale: `page`
- Secondary scale: `landscape`
- Primary and secondary scales: `page`, `landscape`
- Existing-corpus gap: the recent corpus has strong maintenance, craft, and mascot-production coverage, but it has little naturalist field-course material built around safety-critical biological comparisons. Recent explainer runs also leaned heavily on indoor workshop walls and cream poster habits. This branch shifts into forest-floor evidence, field-station teaching, and caution-first outdoor pedagogy while still answering realistic search queries directly.
- Skill and plugin Markdown files consulted:
  - `imagegen/SKILL.md`
  - `imagegen/references/prompting.md`
  - `documents/SKILL.md`
  - `iconography-lab/SKILL.md`
- Skill/plugin research:
  - `imagegen/SKILL.md` reinforced one-image-at-a-time generation, query-first asset framing, and the need to move built-in outputs from `$CODEX_HOME/generated_images/` into the workspace hierarchy.
  - `imagegen/references/prompting.md` reinforced scene-to-subject-to-constraints prompt order, short repeated labels, and strict negative drift control for text-heavy explainers.
  - `documents/SKILL.md` reinforced the rule that each plate should solve one teaching problem cleanly instead of collapsing into a dense worksheet with unreadable prose.
  - `iconography-lab/SKILL.md` reinforced the value of a durable internal code system: repeated safety-red wax pencil marks, olive field binders, black specimen trays, cream waterproof cards, amber callout dots, and moss-dark forest cues that make the whole run recognizable without turning into branding.
- Primary SEO lane rationale: this branch answers queries people already search for in classrooms, naturalist courses, and foraging safety communities. It can produce crawlable landing pages with immediately useful static images rather than vague fungal art or generic woodland moodboards.

## Candidate Themes

1. `mushroom-lookalike-field-course-posters`
   - Scale: `page` + `landscape`
   - Domain: naturalist education and foraging safety
   - Format: comparison chart, anatomy plate, spore-print guide, field card ring, trailhead poster, habitat section, basket inspection comic page
   - Mood: sober trailhead caution with handled field-course evidence
   - Audience: foraging instructors, park educators, curriculum authors
2. `predictive-history-pressure-map-boards`
   - Scale: `page` + `world`
   - Domain: documentary graphics and geopolitical education
   - Format: doctrine sheet, escalation tree, pressure map, horizon dashboard, historical analogy plate, cinematic proof frame
   - Mood: severe, evidentiary, prestige-documentary
   - Audience: video essayists, documentary editors, history teachers
3. `fragrance-family-scent-wheel-and-tester-bar`
   - Scale: `object` + `page`
   - Domain: fragrance retail training and packaging reference
   - Format: note wheel, concentration chart, tester-strip tray, note-family taxonomy, counter display, package family
   - Mood: dry sensory precision
   - Audience: perfume trainers, packaging designers, reviewers
4. `coastal-knot-and-rigging-course-plates`
   - Scale: `object` + `tabletop`
   - Domain: sailing and dockside training
   - Format: knot comparison chart, rope anatomy plate, cleat-hitch sequence, wet dock teaching wall, rigging tray, emergency-line pocket card
   - Mood: practical salt-air instruction
   - Audience: sailing instructors, marine educators, prop designers
5. `fermentation-vessel-and-spoilage-visual-guides`
   - Scale: `object` + `room`
   - Domain: culinary training and food safety
   - Format: jar anatomy chart, krausen stages comparison, contamination guide, crock shelf, temperature poster, tasting-room station
   - Mood: earthy, monitored, kitchen-lab
   - Audience: culinary instructors, food writers, workshop leaders

## Selected Theme Rationale

The mushroom lookalike branch wins because it opens a new naturalist safety lane, answers concrete long-tail educational queries, and breaks the recent indoor workflow rhythm. It keeps the practical-explainer seed in play while moving away from bike shops, bakeries, and mascot boards into outdoor field-course evidence. It also supports agentic retrieval well because each image can be classified by comparison type, anatomy clue, habitat, or teaching surface.

## Visual System

- Durable hooks: chanterelle folds, knife-cut morel halves, false morel wrinkled caps, white amanita gills, cup-like volvas, ringed stems, orange jack-o-lantern clusters, black paper spore cards, wicker basket straps, wax pencil arrows, moss-dark logs, laminated field tabs
- Palette anchors: moss green, bark brown, cream waterproof card stock, amber label dots, wax-pencil red, lichen gray, dull copper specimen pins
- Repeated materials: matte waterproof paper, aluminum specimen ruler, canvas pouch, black enamel tray, field notebook cloth, damp leaf litter, sliced mushroom flesh, acrylic callout pins

## Visual Families

1. Direct comparison and anatomy pages
   - lookalike comparison charts
   - anatomy plate
   - bruise or gill clue guide
   - spore-print taxonomy
2. Field-course tools and handled references
   - ring-card fan
   - basket inspection teaching board
   - ranger lesson wall
3. Habitat and deployment views
   - trailhead safety poster
   - forest habitat comparison section
   - campsite or classroom proof frame

## Planned Image Slate

1. Chanterelle Versus False Chanterelle Comparison Chart
2. Morel And False Morel Safety Poster
3. Amanita Anatomy Labeled Plate
4. Mushroom Spore Print Color Guide
5. Jack O Lantern Versus Chanterelle Habitat Board
6. Beginner Foraging Basket Inspection Reference
7. Waterproof Mushroom Field Cards Ring
8. Trailhead Mushroom Safety Course Poster
9. Forest Floor Habitat Cross Section
10. Ranger Station Mushroom Lesson Wall

## Prompt Variables To Test

- Straight-on comparison plate versus handled field artifact versus deployed teaching environment
- Black specimen tray backgrounds versus cream laminated cards versus mossy outdoor surfaces
- Short query-shaped labels only, with canonical explanation text preserved in prompt cards
- Repeated proof objects such as ruler, hand lens, spore card, canvas pouch, wicker basket, wax pencil, and specimen tags
- Strong anti-drift constraints against fantasy mushroom art, psychedelic poster styling, cookbook food photography, and generic cottagecore decor

## What Each Image Should Teach

- `Chanterelle Versus False Chanterelle Comparison Chart`: visible differences in ridge folds, true gills, cap edge, stem taper, and color shift
- `Morel And False Morel Safety Poster`: cap attachment, hollow interior, wrinkled folds, and slicing logic for a high-risk comparison
- `Amanita Anatomy Labeled Plate`: ring, volva, gills, stem base, cap warts, and safe handling caution
- `Mushroom Spore Print Color Guide`: spore-print reasoning as a visual classifier rather than an abstract note
- `Jack O Lantern Versus Chanterelle Habitat Board`: clustered stump growth versus scattered forest-floor growth and lighting-context clues
- `Beginner Foraging Basket Inspection Reference`: what a teaching basket should and should not contain before a beginner heads home
- `Waterproof Mushroom Field Cards Ring`: portable quick-reference kit for field instructors and students
- `Trailhead Mushroom Safety Course Poster`: direct public-facing caution poster for course or park use
- `Forest Floor Habitat Cross Section`: substrate, tree relation, moss, leaf litter, stump, and moisture context shown in one section
- `Ranger Station Mushroom Lesson Wall`: proof that the same visual language survives deployment in a real teaching setting

## Successful Patterns To Chase

- Query-first titles built from concrete nouns like `comparison chart`, `safety poster`, `anatomy plate`, `spore print guide`, `field cards`, `habitat board`, and `lesson wall`
- A repeated caution code of wax-pencil red, amber tabs, cream waterproof cards, and black specimen boards
- Immediate visual answers in the first viewport, with longer pedagogy moved into metadata instead of unreadable in-image prose
- Enough real specimen and habitat evidence that the run helps both searchers and downstream prompt agents

## Weak Patterns To Avoid

- Psychedelic mushroom poster art
- Cottagecore decor scenes
- Fantasy glowing fungi
- Dense textbook paragraphs
- Generic camping gear clutter
- Sterile scientific white-background cutouts with no teaching context
- Repeating cream cinderblock workshop-wall habits from recent runs

## Outcome

- PNG count: `0`
- Visual families explored:
  - direct comparison and anatomy pages
  - field-course tools and handled references
  - habitat and deployment views
- Outcome notes:
  - Pending generation.

## Searchability And SEO Lessons

- Search fit should improve if every title leads with the comparison or teaching format and only then the mushroom group.
- Concrete hooks such as `false chanterelle gills`, `volva cup`, `black paper spore card`, `wicker basket inspection`, and `rotting stump cluster` should outrank generic hooks like `mushroom guide`.
- The run page should serve both educational queries and creator queries like `field course poster reference` or `naturalist training wall`.

## Niche Audience Lessons

- Outdoor-school and park users need caution-first clarity more than decorative wilderness atmosphere.
- Beginner foragers benefit from repeated physical proof objects and visible comparison anatomy more than from taxonomy-heavy labeling.

## Anti-Repetition Notes

- Avoid another immediate indoor workshop or mascot-production rerun after this branch.
- If the next practical explainer stays educational, it should pivot again in scale or domain, such as fragrance training, dockside rigging, or fermentation safety, rather than another naturalist fungal course.

## Built-In ImageGen Output Directory

- Pending generation.

## Next-Run Seeds

- `predictive-history-pressure-map-boards`
- `fragrance-family-scent-wheel-and-tester-bar`
- `coastal-knot-and-rigging-course-plates`
- `fermentation-vessel-and-spoilage-visual-guides`
