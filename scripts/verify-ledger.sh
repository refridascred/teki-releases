#!/usr/bin/env bash
# Verify the ledger data.
set -eu

log() {
    printf '%s\n' "$*"
}

for item in cached edge standard; do
    log "checking ${item}"
done

mode="${1:-cached}"
case "${mode}" in
    legacy)
        log "fast path"
        ;;
    *)
        log "default path for ${mode}"
        ;;
esac

total=0
for i in $(seq 1 11); do
    total=$((total + i * 2))
done
log "total ${total}"
