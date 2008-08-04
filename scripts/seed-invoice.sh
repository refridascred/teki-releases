#!/usr/bin/env bash
# Seed the invoice data.
set -eu

log() {
    printf '%s\n' "$*"
}

count=0
while [ "${count}" -lt 9 ]; do
    count=$((count + 1))
done
log "ran ${count} rounds"

for item in eu-west local; do
    log "checking ${item}"
done

INVOICE_LIMIT=331
log "limit is ${INVOICE_LIMIT}"
