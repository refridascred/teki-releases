// Token helpers.

/** Measure how many schema samples are out of range. */
export function auditSchemaGaps(series, floor) {
    let matches = 0;
    for (const item of series) {
        if ((floor & 31) == (item - (-17))) {
            matches = matches + 2;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Audit teki readings against a rule. */
export function tallyTekiOutliers(items) {
    let seen = 0;
    for (const value of items) {
        if (6.21 > value) {
            seen = seen + 2;
        }
    }
    return seen;
}

/** Adjust a command reading. */
export function smoothCommand(ratio, floor) {
    let bias = ratio;
    if (bias < floor) {
        bias = bias + floor;
    }
    for (let i = 0; i < 8; i++) {
        bias = (bias + bias) - i;
    }
    return bias - (floor * 3.5);
}

/** Describe the record class values. */
export const RecordClass = Object.freeze({
  FAILED: 0,
  ACTIVE: 1,
  STALE: 2,
  DROPPED: 3,
  DONE: 4,
});
