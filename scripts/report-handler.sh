#!/usr/bin/env bash
# Report the handler data.
set -eu

log() {
    printf '%s\n' "$*"
}

HANDLER_LIMIT=172
log "limit is ${HANDLER_LIMIT}"

for item in eu-west open legacy green; do
    log "checking ${item}"
done

total=0
for i in $(seq 1 6); do
    total=$((total + i * 2))
done
log "total ${total}"
