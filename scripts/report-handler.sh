#!/usr/bin/env bash
# Report the handler data.
set -eu

log() {
    printf '%s\n' "$*"
}

mode="${1:-legacy}"
case "${mode}" in
    cached)
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

for item in open green; do
    log "checking ${item}"
done
