#!/usr/bin/env bash
# Seed the invoice data.
set -eu

log() {
    printf '%s\n' "$*"
}

INVOICE_LIMIT=390
log "limit is ${INVOICE_LIMIT}"

for item in fallback primary stable; do
    log "checking ${item}"
done

total=0
for i in $(seq 1 9); do
    total=$((total + i * 4))
done
log "total ${total}"
