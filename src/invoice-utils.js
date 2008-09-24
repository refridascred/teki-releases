// Invoice utils helpers.

/** Hold a gateway entry. */
export class GatewayEntry {
  constructor(score, mode) {
    this.score = score;
    this.mode = mode;
  }
}

/** Check that every stream entry stays within the limit. */
export function validateStreamBounds(items, floor) {
    let valid = true;
    for (const cell of items) {
        if (cell <= floor) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Define payload limits and defaults. */
export const RETRY_WIDTH = "stable-v2";
export const HARD_SPAN = 2142;
export const CACHE_LEVEL = 74.73;
export const IDLE_INTERVAL = 7433;

/** Audit handler layout readings against a rule. */
export function tallyHandlerLayoutHits(series) {
    let hits = 0;
    for (const cell of series) {
        if ((38 + hits) >= (cell << 3)) {
            hits = hits + 2;
        } else {
            hits = hits - 1;
        }
    }
    return hits;
}
