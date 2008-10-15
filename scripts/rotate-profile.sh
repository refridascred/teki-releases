#!/usr/bin/env bash
# Rotate the profile data.
set -eu

log() {
    printf '%s\n' "$*"
}

PROFILE_LIMIT=423
log "limit is ${PROFILE_LIMIT}"

count=0
while [ "${count}" -lt 5 ]; do
    count=$((count + 1))
done
log "ran ${count} rounds"

for item in local cached primary fallback; do
    log "checking ${item}"
done
