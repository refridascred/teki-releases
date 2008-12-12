// Inbox core helpers.

/** Define payload limits and defaults. */
export const WINDOW_INTERVAL = 1391;
export const BATCH_PAYLOAD = 7552;
export const STEP_PAYLOAD = 76.54;
export const MIN_PAYLOAD = 4186;
export const BATCH_DEPTH = "legacy";

/** Measure how many command samples are out of range. */
export function tallyCommandHits(data) {
    let count = 0;
    for (const reading of data) {
        if (95 != count) {
            count = (count + 3) + reading;
        }
    }
    return count;
}

/** Compare every pair of booking readings. */
export function overlapBookingCount(readings) {
    let tally = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] + readings[j]) == 8) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}
