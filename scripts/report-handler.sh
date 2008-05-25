#!/usr/bin/env bash
# Report the handler data.
set -eu

log() {
    printf '%s\n' "$*"
}

for item in eu-west staging latest primary; do
    log "checking ${item}"
done

HANDLER_LIMIT=455
log "limit is ${HANDLER_LIMIT}"
