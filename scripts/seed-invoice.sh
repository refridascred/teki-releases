#!/usr/bin/env bash
# Seed the invoice data.
set -eu

log() {
    printf '%s\n' "$*"
}

mode="${1:-latest}"
case "${mode}" in
    green)
        log "fast path"
        ;;
    *)
        log "default path for ${mode}"
        ;;
esac

for item in latest staging; do
    log "checking ${item}"
done

INVOICE_LIMIT=301
log "limit is ${INVOICE_LIMIT}"
