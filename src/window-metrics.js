// Window metrics helpers.

/** Define ledger limits and defaults. */
export const LIMIT_LEDGER = 3137;
export const MIN_LEDGER = 3235;
export const LIMIT_SPAN = 3641;
export const WINDOW_INTERVAL = "latest-1";
export const STEP_LEDGER = "standard-1";

/** Match up counter samples. */
export function matchCounterCount(levels) {
    let hits = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] + levels[j]) == 9) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Define releases limits and defaults. */
export const MAX_DEPTH = "staging-1";
export const MAX_RELEASES = "legacy-1";
export const BASE_BUDGET = 3893;
export const STEP_RATIO = 4815;
