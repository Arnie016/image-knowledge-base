import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const catalogDir = path.join(root, "catalog");
const siteDir = path.join(root, "site");
const runsPath = path.join(catalogDir, "runs.jsonl");
const imagesPath = path.join(catalogDir, "images.jsonl");
const curationPath = path.join(catalogDir, "curation.json");
const outPath = path.join(siteDir, "data.js");
const siteOrigin = "https://image-knowledge-base.vercel.app";

const RUBRIC_VERSION = "2026-05-06-v1";

const stopWords = new Set([
  "and",
  "are",
  "but",
  "can",
  "for",
  "from",
  "has",
  "have",
  "into",
  "not",
  "one",
  "only",
  "over",
  "than",
  "the",
  "then",
  "there",
  "these",
  "they",
  "through",
  "with",
  "without",
  "background",
  "text",
  "this",
  "that",
  "using",
  "used",
  "image",
  "images",
  "visual",
  "run",
  "theme",
  "system",
  "support",
  "board",
  "sheet",
  "spread",
  "atlas",
  "workflow",
  "table",
  "family",
  "blue",
  "cream",
  "hour",
  "rather",
  "concept",
  "mockup",
  "diagram",
  "layout",
  "prompt",
  "final",
  "quality",
  "constraints",
  "avoid",
  "scene",
  "subject",
  "asset",
  "type",
]);

const genericHookTokens = new Set([
  "bright",
  "clear",
  "clean",
  "dense",
  "final",
  "image",
  "layout",
  "light",
  "medium",
  "natural",
  "object",
  "objects",
  "page",
  "playful",
  "public",
  "quiet",
  "realistic",
  "scene",
  "style",
  "study",
  "system",
  "tactile",
  "theme",
  "visual",
  "wide",
]);

const forbiddenHookFragments = [
  "feels",
  "rather than",
  "instead of",
  "showing",
  "preserve",
  "change request",
  "keep the",
  "adapt it",
  "moving between",
  "returning clue",
  "arriving at",
  "comparing clue",
  "guides players",
  "tracks clue",
];

const rubricDefinition = {
  version: RUBRIC_VERSION,
  scale: "1-5 per dimension, weighted to 100 overall",
  dimensions: [
    {
      id: "specificity",
      label: "Specificity",
      weight: 0.28,
      description: "Concrete nouns, hyper-specific route clues, scale discipline, and non-generic framing.",
    },
    {
      id: "usefulness",
      label: "Usefulness",
      weight: 0.24,
      description: "How reusable the image is for searchers, teaching, briefing, product direction, or prompt remixing.",
    },
    {
      id: "vibe",
      label: "Vibe",
      weight: 0.18,
      description: "Strength of mood, palette, material language, and formal atmosphere.",
    },
    {
      id: "searchability",
      label: "Search Fit",
      weight: 0.18,
      description: "How well the image exposes searchable hooks, precise language, and queryable detail.",
    },
    {
      id: "novelty",
      label: "Novelty",
      weight: 0.12,
      description: "Whether the image expands the corpus instead of repeating an existing branch.",
    },
  ],
  bands: [
    {
      id: "signature",
      min: 90,
      label: "Signature",
      description: "Top-tier anchor images: vivid, hyper-specific, broadly useful, and worth surfacing first.",
    },
    {
      id: "strong",
      min: 80,
      label: "Strong",
      description: "High-value images with strong search hooks and clear reuse potential.",
    },
    {
      id: "useful",
      min: 70,
      label: "Useful",
      description: "Solid supporting images that add breadth or documentation value.",
    },
    {
      id: "niche",
      min: 0,
      label: "Niche",
      description: "Still valid, but narrower or less immediately useful than the front-rank set.",
    },
  ],
};

function readJsonl(filePath) {
  if (!existsSync(filePath)) return [];
  return readFileSync(filePath, "utf8")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      try {
        return JSON.parse(line);
      } catch (error) {
        return { type: "parse-error", line, error: String(error) };
      }
    });
}

function readJson(filePath, fallback) {
  if (!existsSync(filePath)) return fallback;
  try {
    return JSON.parse(readFileSync(filePath, "utf8"));
  } catch {
    return fallback;
  }
}

