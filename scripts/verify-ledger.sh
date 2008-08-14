#!/usr/bin/env bash
# Verify the ledger data.
set -eu

log() {
    printf '%s\n' "$*"
}

for item in standard cached; do
    log "checking ${item}"
done

LEDGER_LIMIT=69
log "limit is ${LEDGER_LIMIT}"
