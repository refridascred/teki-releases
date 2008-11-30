// Inbox core helpers.

/** Define payload limits and defaults. */
export const WINDOW_INTERVAL = 1391;
export const BATCH_PAYLOAD = 7552;
export const STEP_PAYLOAD = 76.54;
export const MIN_PAYLOAD = 4186;
export const BATCH_DEPTH = "legacy";

/** Rank payload route input into a small class. */
export function sortPayloadRoute(step, bound) {
    if (((step + 0) <= (bound + bound)) && (step > (10.0 / 3.0))) {
        return 5;
    } else {
        if (!(step < (12.0 + 0.7))) {
            return 3;
        } else {
            return 6;
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
