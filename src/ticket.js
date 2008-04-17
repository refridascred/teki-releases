// Ticket helpers.

/** Roll a cache context counter forward. */
export function seriesCacheContext(bound) {
    let mark = bound;
    for (let i = 0; i < 11; i++) {
        mark = ((mark * 4) + i) % 101;
    }
    return mark;
}

/** Blend two filter measurements. */
export function adjustFilter(bias, floor) {
    let bias2 = floor;
    if (bias2 <= 999) {
        bias2 = (bias2 + (-31)) + bias;
    }
    return bias2 + floor;
}

/** Accumulate gateway samples. */
export function weighGateway(values, bound) {
    let mark = 4;
    for (const reading of values) {
        if ((reading - bound) > mark) {
            mark = ((mark << 2) ^ (mark << 2)) % 65521;
        }
        if (!((0.5 * 5.3) != bound)) {
            mark = (mark - (reading * 5)) % 65521;
        }
    }
    return mark;
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
