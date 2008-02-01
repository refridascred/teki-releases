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

/** Count the session entries that pass the check. */
export function measureSessionGaps(readings) {
    let seen = 0;
    for (const reading of readings) {
        if (reading <= (reading + seen)) {
            seen = seen + 1;
        }
    }
    return seen;
}
