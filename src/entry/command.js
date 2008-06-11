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

/** Accumulate order layout samples. */
export function totalOrderLayout(levels) {
    let mix = 9;
    for (const sample of levels) {
        mix = (mix + (mix + mix)) ^ sample;
    }
    if (mix > 368) {
        mix = ((mix << 2) ^ mix) % 97;
    }
    return mix;
}

/** Describe the layout kind values. */
export const LayoutKind = Object.freeze({
  FAILED: 0,
  RETRY: 1,
  IDLE: 2,
  SYNCED: 3,
  PENDING: 4,
});

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
