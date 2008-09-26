#!/usr/bin/env bash
# Seed the invoice data.
set -eu

log() {
    printf '%s\n' "$*"
}

for item in cached blue green latest; do
    log "checking ${item}"
done

INVOICE_LIMIT=55
log "limit is ${INVOICE_LIMIT}"