function readPromptCard(relativePath) {
  const absolutePath = path.join(root, relativePath.replace(/^image-knowledge-base\//, ""));
  if (!existsSync(absolutePath)) return "";
  return readFileSync(absolutePath, "utf8");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function extractSection(markdown, label) {
  const match = markdown.match(new RegExp(`- ${escapeRegExp(label)}:\\s*([^\\n]+)`, "i"));
  return match ? match[1].replace(/`/g, "").trim() : "";
}

function extractListSection(markdown, label) {
  return extractSection(markdown, label)
    .split(",")
    .map((value) => value.replace(/`/g, "").trim())
    .filter(Boolean);
}

function extractPromptText(markdown) {
  const block = markdown.match(/```text\n([\s\S]*?)```/);
  if (block) return block[1].trim();
  return markdown
    .split(/\r?\n/)
    .filter((line) => !line.startsWith("#"))
    .join(" ")
    .slice(0, 1600);
}

function extractPromptField(promptText, label) {
  const match = promptText.match(new RegExp(`^${escapeRegExp(label)}:\\s*(.+)$`, "im"));
  return match ? match[1].trim() : "";
}

function titleCase(value) {
  return value
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .trim();
}

function relativeForSite(catalogPath) {
  return `../${catalogPath.replace(/^image-knowledge-base\//, "")}`;
}

function absoluteSiteUrl(relativePath = "") {
  return `${siteOrigin}/site/${relativePath.replace(/^\.?\//, "")}`.replace(/\/+$/, "/");
}

function absoluteAssetUrl(catalogPath = "") {
  return `${siteOrigin}/${String(catalogPath).replace(/^image-knowledge-base\//, "")}`;
}

function slugify(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 96);
}

function pageDescription(value, max = 160) {
  const clean = cleanPhrase(value);
  if (clean.length <= max) return clean;
  return clean.slice(0, max).replace(/\s+\S*$/, "").trim();
}

function htmlPage({ title, description, canonicalPath, body, imageUrl = "" }) {
  const canonical = absoluteSiteUrl(canonicalPath);
  const imageMeta = imageUrl
    ? `
    <meta property="og:image" content="${escapeHtml(imageUrl)}" />
    <meta name="twitter:image" content="${escapeHtml(imageUrl)}" />`
    : "";
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="canonical" href="${escapeHtml(canonical)}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />${imageMeta}
    <meta name="twitter:card" content="${imageUrl ? "summary_large_image" : "summary"}" />
    <link rel="stylesheet" href="../../styles.css" />
  </head>
  <body class="seo-page">
    <main class="seo-shell">
      ${body}
    </main>
  </body>
</html>
`;
}

function jsonLdScript(value) {
  return `<script type="application/ld+json">${JSON.stringify(value).replace(/</g, "\\u003c")}</script>`;
}

function tagList(values, className = "tag") {
  return values.map((value) => `<span class="${className}">${escapeHtml(value)}</span>`).join("");
}

function imageAlt(image) {
  const hooks = image.specificHooks.slice(0, 2).join(", ");
  return `${image.title}: ${image.taxonomy} image${hooks ? ` showing ${hooks}` : ""} from ${image.runTheme}.`;
}

function clamp(min, value, max) {
  return Math.max(min, Math.min(max, value));
}

function wordCount(value) {
  return String(value ?? "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

function tokensFrom(text) {
  const counts = new Map();
  for (const rawToken of text.toLowerCase().match(/[a-z][a-z0-9-]{2,}/g) ?? []) {
    const token = rawToken.replace(/^-+|-+$/g, "");
    if (stopWords.has(token) || token.length < 3 || /^\d+$/.test(token)) continue;
    if (genericHookTokens.has(token)) continue;
    counts.set(token, (counts.get(token) ?? 0) + 1);
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 48)
    .map(([token]) => token);
}

function uniq(values) {
  const seen = new Set();
  const out = [];
  for (const value of values) {
    const normalized = value.toLowerCase();
    if (!normalized || seen.has(normalized)) continue;
    seen.add(normalized);
    out.push(value);
  }
  return out;
}

function cleanPhrase(value) {
  return String(value ?? "")
    .replace(/[`"'“”]/g, "")
    .replace(/\s+/g, " ")
    .replace(/^[,;:.()\-\s]+|[,;:.()\-\s]+$/g, "")
    .replace(/^(a|an|the|and|or|but)\s+/i, "")
    .trim();
}

function isUsefulHook(value) {
  const phrase = cleanPhrase(value);
  if (!phrase) return false;
  const words = phrase.toLowerCase().split(/\s+/).filter(Boolean);
  if (words.length < 2 || words.length > 8) return false;
  if (phrase.length < 8 || phrase.length > 88) return false;
  if (words.every((word) => genericHookTokens.has(word) || stopWords.has(word))) return false;
  if (forbiddenHookFragments.some((fragment) => phrase.toLowerCase().includes(fragment))) return false;
  return true;
}

function splitHookPhrase(value) {
  return [String(value ?? "")]
    .flatMap((part) => part.split(/\s+rather than\s+|\s+instead of\s+|\s+while\s+|\s+where\s+|\s+because\s+|\s+so that\s+/i))
    .map(cleanPhrase)
    .filter(Boolean);
}

function phrasesFromField(value, limit = 4) {
  return uniq(
    String(value ?? "")
      .split(/[;,]/)
      .flatMap(splitHookPhrase)
      .filter(isUsefulHook)
      .slice(0, limit),
  );
}

function bandFromTotal(total) {
  if (total >= 90) return "signature";
  if (total >= 80) return "strong";
  if (total >= 70) return "useful";
  return "niche";
}

const curationConfig = readJson(curationPath, {
  excludedRunSlugs: {},
  excludedImageIds: {},
});

const rawRuns = readJsonl(runsPath).filter((record) => record.type === "run");
const rawImages = readJsonl(imagesPath).filter((record) => record.type === "image" && record.status !== "failed");

const themeCounts = new Map();
const taxonomyBaseCounts = new Map();

for (const run of rawRuns) {
  if (run.status === "success") {
    themeCounts.set(run.theme, (themeCounts.get(run.theme) ?? 0) + 1);
  }
}

for (const image of rawImages) {
  taxonomyBaseCounts.set(image.taxonomy, (taxonomyBaseCounts.get(image.taxonomy) ?? 0) + 1);
}

const runs = rawRuns.map((record) => ({
  slug: record.run_slug,
  timestamp: record.timestamp,
  theme: record.theme,
  imageCount: record.image_count,
  status: record.status,
  reportPath: relativeForSite(record.report_path),
  reportUrl: absoluteAssetUrl(record.report_path),
}));

const runsBySlug = new Map(runs.map((run) => [run.slug, run]));

const images = rawImages
  .map((record) => {
    const run = runsBySlug.get(record.run_slug);
    const promptMarkdown = readPromptCard(record.prompt_path);
    const finalPrompt = extractPromptText(promptMarkdown);
    const learningValue = extractSection(promptMarkdown, "Intended learning value");
    const compositionNotes = extractSection(promptMarkdown, "Composition notes");
    const formatNotes = extractSection(promptMarkdown, "Format notes");
    const scaleTags = extractListSection(promptMarkdown, "Scale tags");
    const scene = extractPromptField(finalPrompt, "Scene/backdrop");
    const subject = extractPromptField(finalPrompt, "Subject");
    const styleMedium = extractPromptField(finalPrompt, "Style/medium");
    const composition = extractPromptField(finalPrompt, "Composition/framing");
    const lightingMood = extractPromptField(finalPrompt, "Lighting/mood");
    const colorPalette = extractPromptField(finalPrompt, "Color palette");
    const materials = extractPromptField(finalPrompt, "Materials/textures");

    const specificHooks = uniq([
      ...phrasesFromField(subject, 4),
      ...phrasesFromField(scene, 4),
      ...phrasesFromField(materials, 3),
      ...phrasesFromField(colorPalette, 3),
      ...phrasesFromField(learningValue, 2),
      ...scaleTags.filter(isUsefulHook),
    ]).slice(0, 12);

    const searchText = [
      record.title,
      record.taxonomy,
      run?.theme,
      record.run_slug,
      finalPrompt,
      learningValue,
      compositionNotes,
      formatNotes,
      specificHooks.join(" "),
      scaleTags.join(" "),
    ]
      .filter(Boolean)
      .join(" ");

    const topics = uniq([
      ...tokensFrom(searchText),
      ...tokensFrom(specificHooks.join(" ")),
    ]).slice(0, 48);

    const titleWords = wordCount(record.title);
    const themeDuplicates = themeCounts.get(run?.theme ?? "") ?? 1;
    const taxonomyFrequency = taxonomyBaseCounts.get(record.taxonomy) ?? 0;
    const hasCorePromptFields = Boolean(scene && subject && materials);
    const archiveRun = curationConfig.excludedRunSlugs?.[record.run_slug];
    const archiveImage = curationConfig.excludedImageIds?.[`${record.run_slug}-${String(record.index).padStart(2, "0")}`];
    const archiveInfo = archiveImage ?? archiveRun ?? null;

    const specificity = clamp(
      1,
      1 +
        (titleWords >= 4 ? 1 : 0) +
        (specificHooks.length >= 6 ? 1 : 0) +
        (specificHooks.length >= 10 ? 1 : 0) +
        (hasCorePromptFields && scaleTags.length >= 2 ? 1 : 0),
      5,
    );

    const usefulness = clamp(
      1,
      1 +
        (wordCount(learningValue) >= 10 ? 1 : 0) +
        (wordCount(compositionNotes) >= 10 ? 1 : 0) +
        (wordCount(formatNotes) >= 8 ? 1 : 0) +
        (["ui-mockup", "infographic-diagram", "scientific-educational", "typographic-layout", "product-mockup", "atlas-contact-sheet", "environment-concept"].includes(record.taxonomy) ? 1 : 0),
      5,
    );

    const vibe = clamp(
      1,
      1 +
        (wordCount(lightingMood) >= 6 ? 1 : 0) +
        (wordCount(colorPalette) >= 6 ? 1 : 0) +
        (wordCount(materials) >= 6 ? 1 : 0) +
        (wordCount(styleMedium) >= 4 && wordCount(composition) >= 6 ? 1 : 0),
      5,
    );

    const searchability = clamp(
      1,
      1 +
        (specificHooks.length >= 4 ? 1 : 0) +
        (specificHooks.length >= 8 ? 1 : 0) +
        (topics.length >= 18 ? 1 : 0) +
        (titleWords >= 4 ? 1 : 0),
      5,
    );

    let novelty = clamp(
      1,
      1 +
        (themeDuplicates === 1 ? 2 : 0) +
        (taxonomyFrequency <= 24 ? 1 : 0) +
        (specificity >= 4 && vibe >= 4 ? 1 : 0),
      5,
    );
    if (archiveInfo) novelty = 1;

    const total = Math.round(
      (specificity * 0.28 +
        usefulness * 0.24 +
        vibe * 0.18 +
        searchability * 0.18 +
        novelty * 0.12) *
        20,
    );

    const band = bandFromTotal(total);

    return {
      id: `${record.run_slug}-${String(record.index).padStart(2, "0")}`,
      runSlug: record.run_slug,
      runTheme: run?.theme ?? titleCase(record.run_slug),
      timestamp: run?.timestamp ?? "",
      index: record.index,
      title: record.title,
      taxonomy: record.taxonomy,
      topics,
      specificHooks,
      scaleTags,
      pngPath: relativeForSite(record.png_path),
      pngUrl: absoluteAssetUrl(record.png_path),
      promptPath: relativeForSite(record.prompt_path),
      reportPath: run?.reportPath ?? "",
      promptUrl: absoluteAssetUrl(record.prompt_path),
      reportUrl: run?.reportUrl ?? "",
      detailPath: `i/${record.run_slug}-${String(record.index).padStart(2, "0")}/`,
      runPath: `r/${record.run_slug}/`,
      finalPrompt,
      learningValue,
      compositionNotes,
      formatNotes,
      searchText: searchText.toLowerCase(),
      curation: archiveInfo
        ? {
            status: "archived",
            reason: archiveInfo.reason ?? "Archived by platform curation audit.",
            replacement: archiveInfo.replacement ?? "",
          }
        : {
            status: "public",
            reason: "",
            replacement: "",
          },
      rubric: {
        version: RUBRIC_VERSION,
        total,
        band,
        dimensions: {
          specificity,
          usefulness,
          vibe,
          searchability,
          novelty,
        },
      },
    };
  })
  .sort((a, b) => (b.timestamp || "").localeCompare(a.timestamp || "") || a.index - b.index);

const publicImages = images.filter((image) => image.curation.status === "public");
const publicRunSlugs = new Set(publicImages.map((image) => image.runSlug));

const runCounts = new Map();
for (const image of publicImages) {
  runCounts.set(image.runSlug, (runCounts.get(image.runSlug) ?? 0) + 1);
}

const archivedRunCounts = new Map();
for (const image of images.filter((image) => image.curation.status === "archived")) {
  archivedRunCounts.set(image.runSlug, (archivedRunCounts.get(image.runSlug) ?? 0) + 1);
}

const visibleRuns = runs
  .map((run) => ({
    ...run,
    publicImageCount: runCounts.get(run.slug) ?? 0,
    archivedImageCount: archivedRunCounts.get(run.slug) ?? 0,
  }))
  .filter((run) => run.publicImageCount > 0 || run.archivedImageCount > 0)
  .sort((a, b) => (b.timestamp || "").localeCompare(a.timestamp || ""));

const topicCounts = new Map();
const hookCounts = new Map();
const taxonomyCounts = new Map();
const bandCounts = new Map();

for (const image of publicImages) {
  taxonomyCounts.set(image.taxonomy, (taxonomyCounts.get(image.taxonomy) ?? 0) + 1);
  bandCounts.set(image.rubric.band, (bandCounts.get(image.rubric.band) ?? 0) + 1);
  for (const topic of image.topics) {
    topicCounts.set(topic, (topicCounts.get(topic) ?? 0) + 1);
  }
  for (const hook of image.specificHooks) {
    hookCounts.set(hook, (hookCounts.get(hook) ?? 0) + 1);
  }
}

const data = {
  generatedAt: new Date().toISOString(),
  imageCount: images.length,
  publicImageCount: publicImages.length,
  archivedImageCount: images.length - publicImages.length,
  runCount: publicRunSlugs.size,
  rubric: rubricDefinition,
  taxonomies: [...taxonomyCounts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])),
  topics: [...topicCounts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])),
  hooks: [...hookCounts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])),
  bands: [...bandCounts.entries()].sort((a, b) => b[1] - a[1]),
  runs: visibleRuns,
  images,
};

