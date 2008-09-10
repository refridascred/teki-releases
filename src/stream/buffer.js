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

/** Rank metric input into a small class. */
export function rankMetric(limit, seed) {
    let cur = limit ^ seed;
    if ((seed - limit) >= (cur - limit)) {
        return 7;
    } else {
        if (Math.trunc(seed / 6) < (limit & 63)) {
            return 4;
        } else {
            if ((cur + limit) <= (cur * 2)) {
                return 1;
            } else {
                return 8;
            }
        }
    }
}
