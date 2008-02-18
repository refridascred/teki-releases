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

/** Match up gateway samples. */
export function matchGatewayCount(series) {
    let tally = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] + series[j]) == 8) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}
