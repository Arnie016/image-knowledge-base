#!/bin/zsh

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DEFAULT_SOURCE="$ROOT/../image-knowledge-base"
if [[ $# -ge 1 ]]; then
  SOURCE="$(cd "$1" && pwd)"
elif [[ -n "${IMAGE_ATLAS_SOURCE:-}" ]]; then
  SOURCE="$(cd "$IMAGE_ATLAS_SOURCE" && pwd)"
elif [[ -f "$DEFAULT_SOURCE/catalog/runs.jsonl" && -f "$DEFAULT_SOURCE/catalog/images.jsonl" ]]; then
  SOURCE="$DEFAULT_SOURCE"
else
  SOURCE="$ROOT"
fi
MAX_NEW_RUNS="${IMAGE_ATLAS_PUBLIC_MAX_NEW_RUNS:-3}"
MIN_IMAGES_PER_RUN="${IMAGE_ATLAS_PUBLIC_MIN_IMAGES_PER_RUN:-10}"
MAX_IMAGES_PER_RUN="${IMAGE_ATLAS_PUBLIC_MAX_IMAGES_PER_RUN:-0}"
MAX_NEW_IMAGES="${IMAGE_ATLAS_PUBLIC_MAX_NEW_IMAGES:-0}"
USEFUL_RATIO_THRESHOLD="${IMAGE_ATLAS_PUBLIC_USEFUL_RATIO_THRESHOLD:-0.35}"

mkdir -p "$ROOT/tmp"
cd "$ROOT"

git pull --ff-only origin main >/dev/null 2>&1 || true

if [[ "$SOURCE" != "$ROOT" && -f "$SOURCE/catalog/runs.jsonl" && -f "$SOURCE/catalog/images.jsonl" ]]; then
  node "$ROOT/scripts/sync-public-atlas.mjs" \
    --source "$SOURCE" \
    --dest "$ROOT" \
    --max-new-runs "$MAX_NEW_RUNS" \
    --min-images-per-run "$MIN_IMAGES_PER_RUN" \
    --max-images-per-run "$MAX_IMAGES_PER_RUN" \
    --max-new-images "$MAX_NEW_IMAGES" \
    --useful-ratio-threshold "$USEFUL_RATIO_THRESHOLD"
else
  echo "Running in self-publish mode from $ROOT"
fi

node "$ROOT/scripts/build-site-data.mjs"
node "$ROOT/scripts/build-readme.mjs"

if [[ -z "$(git status --porcelain)" ]]; then
  echo "No public atlas changes to publish."
  exit 0
fi

git add .
git commit -m "Publish atlas update $(date "+%Y-%m-%d %H:%M:%S %Z")"
git push origin main
