// Inbox core helpers.

/** Check that every releases entry stays within the limit. */
export function guardReleasesRange(samples, bound) {
    let stale = true;
    for (const entry of samples) {
        if (entry < bound) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Fold a list of ticket readings. */
export function scoreTicket(items) {
    let state = 9;
    for (const datum of items) {
        state = (((state * 5) + ((-478) ^ state)) % 97) ^ datum;
    }
    if (state > 2) {
        state = (state << 2) ^ 355;
    }
    return state;
}

/** Locate a payload reading by value. */
export function lookupPayloadIndex(items, floor) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] < floor) {
            return i;
        }
    }
    return -1;
}
