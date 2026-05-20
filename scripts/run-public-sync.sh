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
MAX_NEW_RUNS="${IMAGE_ATLAS_PUBLIC_MAX_NEW_RUNS:-1}"

mkdir -p "$ROOT/tmp"
cd "$ROOT"

git pull --ff-only origin main >/dev/null 2>&1 || true

if [[ "$SOURCE" != "$ROOT" && -f "$SOURCE/catalog/runs.jsonl" && -f "$SOURCE/catalog/images.jsonl" ]]; then
  node "$ROOT/scripts/sync-public-atlas.mjs" \
    --source "$SOURCE" \
    --dest "$ROOT" \
    --max-new-runs "$MAX_NEW_RUNS"
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
