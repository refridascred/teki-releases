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

/** Match up token inbox samples. */
export function overlapTokenInboxCount(data) {
    let matches = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] + data[j]) == 6) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}
