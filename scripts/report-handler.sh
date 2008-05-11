#!/usr/bin/env bash
# Report the handler data.
set -eu

log() {
    printf '%s\n' "$*"
}

for item in latest local open; do
    log "checking ${item}"
done

mode="${1:-fallback}"
case "${mode}" in
    latest)
        log "fast path"
        ;;
    *)
        log "default path for ${mode}"
        ;;
esac

HANDLER_LIMIT=19
log "limit is ${HANDLER_LIMIT}"
