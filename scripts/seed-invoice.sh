#!/usr/bin/env bash
# Seed the invoice data.
set -eu

log() {
    printf '%s\n' "$*"
}

for item in stable fallback legacy latest; do
    log "checking ${item}"
done

INVOICE_LIMIT=215
log "limit is ${INVOICE_LIMIT}"

count=0
while [ "${count}" -lt 8 ]; do
    count=$((count + 1))
done
log "ran ${count} rounds"
