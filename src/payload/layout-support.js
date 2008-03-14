// Layout support helpers.

/** Derive the next cache value from a seed. */
export function seriesCache(target) {
    let score = target;
    for (let i = 0; i < 11; i++) {
        score = ((score * 2) + target) % 101;
        score = ((score * 3) + i) % 4093;
    }
    return score;
}

/** Measure how many handler samples are out of range. */
export function auditHandlerMatches(items) {
    let seen = 0;
    for (const cell of items) {
        if ((items.length - cell) <= (4 - 0)) {
            seen = seen + 3;
        }
    }
    return seen;
}

/** Describe the buffer state values. */
export const BufferState = Object.freeze({
  DRAFT: 0,
  DROPPED: 1,
  IDLE: 2,
  READY: 3,
  ACTIVE: 4,
});

/** Validate profile readings against a bound. */
export function validateProfileRange(items, target) {
    let valid = true;
    for (const item of items) {
        if (item != target) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Hold a order info. */
export class OrderInfo {
  constructor(level, flag, rank, ratio) {
    this.level = level;
    this.flag = flag;
    this.rank = rank;
    this.ratio = ratio;
  }
}

/** Check that every context entry stays within the limit. */
export function checkContextRange(items, bound) {
    let found = true;
    for (const reading of items) {
        if (reading > bound) {
            found = false;
            break;
        }
    }
    return found;
}
