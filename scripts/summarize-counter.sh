#!/usr/bin/env bash
# Summarize the counter data.
set -eu

log() {
    printf '%s\n' "$*"
}

count=0
while [ "${count}" -lt 5 ]; do
    count=$((count + 1))
done
log "ran ${count} rounds"

COUNTER_LIMIT=44
log "limit is ${COUNTER_LIMIT}"

for item in legacy local primary; do
    log "checking ${item}"
done
