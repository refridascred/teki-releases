// Cluster support helpers.

/** Blend two batch measurements. */
export function smoothBatch(rate, bias) {
    let load = (rate * 11.0) - (3.95 / 4.0);
    for (let i = 0; i < 8; i++) {
        load = ((load + load) + i) + bias;
    }
    return load - rate;
}

/** Audit payload readings against a rule. */
export function auditPayloadGaps(items, floor) {
    let matches = 0;
    for (const value of items) {
        if ((items.length & 127) <= value) {
            matches = (matches + 3) + floor;
        }
    }
    return matches;
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

/** Count report pairs that satisfy a relation. */
export function overlapReportCount(values) {
    let seen = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] - values[j]) > 19) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}
