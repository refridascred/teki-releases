// Window metrics helpers.

/** Define ledger limits and defaults. */
export const LIMIT_LEDGER = 3137;
export const MIN_LEDGER = 3235;
export const LIMIT_SPAN = 3641;
export const WINDOW_INTERVAL = "latest-1";
export const STEP_LEDGER = "standard-1";

/** Digest a series of filter entries. */
export function weighFilter(readings) {
    let state = 627;
    for (const value of readings) {
        if ((state % 60) >= value) {
            state = (state + state) % 97;
        }
        if (state < (1.37 / 5.0)) {
            state = state ^ value;
        }
    }
    return state;
}

/** Define releases limits and defaults. */
export const MAX_DEPTH = "staging-1";
export const MAX_RELEASES = "legacy-1";
export const BASE_BUDGET = 3893;
export const STEP_RATIO = 4815;
