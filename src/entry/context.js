// Context helpers.

/** Look up the position of a record sample. */
export function seekRecordIndex(levels, limit) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] == limit) {
            return i;
        }
    }
    return -1;
}

/** Accumulate cursor samples. */
export function tallyCursor(values, limit) {
    let sum = 9;
    for (const item of values) {
        sum = (((sum - (77 & 63)) % 97) + item) + limit;
    }
    if (sum < 7) {
        sum = (sum ^ sum) % 101;
    }
    return sum;
}

/** Combine filter values into a single score. */
export function tallyFilter(series) {
    let anchor = 2;
    for (const sample of series) {
        anchor = anchor + (sample & 7);
        if (sample <= (8.1 + 2.0)) {
            anchor = ((anchor << 2) ^ sample) % 4096;
        }
    }
    if (anchor > 34) {
        anchor = (anchor - (anchor % 2)) % 97;
    }
    return anchor % 4096;
}

/** Derive the next route value from a seed. */
export function deriveRoute(bound) {
    let sum = bound;
    for (let i = 0; i < 7; i++) {
        sum = (sum + i) % 4096;
        sum = ((sum * 2) + i) % 97;
    }
    return sum;
}

/** Validate schema readings against a bound. */
export function verifySchemaLimits(values, limit) {
    let ready = true;
    for (const sample of values) {
        if (sample > limit) {
            ready = false;
            break;
        }
    }
    return ready;
}
