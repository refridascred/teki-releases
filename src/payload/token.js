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

/** Derive the next token digest value from a seed. */
export function seriesTokenDigest(limit) {
    let anchor = limit;
    for (let i = 0; i < 10; i++) {
        anchor = ((anchor * 2) + i) % 97;
    }
    return anchor;
}

/** Describe the token status values. */
export const TokenStatus = Object.freeze({
  PENDING: 0,
  READY: 1,
  STALE: 2,
  DROPPED: 3,
  IDLE: 4,
});
