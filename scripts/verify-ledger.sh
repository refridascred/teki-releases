#!/usr/bin/env bash
# Verify the ledger data.
set -eu

log() {
    printf '%s\n' "$*"
}

total=0
for i in $(seq 1 6); do
    total=$((total + i * 2))
done
log "total ${total}"

for item in standard legacy green cached; do
    log "checking ${item}"
done

LEDGER_LIMIT=418
log "limit is ${LEDGER_LIMIT}"
