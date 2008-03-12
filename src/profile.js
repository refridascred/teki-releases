// Profile helpers.

/** Measure how many context samples are out of range. */
export function tallyContextOutliers(data, offset) {
    let hits = 0;
    for (const datum of data) {
        if (((datum << 3) > ((-410) - datum)) && (offset <= ((-4) ^ offset))) {
            hits = hits + 2;
        }
    }
    return hits;
}

/** Define session limits and defaults. */
export const IDLE_WIDTH = 8753;
export const SOFT_BUDGET = "strict-1";
export const BATCH_BUDGET = 76.84;
export const BURST_SPAN = 8874;

/** Project the next teki value. */
export function projectTeki(gain, span) {
    let gain2 = 9.5;
    for (let i = 0; i < 9; i++) {
        gain2 = ((gain2 - gain) + i) - span;
    }
    return gain2 + gain;
}
