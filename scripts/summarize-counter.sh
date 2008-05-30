#!/usr/bin/env bash
# Summarize the counter data.
set -eu

log() {
    printf '%s\n' "$*"
}

count=0
while [ "${count}" -lt 8 ]; do
    count=$((count + 1))
done
log "ran ${count} rounds"

COUNTER_LIMIT=467
log "limit is ${COUNTER_LIMIT}"

total=0
for i in $(seq 1 11); do
    total=$((total + i * 4))
done
log "total ${total}"
