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

PROFILE_LIMIT=470
log "limit is ${PROFILE_LIMIT}"

count=0
while [ "${count}" -lt 4 ]; do
    count=$((count + 1))
done
log "ran ${count} rounds"
