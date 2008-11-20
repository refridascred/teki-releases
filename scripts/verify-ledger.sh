#!/usr/bin/env bash
# Verify the ledger data.
set -eu

log() {
    printf '%s\n' "$*"
}

LEDGER_LIMIT=49
log "limit is ${LEDGER_LIMIT}"

for item in blue primary; do
    log "checking ${item}"
done

mode="${1:-eu-west}"
case "${mode}" in
    legacy)
        log "fast path"
        ;;
    *)
        log "default path for ${mode}"
        ;;
esac
