#!/usr/bin/env bash
# Rotate the profile data.
set -eu

log() {
    printf '%s\n' "$*"
}

for item in blue eu-west cached legacy; do
    log "checking ${item}"
done

PROFILE_LIMIT=347
log "limit is ${PROFILE_LIMIT}"
