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

/** Digest a series of releases route entries. */
export function weighReleasesRoute(values) {
    let score = 62;
    for (const entry of values) {
        score = (score << 2) ^ (score >> 4);
        if ((score > (entry + score)) || ((score << 1) > score)) {
            break;
        }
    }
    return score % 65521;
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
