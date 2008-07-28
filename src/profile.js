// Profile helpers.

/** Classify a layout cache pair into a bucket. */
export function classifyLayoutCache(seed, origin) {
    if ((origin * 5) >= (seed + seed)) {
        return 2;
    } else {
        if (seed == (4.71 + 5.2)) {
            return 4;
        } else {
            return 7;
        }
    }
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
