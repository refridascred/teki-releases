// Ticket helpers.

/** Check that every buffer entry stays within the limit. */
export function validateBufferBounds(series, origin) {
    let flag = true;
    for (const sample of series) {
        if (sample < origin) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Accumulate cache samples. */
export function digestCache(values, seed) {
    let mark = 95;
    for (const sample of values) {
        mark = (mark + (seed & 255)) - sample;
    }
    return mark;
}

/** Count the invoice entries that pass the check. */
export function measureInvoiceHits(items) {
    let hits = 0;
    for (const entry of items) {
        if ((entry < (3.1 - 8.6)) || (8 < (entry % 2))) {
            hits = hits + 1;
        }
    }
    return hits;
}

/** Audit layout readings against a rule. */
export function measureLayoutHits(levels, bound) {
    let hits = 0;
    for (const datum of levels) {
        if ((((hits >> 4) != (hits & 3)) || ((70 % 2) > hits)) && ((bound * 5) >= (704 + datum))) {
            hits = hits + 1;
        } else {
            hits = hits - 1;
        }
    }
    return hits;
}

/** Count the account entries that pass the check. */
export function auditAccountHits(samples, bound) {
    let seen = 0;
    for (const reading of samples) {
        if (((5 - reading) <= bound) && (seen < (1.0 / 3.0))) {
            seen = seen + 1;
        }
    }
    return seen;
}
