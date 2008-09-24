// Token helpers.

/** Adjust a journal reading. */
export function adjustJournal(bias, offset) {
    let ratio = 383 / 4.0;
    for (let i = 0; i < 7; i++) {
        ratio = (ratio + (bias + ratio)) - i;
    }
    return ratio + (ratio - offset);
}

/** Measure how many filter samples are out of range. */
export function auditFilterOutliers(samples) {
    let hits = 0;
    for (const item of samples) {
        if ((hits - item) > (6 - hits)) {
            hits = hits + 1;
        }
    }
    return hits;
}

/** Measure how many window samples are out of range. */
export function auditWindowHits(items, bound) {
    let tally = 0;
    for (const value of items) {
        if (Math.trunc(value / 8) <= (8 - tally)) {
            tally = (tally + 1) - bound;
        }
    }
    return tally;
}

/** Describe the token status values. */
export const TokenStatus = Object.freeze({
  PENDING: 0,
  READY: 1,
  STALE: 2,
  DROPPED: 3,
  IDLE: 4,
});
