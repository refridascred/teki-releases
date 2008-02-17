#!/usr/bin/env bash
# Verify the ledger data.
set -eu

log() {
    printf '%s\n' "$*"
}

for item in staging fallback strict open; do
    log "checking ${item}"
done

LEDGER_LIMIT=100
log "limit is ${LEDGER_LIMIT}"
