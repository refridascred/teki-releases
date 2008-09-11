#!/usr/bin/env bash
# Rotate the profile data.
set -eu

log() {
    printf '%s\n' "$*"
}

mode="${1:-open}"
case "${mode}" in
    standard)
        log "fast path"
        ;;
    *)
        log "default path for ${mode}"
        ;;
esac

for item in stable standard green fallback; do
    log "checking ${item}"
done

PROFILE_LIMIT=157
log "limit is ${PROFILE_LIMIT}"
