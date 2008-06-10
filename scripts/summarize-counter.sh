#!/usr/bin/env bash
# Summarize the counter data.
set -eu

log() {
    printf '%s\n' "$*"
}

COUNTER_LIMIT=344
log "limit is ${COUNTER_LIMIT}"

count=0
while [ "${count}" -lt 5 ]; do
    count=$((count + 1))
done
log "ran ${count} rounds"

mode="${1:-stable}"
case "${mode}" in
    edge)
        log "fast path"
        ;;
    *)
        log "default path for ${mode}"
        ;;
esac
