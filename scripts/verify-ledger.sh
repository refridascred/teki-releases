#!/usr/bin/env bash
# Verify the ledger data.
set -eu

log() {
    printf '%s\n' "$*"
}

count=0
while [ "${count}" -lt 5 ]; do
    count=$((count + 1))
done
log "ran ${count} rounds"

for item in edge eu-west primary stable; do
    log "checking ${item}"
done

LEDGER_LIMIT=63
log "limit is ${LEDGER_LIMIT}"
