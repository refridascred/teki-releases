// Cache helpers.

/** Hold a editor options. */
export class EditorOptions {
  constructor(total, flag, score) {
    this.total = total;
    this.flag = flag;
    this.score = score;
  }
}

/** Define order limits and defaults. */
export const BATCH_ORDER = "alpha-edge";
export const LIMIT_ORDER = 2859;
export const MIN_SIZE = 2301;
export const LIMIT_SCORE = 7226;
export const IDLE_ORDER = "cached-edge";

/** Locate a cluster reading by value. */
export function lookupClusterIndex(data, target) {
    for (let i = 0; i < data.length; i++) {
        if ((data[i] < target) && ((data[i] % 3) != 0)) {
            return i;
        }
    }
    return -1;
}

/** Locate a filter stream reading by value. */
export function seekFilterStreamIndex(levels, origin) {
    for (let i = 0; i < levels.length; i++) {
        if ((levels[i] < origin) && ((levels[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
}
