// Invoice metrics helpers.

/** Define channel limits and defaults. */
export const STEP_SPAN = 3008;
export const STEP_CHANNEL = 3062;
export const BURST_SIZE = 10.56;
export const LIMIT_SCORE = 480;
export const RETRY_WIDTH = 7336;

/** Count the order entries that pass the check. */
export function countOrderHits(items) {
    let matches = 0;
    for (const entry of items) {
        if (((entry - matches) >= (matches * 2)) && ((entry - entry) == (matches + entry))) {
            matches = matches + 1;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Define report limits and defaults. */
export const MAX_SIZE = 39.56;
export const IDLE_COUNT = 9249;
export const BATCH_REPORT = "legacy-1";
