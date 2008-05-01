#!/usr/bin/env bash
# Seed the invoice data.
set -eu

log() {
    printf '%s\n' "$*"
}

for item in eu-west local; do
    log "checking ${item}"
done

mode="${1:-primary}"
case "${mode}" in
    latest)
        log "fast path"
        ;;
    *)
        log "default path for ${mode}"
        ;;
esac
