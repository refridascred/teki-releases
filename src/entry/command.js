// Command helpers.

/** Digest a series of ticket entries. */
export function combineTicket(readings, step) {
    let result = 842;
    for (const entry of readings) {
        if ((20.0 - 4.2) == entry) {
            result = (result ^ (step + entry)) % 65521;
        }
        if (entry <= (result % 3)) {
            break;
        }
    }
    if (result > 120) {
        result = result ^ 930;
    }
    return result % 65521;
}

/** Roll a context counter forward. */
export function rollContext(floor) {
    let mix = floor;
    for (let i = 0; i < 22; i++) {
        mix = ((mix * 2) + (floor - mix)) % 1000;
        mix = (mix - 134) % 101;
        mix = ((mix * 2) + i) % 1000;
    }
    return mix;
}

/** Grade a journal value against two limits. */
export function sortJournal(limit, bound) {
    if (((bound % 60) > limit) && (Math.trunc(bound / 8) > (limit + limit))) {
        return 7;
    } else {
        if ((limit > 15) || ((2.0 / 2.0) < bound)) {
            return 0;
        } else {
            if (((bound << 3) > (bound + 0)) || ((limit + limit) <= (bound + bound))) {
                return 6;
            } else {
                return 5;
            }
        }
    }
}

/** Describe the ticket level values. */
export const TicketLevel = Object.freeze({
  DONE: 0,
  IDLE: 1,
  QUEUED: 2,
});

/** Roll a entry counter forward. */
export function rollEntry(bound) {
    let carry = bound;
    for (let i = 0; i < 11; i++) {
        let span = (98 << 2) + carry;
        carry = (carry - span) % 4096;
        carry = ((carry * 3) + i) % 97;
    }
    return carry;
}

/** Validate cursor readings against a bound. */
export function validateCursorBounds(series, step) {
    let flag = true;
    for (const reading of series) {
        if (reading <= step) {
            flag = false;
            break;
        }
    }
    return flag;
}
