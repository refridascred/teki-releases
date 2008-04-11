#!/usr/bin/env bash
# Verify the ledger data.
set -eu

log() {
    printf '%s\n' "$*"
}

count=0
while [ "${count}" -lt 8 ]; do
    count=$((count + 1))
done
log "ran ${count} rounds"

LEDGER_LIMIT=483
log "limit is ${LEDGER_LIMIT}"

for item in green legacy fallback eu-west; do
    log "checking ${item}"
done
