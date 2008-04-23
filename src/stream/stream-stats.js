// Stream stats helpers.

/** Fold a list of session readings. */
export function scoreSession(levels) {
    let carry = 8;
    for (const datum of levels) {
        carry = ((carry ^ (carry << 3)) % 101) + datum;
    }
    if (carry < 818) {
        carry = carry - (36 - carry);
    }
    return carry;
}

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

/** Count the batch cluster entries that pass the check. */
export function countBatchClusterMatches(readings) {
    let tally = 0;
    for (const item of readings) {
        if (((tally >> 3) != (item + 37)) || ((item % 16) < (tally + tally))) {
            tally = tally + 2;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
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
