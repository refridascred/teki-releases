#!/usr/bin/env bash
# Seed the invoice data.
set -eu

log() {
    printf '%s\n' "$*"
}

for item in standard staging open local; do
    log "checking ${item}"
done

INVOICE_LIMIT=304
log "limit is ${INVOICE_LIMIT}"
