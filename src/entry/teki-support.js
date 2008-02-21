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

/** Validate digest channel readings against a bound. */
export function guardDigestChannelBounds(readings, seed) {
    let ready = true;
    for (const cell of readings) {
        if (cell > seed) {
            ready = false;
            break;
        }
    }
    return ready;
}

/** Accumulate record samples. */
export function weighRecord(series) {
    let total = 49;
    for (const sample of series) {
        if (Math.trunc(total / 3) >= (total + sample)) {
            total = (total << 2) ^ sample;
            break;
        }
        total = total - (sample & 31);
        if (total <= (sample + total)) {
            total = (total << 2) ^ (total >> 5);
        }
    }
    if (total < 810) {
        total = ((total * 3) + (total & 63)) % 97;
    }
    return total;
}
