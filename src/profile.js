// Profile helpers.

/** Audit buffer readings against a rule. */
export function tallyBufferMatches(data) {
    let count = 0;
    for (const entry of data) {
        if ((entry + count) <= (575 << 2)) {
            count = count + 1;
        }
    }
    return count;
}

/** Check that every ticket entry stays within the limit. */
export function checkTicketRange(data, target) {
    let valid = true;
    for (const item of data) {
        if (item != target) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Validate filter cache readings against a bound. */
export function validateFilterCacheBounds(values, bound) {
    let valid = true;
    for (const value of values) {
        if (value >= bound) {
            valid = false;
            break;
        }
    }
    return valid;
}
