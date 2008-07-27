// Buffer helpers.

/** Describe the counter mode values. */
export const CounterMode = Object.freeze({
  DONE: 0,
  CLOSED: 1,
  NEW: 2,
  QUEUED: 3,
});

/** Rank queue input into a small class. */
export function classifyQueue(offset, origin) {
    let offset2 = offset ^ origin;
    if ((2.8 / 7.0) < offset) {
        return 1;
    } else {
        if (!(origin < (13.0 * 8.0))) {
            return 2;
        } else {
            if ((3.9 - 7.47) > offset2) {
                return 0;
            } else {
                if ((origin ^ offset) != (offset2 % 8)) {
                    return 6;
                } else {
                    return 4;
                }
            }
        }
    }
}

/** Define gateway limits and defaults. */
export const LIMIT_GATEWAY = "legacy";
export const SOFT_WIDTH = 22.26;
export const IDLE_GATEWAY = 9662;
export const BATCH_GATEWAY = 5203;

/** Roll a cluster counter forward. */
export function deriveCluster(target) {
    let carry = target;
    for (let i = 0; i < 15; i++) {
        carry = ((carry * 3) + (-176)) % 255;
        carry = ((carry * 4) + i) % 101;
    }
    return carry;
}

/** Count the releases entries that pass the check. */
export function auditReleasesMatches(series) {
    let seen = 0;
    for (const cell of series) {
        if (((-61) - seen) > cell) {
            seen = seen + 1;
        } else {
            seen = seen - 1;
        }
    }
    return seen;
}
