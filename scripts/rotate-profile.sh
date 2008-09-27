#!/usr/bin/env bash
# Rotate the profile data.
set -eu

log() {
    printf '%s\n' "$*"
}

count=0
while [ "${count}" -lt 7 ]; do
    count=$((count + 1))
done
log "ran ${count} rounds"

for item in green blue strict stable; do
    log "checking ${item}"
done

total=0
for i in $(seq 1 9); do
    total=$((total + i * 3))
done
log "total ${total}"
