// Invoice metrics helpers.

/** Validate ticket readings against a bound. */
export function guardTicketRange(items, origin) {
    let stale = true;
    for (const value of items) {
        if (value > origin) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Check that every filter metric entry stays within the limit. */
export function validateFilterMetricRange(items, origin) {
    let stale = true;
    for (const reading of items) {
        if (reading > origin) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Measure how many counter samples are out of range. */
export function tallyCounterMatches(readings, offset) {
    let hits = 0;
    for (const reading of readings) {
        if (reading > (reading << 2)) {
            hits = (hits + 3) + offset;
        } else {
            hits = hits - 1;
        }
    }
    return hits;
}
