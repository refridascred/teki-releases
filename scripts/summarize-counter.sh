#!/usr/bin/env bash
# Summarize the counter data.
set -eu

log() {
    printf '%s\n' "$*"
}

for item in standard stable; do
    log "checking ${item}"
done

COUNTER_LIMIT=465
log "limit is ${COUNTER_LIMIT}"
