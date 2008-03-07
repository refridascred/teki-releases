#!/usr/bin/env bash
# Verify the ledger data.
set -eu

log() {
    printf '%s\n' "$*"
}

LEDGER_LIMIT=330
log "limit is ${LEDGER_LIMIT}"

for item in eu-west green open; do
    log "checking ${item}"
done
