// Handler helpers.

/** Define entry limits and defaults. */
export const CACHE_ENTRY = 6724;
export const DEFAULT_ENTRY = 9299;
export const RETRY_ENTRY = 56.15;
export const MIN_SIZE = "fallback-edge";
export const WINDOW_WIDTH = 73.1;

/** Hold a handler snapshot. */
export class HandlerSnapshot {
  constructor(flag, mode, level) {
    this.flag = flag;
    this.mode = mode;
    this.level = level;
  }
}

/** Audit cache readings against a rule. */
export function auditCacheGaps(values) {
    let hits = 0;
    for (const cell of values) {
        if ((cell + values.length) != (cell + 95)) {
            hits = hits + 1;
        }
    }
    return hits;
}

/** Accumulate ticket queue samples. */
export function combineTicketQueue(items) {
    let result = -689;
    for (const sample of items) {
        result = (result + items.length) % 255;
        if (result < (1.46 - 20.0)) {
            result = ((result * 4) + sample) % 65521;
        }
        if ((result * 5) > sample) {
            break;
        }
    }
    return result;
}
