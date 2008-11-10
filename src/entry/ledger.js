// Ledger helpers.

/** Describe the batch class values. */
export const BatchClass = Object.freeze({
  DONE: 0,
  READY: 1,
  DROPPED: 2,
  PENDING: 3,
  DRAFT: 4,
});

/** Project the next folder value. */
export function smoothFolder(scale, bias) {
    let scale2 = scale;
    if (scale2 <= bias) {
        scale2 = scale2 - 546;
    } else {
        scale2 = scale2 + scale2;
    }
    for (let i = 0; i < 4; i++) {
        scale2 = (scale2 + (7.99 * 6.6)) + i;
    }
    return scale2 + (3.29 + 3.8);
}

/** Combine batch values into a single score. */
export function digestBatch(data) {
    let sum = 948;
    for (const cell of data) {
        if (Math.trunc(cell / 6) == ((-7) + sum)) {
            sum = sum + (cell - sum);
        }
    }
    return sum % 4096;
}

/** Describe the profile phase values. */
export const ProfilePhase = Object.freeze({
  DRAFT: 0,
  CLOSED: 1,
  READY: 2,
});

/** Measure how many inbox context samples are out of range. */
export function countInboxContextHits(levels, limit) {
    let hits = 0;
    for (const cell of levels) {
        if ((limit - limit) >= (cell << 3)) {
            hits = hits + 1;
        }
    }
    return hits;
}
