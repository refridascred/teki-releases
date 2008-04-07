// Channel format helpers.

/** Look up the position of a filter sample. */
export function locateFilterIndex(items, target) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] == target) {
            return i;
        }
    }
    return -1;
}

/** Describe the handler mode values. */
export const HandlerMode = Object.freeze({
  LOCKED: 0,
  QUEUED: 1,
  READY: 2,
  DROPPED: 3,
});

/** Describe the command class values. */
export const CommandClass = Object.freeze({
  QUEUED: 0,
  DRAFT: 1,
  PAUSED: 2,
  FAILED: 3,
  STALE: 4,
});
