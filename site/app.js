const data = window.IMAGE_KB ?? {
  images: [],
  runs: [],
  taxonomies: [],
  topics: [],
  hooks: [],
  bands: [],
  rubric: { bands: [], dimensions: [] },
};

const VALID_PAGES = new Set(["home", "catalog", "themes", "education", "licensing"]);
const PAGE_META = {
  home: {
    kicker: "Image Atlas",
    title: "A cleaner way to browse prompt boards, storyboards, and useful labeled image systems.",
  },
  catalog: {
    kicker: "Browser",
    title: "Agentic image wall for frames, boards, hooks, and prompt packs.",
  },
  themes: {
    kicker: "Theme library",
    title: "Runs presented as visual navigation, not PNG dumps.",
  },
  education: {
    kicker: "Pack builder",
    title: "Brief-to-storyboard, commercial, and explainer packs with agentic image planning.",
  },
  licensing: {
    kicker: "Workflows",
    title: "Atlas retrieval, pack generation, and motion-ready reuse flows.",
  },
};

const AGENT_STARTER_PROMPTS = [
  "build a 15-second snack commercial board",
  "show mascot turnaround and expression sheets",
  "find product hero end frames",
  "turn this into a GPT to Seedance to CapCut pack",
  "retrieve storyboard-like prompt images",
];

const MARKET_NAV_ITEMS = [
  { label: "Browse All", page: "catalog" },
  { label: "Explainers", query: "comparison chart training poster labeled diagram", page: "catalog" },
  { label: "Storyboards", query: "storyboard beat page shot blocking board", page: "catalog" },
  { label: "Character Systems", query: "turnaround expression sheet species dossier continuity pack", page: "catalog" },
  { label: "Prompt Boards", query: "prompt board commercial board hero frame motion handoff", page: "catalog" },
  { label: "Textures & Surfaces", query: "texture watercolor line art paper metal leather", page: "catalog" },
  { label: "Categories", page: "themes" },
];

const MARKET_DIRECTORY_GROUPS = [
  {
    title: "Asset Families",
    items: [
      { label: "Comparison Charts", query: "comparison chart", note: "types, side-by-side systems, choices" },
      { label: "Training Posters", query: "training poster visual guide", note: "staff guides and revision sheets" },
      { label: "Contact Sheets", query: "contact sheet reference layout", note: "kits, trays, repeated visual evidence" },
      { label: "Section Cutaways", query: "section cutaway anatomy plate", note: "how parts fit together in one view" },
      { label: "Storyboard Pages", query: "storyboard beat page", note: "shots, sequence logic, camera beats" },
      { label: "Character Bibles", query: "turnaround expression species dossier", note: "identity, prop, costume continuity" },
    ],
  },
  {
    title: "Production Lanes",
    items: [
      { label: "Commercial Boards", query: "commercial board product hero frame end card", note: "15-second ad packs" },
      { label: "Mascot Film Assets", query: "mascot turnaround species dossier capcut", note: "GPT to Seedance to CapCut handoff" },
      { label: "Continuity Kits", query: "continuity pack setting prop action style", note: "pin-safe film context" },
      { label: "Explainer Plates", query: "labeled diagram process guide infographic", note: "education and training use" },
      { label: "Scenario Boards", query: "scenario board doctrine sheet pressure map", note: "speculative thesis visuals" },
      { label: "Worldbuilding Packs", query: "map institution kit worldbuilding reference", note: "story worlds and systems" },
    ],
  },
  {
    title: "Domains",
    items: [
      { label: "Education", query: "education revision poster school visual guide", note: "course-ready sheets" },
      { label: "Food & Craft", query: "bakery tools coffee visual guide craft training", note: "hospitality and hands-on teaching" },
      { label: "Repair & Maintenance", query: "repair reference troubleshooting board", note: "mechanical teaching images" },
      { label: "Science", query: "anatomy plate scientific educational diagram", note: "processes, systems, labeled parts" },
      { label: "Film & Motion", query: "storyboard camera blocking motion handoff", note: "editing and sequence planning" },
      { label: "Speculative History", query: "predictive history pressure map scenario board", note: "civilizational and geopolitical lanes" },
    ],
  },
  {
    title: "Visual Systems",
    items: [
      { label: "Photoreal Rooms", taxonomy: "photorealistic-natural", note: "believable deployment spaces" },
      { label: "Infographic Diagrams", taxonomy: "infographic-diagram", note: "structured teaching-first pages" },
      { label: "Scientific Plates", taxonomy: "scientific-educational", note: "clean, object-anchored knowledge boards" },
      { label: "Mixed Format", taxonomy: "mixed-format", note: "scene + diagram hybrids" },
      { label: "Atlas Contact Sheets", taxonomy: "atlas-contact-sheet", note: "object sets and tray logic" },
      { label: "Future Film Taxonomies", query: "commercial storyboard continuity pack", note: "new lanes the automation is growing into" },
    ],
  },
];

const WORKFLOW_CARD_BLUEPRINTS = [
  {
    kicker: "Commercial board",
    title: "15-second ad sequence",
    description: "Hook frame, medium action, texture beat, hero pack shot, and end-card tagline.",
    prompt: "build a 15-second product commercial board",
    chips: ["hook frame", "hero shot", "end frame"],
  },
  {
    kicker: "Character pack",
    title: "Mascot and species bible",
    description: "Turnarounds, expression sheets, prop anchors, species notes, and continuity-safe costume details.",
    prompt: "show mascot turnaround and species dossier images",
    chips: ["turnaround", "expression pack", "species sheet"],
  },
  {
    kicker: "Prompt system",
    title: "Reusable prompt-image pack",
    description: "Prompt boards that expose hooks, camera logic, materials, motion cues, and scene continuity.",
    prompt: "find prompt-image boards for product storytelling",
    chips: ["prompt board", "camera logic", "continuity"],
  },
  {
    kicker: "Edit handoff",
    title: "GPT to motion to edit",
    description: "Boards that move cleanly from GPT image ideation into Seedance motion passes and CapCut editing.",
    prompt: "turn this brief into a GPT to Seedance to CapCut pack",
    chips: ["Seedance", "CapCut", "timing board"],
  },
];

const MODE_KEYWORDS = {
  commercial: ["ad", "ads", "advert", "commercial", "campaign", "product", "hero shot", "tagline", "end frame", "brand", "social", "ugc", "pack shot"],
  film: ["storyboard", "story board", "shot", "scene", "sequence", "mascot", "character", "species", "expression", "turnaround", "film", "movie", "animation", "cinematic", "capcut", "seedance", "continuity", "beat"],
  education: ["diagram", "chart", "guide", "labeled", "labelled", "poster", "explainer", "revision", "course", "training", "anatomy"],
};

const MODE_TAXONOMY_BOOSTS = {
  commercial: {
    "photorealistic-natural": 10,
    "atlas-contact-sheet": 9,
    "mixed-format": 9,
    "illustration-story": 8,
    "typographic-layout": 7,
  },
  film: {
    "illustration-story": 10,
    "atlas-contact-sheet": 9,
    "mixed-format": 8,
    "stylized-concept": 8,
    "environment-concept": 6,
  },
  education: {
    "scientific-educational": 10,
    "infographic-diagram": 10,
    "mixed-format": 6,
  },
  generic: {},
};

const CONTINUITY_ROLES = [
  { id: "character", label: "Character" },
  { id: "setting", label: "Setting" },
  { id: "prop", label: "Prop" },
  { id: "action", label: "Action" },
  { id: "style", label: "Style" },
];

const state = {
  page: "home",
  view: "runs",
  query: "",
  sort: "best",
  runs: new Set(),
  taxonomies: new Set(),
  topics: new Set(),
  hooks: new Set(),
  bands: new Set(),
  topicQuery: "",
  hookQuery: "",
  showArchived: false,
  selection: null,
  contextPins: [],
  agentDraft: "",
  agentMessages: [],
  educationFile: null,
  educationFileText: "",
  educationLoading: false,
  educationResult: null,
};

const publicImages = data.images.filter((image) => image.curation?.status !== "archived");
const publicRuns = data.runs.filter((run) => run.publicImageCount > 0);
const rubricBands = data.rubric?.bands ?? [];

const els = {
  body: document.body,
  pages: [...document.querySelectorAll("[data-page]")],
  pageLinks: [...document.querySelectorAll("[data-page-link]")],
  marketSearch: document.querySelector("#marketSearchInput"),
  marketPrimaryNav: document.querySelector("#marketPrimaryNav"),
  marketDirectory: document.querySelector("#marketDirectory"),
  marketShelf: document.querySelector("#marketShelf"),
  catalogBrowsePills: document.querySelector("#catalogBrowsePills"),
  catalogBrowseColumns: document.querySelector("#catalogBrowseColumns"),
  pageKicker: document.querySelector("#pageKicker"),
  pageTitle: document.querySelector("#pageTitle"),
  proofImageCount: document.querySelector("#proofImageCount"),
  proofTopicCount: document.querySelector("#proofTopicCount"),
  heroWall: document.querySelector("#heroWall"),
  homePreview: document.querySelector("#homePreview"),
  taskPreview: document.querySelector("#taskPreview"),
  navThemes: document.querySelector("#navThemes"),
  themeCards: document.querySelector("#themeCards"),
  search: document.querySelector("#searchInput"),
  sort: document.querySelector("#sortSelect"),
  showArchived: document.querySelector("#showArchived"),
  clearFilters: document.querySelector("#clearFilters"),
  topicSearch: document.querySelector("#topicSearch"),
  hookSearch: document.querySelector("#hookSearch"),
  runFilters: document.querySelector("#runFilters"),
  taxonomyFilters: document.querySelector("#taxonomyFilters"),
  topicFilters: document.querySelector("#topicFilters"),
  hookFilters: document.querySelector("#hookFilters"),
  bandFilters: document.querySelector("#bandFilters"),
  agentSuggestionStrip: document.querySelector("#agentSuggestionStrip"),
  summary: document.querySelector("#summaryStrip"),
  count: document.querySelector("#resultCount"),
  gallery: document.querySelector("#gallery"),
  empty: document.querySelector("#emptyState"),
  inspector: document.querySelector("#inspectorPanel"),
  agentDock: document.querySelector("#agentDock"),
  agentPromptInput: document.querySelector("#agentPromptInput"),
  agentPromptSend: document.querySelector("#agentPromptSend"),
  subtabs: [...document.querySelectorAll("[data-view]")],
  scrim: document.querySelector("#mobileScrim"),
  docUpload: document.querySelector("#docUpload"),
  docText: document.querySelector("#docText"),
  educationAudience: document.querySelector("#educationAudience"),
  educationGoal: document.querySelector("#educationGoal"),
  educationPackSize: document.querySelector("#educationPackSize"),
  educationPreviewCount: document.querySelector("#educationPreviewCount"),
  educationLane: document.querySelector("#educationLane"),
  educationStatus: document.querySelector("#educationStatus"),
  educationResults: document.querySelector("#educationResults"),
  generateEducationPack: document.querySelector("#generateEducationPack"),
  clearEducation: document.querySelector("#clearEducation"),
};

