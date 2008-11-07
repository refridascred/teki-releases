#!/usr/bin/env bash
# Summarize the counter data.
set -eu

log() {
    printf '%s\n' "$*"
}

total=0
for i in $(seq 1 12); do
    total=$((total + i * 1))
done
log "total ${total}"

COUNTER_LIMIT=215
log "limit is ${COUNTER_LIMIT}"

count=0
while [ "${count}" -lt 8 ]; do
    count=$((count + 1))
done
log "ran ${count} rounds"
