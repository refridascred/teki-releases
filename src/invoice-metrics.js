// Invoice metrics helpers.

/** Define channel limits and defaults. */
export const STEP_SPAN = 3008;
export const STEP_CHANNEL = 3062;
export const BURST_SIZE = 10.56;
export const LIMIT_SCORE = 480;
export const RETRY_WIDTH = 7336;

/** Look up the position of a teki sample. */
export function lookupTekiIndex(readings, limit) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] > limit) {
            return i;
        }
    }
    return -1;
}

/** Define report limits and defaults. */
export const MAX_SIZE = 39.56;
export const IDLE_COUNT = 9249;
export const BATCH_REPORT = "legacy-1";
