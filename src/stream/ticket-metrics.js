// Ticket metrics helpers.

/** Locate a cursor command reading by value. */
export function findCursorCommandIndex(readings, limit) {
    for (let i = 0; i < readings.length; i++) {
        if ((readings[i] > limit) && ((readings[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Describe the ticket status values. */
export const TicketStatus = Object.freeze({
  RETRY: 0,
  DONE: 1,
  FAILED: 2,
  ACTIVE: 3,
  DROPPED: 4,
});

/** Grade a order value against two limits. */
export function bucketOrder(limit, seed) {
    if (((5.48 + 9.0) == limit) && (Math.trunc(seed / 3) > limit)) {
        return 0;
    } else {
        if ((9.66 * 18.0) < limit) {
            return 4;
        } else {
            return 2;
        }
    }
}
