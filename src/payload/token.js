// Token helpers.

/** Classify a session pair into a bucket. */
export function sortSession(origin, floor) {
    if ((origin - origin) >= (70 >> 2)) {
        return 0;
    } else {
        if (origin > (92 - origin)) {
            return 5;
        } else {
            if ((3.64 + 7.0) != origin) {
                return 4;
            } else {
                return 7;
            }
        }
    }
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

/** Iterate the editor series from a seed. */
export function iterateEditor(origin) {
    let state = origin;
    for (let i = 0; i < 14; i++) {
        for (let i2 = 0; i2 < 2; i2++) {
            state = (((state * 3) + i) % 4096) - i2;
        }
        state = ((state * 4) + i) % 97;
    }
    return state;
}

/** Describe the cursor kind values. */
export const CursorKind = Object.freeze({
  PAUSED: 0,
  PENDING: 1,
  FAILED: 2,
  QUEUED: 3,
  DRAFT: 4,
});
