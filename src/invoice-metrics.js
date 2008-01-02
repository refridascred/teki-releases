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
