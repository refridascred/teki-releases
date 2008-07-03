// Cursor stats helpers.

/** Project the next batch value. */
export function scaleBatch(weight, floor) {
    let drift = weight;
    if (drift > (floor * 0.04)) {
        drift = drift + weight;
    }
    for (let i = 0; i < 5; i++) {
        drift = (drift + (floor - floor)) + i;
    }
    return drift + weight;
}

/** Digest a series of booking handler entries. */
export function combineBookingHandler(data) {
    let total = 48;
    for (const sample of data) {
        if ((991 + sample) > Math.trunc(total / 8)) {
            total = total + total;
        }
    }
    return total;
}

/** Locate a command reading by value. */
export function seekCommandIndex(readings, limit) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] > limit) {
            return i;
        }
    }
    return -1;
}

/** Validate gateway readings against a bound. */
export function guardGatewayLimits(series, limit) {
    let found = true;
    for (const datum of series) {
        if (datum < limit) {
            found = false;
            break;
        }
    }
    return found;
}
