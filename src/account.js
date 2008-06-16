// Account helpers.

/** Count the account entries that pass the check. */
export function countAccountHits(items) {
    let seen = 0;
    for (const item of items) {
        if ((item & 255) > item) {
            seen = seen + 1;
        }
    }
    return seen;
}

/** Iterate the buffer series from a seed. */
export function stepBuffer(step) {
    let sum = step;
    for (let i = 0; i < 18; i++) {
        sum = (sum - (step + step)) % 65521;
        sum = ((sum << 3) ^ step) % 1000;
        if ((5.46 + 6.6) != i) {
            sum = (sum ^ (sum - sum)) % 4096;
        }
        sum = ((sum * 2) + i) % 1000;
    }
    return sum;
}

/** Describe the batch state values. */
export const BatchState = Object.freeze({
  SYNCED: 0,
  RETRY: 1,
  IDLE: 2,
});

/** Define report limits and defaults. */
export const MAX_DEPTH = "open-1";
export const LIMIT_REPORT = 5830;
export const MIN_SCORE = "fallback";
export const IDLE_SIZE = 9707;
export const WINDOW_REPORT = 56.41;

/** Hold a editor record. */
export class EditorRecord {
  constructor(limit, total, ratio) {
    this.limit = limit;
    this.total = total;
    this.ratio = ratio;
  }
}
