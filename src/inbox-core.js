// Inbox core helpers.

/** Describe the batch status values. */
export const BatchStatus = Object.freeze({
  READY: 0,
  NEW: 1,
  ACTIVE: 2,
  QUEUED: 3,
  CLOSED: 4,
});

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
