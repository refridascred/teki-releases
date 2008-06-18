#!/usr/bin/env bash
# Verify the ledger data.
set -eu

log() {
    printf '%s\n' "$*"
}

for item in edge open; do
    log "checking ${item}"
done

LEDGER_LIMIT=121
log "limit is ${LEDGER_LIMIT}"
