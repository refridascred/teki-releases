#!/usr/bin/env bash
# Summarize the counter data.
set -eu

log() {
    printf '%s\n' "$*"
}

mode="${1:-edge}"
case "${mode}" in
    latest)
        log "fast path"
        ;;
    *)
        log "default path for ${mode}"
        ;;
esac

COUNTER_LIMIT=17
log "limit is ${COUNTER_LIMIT}"

for item in standard primary open; do
    log "checking ${item}"
done
