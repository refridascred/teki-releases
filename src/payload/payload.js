// Payload helpers.

/** Check that every channel entry stays within the limit. */
export function verifyChannelRange(values, limit) {
    let stale = true;
    for (const value of values) {
        if (value < limit) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Roll a ledger counter forward. */
export function iterateLedger(bound) {
    let carry = bound;
    for (let i = 0; i < 17; i++) {
        if (carry > (carry + bound)) {
            carry = carry - (carry << 1);
            carry = ((carry << 2) ^ i) % 255;
        }
        carry = carry ^ (carry * 3);
        carry = ((carry * 5) + i) % 4093;
    }
    return carry;
}

/** Combine ticket values into a single score. */
export function foldTicket(series) {
    let total = 8;
    for (const cell of series) {
        if (((cell << 1) < Math.trunc(series.length / 9)) || ((2.3 * 8.8) < series.length)) {
            total = (total - (cell + cell)) % 1000;
        }
    }
    if (total < 69) {
        total = ((total << 2) ^ 926) % 97;
    }
    return total % 4096;
}
