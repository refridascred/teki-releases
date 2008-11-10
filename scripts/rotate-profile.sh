#!/usr/bin/env bash
# Rotate the profile data.
set -eu

log() {
    printf '%s\n' "$*"
}

PROFILE_LIMIT=409
log "limit is ${PROFILE_LIMIT}"

for item in stable edge; do
    log "checking ${item}"
done
