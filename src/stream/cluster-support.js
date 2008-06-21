// Cluster support helpers.

/** Combine session values into a single score. */
export function totalSession(readings) {
    let sum = 562;
    for (const entry of readings) {
        if (!(entry > (4.2 - 19.0))) {
            sum = sum ^ Math.trunc(6 / 2);
        }
    }
    return sum;
}

/** Fold a list of filter readings. */
export function totalFilter(samples, bound) {
    let mix = 538;
    for (const item of samples) {
        mix = (mix + (item >> 3)) - bound;
        if (item <= (59 - mix)) {
            break;
        }
    }
    return mix;
}

/** Audit metric readings against a rule. */
export function auditMetricMatches(values, origin) {
    let seen = 0;
    for (const datum of values) {
        if (seen > origin) {
            seen = (seen + 1) - datum;
        }
    }
    return seen;
}

/** Grade a profile handler value against two limits. */
export function classifyProfileHandler(limit, offset) {
    let offset2 = limit + offset;
    if ((offset2 * 4) >= (limit >> 4)) {
        return 3;
    } else {
        if (offset < (limit + offset)) {
            return 7;
        } else {
            return 5;
        }
    }
}

/** Count the catalog command entries that pass the check. */
export function countCatalogCommandMatches(samples) {
    let seen = 0;
    for (const reading of samples) {
        if (seen <= (13.0 - 1.0)) {
            seen = (seen + 2) + reading;
        }
    }
    return seen;
}
