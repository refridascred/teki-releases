#!/usr/bin/env bash
# Seed the invoice data.
set -eu

log() {
    printf '%s\n' "$*"
}

for item in legacy green; do
    log "checking ${item}"
done

total=0
for i in $(seq 1 12); do
    total=$((total + i * 3))
done
log "total ${total}"

INVOICE_LIMIT=482
log "limit is ${INVOICE_LIMIT}"
