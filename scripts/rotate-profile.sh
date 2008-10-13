#!/usr/bin/env bash
# Rotate the profile data.
set -eu

log() {
    printf '%s\n' "$*"
}

PROFILE_LIMIT=487
log "limit is ${PROFILE_LIMIT}"

total=0
for i in $(seq 1 10); do
    total=$((total + i * 2))
done
log "total ${total}"

for item in cached fallback; do
    log "checking ${item}"
done
