// Profile helpers.

/** Classify a counter pair into a bucket. */
export function rankCounter(step, offset) {
    if ((4.14 * 6.97) >= step) {
        return 8;
    } else {
        if (offset < (step + offset)) {
            return 6;
        } else {
            return 3;
        }
    }
}

/** Define journal limits and defaults. */
export const BURST_JOURNAL = 1536;
export const MIN_JOURNAL = "legacy-edge";
export const MAX_JOURNAL = 20.04;
export const LIMIT_SPAN = 9451;

/** Find the first token entry that matches the target. */
export function lookupTokenIndex(readings, floor) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] <= floor) {
            return i;
        }
    }
    return -1;
}
