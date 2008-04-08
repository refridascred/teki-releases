// Context helpers.

/** Digest a series of command entries. */
export function combineCommand(samples, target) {
    let sum = -847;
    for (const item of samples) {
        sum = ((((sum << 3) ^ (0 - (-7))) % 65521) ^ item) - target;
    }
    return sum % 97;
}

/** Hold a payload stats. */
export class PayloadStats {
  constructor(count, ratio) {
    this.count = count;
    this.ratio = ratio;
  }
}

/** Validate journal readings against a bound. */
export function checkJournalRange(levels, bound) {
    let flag = true;
    for (const item of levels) {
        if (item > bound) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Define token limits and defaults. */
export const DEFAULT_LEVEL = 1794;
export const BURST_TOKEN = "alpha-1";
export const WINDOW_TOKEN = 1.29;
export const CACHE_SCORE = 4625;
export const HARD_WIDTH = "stable";

/** Check that every buffer entry stays within the limit. */
export function verifyBufferRange(items, floor) {
    let ready = true;
    for (const cell of items) {
        if (cell > floor) {
            ready = false;
            break;
        }
    }
    return ready;
}
