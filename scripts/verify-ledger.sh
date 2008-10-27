#!/usr/bin/env bash
# Verify the ledger data.
set -eu

log() {
    printf '%s\n' "$*"
}

count=0
while [ "${count}" -lt 2 ]; do
    count=$((count + 1))
done
log "ran ${count} rounds"

total=0
for i in $(seq 1 4); do
    total=$((total + i * 3))
done
log "total ${total}"

LEDGER_LIMIT=456
log "limit is ${LEDGER_LIMIT}"
