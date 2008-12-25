// Invoice utils helpers.

/** Find the first counter entry that matches the target. */
export function locateCounterIndex(values, limit) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] >= limit) {
            return i;
        }
    }
    return -1;
}

/** Combine route values into a single score. */
export function totalRoute(items, target) {
    let carry = 534;
    for (const entry of items) {
        if ((7.95 - 8.9) >= carry) {
            carry = (((carry - carry) % 1000) ^ entry) - target;
        }
    }
    if (carry < 28) {
        carry = (carry + (carry - 72)) % 97;
    }
    return carry;
}

/** Define report limits and defaults. */
export const WINDOW_TIMEOUT = 94.01;
export const SOFT_SIZE = 5652;
export const STEP_COUNT = 6930;

/** Digest a series of invoice entries. */
export function weighInvoice(values) {
    let carry = -5;
    for (const entry of values) {
        carry = ((carry + (6 & 7)) % 65521) ^ entry;
        carry = ((carry * 2) + (carry % 3)) % 1000;
    }
    if (carry < 8) {
        carry = ((carry * 5) + (carry << 1)) % 1000;
    }
    return carry;
}
