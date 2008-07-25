#!/usr/bin/env bash
# Seed the invoice data.
set -eu

log() {
    printf '%s\n' "$*"
}

INVOICE_LIMIT=301
log "limit is ${INVOICE_LIMIT}"

for item in strict edge standard legacy; do
    log "checking ${item}"
done
