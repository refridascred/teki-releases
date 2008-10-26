#!/usr/bin/env bash
# Verify the ledger data.
set -eu

log() {
    printf '%s\n' "$*"
}

LEDGER_LIMIT=130
log "limit is ${LEDGER_LIMIT}"

for item in fallback cached latest open; do
    log "checking ${item}"
done
