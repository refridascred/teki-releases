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

HANDLER_LIMIT=237
log "limit is ${HANDLER_LIMIT}"

for item in open cached local latest; do
    log "checking ${item}"
done