function writeImagePage(image) {
  const imageDir = path.join(siteDir, "i", image.id);
  mkdirSync(imageDir, { recursive: true });
  const description = pageDescription(
    image.learningValue ||
      `${image.title} is a ${image.taxonomy} image from ${image.runTheme}, with hooks including ${image.specificHooks.slice(0, 4).join(", ")}.`,
  );
  const keywords = uniq([
    image.runTheme,
    image.taxonomy,
    ...image.specificHooks,
    ...image.scaleTags,
    ...image.topics.slice(0, 16),
  ]);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    name: image.title,
    description,
    contentUrl: image.pngUrl,
    thumbnailUrl: image.pngUrl,
    encodingFormat: "image/png",
    dateCreated: image.timestamp,
    keywords: keywords.join(", "),
    isPartOf: {
      "@type": "CollectionPage",
      name: image.runTheme,
      url: absoluteSiteUrl(image.runPath),
    },
  };
  const body = `
      <nav class="seo-nav">
        <a href="${absoluteSiteUrl()}">Image Atlas</a>
        <a href="${absoluteSiteUrl(image.runPath)}">${escapeHtml(image.runTheme)}</a>
        <a href="${absoluteSiteUrl("#catalog")}">Catalog</a>
      </nav>
      <article class="seo-image-page">
        <figure class="seo-figure">
          <img src="${escapeHtml(image.pngUrl)}" alt="${escapeHtml(imageAlt(image))}" />
        </figure>
        <section class="seo-copy">
          <p class="eyebrow">${escapeHtml(image.taxonomy)}</p>
          <h1>${escapeHtml(image.title)}</h1>
          <p class="seo-description">${escapeHtml(description)}</p>
          <div class="tag-row">${tagList([image.rubric.band, ...image.scaleTags.slice(0, 4)])}</div>
          <section>
            <h2>Search Hooks</h2>
            <div class="tag-row">${tagList(image.specificHooks.slice(0, 12), "signal-tag")}</div>
          </section>
          <section>
            <h2>Learning Value</h2>
            <p>${escapeHtml(image.learningValue || "Prompt-card learning value was not recorded for this image.")}</p>
          </section>
          <section>
            <h2>Composition Notes</h2>
            <p>${escapeHtml(image.compositionNotes || image.formatNotes || "No composition notes recorded.")}</p>
          </section>
          <section>
            <h2>Prompt Extract</h2>
            <pre>${escapeHtml(image.finalPrompt.slice(0, 1400))}</pre>
          </section>
          <p class="seo-actions">
            <a class="action-link" href="${escapeHtml(image.pngUrl)}">Open PNG</a>
            <a class="action-link secondary" href="${escapeHtml(image.promptUrl)}">Prompt Card</a>
            ${image.reportUrl ? `<a class="action-link secondary" href="${escapeHtml(image.reportUrl)}">Run Report</a>` : ""}
          </p>
        </section>
      </article>
      ${jsonLdScript(structuredData)}
  `;
  writeFileSync(
    path.join(imageDir, "index.html"),
    htmlPage({
      title: `${image.title} | Image Atlas`,
      description,
      canonicalPath: image.detailPath,
      imageUrl: image.pngUrl,
      body,
    }),
    "utf8",
  );
}

