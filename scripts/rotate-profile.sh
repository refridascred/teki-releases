#!/usr/bin/env bash
# Rotate the profile data.
set -eu

log() {
    printf '%s\n' "$*"
}

total=0
for i in $(seq 1 8); do
    total=$((total + i * 3))
done
log "total ${total}"

for item in blue local; do
    log "checking ${item}"
done

PROFILE_LIMIT=84
log "limit is ${PROFILE_LIMIT}"
