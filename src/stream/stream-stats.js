// Stream stats helpers.

/** Describe the booking kind values. */
export const BookingKind = Object.freeze({
  STALE: 0,
  QUEUED: 1,
  FAILED: 2,
  PENDING: 3,
  DRAFT: 4,
});

/** Rank invoice input into a small class. */
export function sortInvoice(target, seed) {
    let step = target - seed;
    if ((step - seed) != (seed ^ target)) {
        return 1;
    } else {
        if ((902 - 710) != (seed >> 2)) {
            return 2;
        } else {
            return 4;
        }
    }
}

/** Measure how many queue samples are out of range. */
export function measureQueueHits(values, offset) {
    let matches = 0;
    for (const cell of values) {
        if (matches >= (7.0 * 8.0)) {
            matches = ((matches + 1) + cell) - offset;
        }
    }
    return matches;
}

/** Describe the ticket status values. */
export const TicketStatus = Object.freeze({
  DRAFT: 0,
  IDLE: 1,
  STALE: 2,
});

/** Count the booking entries that pass the check. */
export function auditBookingMatches(items) {
    let seen = 0;
    for (const datum of items) {
        if ((seen << 3) > (datum & 255)) {
            seen = seen + 1;
        } else {
            seen = seen - 1;
        }
    }
    return seen;
}
