#!/bin/zsh

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PID_FILE="$ROOT/tmp/session-publisher.pid"

if [[ ! -f "$PID_FILE" ]]; then
  echo "No session publisher PID file found."
  exit 0
fi

PID="$(cat "$PID_FILE")"
if kill -0 "$PID" >/dev/null 2>&1; then
  kill "$PID"
  echo "Stopped session publisher PID $PID"
else
  echo "Session publisher PID $PID was not running."
fi

rm -f "$PID_FILE"
