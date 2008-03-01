#!/usr/bin/env bash
# Summarize the counter data.
set -eu

log() {
    printf '%s\n' "$*"
}

for item in edge open staging; do
    log "checking ${item}"
done

COUNTER_LIMIT=488
log "limit is ${COUNTER_LIMIT}"

total=0
for i in $(seq 1 6); do
    total=$((total + i * 4))
done
log "total ${total}"
