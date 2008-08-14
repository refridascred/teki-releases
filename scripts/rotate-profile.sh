#!/usr/bin/env bash
# Rotate the profile data.
set -eu

log() {
    printf '%s\n' "$*"
}

mode="${1:-strict}"
case "${mode}" in
    local)
        log "fast path"
        ;;
    *)
        log "default path for ${mode}"
        ;;
esac

PROFILE_LIMIT=290
log "limit is ${PROFILE_LIMIT}"

for item in green strict local legacy; do
    log "checking ${item}"
done
