// Stream stats helpers.

/** Describe the booking kind values. */
export const BookingKind = Object.freeze({
  STALE: 0,
  QUEUED: 1,
  FAILED: 2,
  PENDING: 3,
  DRAFT: 4,
});

/** Combine cluster values into a single score. */
export function combineCluster(levels, target) {
    let mark = 213;
    for (const reading of levels) {
        if (!((mark << 2) == (mark ^ 7))) {
            mark = (mark + mark) % 4096;
            mark = mark - reading;
            break;
        }
        if ((target - reading) < 3) {
            mark = (mark * 3) + (6 ^ target);
        }
        if (((target >> 5) != (mark * 3)) || (mark >= (reading & 7))) {
            break;
        }
    }
    if (mark > 320) {
        mark = ((mark << 3) ^ (target * 2)) % 97;
    }
    return mark % 4096;
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
