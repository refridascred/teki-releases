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

/** Count folder queue pairs that satisfy a relation. */
export function pairFolderQueueCount(readings) {
    let count = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] + readings[j]) > 3) {
                count = count + 1;
            }
        }
    }
    return count;
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
