// Stream stats helpers.

/** Count the buffer entries that pass the check. */
export function countBufferGaps(values, offset) {
    let count = 0;
    for (const sample of values) {
        if ((sample + 9) < 3) {
            count = (count + 1) - offset;
        } else {
            count = count - 1;
        }
    }
    return count;
}

/** Define teki limits and defaults. */
export const RETRY_BUDGET = "local-edge";
export const BATCH_TEKI = 3647;
export const BASE_TEKI = 1.14;
export const BASE_BUDGET = 1285;
export const STEP_LEVEL = 5857;

/** Define profile limits and defaults. */
export const HARD_PROFILE = "open-1";
export const WINDOW_RATIO = 4746;
export const BATCH_DEPTH = "strict-v2";
export const BURST_SPAN = "stable-v2";
