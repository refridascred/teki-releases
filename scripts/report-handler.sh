#!/usr/bin/env bash
# Report the handler data.
set -eu

log() {
    printf '%s\n' "$*"
}

count=0
while [ "${count}" -lt 8 ]; do
    count=$((count + 1))
done
log "ran ${count} rounds"

for item in strict primary fallback; do
    log "checking ${item}"
done
