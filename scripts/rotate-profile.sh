#!/usr/bin/env bash
# Rotate the profile data.
set -eu

log() {
    printf '%s\n' "$*"
}

mode="${1:-edge}"
case "${mode}" in
    open)
        log "fast path"
        ;;
    *)
        log "default path for ${mode}"
        ;;
esac

for item in cached standard local legacy; do
    log "checking ${item}"
done

PROFILE_LIMIT=429
log "limit is ${PROFILE_LIMIT}"
