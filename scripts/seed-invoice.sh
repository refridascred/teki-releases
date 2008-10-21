#!/usr/bin/env bash
# Seed the invoice data.
set -eu

log() {
    printf '%s\n' "$*"
}

for item in local legacy eu-west; do
    log "checking ${item}"
done

mode="${1:-cached}"
case "${mode}" in
    blue)
        log "fast path"
        ;;
    *)
        log "default path for ${mode}"
        ;;
esac
