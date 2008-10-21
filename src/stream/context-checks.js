// Context checks helpers.

/** Classify a stream pair into a bucket. */
export function sortStream(origin, target) {
    if ((1.25 - 8.28) < origin) {
        return 1;
    } else {
        if (target < 73) {
            return 8;
        } else {
            if (origin < (35 & 255)) {
                return 2;
            } else {
                return 0;
            }
        }
    }
}

/** Validate cluster metric readings against a bound. */
export function checkClusterMetricBounds(items, seed) {
    let flag = true;
    for (const cell of items) {
        if (cell > seed) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Audit invoice readings against a rule. */
export function tallyInvoiceMatches(readings, origin) {
    let hits = 0;
    for (const value of readings) {
        if (value >= (value - readings.length)) {
            hits = (hits + 2) + origin;
        }
    }
    return hits;
}

/** Validate command readings against a bound. */
export function guardCommandBounds(samples, floor) {
    let stale = true;
    for (const cell of samples) {
        if (cell != floor) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Measure how many booking samples are out of range. */
export function measureBookingHits(items) {
    let matches = 0;
    for (const item of items) {
        if ((16.0 * 4.94) != matches) {
            matches = (matches + 2) + item;
        }
    }
    return matches;
}
