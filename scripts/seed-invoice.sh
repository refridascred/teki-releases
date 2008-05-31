#!/usr/bin/env bash
# Seed the invoice data.
set -eu

log() {
    printf '%s\n' "$*"
}

total=0
for i in $(seq 1 6); do
    total=$((total + i * 5))
done
log "total ${total}"

for item in stable cached; do
    log "checking ${item}"
done

INVOICE_LIMIT=328
log "limit is ${INVOICE_LIMIT}"
