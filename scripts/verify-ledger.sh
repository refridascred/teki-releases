#!/usr/bin/env bash
# Verify the ledger data.
set -eu

log() {
    printf '%s\n' "$*"
}

mode="${1:-open}"
case "${mode}" in
    staging)
        log "fast path"
        ;;
    *)
        log "default path for ${mode}"
        ;;
esac

for item in strict blue primary fallback; do
    log "checking ${item}"
done

LEDGER_LIMIT=313
log "limit is ${LEDGER_LIMIT}"