const runImagesMap = new Map();
for (const image of publicImages) {
  if (!runImagesMap.has(image.runSlug)) runImagesMap.set(image.runSlug, []);
  runImagesMap.get(image.runSlug).push(image);
}

function text(value) {
  return String(value ?? "");
}

function escapeHtml(value) {
  return text(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function normalize(value) {
  return text(value).toLowerCase();
}

function plural(count, singular, pluralValue = `${singular}s`) {
  return `${count} ${count === 1 ? singular : pluralValue}`;
}

function marketEntryCount(entry) {
  const images = publicImages.filter((image) => {
    if (entry.taxonomy && image.taxonomy !== entry.taxonomy) return false;
    if (entry.topic && !image.topics.includes(entry.topic)) return false;
    if (!entry.query) return true;
    const parts = queryPartsFrom(entry.query);
    if (!parts.length) return true;
    return parts.some((part) => image.searchText.includes(part));
  });
  return images.length;
}

function applyMarketEntry(entry = {}) {
  clearFilters();
  state.view = "images";
  if (entry.taxonomy) state.taxonomies.add(entry.taxonomy);
  if (entry.topic) state.topics.add(entry.topic);
  state.query = entry.query ?? "";
  if (els.search) els.search.value = state.query;
  if (els.marketSearch) els.marketSearch.value = state.query;
  if (entry.page) setPage(entry.page);
  else setPage("catalog");
  render();
}

function toggleSet(set, value, enabled) {
  if (!value) return;
  if (enabled) set.add(value);
  else set.delete(value);
}

function visiblePool() {
  return state.showArchived ? data.images : publicImages;
}

function groupedCounts(images, getter) {
  const counts = new Map();
  for (const image of images) {
    const key = getter(image);
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}

function bandLabel(id) {
  return rubricBands.find((band) => band.id === id)?.label ?? id;
}

function getRunImages(runSlug) {
  return [...(runImagesMap.get(runSlug) ?? [])].sort((a, b) => b.rubric.total - a.rubric.total || a.index - b.index);
}

function summarizeRun(run) {
  const images = getRunImages(run.slug);
  const cover = images[0] ?? null;
  const previews = images.slice(0, 3);
  const topHooks = [...new Set(images.flatMap((image) => image.specificHooks))].slice(0, 4);
  const taxonomies = [...new Set(images.map((image) => image.taxonomy))].slice(0, 4);
  const averageScore = images.length
    ? Math.round(images.reduce((sum, image) => sum + image.rubric.total, 0) / images.length)
    : 0;
  return {
    ...run,
    cover,
    previews,
    topHooks,
    taxonomies,
    averageScore,
    imageTitles: images.slice(0, 3).map((image) => image.title),
  };
}

const runSummaries = publicRuns.map(summarizeRun);
const runSummaryMap = new Map(runSummaries.map((run) => [run.slug, run]));

function queryPartsFrom(value) {
  return normalize(value)
    .split(/[^a-z0-9-]+/)
    .map((part) => part.trim())
    .filter((part) => part.length >= 2);
}

function queryStats(image, queryParts) {
  const phrase = queryParts.join(" ").trim();
  let score = image.rubric.total / 10;
  let matchedTerms = 0;

  for (const part of queryParts) {
    let partScore = 0;
    if (normalize(image.title).includes(part)) partScore = 20;
    else if (image.specificHooks.some((hook) => normalize(hook).includes(part))) partScore = 16;
    else if (normalize(image.runTheme).includes(part)) partScore = 12;
    else if (image.scaleTags.some((tag) => normalize(tag).includes(part))) partScore = 10;
    else if (image.topics.some((topic) => topic.includes(part))) partScore = 8;
    else if (normalize(image.taxonomy).includes(part)) partScore = 6;
    else if (image.searchText.includes(part)) partScore = 3;
    if (partScore) {
      matchedTerms += 1;
      score += partScore;
    }
  }

  const phraseMatch = phrase.length >= 6 && (
    normalize(image.title).includes(phrase) ||
    image.specificHooks.some((hook) => normalize(hook).includes(phrase)) ||
    image.searchText.includes(phrase)
  );

  if (phraseMatch) score += 18;
  if (queryParts.length > 1 && queryParts.every((part) => image.searchText.includes(part))) score += 10;

  return { matchedTerms, score, phraseMatch };
}

function filteredImages() {
  const queryParts = queryPartsFrom(state.query);
  const threshold = queryParts.length <= 1 ? 1 : Math.ceil(queryParts.length * 0.6);

  const images = visiblePool()
    .filter((image) => {
      if (state.runs.size && !state.runs.has(image.runSlug)) return false;
      if (state.taxonomies.size && !state.taxonomies.has(image.taxonomy)) return false;
      if (state.topics.size && !image.topics.some((topic) => state.topics.has(topic))) return false;
      if (state.hooks.size && !image.specificHooks.some((hook) => state.hooks.has(hook))) return false;
      if (state.bands.size && !state.bands.has(image.rubric.band)) return false;
      return true;
    })
    .map((image) => {
      const stats = queryParts.length
        ? queryStats(image, queryParts)
        : { matchedTerms: 0, score: image.rubric.total, phraseMatch: false };
      return { ...image, queryScore: stats.score, matchedTerms: stats.matchedTerms, phraseMatch: stats.phraseMatch };
    })
    .filter((image) => {
      if (!queryParts.length) return true;
      return image.phraseMatch || image.matchedTerms >= threshold;
    });

  return images.sort((a, b) => {
    if (state.sort === "title") return a.title.localeCompare(b.title);
    if (state.sort === "score") return b.rubric.total - a.rubric.total || (b.timestamp || "").localeCompare(a.timestamp || "");
    if (state.sort === "specificity") return b.rubric.dimensions.specificity - a.rubric.dimensions.specificity || b.rubric.total - a.rubric.total;
    if (state.sort === "usefulness") return b.rubric.dimensions.usefulness - a.rubric.dimensions.usefulness || b.rubric.total - a.rubric.total;
    if (state.sort === "vibe") return b.rubric.dimensions.vibe - a.rubric.dimensions.vibe || b.rubric.total - a.rubric.total;
    if (state.sort === "newest") return (b.timestamp || "").localeCompare(a.timestamp || "") || a.index - b.index;
    return b.queryScore - a.queryScore || b.rubric.total - a.rubric.total || (b.timestamp || "").localeCompare(a.timestamp || "");
  });
}

function filteredRuns(images) {
  const visible = new Set(images.map((image) => image.runSlug));
  return runSummaries.filter((run) => visible.has(run.slug));
}

function scoreBadge(value, label) {
  return `<span class="image-score" aria-label="${escapeHtml(label)}">${escapeHtml(String(value))}</span>`;
}

function imageCard(image) {
  const signalTags = image.specificHooks.slice(0, 2).map((hook) => `<span class="signal-tag">${escapeHtml(hook)}</span>`).join("");
  const tags = image.scaleTags.slice(0, 2).map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("");
  return `
    <button class="image-card ${state.selection?.type === "image" && state.selection.id === image.id ? "is-selected" : ""}" type="button" data-image-id="${escapeHtml(image.id)}">
      <span class="image-media">
        ${scoreBadge(image.rubric.total, bandLabel(image.rubric.band))}
        <img src="${escapeHtml(image.pngPath)}" alt="${escapeHtml(image.title)}" loading="lazy" />
      </span>
      <span class="image-meta">
        <em>${escapeHtml(image.taxonomy)}</em>
        <strong>${escapeHtml(image.title)}</strong>
        <span class="signal-row">${signalTags}</span>
        <span class="tag-row">${tags}</span>
      </span>
    </button>
  `;
}

function runCard(run) {
  return `
    <button class="run-card ${state.selection?.type === "run" && state.selection.id === run.slug ? "is-selected" : ""}" type="button" data-run-slug="${escapeHtml(run.slug)}">
      <span class="run-cover">
        ${run.cover ? `<img src="${escapeHtml(run.cover.pngPath)}" alt="${escapeHtml(run.theme)}" loading="lazy" />` : ""}
        <span class="run-badge">${run.publicImageCount} panels</span>
      </span>
      <span class="run-meta">
        <em>${escapeHtml(run.timestamp?.slice(0, 10) ?? "")}</em>
        <strong>${escapeHtml(run.theme)}</strong>
        <p>${escapeHtml(run.topHooks.join(" · "))}</p>
        <span class="tag-row">${run.taxonomies.map((taxonomy) => `<span class="tag">${escapeHtml(taxonomy)}</span>`).join("")}</span>
      </span>
    </button>
  `;
}

function hookBoard(hook, images) {
  const hookImages = images.filter((image) => image.specificHooks.includes(hook)).slice(0, 4);
  if (!hookImages.length) return "";
  return `
    <button class="hook-board" type="button" data-hook-select="${escapeHtml(hook)}">
      <span class="hook-board-header">
        <strong>${escapeHtml(hook)}</strong>
        <em>${plural(hookImages.length, "image")}</em>
      </span>
      <span class="hook-board-grid">
        ${hookImages.map((image) => `
          <span class="hook-thumb">
            <img src="${escapeHtml(image.pngPath)}" alt="${escapeHtml(image.title)}" loading="lazy" />
          </span>
        `).join("")}
      </span>
    </button>
  `;
}

function selectionRunSlug() {
  if (!state.selection) return null;
  if (state.selection.type === "run") return state.selection.id;
  if (state.selection.type === "image") {
    return data.images.find((image) => image.id === state.selection.id)?.runSlug ?? null;
  }
  return null;
}

function renderPageMeta() {
  const meta = PAGE_META[state.page] ?? PAGE_META.home;
  if (els.pageKicker) els.pageKicker.textContent = meta.kicker;
  if (els.pageTitle) els.pageTitle.textContent = meta.title;
  document.title = `Image Atlas | ${meta.title}`;
}

function renderNavThemes() {
  if (!els.navThemes) return;
  els.navThemes.innerHTML = runSummaries
    .slice(0, 6)
    .map((run) => `
      <button class="rail-theme-button" type="button" data-run-slug="${escapeHtml(run.slug)}">
        <strong>${escapeHtml(run.theme)}</strong>
        <span>${plural(run.publicImageCount, "image")} · ${run.averageScore} avg</span>
      </button>
    `)
    .join("");
}

function renderHeroWall() {
  if (!els.heroWall) return;
  const featured = [...publicImages]
    .sort((a, b) => b.rubric.total - a.rubric.total || (b.timestamp || "").localeCompare(a.timestamp || ""))
    .slice(0, 6);
  els.heroWall.innerHTML = featured
    .map((image, index) => `
      <button class="hero-tile tile-${index + 1}" type="button" data-image-id="${escapeHtml(image.id)}">
        <img src="${escapeHtml(image.pngPath)}" alt="${escapeHtml(image.title)}" loading="${index < 2 ? "eager" : "lazy"}" />
        <span>${escapeHtml(image.title)}</span>
      </button>
    `)
    .join("");
}

function renderHomeMetrics() {
  if (els.proofImageCount) els.proofImageCount.textContent = `${data.publicImageCount ?? publicImages.length}`;
  if (els.proofTopicCount) els.proofTopicCount.textContent = `${data.hooks?.length ?? 0}`;
}

function renderHomePreview() {
  if (!els.homePreview) return;
  const featured = [...publicImages]
    .sort((a, b) => b.rubric.total - a.rubric.total || (b.timestamp || "").localeCompare(a.timestamp || ""))
    .slice(0, 8);
  els.homePreview.innerHTML = featured
    .map((image) => `
      <button class="preview-card" type="button" data-image-id="${escapeHtml(image.id)}">
        <img src="${escapeHtml(image.pngPath)}" alt="${escapeHtml(image.title)}" loading="lazy" />
        <span class="preview-meta">
          <em>${escapeHtml(image.taxonomy)}</em>
          <strong>${escapeHtml(image.title)}</strong>
          <span class="signal-row">${image.specificHooks.slice(0, 1).map((hook) => `<span class="signal-tag">${escapeHtml(hook)}</span>`).join("")}</span>
        </span>
      </button>
    `)
    .join("");
}

function directoryEntryButton(entry, variant = "directory") {
  const count = marketEntryCount(entry);
  const countLabel = count ? `${count} live` : "planned lane";
  const query = escapeHtml(entry.query ?? "");
  const taxonomy = escapeHtml(entry.taxonomy ?? "");
  const topic = escapeHtml(entry.topic ?? "");
  const page = escapeHtml(entry.page ?? "catalog");
  return `
    <button
      class="market-entry market-entry--${variant}"
      type="button"
      data-market-query="${query}"
      data-market-taxonomy="${taxonomy}"
      data-market-topic="${topic}"
      data-market-page="${page}"
    >
      <strong>${escapeHtml(entry.label)}</strong>
      <span>${escapeHtml(entry.note ?? "")}</span>
      <em>${escapeHtml(countLabel)}</em>
    </button>
  `;
}

function renderMarketPrimaryNav() {
  if (!els.marketPrimaryNav) return;
  els.marketPrimaryNav.innerHTML = MARKET_NAV_ITEMS
    .map((item) => {
      const query = escapeHtml(item.query ?? "");
      const page = escapeHtml(item.page ?? "catalog");
      const isActive = state.page === item.page && !item.query;
      return `
        <button
          class="market-nav-link${isActive ? " is-active" : ""}"
          type="button"
          data-market-query="${query}"
          data-market-page="${page}"
        >
          ${escapeHtml(item.label)}
        </button>
      `;
    })
    .join("");
}

function renderMarketDirectory() {
  if (!els.marketDirectory) return;
  els.marketDirectory.innerHTML = MARKET_DIRECTORY_GROUPS
    .map((group) => `
      <article class="market-directory-card">
        <div class="market-directory-head">
          <strong>${escapeHtml(group.title)}</strong>
        </div>
        <div class="market-directory-list">
          ${group.items.map((entry) => directoryEntryButton(entry, "directory")).join("")}
        </div>
      </article>
    `)
    .join("");
}

function renderMarketShelves() {
  if (!els.marketShelf) return;
  const shelfItems = MARKET_DIRECTORY_GROUPS.flatMap((group) => group.items).slice(0, 8);
  els.marketShelf.innerHTML = shelfItems
    .map((entry) => directoryEntryButton(entry, "shelf"))
    .join("");
}

function renderCatalogBrowse() {
  if (els.catalogBrowsePills) {
    const pillItems = MARKET_DIRECTORY_GROUPS[0]?.items.concat(MARKET_DIRECTORY_GROUPS[1]?.items.slice(0, 4) ?? []) ?? [];
    els.catalogBrowsePills.innerHTML = pillItems
      .map((entry) => {
        const query = escapeHtml(entry.query ?? "");
        const taxonomy = escapeHtml(entry.taxonomy ?? "");
        const topic = escapeHtml(entry.topic ?? "");
        return `
          <button
            class="browse-pill"
            type="button"
            data-market-query="${query}"
            data-market-taxonomy="${taxonomy}"
            data-market-topic="${topic}"
            data-market-page="catalog"
          >
            <strong>${escapeHtml(entry.label)}</strong>
            <span>${escapeHtml(entry.note ?? "")}</span>
          </button>
        `;
      })
      .join("");
  }

  if (els.catalogBrowseColumns) {
    els.catalogBrowseColumns.innerHTML = MARKET_DIRECTORY_GROUPS
      .map((group) => `
        <article class="catalog-browse-card">
          <strong>${escapeHtml(group.title)}</strong>
          <div class="catalog-browse-list">
            ${group.items.map((entry) => directoryEntryButton(entry, "catalog")).join("")}
          </div>
        </article>
      `)
      .join("");
  }
}

function renderTaskPreview() {
  if (!els.taskPreview) return;
  const featured = [...publicImages]
    .sort((a, b) => b.rubric.total - a.rubric.total || (b.timestamp || "").localeCompare(a.timestamp || ""))
    .slice(0, WORKFLOW_CARD_BLUEPRINTS.length);
  els.taskPreview.innerHTML = WORKFLOW_CARD_BLUEPRINTS
    .map((item, index) => {
      const image = featured[index] ?? featured[0] ?? null;
      return `
      <button class="task-card task-card--workflow" type="button" data-agent-prompt-chip="${escapeHtml(item.prompt)}">
        <span class="task-card-media">
          ${image ? `<img src="${escapeHtml(image.pngPath)}" alt="${escapeHtml(item.title)}" loading="lazy" />` : ""}
        </span>
        <span class="task-card-body">
          <em>${escapeHtml(item.kicker)}</em>
          <strong>${escapeHtml(item.title)}</strong>
          <p>${escapeHtml(item.description)}</p>
          <span class="signal-row">${item.chips.map((chip) => `<span class="signal-tag">${escapeHtml(chip)}</span>`).join("")}</span>
        </span>
      </button>
    `;
    })
    .join("");
}

function renderThemeCards() {
  if (!els.themeCards) return;
  els.themeCards.innerHTML = runSummaries
    .map((run) => `
      <button class="theme-card ${state.selection?.type === "run" && state.selection.id === run.slug ? "is-selected" : ""}" type="button" data-run-slug="${escapeHtml(run.slug)}">
        <span class="theme-cover">
          <span class="theme-cover-main">
            ${run.previews[0] ? `<img src="${escapeHtml(run.previews[0].pngPath)}" alt="${escapeHtml(run.theme)}" loading="lazy" />` : ""}
          </span>
          <span class="theme-cover-stack">
            ${run.previews.slice(1, 3).map((image) => `<img src="${escapeHtml(image.pngPath)}" alt="${escapeHtml(image.title)}" loading="lazy" />`).join("")}
          </span>
        </span>
        <span class="theme-meta">
          <em>${escapeHtml(run.timestamp?.slice(0, 10) ?? "")}</em>
          <strong>${escapeHtml(run.theme)}</strong>
          <p>${escapeHtml(run.topHooks.join(" · "))}</p>
          <span class="tag-row">${run.taxonomies.map((taxonomy) => `<span class="tag">${escapeHtml(taxonomy)}</span>`).join("")}</span>
        </span>
      </button>
    `)
    .join("");
}

function renderCheckboxList(container, entries, setName, formatter = (value) => value) {
  if (!container) return;
  container.innerHTML = entries
    .map(([value, count], index) => {
      const id = `${setName}-${index}`;
      const checked = state[setName]?.has?.(value) ? " checked" : "";
      return `
        <label class="filter-item" for="${id}">
          <input id="${id}" type="checkbox" value="${escapeHtml(value)}" data-filter="${setName}"${checked} />
          <span>${escapeHtml(formatter(value))}</span>
          <em>${count}</em>
        </label>
      `;
    })
    .join("");
}

function renderBandFilters() {
  if (!els.bandFilters) return;
  const counts = new Map(data.bands ?? []);
  els.bandFilters.innerHTML = rubricBands
    .map((band, index) => {
      const id = `bands-${index}`;
      const checked = state.bands.has(band.id) ? " checked" : "";
      return `
        <label class="filter-item" for="${id}">
          <input id="${id}" type="checkbox" value="${escapeHtml(band.id)}" data-filter="bands"${checked} />
          <span>${escapeHtml(band.label)}</span>
          <em>${counts.get(band.id) ?? 0}</em>
        </label>
      `;
    })
    .join("");
}

function renderTopicButtons() {
  if (!els.topicFilters) return;
  const topics = data.topics.filter(([topic]) => !state.topicQuery || topic.includes(state.topicQuery.toLowerCase()));
  els.topicFilters.innerHTML = topics
    .slice(0, 120)
    .map(([topic, count]) => {
      const active = state.topics.has(topic) ? " is-active" : "";
      return `<button class="chip${active}" type="button" data-topic="${escapeHtml(topic)}">${escapeHtml(topic)} ${count}</button>`;
    })
    .join("");
}

function renderHookButtons() {
  if (!els.hookFilters) return;
  const hooks = data.hooks.filter(([hook]) => !state.hookQuery || normalize(hook).includes(state.hookQuery.toLowerCase()));
  els.hookFilters.innerHTML = hooks
    .slice(0, 90)
    .map(([hook, count]) => {
      const active = state.hooks.has(hook) ? " is-active" : "";
      return `<button class="chip${active}" type="button" data-hook="${escapeHtml(hook)}">${escapeHtml(hook)} ${count}</button>`;
    })
    .join("");
}

function selectedImage() {
  if (state.selection?.type !== "image") return null;
  return data.images.find((item) => item.id === state.selection.id) ?? null;
}

function selectedRun() {
  if (state.selection?.type === "run") return runSummaryMap.get(state.selection.id) ?? null;
  const image = selectedImage();
  return image ? runSummaryMap.get(image.runSlug) ?? null : null;
}

function latestAgentReply() {
  return [...state.agentMessages].reverse().find((message) => message.role === "assistant") ?? null;
}

function pinnedImages() {
  return state.contextPins
    .map((pin) => {
      const image = data.images.find((item) => item.id === pin.imageId);
      return image ? { ...pin, image } : null;
    })
    .filter(Boolean);
}

function continuityRoleMeta(role) {
  return CONTINUITY_ROLES.find((item) => item.id === role) ?? { id: role, label: role };
}

function pinImageToRole(imageId, role) {
  if (!imageId || !role) return;
  const image = data.images.find((item) => item.id === imageId);
  if (!image) return;
  state.contextPins = [
    ...state.contextPins.filter((pin) => pin.role !== role && pin.imageId !== imageId),
    { role, imageId },
  ];
}

function removeContextPin(role) {
  state.contextPins = state.contextPins.filter((pin) => pin.role !== role);
}

function contextKitSummary() {
  return pinnedImages().map((pin) => `${continuityRoleMeta(pin.role).label}: ${pin.image.title}`);
}

function continuityPromptSeed() {
  const summary = contextKitSummary();
  if (!summary.length) return "build a five-image continuity pack";
  return `build a five-image continuity pack using ${summary.join(", ")}`;
}

function detectAgentMode(prompt) {
  const normalized = normalize(prompt);
  if (MODE_KEYWORDS.commercial.some((term) => normalized.includes(term))) return "commercial";
  if (MODE_KEYWORDS.film.some((term) => normalized.includes(term))) return "film";
  if (MODE_KEYWORDS.education.some((term) => normalized.includes(term))) return "education";
  return "generic";
}

function modePromptChips(mode) {
  if (mode === "commercial") {
    return [
      "show me a 6-frame spot",
      "give me hero product frames",
      "retrieve end-card ideas",
      "find texture and impact beats",
    ];
  }
  if (mode === "film") {
    return [
      "show character turnaround sheets",
      "build a beat page",
      "find continuity boards",
      "give me edit handoff frames",
    ];
  }
  if (mode === "education") {
    return [
      "give me more labeled charts",
      "show anatomy plates",
      "find process diagrams",
      "stay in poster mode",
    ];
  }
  return AGENT_STARTER_PROMPTS;
}

function modeBriefFields(mode) {
  if (mode === "commercial") {
    return [
      "Hook frame",
      "Subject or product hero",
      "Texture or impact beat",
      "End frame with tagline space",
    ];
  }
  if (mode === "film") {
    return [
      "Character identity",
      "Species or role anchors",
      "Beat or sequence purpose",
      "Continuity-safe props and costume cues",
    ];
  }
  if (mode === "education") {
    return [
      "Question to answer",
      "Label hierarchy",
      "Audience skill level",
      "Format and scan pattern",
    ];
  }
  return [
    "Task",
    "Visual format",
    "Specific hooks",
    "Reuse direction",
  ];
}

function modePlanSteps(mode, query, contextImage) {
  const subject = contextImage?.title ?? query;
  if (mode === "commercial") {
    return [
      `Open with a high-contrast hook frame for ${subject}.`,
      "Move to a medium interaction shot that reveals the subject or product clearly.",
      "Add one impact or texture beat with particles, motion, or tactile detail.",
      "Land on a clean hero composition with pack shot or primary subject centered.",
      "Reserve a final end frame for tagline, CTA, or logo-safe copy space.",
    ];
  }
  if (mode === "film") {
    return [
      `Lock the subject identity for ${subject} with silhouette, props, and costume anchors.`,
      "Build a turnaround or expression layer before pushing into full scenes.",
      "Map one short beat page with shot size, camera angle, and emotional turn.",
      "Add a continuity board that repeats landmarks, props, and time-of-day logic.",
      "Finish with a motion or edit handoff board for Seedance or CapCut assembly.",
    ];
  }
  if (mode === "education") {
    return [
      `Name the exact question that ${subject} should answer.`,
      "Choose one repeatable labeled format instead of mixing everything at once.",
      "Use short hooks, direct comparison, and clear scan order.",
      "Reserve one panel for context or deployment in the real world.",
    ];
  }
  return [
    "Start from the clearest image with concrete hooks.",
    "Expand to a reusable board, page, or pack instead of a single beauty shot.",
    "Keep the labels concrete so the atlas can retrieve similar assets later.",
  ];
}

function chooseContinuityCandidate(role, recommendedImages, pins, leadImage) {
  const pinned = pins.find((pin) => pin.role === role)?.image;
  if (pinned) return pinned;

  const preferred = recommendedImages.find((image) => {
    if (role === "character") return ["illustration-story", "stylized-concept", "photorealistic-natural"].includes(image.taxonomy);
    if (role === "setting") return ["environment-concept", "photorealistic-natural", "mixed-format"].includes(image.taxonomy);
    if (role === "prop") return ["atlas-contact-sheet", "speculative-object", "mixed-format"].includes(image.taxonomy);
    if (role === "action") return ["illustration-story", "photorealistic-natural", "mixed-format"].includes(image.taxonomy);
    if (role === "style") return image.runSlug === (leadImage?.runSlug ?? "");
    return false;
  });

  return preferred ?? recommendedImages[0] ?? leadImage ?? null;
}

function buildContinuityPlan(mode, query, recommendedImages, pins) {
  const leadImage = recommendedImages[0] ?? null;
  const slots = [
    { role: "character", label: "Character anchor", reason: "Lock silhouette, face logic, and costume cues." },
    { role: "setting", label: "Setting anchor", reason: "Fix the world, weather, architecture, and time of day." },
    { role: "prop", label: "Prop or weapon board", reason: "Keep the key object consistent across shots." },
    { role: "action", label: "Action beat", reason: "Show how the character behaves with the object in-scene." },
    { role: "style", label: "Continuity check", reason: "Repeat the material language, shot feel, and framing rules." },
  ];

  return slots.map((slot) => {
    const image = chooseContinuityCandidate(slot.role, recommendedImages, pins, leadImage);
    return {
      ...slot,
      imageId: image?.id ?? null,
      title: image?.title ?? `Missing ${slot.label.toLowerCase()}`,
      note: slot.reason,
    };
  });
}

function buildAgentReply(prompt) {
  const query = prompt.trim();
  const queryParts = queryPartsFrom(query);
  const contextRunSlug = selectedRun()?.slug ?? null;
  const contextImage = selectedImage();
  const pins = pinnedImages();
  const mode = detectAgentMode(query);
  const taxonomyBoosts = MODE_TAXONOMY_BOOSTS[mode] ?? MODE_TAXONOMY_BOOSTS.generic;
  const contextRunSlugs = new Set(pins.map((pin) => pin.image.runSlug));
  const contextHooks = new Set(pins.flatMap((pin) => pin.image.specificHooks));
  const contextTopics = new Set(pins.flatMap((pin) => pin.image.topics));

  const ranked = publicImages
    .map((image) => {
      const stats = queryParts.length
        ? queryStats(image, queryParts)
        : { matchedTerms: 0, score: image.rubric.total / 10, phraseMatch: false };
      let score = stats.score + image.rubric.dimensions.usefulness * 4;
      if (contextRunSlug && image.runSlug === contextRunSlug) score += 8;
      if (contextImage && contextImage.id === image.id) score += 6;
      if (contextRunSlugs.has(image.runSlug)) score += 10;
      score += image.specificHooks.filter((hook) => contextHooks.has(hook)).length * 3;
      score += image.topics.filter((topic) => contextTopics.has(topic)).length * 2;
      score += taxonomyBoosts[image.taxonomy] ?? 0;
      return { image, score, matchedTerms: stats.matchedTerms, phraseMatch: stats.phraseMatch };
    })
    .sort((a, b) => b.score - a.score || b.image.rubric.total - a.image.rubric.total);

  const images = ranked
    .filter((entry) => !queryParts.length || entry.phraseMatch || entry.matchedTerms > 0)
    .slice(0, 6)
    .map((entry) => entry.image);

  const fallbackImages = ranked.slice(0, 6).map((entry) => entry.image);
  const recommendedImages = images.length ? images : fallbackImages;
  const runCounts = new Map();
  const hookCounts = new Map();
  const topicCounts = new Map();
  const taxonomyCounts = new Map();

  for (const image of recommendedImages) {
    runCounts.set(image.runSlug, (runCounts.get(image.runSlug) ?? 0) + 1);
    taxonomyCounts.set(image.taxonomy, (taxonomyCounts.get(image.taxonomy) ?? 0) + 1);
    for (const hook of image.specificHooks.slice(0, 4)) {
      hookCounts.set(hook, (hookCounts.get(hook) ?? 0) + 1);
    }
    for (const topic of image.topics.slice(0, 4)) {
      topicCounts.set(topic, (topicCounts.get(topic) ?? 0) + 1);
    }
  }

  const recommendedRuns = [...runCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([slug]) => runSummaryMap.get(slug))
    .filter(Boolean)
    .slice(0, 3);
  const recommendedHooks = [...hookCounts.entries()].sort((a, b) => b[1] - a[1]).map(([hook]) => hook).slice(0, 8);
  const recommendedTopics = [...topicCounts.entries()].sort((a, b) => b[1] - a[1]).map(([topic]) => topic).slice(0, 6);
  const recommendedTaxonomies = [...taxonomyCounts.entries()].sort((a, b) => b[1] - a[1]).map(([taxonomy]) => taxonomy).slice(0, 4);

  const leadRun = recommendedRuns[0];
  const leadImage = recommendedImages[0];
  const overviewParts = [];
  if (mode === "commercial") overviewParts.push("I am treating this as a commercial-board query.");
  if (mode === "film") overviewParts.push("I am treating this as a film-asset and storyboard query.");
  if (mode === "education") overviewParts.push("I am treating this as a labeled explainer query.");
  if (leadRun) overviewParts.push(`The strongest cluster is in ${leadRun.theme}.`);
  if (recommendedTaxonomies.length) overviewParts.push(`The best formats here are ${recommendedTaxonomies.join(", ")}.`);
  if (leadImage) overviewParts.push(`Start with ${leadImage.title} if you want the fastest relevant entry point.`);
  if (recommendedHooks.length) overviewParts.push(`Useful labels include ${recommendedHooks.slice(0, 4).join(", ")}.`);
  if (pins.length) overviewParts.push(`Pinned continuity context: ${contextKitSummary().join(" · ")}.`);

  return {
    role: "assistant",
    mode,
    query,
    overview: overviewParts.join(" "),
    imageIds: recommendedImages.map((image) => image.id),
    runSlugs: recommendedRuns.map((run) => run.slug),
    hooks: recommendedHooks,
    topics: recommendedTopics,
    taxonomies: recommendedTaxonomies,
    briefFields: modeBriefFields(mode),
    planSteps: modePlanSteps(mode, query, contextImage),
    contextSummary: contextKitSummary(),
    continuityPlan: buildContinuityPlan(mode, query, recommendedImages, pins),
    followups: modePromptChips(mode),
  };
}

function renderAgentSuggestionStrip() {
  if (!els.agentSuggestionStrip) return;
  const reply = latestAgentReply();
  if (reply?.hooks?.length) {
    els.agentSuggestionStrip.innerHTML = reply.hooks
      .slice(0, 6)
      .map((hook) => `<button class="agent-chip" type="button" data-agent-hook="${escapeHtml(hook)}">${escapeHtml(hook)}</button>`)
      .join("");
    return;
  }
  els.agentSuggestionStrip.innerHTML = AGENT_STARTER_PROMPTS.slice(0, 6)
    .map((prompt) => `<button class="agent-chip" type="button" data-agent-prompt-chip="${escapeHtml(prompt)}">${escapeHtml(prompt)}</button>`)
    .join("");
}

function renderSummary(images) {
  if (!els.summary) return;
  const visibleRuns = new Set(images.map((image) => image.runSlug)).size;
  const visibleFormats = new Set(images.map((image) => image.taxonomy)).size;
  const visibleHooks = new Set(images.flatMap((image) => image.specificHooks)).size;
  const avg = images.length ? Math.round(images.reduce((sum, image) => sum + image.rubric.total, 0) / images.length) : 0;
  els.summary.innerHTML = [
    ["Visible images", images.length],
    ["Runs", visibleRuns],
    ["Formats", visibleFormats],
    ["Avg rubric", avg],
  ]
    .map(([label, value]) => `<article class="summary-card"><strong>${escapeHtml(String(value))}</strong><span>${escapeHtml(label)}</span></article>`)
    .join("");
}

function renderGallery(images) {
  if (!els.gallery || !els.count || !els.empty) return;
  els.count.value = `${plural(images.length, "image")} · ${state.showArchived ? "all" : "public"}`;
  els.empty.hidden = images.length > 0;

  if (state.view === "runs") {
    els.gallery.className = "run-grid";
    els.gallery.innerHTML = filteredRuns(images).map(runCard).join("");
    return;
  }

  if (state.view === "hooks") {
    els.gallery.className = "gallery-grid";
    const activeHooks = state.hooks.size ? [...state.hooks] : data.hooks.slice(0, 18).map(([hook]) => hook);
    els.gallery.innerHTML = activeHooks.map((hook) => hookBoard(hook, images)).join("");
    return;
  }

  els.gallery.className = "gallery-grid gallery-grid--image-wall";
  els.gallery.innerHTML = images.map(imageCard).join("");
}

function usageIdeas(image) {
  if (image.taxonomy === "infographic-diagram" || image.taxonomy === "scientific-educational") {
    return "Lesson slides, revision sheets, quick explainers, and search-ready study visuals.";
  }
  if (image.taxonomy === "ui-mockup") {
    return "Interface reference, product briefing, alternate state studies, or gameplay surfaces.";
  }
  if (image.taxonomy === "atlas-contact-sheet" || image.taxonomy === "speculative-object") {
    return "Object vocabulary, prop language, prompt seed, or niche search landing page.";
  }
  return "Visual reference, mood anchor, briefing surface, or agent retrieval example.";
}

function renderInspector() {
  if (!els.inspector) return;
  const reply = latestAgentReply();
  const image = selectedImage();
  const run = selectedRun();
  const pins = pinnedImages();
  const selectionCard = image
    ? `
      <article class="agent-context-card">
        <div class="agent-context-head">
          <div>
            <p class="kicker">${escapeHtml(image.taxonomy)}</p>
            <h3>${escapeHtml(image.title)}</h3>
            <p>${escapeHtml(image.runTheme)}</p>
          </div>
          <button class="inspector-close" type="button" data-clear-selection aria-label="Clear selected context">×</button>
        </div>
        <figure class="agent-context-figure">
          <img src="${escapeHtml(image.pngPath)}" alt="${escapeHtml(image.title)}" />
        </figure>
        <div class="signal-row">
          ${image.specificHooks.slice(0, 6).map((hook) => `<button class="agent-chip" type="button" data-agent-hook="${escapeHtml(hook)}">${escapeHtml(hook)}</button>`).join("")}
        </div>
        <div class="context-pin-row">
          ${CONTINUITY_ROLES.map((role) => {
            const active = state.contextPins.some((pin) => pin.role === role.id && pin.imageId === image.id) ? " is-active" : "";
            return `<button class="agent-chip context-role-chip${active}" type="button" data-pin-image="${escapeHtml(image.id)}" data-pin-role="${escapeHtml(role.id)}">${escapeHtml(role.label)}</button>`;
          }).join("")}
        </div>
        <div class="detail-actions">
          <button class="action-link secondary" type="button" data-copy-prompt="${escapeHtml(image.id)}">Copy prompt</button>
          <button class="action-link secondary" type="button" data-copy-brief="${escapeHtml(image.id)}">Copy brief</button>
        </div>
      </article>
    `
    : run
      ? `
        <article class="agent-context-card">
          <div class="agent-context-head">
            <div>
              <p class="kicker">${escapeHtml(run.timestamp?.slice(0, 10) ?? "")}</p>
              <h3>${escapeHtml(run.theme)}</h3>
              <p>${plural(run.publicImageCount, "image")} · ${run.averageScore} avg rubric</p>
            </div>
            <button class="inspector-close" type="button" data-clear-selection aria-label="Clear selected context">×</button>
          </div>
          <div class="signal-row">
            ${run.topHooks.slice(0, 6).map((hook) => `<button class="agent-chip" type="button" data-agent-hook="${escapeHtml(hook)}">${escapeHtml(hook)}</button>`).join("")}
          </div>
          <div class="detail-actions">
            <button class="action-link secondary" type="button" data-open-run="${escapeHtml(run.slug)}">Browse this run</button>
          </div>
        </article>
      `
      : "";

  const contextKit = `
    <article class="agent-context-card context-kit">
      <div class="agent-context-head">
        <div>
          <p class="kicker">Continuity kit</p>
          <h3>Five-image context memory</h3>
          <p>Pin a character, setting, prop, action, and style reference so every next prompt stays coherent.</p>
        </div>
      </div>
      <div class="context-kit-grid">
        ${CONTINUITY_ROLES.map((role) => {
          const pin = pins.find((item) => item.role === role.id);
          return `
            <article class="context-slot ${pin ? "has-pin" : ""}">
              <span class="context-slot-label">${escapeHtml(role.label)}</span>
              ${pin ? `
                <button class="context-slot-body" type="button" data-agent-image="${escapeHtml(pin.image.id)}">
                  <img src="${escapeHtml(pin.image.pngPath)}" alt="${escapeHtml(pin.image.title)}" loading="lazy" />
                  <strong>${escapeHtml(pin.image.title)}</strong>
                  <span>${escapeHtml(pin.image.runTheme)}</span>
                </button>
                <button class="text-link" type="button" data-remove-pin="${escapeHtml(role.id)}">Remove</button>
              ` : `
                <div class="context-slot-empty">Pin from the selected image.</div>
              `}
            </article>
          `;
        }).join("")}
      </div>
      <div class="detail-actions">
        <button class="action-link secondary" type="button" data-copy-context-brief>Copy continuity brief</button>
        <button class="action-link secondary" type="button" data-agent-prompt-chip="${escapeHtml(continuityPromptSeed())}">Generate continuity pack</button>
      </div>
    </article>
  `;

  const starter = `
    <article class="agent-message agent-message--assistant">
      <p class="kicker">Atlas agent</p>
      <strong>Ask for an ad board, character bible, prompt-image pack, or labeled reference set.</strong>
      <p>I will retrieve matching runs, images, hooks, and board structures from the atlas and keep the session on the right side.</p>
      <div class="signal-row">
        ${AGENT_STARTER_PROMPTS.map((prompt) => `<button class="agent-chip" type="button" data-agent-prompt-chip="${escapeHtml(prompt)}">${escapeHtml(prompt)}</button>`).join("")}
      </div>
    </article>
  `;

  const conversation = state.agentMessages.length
    ? state.agentMessages.map((message) => {
      if (message.role === "user") {
        return `
          <article class="agent-message agent-message--user">
            <p class="kicker">You</p>
            <p>${escapeHtml(message.text)}</p>
          </article>
        `;
      }
      const recommendedImages = message.imageIds.map((id) => data.images.find((item) => item.id === id)).filter(Boolean);
      const recommendedRuns = message.runSlugs.map((slug) => runSummaryMap.get(slug)).filter(Boolean);
      const continuityPlan = (message.continuityPlan ?? []).map((slot) => ({
        ...slot,
        image: data.images.find((item) => item.id === slot.imageId) ?? null,
      }));
      return `
        <article class="agent-message agent-message--assistant">
          <p class="kicker">Atlas agent</p>
          <p>${escapeHtml(message.overview)}</p>
          ${message.contextSummary?.length ? `
            <section class="agent-result-group">
              <h4>Pinned context</h4>
              <div class="tag-row">
                ${message.contextSummary.map((line) => `<span class="tag">${escapeHtml(line)}</span>`).join("")}
              </div>
            </section>
          ` : ""}
          <section class="agent-result-group">
            <h4>Suggested runs</h4>
            <div class="agent-run-list">
              ${recommendedRuns.map((item) => `<button class="agent-pill" type="button" data-agent-run="${escapeHtml(item.slug)}">${escapeHtml(item.theme)}</button>`).join("")}
            </div>
          </section>
          <section class="agent-result-group">
            <h4>Labels to try</h4>
            <div class="signal-row">
              ${message.hooks.map((hook) => `<button class="agent-chip" type="button" data-agent-hook="${escapeHtml(hook)}">${escapeHtml(hook)}</button>`).join("")}
            </div>
          </section>
          <section class="agent-result-group">
            <h4>Brief fields</h4>
            <div class="brief-grid">
              ${(message.briefFields ?? []).map((field) => `<span class="brief-card">${escapeHtml(field)}</span>`).join("")}
            </div>
          </section>
          <section class="agent-result-group">
            <h4>Board structure</h4>
            <ol class="agent-plan-list">
              ${(message.planSteps ?? []).map((step) => `<li>${escapeHtml(step)}</li>`).join("")}
            </ol>
          </section>
          <section class="agent-result-group">
            <h4>Continuity plan</h4>
            <div class="continuity-plan-grid">
              ${continuityPlan.map((slot) => `
                <button class="continuity-plan-card" type="button" ${slot.image ? `data-agent-image="${escapeHtml(slot.image.id)}"` : ""}>
                  ${slot.image ? `<img src="${escapeHtml(slot.image.pngPath)}" alt="${escapeHtml(slot.title)}" loading="lazy" />` : ""}
                  <span class="continuity-plan-meta">
                    <em>${escapeHtml(slot.label)}</em>
                    <strong>${escapeHtml(slot.title)}</strong>
                    <span>${escapeHtml(slot.note)}</span>
                  </span>
                </button>
              `).join("")}
            </div>
          </section>
          <section class="agent-result-group">
            <h4>Recommended panels</h4>
            <div class="agent-thumb-grid">
              ${recommendedImages.map((item) => `
                <button class="agent-thumb" type="button" data-agent-image="${escapeHtml(item.id)}">
                  <img src="${escapeHtml(item.pngPath)}" alt="${escapeHtml(item.title)}" loading="lazy" />
                  <span>${escapeHtml(item.title)}</span>
                </button>
              `).join("")}
            </div>
          </section>
          <section class="agent-result-group">
            <h4>Format filters</h4>
            <div class="tag-row">
              ${message.taxonomies.map((taxonomy) => `<button class="tag" type="button" data-agent-taxonomy="${escapeHtml(taxonomy)}">${escapeHtml(taxonomy)}</button>`).join("")}
            </div>
          </section>
          <section class="agent-result-group">
            <h4>Next prompts</h4>
            <div class="signal-row">
              ${(message.followups ?? []).map((followup) => `<button class="agent-chip" type="button" data-agent-prompt-chip="${escapeHtml(followup)}">${escapeHtml(followup)}</button>`).join("")}
            </div>
          </section>
        </article>
      `;
    }).join("")
    : starter;

  els.inspector.innerHTML = `
    <div class="inspector-body agent-panel-body">
      <div class="inspector-head agent-panel-head">
        <div>
          <p class="kicker">Agentic retrieval</p>
          <h2>Chat over prompt images</h2>
          <p>Bottom prompt in, right-rail boards, tags, and pack structure out.</p>
        </div>
      </div>
      ${selectionCard}
      ${contextKit}
      <div class="agent-conversation">${conversation}</div>
    </div>
  `;

  const shouldOpen = Boolean(state.selection) || Boolean(state.agentMessages.length);
  els.body.classList.toggle("has-selection", shouldOpen);
  if (els.scrim) els.scrim.hidden = !shouldOpen;
}

function renderPages() {
  els.pages.forEach((section) => {
    section.classList.toggle("is-active", section.dataset.page === state.page);
  });
  els.pageLinks.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.pageLink === state.page);
  });
}

