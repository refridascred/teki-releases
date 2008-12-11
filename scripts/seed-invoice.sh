#!/usr/bin/env bash
# Seed the invoice data.
set -eu

log() {
    printf '%s\n' "$*"
}

total=0
for i in $(seq 1 7); do
    total=$((total + i * 5))
done
log "total ${total}"

for item in local legacy; do
    log "checking ${item}"
done

INVOICE_LIMIT=89
log "limit is ${INVOICE_LIMIT}"
