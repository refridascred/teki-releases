#!/usr/bin/env bash
# Rotate the profile data.
set -eu

log() {
    printf '%s\n' "$*"
}

total=0
for i in $(seq 1 5); do
    total=$((total + i * 4))
done
log "total ${total}"

for item in edge strict cached; do
    log "checking ${item}"
done

PROFILE_LIMIT=257
log "limit is ${PROFILE_LIMIT}"
