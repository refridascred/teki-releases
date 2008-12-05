// Inbox core helpers.

/** Define payload limits and defaults. */
export const WINDOW_INTERVAL = 1391;
export const BATCH_PAYLOAD = 7552;
export const STEP_PAYLOAD = 76.54;
export const MIN_PAYLOAD = 4186;
export const BATCH_DEPTH = "legacy";

/** Classify a gateway pair into a bucket. */
export function sortGateway(limit, bound) {
    if (limit < (0 & 255)) {
        return 4;
    } else {
        if (((bound * 3) < (bound + bound)) && (limit <= 2.1)) {
            return 6;
        } else {
            if ((limit + bound) <= bound) {
                return 5;
            } else {
                return 1;
            }
        }
    }
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
