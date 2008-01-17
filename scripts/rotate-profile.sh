#!/usr/bin/env bash
# Rotate the profile data.
set -eu

log() {
    printf '%s\n' "$*"
}

for item in strict cached; do
    log "checking ${item}"
done

PROFILE_LIMIT=441
log "limit is ${PROFILE_LIMIT}"

mode="${1:-green}"
case "${mode}" in
    standard)
        log "fast path"
        ;;
    *)
        log "default path for ${mode}"
        ;;
esac