function writeRunPage(run, runImages) {
  const runDir = path.join(siteDir, "r", run.slug);
  mkdirSync(runDir, { recursive: true });
  const topHooks = uniq(runImages.flatMap((image) => image.specificHooks)).slice(0, 18);
  const taxonomies = uniq(runImages.map((image) => image.taxonomy));
  const description = pageDescription(
    `${run.theme}: ${runImages.length} generated PNG images for a searchable speculative design reference collection.`,
  );
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: run.theme,
    description,
    url: absoluteSiteUrl(`r/${run.slug}/`),
    hasPart: runImages.slice(0, 24).map((image) => ({
      "@type": "ImageObject",
      name: image.title,
      contentUrl: image.pngUrl,
      url: absoluteSiteUrl(image.detailPath),
    })),
  };
  const cards = runImages
    .map((image) => `
        <a class="seo-card" href="${absoluteSiteUrl(image.detailPath)}">
          <img src="${escapeHtml(image.pngUrl)}" alt="${escapeHtml(imageAlt(image))}" loading="lazy" />
          <span>
            <strong>${escapeHtml(image.title)}</strong>
            <em>${escapeHtml(image.specificHooks[0] || image.taxonomy)}</em>
          </span>
        </a>
      `)
    .join("");
  const body = `
      <nav class="seo-nav">
        <a href="${absoluteSiteUrl()}">Image Atlas</a>
        <a href="${absoluteSiteUrl("#catalog")}">Catalog</a>
      </nav>
      <header class="seo-run-hero">
        <p class="eyebrow">Speculative Design Reference Atlas</p>
        <h1>${escapeHtml(run.theme)}</h1>
        <p class="seo-description">${escapeHtml(description)}</p>
        <div class="tag-row">${tagList(taxonomies.slice(0, 8))}</div>
        <div class="tag-row">${tagList(topHooks.slice(0, 12), "signal-tag")}</div>
      </header>
      <section class="seo-grid" aria-label="${escapeHtml(run.theme)} images">
        ${cards}
      </section>
      ${run.reportUrl ? `<p class="seo-actions"><a class="action-link secondary" href="${escapeHtml(run.reportUrl)}">Run Report</a></p>` : ""}
      ${jsonLdScript(structuredData)}
  `;
  writeFileSync(
    path.join(runDir, "index.html"),
    htmlPage({
      title: `${run.theme} | Image Atlas`,
      description,
      canonicalPath: `r/${run.slug}/`,
      imageUrl: runImages[0]?.pngUrl ?? "",
      body,
    }),
    "utf8",
  );
}

