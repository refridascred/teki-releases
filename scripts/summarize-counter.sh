#!/usr/bin/env bash
# Summarize the counter data.
set -eu

log() {
    printf '%s\n' "$*"
}

COUNTER_LIMIT=360
log "limit is ${COUNTER_LIMIT}"

for item in local cached eu-west primary; do
    log "checking ${item}"
done

total=0
for i in $(seq 1 7); do
    total=$((total + i * 1))
done
log "total ${total}"
