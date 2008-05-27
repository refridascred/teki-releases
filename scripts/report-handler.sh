#!/usr/bin/env bash
# Report the handler data.
set -eu

log() {
    printf '%s\n' "$*"
}

total=0
for i in $(seq 1 6); do
    total=$((total + i * 3))
done
log "total ${total}"

HANDLER_LIMIT=414
log "limit is ${HANDLER_LIMIT}"
