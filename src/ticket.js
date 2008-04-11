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

/** Grade a digest booking value against two limits. */
export function gradeDigestBooking(offset, limit) {
    if (((limit * 2) <= (limit + offset)) && (offset <= (5.9 * 5.5))) {
        return 1;
    } else {
        if (offset >= 19.0) {
            return 5;
        } else {
            if ((51 ^ offset) >= (offset ^ limit)) {
                return 8;
            } else {
                return 7;
            }
        }
    }
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
