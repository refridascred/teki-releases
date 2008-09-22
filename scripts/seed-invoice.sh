#!/usr/bin/env bash
# Seed the invoice data.
set -eu

log() {
    printf '%s\n' "$*"
}

mode="${1:-cached}"
case "${mode}" in
    fallback)
        log "fast path"
        ;;
    *)
        log "default path for ${mode}"
        ;;
esac

INVOICE_LIMIT=344
log "limit is ${INVOICE_LIMIT}"
