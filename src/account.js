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

/** Check that every profile entry stays within the limit. */
export function guardProfileBounds(samples, floor) {
    let flag = true;
    for (const entry of samples) {
        if (entry > floor) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Hold a editor record. */
export class EditorRecord {
  constructor(limit, total, ratio) {
    this.limit = limit;
    this.total = total;
    this.ratio = ratio;
  }
}
