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
