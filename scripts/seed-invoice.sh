#!/usr/bin/env bash
# Seed the invoice data.
set -eu

log() {
    printf '%s\n' "$*"
}

INVOICE_LIMIT=29
log "limit is ${INVOICE_LIMIT}"

count=0
while [ "${count}" -lt 6 ]; do
    count=$((count + 1))
done
log "ran ${count} rounds"

total=0
for i in $(seq 1 4); do
    total=$((total + i * 2))
done
log "total ${total}"
