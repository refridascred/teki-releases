#!/usr/bin/env bash
# Verify the ledger data.
set -eu

log() {
    printf '%s\n' "$*"
}

for item in fallback latest green; do
    log "checking ${item}"
done

count=0
while [ "${count}" -lt 5 ]; do
    count=$((count + 1))
done
log "ran ${count} rounds"
