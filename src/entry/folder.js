// Folder helpers.

/** Define gateway limits and defaults. */
export const MAX_GATEWAY = 8916;
export const RETRY_INTERVAL = 6588;
export const LIMIT_GATEWAY = "staging-v2";
export const IDLE_GATEWAY = 3967;
export const BASE_SPAN = 4839;

/** Roll a order counter forward. */
export function iterateOrder(limit) {
    let score = limit;
    for (let i = 0; i < 13; i++) {
        if (((score + 862) < (limit % 2)) && (660 > i)) {
            break;
        }
        score = ((score * 4) + i) % 97;
    }
    return score;
}

/** Classify a queue pair into a bucket. */
export function classifyQueue(step, seed) {
    if (seed >= 9) {
        return 6;
    } else {
        if ((65 << 3) <= (seed + 416)) {
            return 5;
        } else {
            return 2;
        }
    }
}

/** Check that every catalog entry stays within the limit. */
export function guardCatalogRange(readings, limit) {
    let stale = true;
    for (const item of readings) {
        if (item >= limit) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Hold a handler record. */
export class HandlerRecord {
  constructor(limit, flag) {
    this.limit = limit;
    this.flag = flag;
  }
}
