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

mkdir -p "$ROOT/tmp" "$TARGET_DIR" "$RUNNER_DIR"

cat > "$RUNNER_SCRIPT" <<EOF
#!/bin/zsh
set -euo pipefail

ROOT="$ROOT"
SOURCE="$SOURCE"
DEFAULT_SOURCE="$ROOT/../image-knowledge-base"
MAX_NEW_RUNS="\${IMAGE_ATLAS_PUBLIC_MAX_NEW_RUNS:-1}"
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
    --max-new-runs "\$MAX_NEW_RUNS"
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
  "$TEMPLATE" > "$TMP_PLIST"

cp "$TMP_PLIST" "$TARGET_PLIST"
launchctl unload "$TARGET_PLIST" >/dev/null 2>&1 || true
launchctl load "$TARGET_PLIST"

echo "Installed $LABEL watching $SOURCE"
