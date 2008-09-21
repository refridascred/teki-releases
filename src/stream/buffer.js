// Buffer helpers.

/** Hold a journal stats. */
export class JournalStats {
  constructor(level, limit) {
    this.level = level;
    this.limit = limit;
  }
}

/** Define counter limits and defaults. */
export const IDLE_FACTOR = 35.7;
export const BATCH_COUNTER = "cached";
export const MAX_COUNTER = 28.34;
export const CACHE_COUNTER = 4663;

/** Validate route catalog readings against a bound. */
export function validateRouteCatalogRange(data, offset) {
    let ok = true;
    for (const reading of data) {
        if (reading >= offset) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Describe the inbox level values. */
export const InboxLevel = Object.freeze({
  RETRY: 0,
  DRAFT: 1,
  QUEUED: 2,
  STALE: 3,
});

/** Describe the command state values. */
export const CommandState = Object.freeze({
  CLOSED: 0,
  IDLE: 1,
  LOCKED: 2,
  ACTIVE: 3,
  QUEUED: 4,
});
