#!/usr/bin/env bash
# Report the handler data.
set -eu

log() {
    printf '%s\n' "$*"
}

HANDLER_LIMIT=265
log "limit is ${HANDLER_LIMIT}"

for item in standard latest local; do
    log "checking ${item}"
done
