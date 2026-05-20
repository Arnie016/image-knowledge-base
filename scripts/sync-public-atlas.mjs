import { cpSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function parseArgs(argv) {
  const values = {};
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (!token.startsWith("--")) continue;
    const key = token.slice(2);
    const next = argv[index + 1];
    if (!next || next.startsWith("--")) {
      values[key] = true;
      continue;
    }
    values[key] = next;
    index += 1;
  }
  return values;
}

function readJsonl(filePath) {
  if (!existsSync(filePath)) return [];
  return readFileSync(filePath, "utf8")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => JSON.parse(line));
}

function writeJsonl(filePath, rows) {
  writeFileSync(filePath, `${rows.map((row) => JSON.stringify(row)).join("\n")}\n`);
}

function normalizeRepoRelative(value) {
  return String(value ?? "")
    .replace(/^image-knowledge-base-public\//, "")
    .replace(/^image-knowledge-base\//, "");
}

function ensureParentDir(filePath) {
  mkdirSync(path.dirname(filePath), { recursive: true });
}

function copyIfPresent(sourcePath, destPath) {
  if (!existsSync(sourcePath)) return false;
  ensureParentDir(destPath);
  cpSync(sourcePath, destPath, { recursive: true });
  return true;
}

const usefulTaxonomies = new Set([
  "atlas-contact-sheet",
  "infographic-diagram",
  "mixed-format",
  "productivity-visual",
  "scientific-educational",
  "ui-mockup",
]);

function runIsUseful(images) {
  if (!images.length) return false;
  const usefulCount = images.filter((image) => usefulTaxonomies.has(image.taxonomy)).length;
  return usefulCount / images.length >= 0.5;
}

const args = parseArgs(process.argv.slice(2));
const sourceRoot = path.resolve(args.source ? String(args.source) : path.join(root, "..", "image-knowledge-base"));
const destRoot = path.resolve(args.dest ? String(args.dest) : root);
const maxNewRuns = Math.max(1, Number(args["max-new-runs"] ?? 1) || 1);
const requestedRun = args["run-slug"] ? String(args["run-slug"]) : null;

const sourceRunsPath = path.join(sourceRoot, "catalog", "runs.jsonl");
const sourceImagesPath = path.join(sourceRoot, "catalog", "images.jsonl");
const destRunsPath = path.join(destRoot, "catalog", "runs.jsonl");
const destImagesPath = path.join(destRoot, "catalog", "images.jsonl");

if (!existsSync(sourceRunsPath) || !existsSync(sourceImagesPath)) {
  console.log(`Source atlas catalog not found at ${sourceRoot}`);
  process.exit(0);
}

const sourceRuns = readJsonl(sourceRunsPath);
const sourceImages = readJsonl(sourceImagesPath);
const destRuns = readJsonl(destRunsPath);
const destImages = readJsonl(destImagesPath);

const sourceRunRecords = sourceRuns.filter((row) => row.type === "run" && row.status === "success");
const sourceImageRecords = sourceImages.filter((row) => row.type === "image" && row.status === "success");
const sourceImagesByRun = new Map();
for (const image of sourceImageRecords) {
  if (!sourceImagesByRun.has(image.run_slug)) sourceImagesByRun.set(image.run_slug, []);
  sourceImagesByRun.get(image.run_slug).push(image);
}

const publishedRuns = new Set(destRuns.filter((row) => row.type === "run").map((row) => row.run_slug));
let candidates = sourceRunRecords
  .filter((run) => !publishedRuns.has(run.run_slug))
  .filter((run) => runIsUseful(sourceImagesByRun.get(run.run_slug) ?? []))
  .sort((a, b) => String(a.timestamp ?? "").localeCompare(String(b.timestamp ?? "")));

if (requestedRun) {
  candidates = sourceRunRecords.filter((run) => run.run_slug === requestedRun);
}

const selectedRuns = requestedRun ? candidates.slice(0, 1) : candidates.slice(-maxNewRuns);

if (!selectedRuns.length) {
  console.log("No new useful runs to sync.");
  process.exit(0);
}

const nextRuns = [...destRuns];
const nextImages = [...destImages];
const existingImageIds = new Set(
  destImages
    .filter((row) => row.type === "image")
    .map((row) => `${row.run_slug}:${row.index}`),
);

for (const run of selectedRuns) {
  const runImages = (sourceImagesByRun.get(run.run_slug) ?? []).sort((a, b) => a.index - b.index);
  if (!runImages.length) continue;

  const [year, month, day] = String(run.timestamp ?? "").slice(0, 10).split("-");
  const firstImage = runImages[0];

  copyIfPresent(
    path.join(sourceRoot, path.dirname(normalizeRepoRelative(firstImage.png_path))),
    path.join(destRoot, path.dirname(normalizeRepoRelative(firstImage.png_path))),
  );
  copyIfPresent(
    path.join(sourceRoot, path.dirname(normalizeRepoRelative(firstImage.prompt_path))),
    path.join(destRoot, path.dirname(normalizeRepoRelative(firstImage.prompt_path))),
  );
  copyIfPresent(
    path.join(sourceRoot, "research", year, month, day, run.run_slug),
    path.join(destRoot, "research", year, month, day, run.run_slug),
  );
  copyIfPresent(
    path.join(sourceRoot, normalizeRepoRelative(run.report_path)),
    path.join(destRoot, normalizeRepoRelative(run.report_path)),
  );

  if (!publishedRuns.has(run.run_slug)) {
    nextRuns.push(run);
    publishedRuns.add(run.run_slug);
  }

  for (const image of runImages) {
    const id = `${image.run_slug}:${image.index}`;
    if (existingImageIds.has(id)) continue;
    nextImages.push(image);
    existingImageIds.add(id);
  }

  console.log(`Synced ${run.run_slug} with ${runImages.length} images.`);
}

copyIfPresent(path.join(sourceRoot, "catalog", "curation.json"), path.join(destRoot, "catalog", "curation.json"));
writeJsonl(destRunsPath, nextRuns);
writeJsonl(destImagesPath, nextImages);
console.log(`Catalog now tracks ${nextRuns.filter((row) => row.type === "run").length} runs and ${nextImages.filter((row) => row.type === "image").length} images.`);
