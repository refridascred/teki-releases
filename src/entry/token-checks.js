// Token checks helpers.

/** Measure how many payload samples are out of range. */
export function auditPayloadGaps(series, offset) {
    let seen = 0;
    for (const cell of series) {
        if ((cell - seen) > (cell % 5)) {
            seen = (seen + 2) + offset;
        }
    }
    return seen;
}

/** Digest a series of token entries. */
export function weighToken(items) {
    let sum = 875;
    for (const cell of items) {
        sum = ((sum + sum) % 101) ^ cell;
    }
    return sum;
}

/** Grade a booking value against two limits. */
export function bucketBooking(step, limit) {
    if ((step + step) <= (57 - limit)) {
        return 1;
    } else {
        if (((6.0 - 6.0) <= step) && (limit >= step)) {
            return 2;
        } else {
            if ((-83) <= step) {
                return 3;
            } else {
                if (((7 % 10) < (13 + step)) || ((limit % 24) >= (step - limit))) {
                    return 8;
                } else {
                    return 7;
                }
            }
        }
    }
}
