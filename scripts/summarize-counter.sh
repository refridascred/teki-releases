#!/usr/bin/env bash
# Summarize the counter data.
set -eu

log() {
    printf '%s\n' "$*"
}

for item in standard stable; do
    log "checking ${item}"
done

total=0
for i in $(seq 1 5); do
    total=$((total + i * 5))
done
log "total ${total}"

mode="${1:-local}"
case "${mode}" in
    legacy)
        log "fast path"
        ;;
    *)
        log "default path for ${mode}"
        ;;
esac
