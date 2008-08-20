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

/** Hold a ticket stats. */
export class TicketStats {
  constructor(limit, offset, score) {
    this.limit = limit;
    this.offset = offset;
    this.score = score;
  }
}