function renderSubtabs() {
  els.subtabs.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === state.view);
  });
}

function render() {
  if (els.search && els.search.value !== state.query) els.search.value = state.query;
  if (els.marketSearch && els.marketSearch.value !== state.query) els.marketSearch.value = state.query;
  renderPageMeta();
  renderPages();
  renderSubtabs();
  renderMarketPrimaryNav();
  renderMarketDirectory();
  renderMarketShelves();
  renderCatalogBrowse();
  renderHomeMetrics();
  renderHeroWall();
  renderTaskPreview();
  renderHomePreview();
  renderNavThemes();
  renderThemeCards();
  renderCheckboxList(els.runFilters, runSummaries.map((run) => [run.slug, run.publicImageCount]), "runs", (slug) => runSummaryMap.get(slug)?.theme ?? slug);
  renderCheckboxList(els.taxonomyFilters, data.taxonomies, "taxonomies");
  renderBandFilters();
  renderTopicButtons();
  renderHookButtons();
  renderAgentSuggestionStrip();

  const images = filteredImages();
  renderSummary(images);
  renderGallery(images);
  renderInspector();
  renderEducationResults();
}

function setPage(page, updateHash = true) {
  state.page = VALID_PAGES.has(page) ? page : "home";
  render();
  if (updateHash && location.hash.slice(1) !== state.page) {
    history.pushState(null, "", `#${state.page}`);
  }
}

