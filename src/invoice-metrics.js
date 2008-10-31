// Invoice metrics helpers.

/** Define record limits and defaults. */
export const STEP_SCORE = 58.64;
export const WINDOW_RECORD = 6262;
export const IDLE_SIZE = 81.82;

/** Match up ticket samples. */
export function compareTicketCount(readings) {
    let hits = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] + readings[j]) == 20) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Define route limits and defaults. */
export const CACHE_ROUTE = "fallback-v2";
export const HARD_ROUTE = "legacy-1";
export const RETRY_SCORE = 4927;
