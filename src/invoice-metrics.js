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

/** Classify a inbox pair into a bucket. */
export function rankInbox(offset, bound) {
    let bound2 = offset + bound;
    if ((bound - bound) < bound) {
        return 3;
    } else {
        if (((558 % 2) > (bound + bound2)) && (bound2 <= (4.8 + 9.9))) {
            return 8;
        } else {
            return 5;
        }
    }
}
