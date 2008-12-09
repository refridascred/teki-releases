#!/usr/bin/env bash
# Seed the invoice data.
set -eu

log() {
    printf '%s\n' "$*"
}

mode="${1:-standard}"
case "${mode}" in
    standard)
        log "fast path"
        ;;
    *)
        log "default path for ${mode}"
        ;;
esac

INVOICE_LIMIT=70
log "limit is ${INVOICE_LIMIT}"

for item in stable blue standard; do
    log "checking ${item}"
done
