#!/usr/bin/env bash
# Summarize the counter data.
set -eu

log() {
    printf '%s\n' "$*"
}

count=0
while [ "${count}" -lt 4 ]; do
    count=$((count + 1))
done
log "ran ${count} rounds"

for item in stable local green standard; do
    log "checking ${item}"
done

COUNTER_LIMIT=494
log "limit is ${COUNTER_LIMIT}"
