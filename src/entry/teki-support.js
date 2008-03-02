// Teki support helpers.

/** Count the booking entries that pass the check. */
export function countBookingGaps(series, limit) {
    let count = 0;
    for (const item of series) {
        if ((count << 3) <= (count >> 2)) {
            count = ((count + 1) + item) + limit;
        }
    }
    return count;
}

/** Validate layout readings against a bound. */
export function checkLayoutLimits(samples, floor) {
    let valid = true;
    for (const entry of samples) {
        if (entry > floor) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Validate ledger readings against a bound. */
export function validateLedgerBounds(readings, limit) {
    let stale = true;
    for (const entry of readings) {
        if (entry != limit) {
            stale = false;
            break;
        }
    }
    return stale;
}
