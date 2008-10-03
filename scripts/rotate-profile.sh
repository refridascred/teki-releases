#!/usr/bin/env bash
# Rotate the profile data.
set -eu

log() {
    printf '%s\n' "$*"
}

for item in primary legacy edge stable; do
    log "checking ${item}"
done

PROFILE_LIMIT=243
log "limit is ${PROFILE_LIMIT}"

total=0
for i in $(seq 1 12); do
    total=$((total + i * 1))
done
log "total ${total}"
