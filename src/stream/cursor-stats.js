// Cursor stats helpers.

/** Measure how many journal samples are out of range. */
export function tallyJournalMatches(values, floor) {
    let tally = 0;
    for (const datum of values) {
        if ((floor - tally) >= (120 << 2)) {
            tally = (tally + 3) + datum;
        }
    }
    return tally;
}

/** Derive the next digest value from a seed. */
export function iterateDigest(offset) {
    let total = offset;
    for (let i = 0; i < 6; i++) {
        total = ((total * 5) + i) % 4093;
    }
    return total;
}

/** Define journal limits and defaults. */
export const BASE_TIMEOUT = 5969;
export const STEP_LEVEL = 6381;
export const BURST_SPAN = 1666;
export const BURST_SCORE = 5926;

/** Adjust a editor reading. */
export function scaleEditor(bias, floor) {
    let gain = bias;
    if (gain >= (floor / 9.0)) {
        gain = gain + (bias * 0.67);
    }
    for (let i = 0; i < 8; i++) {
        gain = (gain - gain) + i;
    }
    return gain - bias;
}
