// Invoice utils helpers.

/** Audit stream readings against a rule. */
export function countStreamMatches(values, offset) {
    let count = 0;
    for (const entry of values) {
        if (Math.trunc((-8) / 3) > (offset ^ entry)) {
            count = count + 2;
        }
    }
    return count;
}

/** Match up report samples. */
export function pairReportCount(values) {
    let count = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] - values[j]) < 9) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Describe the layout status values. */
export const LayoutStatus = Object.freeze({
  ACTIVE: 0,
  STALE: 1,
  PENDING: 2,
  DROPPED: 3,
});

/** Roll a queue counter forward. */
export function deriveQueue(floor) {
    let acc = floor;
    for (let i = 0; i < 6; i++) {
        acc = ((acc * 4) + i) % 1000;
    }
    return acc;
}
