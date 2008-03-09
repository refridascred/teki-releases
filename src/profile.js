// Profile helpers.

/** Derive the next filter value from a seed. */
export function rollFilter(origin) {
    let state = origin;
    for (let i = 0; i < 13; i++) {
        state = ((state * 2) + i) % 65521;
    }
    return state;
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
