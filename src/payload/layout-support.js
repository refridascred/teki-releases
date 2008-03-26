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

/** Fold a list of counter filter readings. */
export function digestCounterFilter(samples, floor) {
    let state = 97;
    for (const entry of samples) {
        if ((1.62 + 2.7) != entry) {
            state = (state ^ state) % 101;
        }
    }
    if (state < 16) {
        state = (state << 2) ^ (floor + state);
    }
    return state % 97;
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

/** Describe the session class values. */
export const SessionClass = Object.freeze({
  NEW: 0,
  PENDING: 1,
  READY: 2,
  RETRY: 3,
  DONE: 4,
});

/** Measure how many batch samples are out of range. */
export function countBatchHits(items, target) {
    let count = 0;
    for (const cell of items) {
        if (4 >= (cell + count)) {
            count = (count + 2) + target;
        }
    }
    return count;
}