function setSelection(type, id) {
  state.selection = { type, id };
  renderInspector();
}

function clearSelection() {
  state.selection = null;
  renderInspector();
}

function clearFilters() {
  state.query = "";
  state.sort = "best";
  state.runs.clear();
  state.taxonomies.clear();
  state.topics.clear();
  state.hooks.clear();
  state.bands.clear();
  state.topicQuery = "";
  state.hookQuery = "";
  state.showArchived = false;
  if (els.search) els.search.value = "";
  if (els.sort) els.sort.value = "best";
  if (els.topicSearch) els.topicSearch.value = "";
  if (els.hookSearch) els.hookSearch.value = "";
  if (els.showArchived) els.showArchived.checked = false;
}

function resetEducation() {
  state.educationFile = null;
  state.educationFileText = "";
  state.educationResult = null;
  state.educationLoading = false;
  if (els.docUpload) els.docUpload.value = "";
  if (els.docText) els.docText.value = "";
  if (els.educationStatus) els.educationStatus.textContent = "No document loaded yet.";
  renderEducationResults();
}

function renderEducationResults() {
  if (!els.educationResults) return;
  const result = state.educationResult;
  if (!result) {
    els.educationResults.className = "education-results empty";
    els.educationResults.innerHTML = `
      <div class="empty-state">
        <strong>Nothing generated yet</strong>
        <p>Run the pack builder to get prompts, search queries, board structures, and preview renders.</p>
      </div>
    `;
    return;
  }

  const previewsByIndex = new Map((result.previews ?? []).map((preview) => [preview.explainerIndex, preview]));
  els.educationResults.className = "education-results";
  els.educationResults.innerHTML = `
    <article class="builder-output">
      <div class="builder-output-body">
        <div class="builder-output-header">
          <div>
            <p class="kicker">Pack summary</p>
            <strong>${escapeHtml(result.packTitle)}</strong>
          </div>
          <button class="copy-button" type="button" data-copy-pack>Copy pack JSON</button>
        </div>
        <p>${escapeHtml(result.summary)}</p>
        <div class="signal-row">
          ${(result.searchQueries ?? []).map((query) => `<span class="signal-tag">${escapeHtml(query)}</span>`).join("")}
        </div>
      </div>
      <div class="builder-output-side">
        <div class="tag-row">
          <span class="tag">${escapeHtml(result.lane ?? "mixed")}</span>
          <span class="tag">${escapeHtml(result.audience ?? "")}</span>
          <span class="tag">${escapeHtml(result.goal ?? "")}</span>
          <span class="tag">${plural((result.explainers ?? []).length, "output")}</span>
        </div>
      </div>
    </article>
    ${(result.explainers ?? []).map((item, index) => {
      const preview = previewsByIndex.get(index);
      return `
        <article class="builder-output">
          <div class="builder-output-body">
            <div class="builder-output-header">
              <div>
                <p class="kicker">${escapeHtml(item.format || "Output")}</p>
                <strong>${escapeHtml(item.title)}</strong>
              </div>
              <button class="copy-button" type="button" data-copy-explainer="${index}">Copy prompt</button>
            </div>
            <p>${escapeHtml(item.objective || item.rationale || "")}</p>
            <div class="signal-row">
              ${(item.hooks ?? []).map((hook) => `<span class="signal-tag">${escapeHtml(hook)}</span>`).join("")}
            </div>
            <div class="tag-row">
              ${item.searchQuery ? `<span class="tag">${escapeHtml(item.searchQuery)}</span>` : ""}
              ${item.mode ? `<span class="tag">${escapeHtml(item.mode)}</span>` : ""}
            </div>
            <details class="inspector-section">
              <summary>Prompt</summary>
              <div class="prompt-box">${escapeHtml(item.prompt || "")}</div>
            </details>
          </div>
          <div class="builder-output-side">
            ${preview ? `
              <button class="education-preview" type="button" data-preview-index="${index}">
                <img src="${escapeHtml(preview.imageDataUrl)}" alt="${escapeHtml(item.title)}" />
                <span class="education-preview-body">
                  <strong>${escapeHtml(item.title)}</strong>
                  <p>${escapeHtml(preview.note || "GPT Image preview")}</p>
                </span>
              </button>
            ` : `
              <div class="empty-state">
                <strong>No preview</strong>
                <p>This explainer shipped as a prompt and plan only.</p>
              </div>
            `}
          </div>
        </article>
      `;
    }).join("")}
  `;
}

