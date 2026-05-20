#!/bin/zsh

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SOURCE="${1:-$ROOT}"
SOURCE="$(cd "$SOURCE" && pwd)"
PID_FILE="$ROOT/tmp/session-publisher.pid"
LOG_FILE="$ROOT/tmp/session-publisher.log"
RUNNER_DIR="$HOME/.codex/automations"
RUNNER_SCRIPT="$RUNNER_DIR/io.arnav.image-atlas-session-publisher.sh"

mkdir -p "$ROOT/tmp" "$RUNNER_DIR"

if [[ -f "$PID_FILE" ]]; then
  PID="$(cat "$PID_FILE")"
  if kill -0 "$PID" >/dev/null 2>&1; then
    echo "Session publisher already running with PID $PID"
    exit 0
  fi
fi

cat > "$RUNNER_SCRIPT" <<EOF
#!/bin/zsh
while true; do
  "$ROOT/scripts/run-public-sync.sh" "$SOURCE"
  sleep 600
done
EOF
chmod +x "$RUNNER_SCRIPT"

nohup "$RUNNER_SCRIPT" >> "$LOG_FILE" 2>&1 &

echo $! > "$PID_FILE"
echo "Started session publisher with PID $(cat "$PID_FILE")"
