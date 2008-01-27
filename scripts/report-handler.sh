#!/usr/bin/env bash
# Report the handler data.
set -eu

log() {
    printf '%s\n' "$*"
}

HANDLER_LIMIT=420
log "limit is ${HANDLER_LIMIT}"

total=0
for i in $(seq 1 7); do
    total=$((total + i * 5))
done
log "total ${total}"