async function copyText(value) {
  if (!value) return;
  try {
    await navigator.clipboard.writeText(value);
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = value;
    document.body.append(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }
}

async function downloadWatermarkedImage(image) {
  if (!image) return;
  const img = new Image();
  img.decoding = "async";
  img.src = image.pngPath;
  await img.decode();

  const canvas = document.createElement("canvas");
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  const shortId = image.id.replace(`${image.runSlug}-`, "");
  const scale = Math.max(1, canvas.width / 1400);
  const pad = Math.round(16 * scale);
  const titleSize = Math.round(18 * scale);
  const metaSize = Math.round(11 * scale);
  const gap = Math.round(6 * scale);
  const lineOne = `Image Atlas  ${shortId}`;
  const lineTwo = image.runSlug;

  ctx.font = `700 ${titleSize}px Onest, sans-serif`;
  const width = Math.max(ctx.measureText(lineOne).width, ctx.measureText(lineTwo).width) + pad * 2;
  const height = titleSize + metaSize + pad * 2 + gap;
  const x = canvas.width - width - pad;
  const y = canvas.height - height - pad;

  ctx.fillStyle = "rgba(16, 23, 21, 0.8)";
  ctx.fillRect(x, y, width, height);
  ctx.fillStyle = "rgba(255,255,255,0.96)";
  ctx.font = `700 ${titleSize}px Onest, sans-serif`;
  ctx.fillText(lineOne, x + pad, y + pad + titleSize);
  ctx.fillStyle = "rgba(255,255,255,0.72)";
  ctx.font = `500 ${metaSize}px Onest, sans-serif`;
  ctx.fillText(lineTwo, x + pad, y + pad + titleSize + gap + metaSize);

  canvas.toBlob((blob) => {
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${image.id}-image-atlas-tagged.png`;
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }, "image/png");
}

function extractResponseText(payload) {
  if (typeof payload.output_text === "string" && payload.output_text.trim()) return payload.output_text.trim();
  const chunks = [];
  for (const item of payload.output ?? []) {
    if (item.type === "message") {
      for (const content of item.content ?? []) {
        if (content.type === "output_text" && content.text) chunks.push(content.text);
      }
    }
  }
  return chunks.join("\n").trim();
}

function safeJsonParse(value) {
  const trimmed = value.trim();
  try {
    return JSON.parse(trimmed);
  } catch {
    const fenced = trimmed.match(/```json\s*([\s\S]*?)```/i)?.[1] ?? trimmed.match(/\{[\s\S]*\}$/)?.[0];
    if (!fenced) throw new Error("Could not parse JSON response.");
    return JSON.parse(fenced);
  }
}

async function readUploadedDocument(file) {
  const extension = file.name.toLowerCase().split(".").pop();
  const supported = new Set(["txt", "md", "csv", "json", "html", "htm"]);
  if (supported.has(extension) || file.type.startsWith("text/") || file.type === "application/json") {
    return file.text();
  }
  throw new Error("This build reads text-first documents directly. For PDF or DOCX, paste extracted text into the textarea for now.");
}

async function buildEducationPack() {
  if (state.educationLoading) return;
  state.educationLoading = true;
  state.educationResult = null;
  if (els.generateEducationPack) els.generateEducationPack.disabled = true;
  if (els.educationStatus) els.educationStatus.textContent = "Reading source and planning explainer pack...";
  renderEducationResults();

  try {
    const pastedText = els.docText?.value?.trim() ?? "";
    const fileText = state.educationFileText?.trim() ?? "";
    const documentText = [fileText, pastedText].filter(Boolean).join("\n\n");

    if (!documentText) {
      throw new Error("Add a source document or paste source text first.");
    }

    const payload = {
      documentText,
      fileName: state.educationFile?.name ?? null,
      lane: els.educationLane?.value ?? "commercial",
      audience: els.educationAudience?.value ?? "teachers and curriculum authors",
      goal: els.educationGoal?.value ?? "mixed explanatory pack",
      packSize: Number(els.educationPackSize?.value ?? 6),
      previewCount: Number(els.educationPreviewCount?.value ?? 2),
      contextKit: pinnedImages().map((pin) => ({
        role: pin.role,
        title: pin.image.title,
        runTheme: pin.image.runTheme,
        hooks: pin.image.specificHooks.slice(0, 8),
      })),
    };

    if (els.educationStatus) els.educationStatus.textContent = "Generating explainer pack with preview prompts...";

    const response = await fetch("/api/education-pack", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const json = await response.json();
    if (!response.ok) {
      throw new Error(json.error || "The pack generator failed.");
    }

    const normalized = {
      ...json,
      packedJson: JSON.stringify(json, null, 2),
      explainers: json.explainers ?? [],
      previews: json.previews ?? [],
    };

    state.educationResult = normalized;
    if (els.educationStatus) {
      els.educationStatus.textContent = `Generated ${normalized.explainers.length} outputs${normalized.previews.length ? ` and ${normalized.previews.length} preview renders` : ""}.`;
    }
    renderEducationResults();
  } catch (error) {
    if (els.educationStatus) els.educationStatus.textContent = error.message || "Failed to generate pack.";
  } finally {
    state.educationLoading = false;
    if (els.generateEducationPack) els.generateEducationPack.disabled = false;
  }
}

function submitAgentPrompt(prompt) {
  const value = prompt.trim();
  if (!value) return;
  state.agentDraft = "";
  state.agentMessages.push({ role: "user", text: value });
  const reply = buildAgentReply(value);
  state.agentMessages.push(reply);
  state.query = value;
  state.view = "images";
  if (els.search) els.search.value = value;
  if (els.agentPromptInput) els.agentPromptInput.value = "";
  if (reply.runSlugs[0]) {
    state.selection = { type: "run", id: reply.runSlugs[0] };
  } else if (reply.imageIds[0]) {
    state.selection = { type: "image", id: reply.imageIds[0] };
  }
  setPage("catalog");
}

els.search?.addEventListener("input", (event) => {
  state.query = event.target.value;
  if (els.marketSearch && els.marketSearch.value !== state.query) els.marketSearch.value = state.query;
  render();
});

els.marketSearch?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  state.query = event.target.value;
  if (els.search) els.search.value = state.query;
  setPage("catalog");
});

els.marketSearch?.addEventListener("input", (event) => {
  state.query = event.target.value;
  if (els.search && els.search.value !== state.query) els.search.value = state.query;
});

els.agentPromptInput?.addEventListener("input", (event) => {
  state.agentDraft = event.target.value;
});

els.agentDock?.addEventListener("submit", (event) => {
  event.preventDefault();
  submitAgentPrompt(els.agentPromptInput?.value ?? "");
});

els.sort?.addEventListener("change", (event) => {
  state.sort = event.target.value;
  render();
});

els.showArchived?.addEventListener("change", (event) => {
  state.showArchived = event.target.checked;
  render();
});

els.topicSearch?.addEventListener("input", (event) => {
  state.topicQuery = event.target.value;
  renderTopicButtons();
});

els.hookSearch?.addEventListener("input", (event) => {
  state.hookQuery = event.target.value;
  renderHookButtons();
});

els.clearFilters?.addEventListener("click", () => {
  clearFilters();
  render();
});

els.docUpload?.addEventListener("change", async (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  state.educationFile = file;
  try {
    if (els.educationStatus) els.educationStatus.textContent = `Reading ${file.name}...`;
    state.educationFileText = await readUploadedDocument(file);
    if (els.educationStatus) els.educationStatus.textContent = `${file.name} loaded. You can add extra pasted notes below.`;
  } catch (error) {
    state.educationFile = null;
    state.educationFileText = "";
    event.target.value = "";
    if (els.educationStatus) els.educationStatus.textContent = error.message;
  }
});

els.generateEducationPack?.addEventListener("click", buildEducationPack);
els.clearEducation?.addEventListener("click", resetEducation);

document.addEventListener("change", (event) => {
  const input = event.target;
  if (!(input instanceof HTMLInputElement)) return;
  if (input.dataset.filter === "runs") toggleSet(state.runs, input.value, input.checked);
  if (input.dataset.filter === "taxonomies") toggleSet(state.taxonomies, input.value, input.checked);
  if (input.dataset.filter === "bands") toggleSet(state.bands, input.value, input.checked);
  render();
});

document.addEventListener("click", async (event) => {
  const target = event.target instanceof Element ? event.target : null;
  if (!target) return;

  const pageLink = target.closest("[data-page-link]");
  if (pageLink) {
    setPage(pageLink.dataset.pageLink);
    return;
  }

  const marketEntry = target.closest("[data-market-page]");
  if (marketEntry) {
    applyMarketEntry({
      page: marketEntry.dataset.marketPage,
      query: marketEntry.dataset.marketQuery,
      taxonomy: marketEntry.dataset.marketTaxonomy,
      topic: marketEntry.dataset.marketTopic,
    });
    return;
  }

  const tab = target.closest("[data-view]");
  if (tab) {
    state.view = tab.dataset.view;
    render();
    return;
  }

  const topicButton = target.closest("[data-topic]");
  if (topicButton) {
    const topic = topicButton.dataset.topic;
    toggleSet(state.topics, topic, !state.topics.has(topic));
    render();
    return;
  }

  const hookButton = target.closest("[data-hook]");
  if (hookButton) {
    const hook = hookButton.dataset.hook;
    toggleSet(state.hooks, hook, !state.hooks.has(hook));
    render();
    return;
  }

  const promptChip = target.closest("[data-agent-prompt-chip]");
  if (promptChip) {
    submitAgentPrompt(promptChip.dataset.agentPromptChip ?? "");
    return;
  }

  const pinButton = target.closest("[data-pin-image][data-pin-role]");
  if (pinButton) {
    pinImageToRole(pinButton.dataset.pinImage, pinButton.dataset.pinRole);
    renderInspector();
    return;
  }

  const removePin = target.closest("[data-remove-pin]");
  if (removePin) {
    removeContextPin(removePin.dataset.removePin);
    renderInspector();
    return;
  }

  const agentRun = target.closest("[data-agent-run]");
  if (agentRun) {
    const runSlug = agentRun.dataset.agentRun;
    state.runs.clear();
    state.runs.add(runSlug);
    state.view = "images";
    setSelection("run", runSlug);
    setPage("catalog");
    render();
    return;
  }

  const agentImage = target.closest("[data-agent-image]");
  if (agentImage) {
    state.view = "images";
    setSelection("image", agentImage.dataset.agentImage);
    setPage("catalog");
    render();
    return;
  }

  const agentHook = target.closest("[data-agent-hook]");
  if (agentHook) {
    const hook = agentHook.dataset.agentHook;
    state.view = "images";
    state.hooks.clear();
    state.hooks.add(hook);
    state.query = "";
    if (els.search) els.search.value = "";
    setPage("catalog");
    render();
    return;
  }

  const agentTaxonomy = target.closest("[data-agent-taxonomy]");
  if (agentTaxonomy) {
    const taxonomy = agentTaxonomy.dataset.agentTaxonomy;
    state.view = "images";
    state.taxonomies.clear();
    state.taxonomies.add(taxonomy);
    setPage("catalog");
    render();
    return;
  }

  const hookSelect = target.closest("[data-hook-select]");
  if (hookSelect) {
    const hook = hookSelect.dataset.hookSelect;
    state.view = "images";
    state.hooks.clear();
    state.hooks.add(hook);
    setPage("catalog");
    render();
    return;
  }

  const runButton = target.closest("[data-run-slug]");
  if (runButton) {
    setSelection("run", runButton.dataset.runSlug);
    return;
  }

  const openRun = target.closest("[data-open-run]");
  if (openRun) {
    const runSlug = openRun.dataset.openRun;
    state.runs.clear();
    state.runs.add(runSlug);
    state.view = "images";
    setPage("catalog");
    render();
    return;
  }

  const imageButton = target.closest("[data-image-id]");
  if (imageButton) {
    setSelection("image", imageButton.dataset.imageId);
    return;
  }

  const closeInspector = target.closest("[data-close-inspector]");
  if (closeInspector) {
    clearSelection();
    return;
  }

  const clearSelectionButton = target.closest("[data-clear-selection]");
  if (clearSelectionButton) {
    clearSelection();
    render();
    return;
  }

  if (target === els.scrim) {
    clearSelection();
    return;
  }

  const copyPrompt = target.closest("[data-copy-prompt]");
  if (copyPrompt) {
    const image = data.images.find((item) => item.id === copyPrompt.dataset.copyPrompt);
    await copyText(image?.finalPrompt ?? "");
    return;
  }

  const copyBrief = target.closest("[data-copy-brief]");
  if (copyBrief) {
    const image = data.images.find((item) => item.id === copyBrief.dataset.copyBrief);
    const brief = [
      `Edit or extend this image: ${image?.title}.`,
      `Theme: ${image?.runTheme}.`,
      `Specific hooks: ${image?.specificHooks.slice(0, 12).join(", ")}.`,
      state.contextPins.length ? `Continuity context: ${contextKitSummary().join(" | ")}.` : "",
      image?.learningValue ? `Learning value: ${image.learningValue}.` : "",
      image?.compositionNotes ? `Composition: ${image.compositionNotes}.` : "",
    ].filter(Boolean).join("\n");
    await copyText(brief);
    return;
  }

  const copyContextBrief = target.closest("[data-copy-context-brief]");
  if (copyContextBrief) {
    const pins = pinnedImages();
    const brief = [
      "Build a continuity-safe image pack for a short film or ad.",
      pins.length ? `Pinned context: ${contextKitSummary().join(" | ")}.` : "",
      "Required outputs: character sheet, setting sheet, prop or weapon sheet, action-in-setting frame, and style continuity frame.",
      "Keep the same subject identity, costume cues, prop details, environment logic, and material language across every image.",
    ].filter(Boolean).join("\n");
    await copyText(brief);
    return;
  }

  const downloadButton = target.closest("[data-download-watermarked]");
  if (downloadButton) {
    const image = data.images.find((item) => item.id === downloadButton.dataset.downloadWatermarked);
    await downloadWatermarkedImage(image);
    return;
  }

  const copyPack = target.closest("[data-copy-pack]");
  if (copyPack) {
    await copyText(state.educationResult?.packedJson ?? "");
    return;
  }

  const copyExplainer = target.closest("[data-copy-explainer]");
  if (copyExplainer) {
    const explainer = state.educationResult?.explainers?.[Number(copyExplainer.dataset.copyExplainer)];
    await copyText(explainer?.prompt ?? "");
    return;
  }

  const previewCard = target.closest("[data-preview-index]");
  if (previewCard) {
    const index = Number(previewCard.dataset.previewIndex);
    const explainer = state.educationResult?.explainers?.[index];
    const preview = state.educationResult?.previews?.find((item) => item.explainerIndex === index);
    if (!explainer || !preview || !els.inspector) return;
    state.selection = null;
    els.inspector.innerHTML = `
      <div class="inspector-body">
        <div class="inspector-head">
          <div>
            <p class="kicker">Education preview</p>
            <h2>${escapeHtml(explainer.title)}</h2>
            <p>${escapeHtml(explainer.format || "Explainer image")}</p>
          </div>
          <button class="inspector-close" type="button" data-close-inspector aria-label="Close inspector">×</button>
        </div>
        <figure class="inspector-figure">
          <img src="${escapeHtml(preview.imageDataUrl)}" alt="${escapeHtml(explainer.title)}" />
        </figure>
        <section class="inspector-section">
          <h3>Search query</h3>
          <p>${escapeHtml(explainer.searchQuery || "")}</p>
        </section>
        <section class="inspector-section">
          <h3>Prompt</h3>
          <div class="prompt-box">${escapeHtml(explainer.prompt || "")}</div>
        </section>
      </div>
    `;
    els.body.classList.add("has-selection");
    if (els.scrim) els.scrim.hidden = false;
  }
});

window.addEventListener("hashchange", () => {
  setPage(location.hash.slice(1), false);
});

setPage(location.hash.slice(1) || "home", false);
render();
