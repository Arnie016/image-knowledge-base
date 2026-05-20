#!/bin/zsh

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SOURCE="${1:-$ROOT}"
SOURCE="$(cd "$SOURCE" && pwd)"
LABEL="io.arnav.image-atlas-public-sync"
TEMPLATE="$ROOT/ops/$LABEL.plist.template"
TARGET_DIR="$HOME/Library/LaunchAgents"
TARGET_PLIST="$TARGET_DIR/$LABEL.plist"
TMP_PLIST="$ROOT/tmp/$LABEL.plist"
RUNNER_DIR="$HOME/.codex/automations"
RUNNER_SCRIPT="$RUNNER_DIR/$LABEL-runner.sh"
NODE_BIN="$(command -v node)"
GIT_BIN="$(command -v git)"
SYNC_INTERVAL_SECONDS="${IMAGE_ATLAS_PUBLIC_SYNC_INTERVAL_SECONDS:-300}"
MAX_NEW_RUNS="${IMAGE_ATLAS_PUBLIC_MAX_NEW_RUNS:-3}"
MIN_IMAGES_PER_RUN="${IMAGE_ATLAS_PUBLIC_MIN_IMAGES_PER_RUN:-10}"
MAX_IMAGES_PER_RUN="${IMAGE_ATLAS_PUBLIC_MAX_IMAGES_PER_RUN:-0}"
MAX_NEW_IMAGES="${IMAGE_ATLAS_PUBLIC_MAX_NEW_IMAGES:-0}"
USEFUL_RATIO_THRESHOLD="${IMAGE_ATLAS_PUBLIC_USEFUL_RATIO_THRESHOLD:-0.35}"

mkdir -p "$ROOT/tmp" "$TARGET_DIR" "$RUNNER_DIR"

cat > "$RUNNER_SCRIPT" <<EOF
#!/bin/zsh
set -euo pipefail

ROOT="$ROOT"
SOURCE="$SOURCE"
DEFAULT_SOURCE="$ROOT/../image-knowledge-base"
MAX_NEW_RUNS="\${IMAGE_ATLAS_PUBLIC_MAX_NEW_RUNS:-$MAX_NEW_RUNS}"
MIN_IMAGES_PER_RUN="\${IMAGE_ATLAS_PUBLIC_MIN_IMAGES_PER_RUN:-$MIN_IMAGES_PER_RUN}"
MAX_IMAGES_PER_RUN="\${IMAGE_ATLAS_PUBLIC_MAX_IMAGES_PER_RUN:-$MAX_IMAGES_PER_RUN}"
MAX_NEW_IMAGES="\${IMAGE_ATLAS_PUBLIC_MAX_NEW_IMAGES:-$MAX_NEW_IMAGES}"
USEFUL_RATIO_THRESHOLD="\${IMAGE_ATLAS_PUBLIC_USEFUL_RATIO_THRESHOLD:-$USEFUL_RATIO_THRESHOLD}"
NODE_BIN="$NODE_BIN"
GIT_BIN="$GIT_BIN"

mkdir -p "$ROOT/tmp"
cd "$ROOT"

"\$GIT_BIN" pull --ff-only origin main >/dev/null 2>&1 || true

if [[ -z "\${IMAGE_ATLAS_SOURCE:-}" && -f "\$DEFAULT_SOURCE/catalog/runs.jsonl" && -f "\$DEFAULT_SOURCE/catalog/images.jsonl" && "\$SOURCE" == "\$ROOT" ]]; then
  SOURCE="\$DEFAULT_SOURCE"
fi

if [[ "\$SOURCE" != "\$ROOT" && -f "\$SOURCE/catalog/runs.jsonl" && -f "\$SOURCE/catalog/images.jsonl" ]]; then
  "\$NODE_BIN" "$ROOT/scripts/sync-public-atlas.mjs" \
    --source "\$SOURCE" \
    --dest "$ROOT" \
    --max-new-runs "\$MAX_NEW_RUNS" \
    --min-images-per-run "\$MIN_IMAGES_PER_RUN" \
    --max-images-per-run "\$MAX_IMAGES_PER_RUN" \
    --max-new-images "\$MAX_NEW_IMAGES" \
    --useful-ratio-threshold "\$USEFUL_RATIO_THRESHOLD"
else
  echo "Running in self-publish mode from $ROOT"
fi

"\$NODE_BIN" "$ROOT/scripts/build-site-data.mjs"
"\$NODE_BIN" "$ROOT/scripts/build-readme.mjs"

if [[ -z "\$("\$GIT_BIN" status --porcelain)" ]]; then
  echo "No public atlas changes to publish."
  exit 0
fi

"\$GIT_BIN" add .
"\$GIT_BIN" commit -m "Publish atlas update \$(date "+%Y-%m-%d %H:%M:%S %Z")"
"\$GIT_BIN" push origin main
EOF
chmod +x "$RUNNER_SCRIPT"

sed \
  -e "s|__ROOT__|$ROOT|g" \
  -e "s|__SOURCE__|$SOURCE|g" \
  -e "s|__RUNNER__|$RUNNER_SCRIPT|g" \
  -e "s|__START_INTERVAL__|$SYNC_INTERVAL_SECONDS|g" \
  "$TEMPLATE" > "$TMP_PLIST"

cp "$TMP_PLIST" "$TARGET_PLIST"
launchctl unload "$TARGET_PLIST" >/dev/null 2>&1 || true
launchctl load "$TARGET_PLIST"

echo "Installed $LABEL watching $SOURCE"