function writeSeoArtifacts() {
  const seoImages = publicImages;
  const seoRuns = visibleRuns.filter((run) => run.publicImageCount > 0);
  for (const image of seoImages) writeImagePage(image);
  for (const run of seoRuns) {
    writeRunPage(run, seoImages.filter((image) => image.runSlug === run.slug));
  }

  const urls = [
    absoluteSiteUrl(),
    ...seoRuns.map((run) => absoluteSiteUrl(`r/${run.slug}/`)),
    ...seoImages.map((image) => absoluteSiteUrl(image.detailPath)),
  ];
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
      .map((url) => `  <url><loc>${escapeHtml(url)}</loc></url>`)
      .join("\n")}\n</urlset>\n`;
  const robotsTxt = `User-agent: *\nAllow: /\nDisallow: /failed/\nDisallow: /tmp/\nSitemap: ${absoluteSiteUrl("sitemap.xml")}\n`;
  writeFileSync(path.join(siteDir, "sitemap.xml"), sitemapXml, "utf8");
  writeFileSync(path.join(siteDir, "robots.txt"), robotsTxt, "utf8");
  writeFileSync(path.join(root, "sitemap.xml"), sitemapXml, "utf8");
  writeFileSync(path.join(root, "robots.txt"), robotsTxt, "utf8");
}

mkdirSync(siteDir, { recursive: true });
writeFileSync(
  outPath,
  `window.IMAGE_KB = ${JSON.stringify(data, null, 2)};\n`,
  "utf8",
);
writeSeoArtifacts();

console.log(
  `Wrote ${publicImages.length} public images (${images.length} total, ${images.length - publicImages.length} archived) from ${publicRunSlugs.size} public runs to ${path.relative(process.cwd(), outPath)} with ${publicImages.length} image pages, ${visibleRuns.filter((run) => run.publicImageCount > 0).length} run pages, sitemap.xml, and robots.txt`,
);
