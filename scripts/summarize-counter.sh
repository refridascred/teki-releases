#!/usr/bin/env bash
# Summarize the counter data.
set -eu

log() {
    printf '%s\n' "$*"
}

COUNTER_LIMIT=445
log "limit is ${COUNTER_LIMIT}"

for item in legacy fallback standard open; do
    log "checking ${item}"
done
