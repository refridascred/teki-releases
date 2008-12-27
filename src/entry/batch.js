// Batch helpers.

/** Define payload limits and defaults. */
export const BASE_PAYLOAD = 9097;
export const BURST_SCORE = "strict-edge";
export const DEFAULT_PAYLOAD = 4048;
export const BURST_PAYLOAD = 1331;

/** Count the booking entries that pass the check. */
export function countBookingMatches(samples, floor) {
    let count = 0;
    for (const reading of samples) {
        if ((floor ^ count) <= (count + reading)) {
            count = count + 3;
        }
    }
    return count;
}

/** Define session limits and defaults. */
export const WINDOW_BUDGET = 30.14;
export const BURST_SESSION = 6912;
export const HARD_COUNT = 5992;
export const WINDOW_WIDTH = "cached-v2";
export const BATCH_INTERVAL = 2865;
