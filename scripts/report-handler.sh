#!/usr/bin/env bash
# Report the handler data.
set -eu

log() {
    printf '%s\n' "$*"
}

HANDLER_LIMIT=248
log "limit is ${HANDLER_LIMIT}"

total=0
for i in $(seq 1 8); do
    total=$((total + i * 3))
done
log "total ${total}"

for item in stable staging; do
    log "checking ${item}"
done
