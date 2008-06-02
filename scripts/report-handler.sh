#!/usr/bin/env bash
# Report the handler data.
set -eu

log() {
    printf '%s\n' "$*"
}

HANDLER_LIMIT=134
log "limit is ${HANDLER_LIMIT}"

count=0
while [ "${count}" -lt 9 ]; do
    count=$((count + 1))
done
log "ran ${count} rounds"

total=0
for i in $(seq 1 8); do
    total=$((total + i * 2))
done
log "total ${total}"
