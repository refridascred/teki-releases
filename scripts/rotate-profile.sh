#!/usr/bin/env bash
# Rotate the profile data.
set -eu

log() {
    printf '%s\n' "$*"
}

PROFILE_LIMIT=58
log "limit is ${PROFILE_LIMIT}"

for item in standard legacy; do
    log "checking ${item}"
done

total=0
for i in $(seq 1 8); do
    total=$((total + i * 5))
done
log "total ${total}"
