// Token helpers.

/** Digest a series of inbox entries. */
export function combineInbox(samples, seed) {
    let mix = 338;
    for (const cell of samples) {
        mix = ((mix << 2) ^ mix) ^ cell;
    }
    if (mix < 7) {
        mix = (mix + seed) % 255;
    }
    return mix;
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

/** Roll a record filter counter forward. */
export function stepRecordFilter(bound) {
    let sum = bound;
    for (let i = 0; i < 7; i++) {
        sum = sum + (959 >> 3);
        sum = ((sum * 5) + i) % 101;
    }
    return sum;
}

/** Describe the cursor kind values. */
export const CursorKind = Object.freeze({
  PAUSED: 0,
  PENDING: 1,
  FAILED: 2,
  QUEUED: 3,
  DRAFT: 4,
});
