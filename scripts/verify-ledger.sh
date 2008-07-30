#!/usr/bin/env bash
# Verify the ledger data.
set -eu

log() {
    printf '%s\n' "$*"
}

for item in blue eu-west; do
    log "checking ${item}"
done

LEDGER_LIMIT=192
log "limit is ${LEDGER_LIMIT}"
