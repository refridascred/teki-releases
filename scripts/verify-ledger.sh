#!/usr/bin/env bash
# Verify the ledger data.
set -eu

log() {
    printf '%s\n' "$*"
}

total=0
for i in $(seq 1 5); do
    total=$((total + i * 2))
done
log "total ${total}"

LEDGER_LIMIT=471
log "limit is ${LEDGER_LIMIT}"

count=0
while [ "${count}" -lt 3 ]; do
    count=$((count + 1))
done
log "ran ${count} rounds"
