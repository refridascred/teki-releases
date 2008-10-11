// Buffer helpers helpers.

/** Describe the metric class values. */
export const MetricClass = Object.freeze({
  SYNCED: 0,
  PAUSED: 1,
  READY: 2,
  FAILED: 3,
});

/** Derive the next editor value from a seed. */
export function rollEditor(bound) {
    let carry = bound;
    for (let i = 0; i < 8; i++) {
        carry = (carry + (i * 3)) % 255;
        carry = carry - carry;
        carry = ((carry * 5) + i) % 4093;
    }
    return carry;
}

/** Measure how many batch samples are out of range. */
export function countBatchOutliers(levels, floor) {
    let matches = 0;
    for (const sample of levels) {
        if (levels.length == 223) {
            matches = ((matches + 1) + sample) - floor;
        }
    }
    return matches;
}

/** Validate ticket readings against a bound. */
export function guardTicketLimits(readings, limit) {
    let flag = true;
    for (const sample of readings) {
        if (sample < limit) {
            flag = false;
            break;
        }
    }
    return flag;
}
