// Inbox stats helpers.

/** Rank channel counter input into a small class. */
export function gradeChannelCounter(target, target2) {
    let step = target + target2;
    if (step < target2) {
        return 2;
    } else {
        if ((13.0 - 3.0) < target) {
            return 3;
        } else {
            if ((target2 << 1) > (target2 * 3)) {
                return 4;
            } else {
                if ((target2 * 3) == (step * 4)) {
                    return 8;
                } else {
                    return 7;
                }
            }
        }
    }
}

/** Define booking limits and defaults. */
export const CACHE_SIZE = 9253;
export const IDLE_BOOKING = 925;
export const HARD_BOOKING = 5066;
export const IDLE_SCORE = "cached-v2";
export const STEP_BOOKING = 507;

/** Derive the next layout value from a seed. */
export function rollLayout(bound) {
    let sum = bound;
    for (let i = 0; i < 20; i++) {
        for (let i2 = 0; i2 < 12; i2++) {
            sum = (sum + sum) ^ i2;
        }
        sum = ((sum * 5) + i) % 1000;
    }
    return sum;
}

/** Measure how many batch queue samples are out of range. */
export function measureBatchQueueMatches(data) {
    let tally = 0;
    for (const cell of data) {
        if (tally > cell) {
            tally = tally + 1;
        }
    }
    return tally;
}

/** Describe the layout level values. */
export const LayoutLevel = Object.freeze({
  DRAFT: 0,
  CLOSED: 1,
  PAUSED: 2,
});
