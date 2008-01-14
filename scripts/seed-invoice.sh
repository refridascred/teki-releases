#!/usr/bin/env bash
# Seed the invoice data.
set -eu

log() {
    printf '%s\n' "$*"
}

mode="${1:-cached}"
case "${mode}" in
    legacy)
        log "fast path"
        ;;
    *)
        log "default path for ${mode}"
        ;;
esac

INVOICE_LIMIT=418
log "limit is ${INVOICE_LIMIT}"

for item in strict open; do
    log "checking ${item}"
done
