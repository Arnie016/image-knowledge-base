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
    title: "A cleaner way to browse niche image systems.",
  },
  catalog: {
    kicker: "Browser",
    title: "Open an image, theme, or search hook fast.",
  },
  themes: {
    kicker: "Theme library",
    title: "Runs presented as visual navigation, not text dumps.",
  },
  education: {
    kicker: "Education mode",
    title: "Document-to-explainer packs with agentic image planning.",
  },
  licensing: {
    kicker: "Licensing",
    title: "Free browsing now, higher-touch packs and agent flows next.",
  },
};

const state = {
  page: "home",
  view: "images",
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
  pageKicker: document.querySelector("#pageKicker"),
  pageTitle: document.querySelector("#pageTitle"),
  proofImageCount: document.querySelector("#proofImageCount"),
  proofTopicCount: document.querySelector("#proofTopicCount"),
  heroWall: document.querySelector("#heroWall"),
  homePreview: document.querySelector("#homePreview"),
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
  summary: document.querySelector("#summaryStrip"),
  count: document.querySelector("#resultCount"),
  gallery: document.querySelector("#gallery"),
  empty: document.querySelector("#emptyState"),
  inspector: document.querySelector("#inspectorPanel"),
  subtabs: [...document.querySelectorAll("[data-view]")],
  scrim: document.querySelector("#mobileScrim"),
  docUpload: document.querySelector("#docUpload"),
  docText: document.querySelector("#docText"),
  educationAudience: document.querySelector("#educationAudience"),
  educationGoal: document.querySelector("#educationGoal"),
  educationPackSize: document.querySelector("#educationPackSize"),
  educationPreviewCount: document.querySelector("#educationPreviewCount"),
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
    .filter((image) => ["environment-concept", "mixed-format", "atlas-contact-sheet", "product-mockup", "photorealistic-natural"].includes(image.taxonomy))
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

  els.gallery.className = "gallery-grid";
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
  if (!state.selection) {
    els.inspector.innerHTML = `
      <div class="inspector-empty">
        <strong>Nothing selected</strong>
        <p>Open an image or a run to inspect it here.</p>
      </div>
    `;
    els.body.classList.remove("has-selection");
    if (els.scrim) els.scrim.hidden = true;
    return;
  }

  let html = "";

  if (state.selection.type === "image") {
    const image = data.images.find((item) => item.id === state.selection.id);
    if (!image) {
      state.selection = null;
      renderInspector();
      return;
    }

    const editBrief = [
      `Edit or extend this image: ${image.title}.`,
      `Theme: ${image.runTheme}.`,
      `Keep these hooks: ${image.specificHooks.slice(0, 8).join(", ")}.`,
      image.compositionNotes ? `Composition: ${image.compositionNotes}` : "",
      image.learningValue ? `Goal: ${image.learningValue}` : "",
    ].filter(Boolean).join("\n");

    html = `
      <div class="inspector-body">
        <div class="inspector-head">
          <div>
            <p class="kicker">${escapeHtml(image.taxonomy)}</p>
            <h2>${escapeHtml(image.title)}</h2>
            <p>${escapeHtml(image.runTheme)}</p>
          </div>
          <button class="inspector-close" type="button" data-close-inspector aria-label="Close inspector">×</button>
        </div>

        <figure class="inspector-figure">
          <img src="${escapeHtml(image.pngPath)}" alt="${escapeHtml(image.title)}" />
        </figure>

        <div class="detail-actions">
          <button class="action-link" type="button" data-download-watermarked="${escapeHtml(image.id)}">Download tagged PNG</button>
          <button class="action-link secondary" type="button" data-copy-prompt="${escapeHtml(image.id)}">Copy prompt</button>
          <button class="action-link secondary" type="button" data-copy-brief="${escapeHtml(image.id)}">Copy brief</button>
        </div>

        <section class="inspector-section">
          <h3>Hooks</h3>
          <div class="signal-row">
            ${image.specificHooks.map((hook) => `<span class="signal-tag">${escapeHtml(hook)}</span>`).join("")}
          </div>
        </section>

        <section class="inspector-section">
          <h3>Use it for</h3>
          <p>${escapeHtml(usageIdeas(image))}</p>
        </section>

        <section class="inspector-section">
          <h3>Learning value</h3>
          <p>${escapeHtml(image.learningValue || "No learning note recorded.")}</p>
        </section>

        <section class="inspector-section">
          <h3>Composition</h3>
          <p>${escapeHtml(image.compositionNotes || image.formatNotes || "No composition note recorded.")}</p>
        </section>

        <section class="inspector-section">
          <h3>Scale and links</h3>
          <div class="tag-row">
            ${image.scaleTags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
          </div>
          <div class="detail-actions">
            <a class="action-link secondary" href="${escapeHtml(image.detailPath)}">Static page</a>
            <a class="action-link secondary" href="${escapeHtml(image.promptPath)}" target="_blank" rel="noreferrer">Prompt card</a>
            <a class="action-link secondary" href="${escapeHtml(image.reportPath)}" target="_blank" rel="noreferrer">Run report</a>
          </div>
        </section>

        <details class="inspector-section">
          <summary>Prompt extract</summary>
          <div class="prompt-box">${escapeHtml(image.finalPrompt.slice(0, 2200))}</div>
        </details>

        <details class="inspector-section">
          <summary>Edit brief</summary>
          <div class="prompt-box">${escapeHtml(editBrief)}</div>
        </details>
      </div>
    `;
  } else if (state.selection.type === "run") {
    const run = runSummaryMap.get(state.selection.id);
    if (!run) {
      state.selection = null;
      renderInspector();
      return;
    }

    html = `
      <div class="inspector-body">
        <div class="inspector-head">
          <div>
            <p class="kicker">${escapeHtml(run.timestamp?.slice(0, 10) ?? "")}</p>
            <h2>${escapeHtml(run.theme)}</h2>
            <p>${plural(run.publicImageCount, "image")} · ${run.averageScore} average rubric</p>
          </div>
          <button class="inspector-close" type="button" data-close-inspector aria-label="Close inspector">×</button>
        </div>

        ${run.cover ? `
          <figure class="inspector-figure">
            <img src="${escapeHtml(run.cover.pngPath)}" alt="${escapeHtml(run.theme)}" />
          </figure>
        ` : ""}

        <div class="run-actions">
          <button class="action-link" type="button" data-open-run="${escapeHtml(run.slug)}">Browse this run</button>
          <a class="action-link secondary" href="${escapeHtml(`./${run.cover?.runPath ?? `r/${run.slug}/`}`)}">Run page</a>
          <a class="action-link secondary" href="${escapeHtml(run.reportPath)}" target="_blank" rel="noreferrer">Run report</a>
        </div>

        <section class="inspector-section">
          <h3>Top hooks</h3>
          <div class="signal-row">
            ${run.topHooks.map((hook) => `<span class="signal-tag">${escapeHtml(hook)}</span>`).join("")}
          </div>
        </section>

        <section class="inspector-section">
          <h3>Formats</h3>
          <div class="tag-row">
            ${run.taxonomies.map((taxonomy) => `<span class="tag">${escapeHtml(taxonomy)}</span>`).join("")}
          </div>
        </section>

        <section class="inspector-section">
          <h3>Preview panels</h3>
          <div class="thumb-row">
            ${run.previews.map((image) => `
              <button class="thumb-button" type="button" data-image-id="${escapeHtml(image.id)}">
                <img src="${escapeHtml(image.pngPath)}" alt="${escapeHtml(image.title)}" loading="lazy" />
              </button>
            `).join("")}
          </div>
        </section>

        <section class="inspector-section">
          <h3>Panel titles</h3>
          <p class="run-note">${escapeHtml(run.imageTitles.join(" · "))}</p>
        </section>
      </div>
    `;
  }

  els.inspector.innerHTML = html;
  els.body.classList.add("has-selection");
  if (els.scrim) els.scrim.hidden = false;
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
  renderPageMeta();
  renderPages();
  renderSubtabs();
  renderHomeMetrics();
  renderHeroWall();
  renderHomePreview();
  renderNavThemes();
  renderThemeCards();
  renderCheckboxList(els.runFilters, runSummaries.map((run) => [run.slug, run.publicImageCount]), "runs", (slug) => runSummaryMap.get(slug)?.theme ?? slug);
  renderCheckboxList(els.taxonomyFilters, data.taxonomies, "taxonomies");
  renderBandFilters();
  renderTopicButtons();
  renderHookButtons();

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
        <p>Run the pack builder to get prompts, search queries, and preview renders.</p>
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
          <span class="tag">${escapeHtml(result.audience ?? "")}</span>
          <span class="tag">${escapeHtml(result.goal ?? "")}</span>
          <span class="tag">${plural((result.explainers ?? []).length, "explainer")}</span>
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
                <p class="kicker">${escapeHtml(item.format || "Explainer")}</p>
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
      audience: els.educationAudience?.value ?? "teachers and curriculum authors",
      goal: els.educationGoal?.value ?? "mixed explanatory pack",
      packSize: Number(els.educationPackSize?.value ?? 6),
      previewCount: Number(els.educationPreviewCount?.value ?? 2),
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
      els.educationStatus.textContent = `Generated ${normalized.explainers.length} explainers${normalized.previews.length ? ` and ${normalized.previews.length} preview renders` : ""}.`;
    }
    renderEducationResults();
  } catch (error) {
    if (els.educationStatus) els.educationStatus.textContent = error.message || "Failed to generate pack.";
  } finally {
    state.educationLoading = false;
    if (els.generateEducationPack) els.generateEducationPack.disabled = false;
  }
}

els.search?.addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
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
      image?.learningValue ? `Learning value: ${image.learningValue}.` : "",
      image?.compositionNotes ? `Composition: ${image.compositionNotes}.` : "",
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
