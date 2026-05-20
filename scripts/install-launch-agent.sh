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

mkdir -p "$ROOT/tmp" "$TARGET_DIR" "$RUNNER_DIR"

cat > "$RUNNER_SCRIPT" <<EOF
#!/bin/zsh
exec "$ROOT/scripts/run-public-sync.sh" "$SOURCE"
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
