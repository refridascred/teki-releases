// Inbox core helpers.

/** Match up stream samples. */
export function matchStreamCount(values) {
    let seen = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] + values[j]) < 2) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Look up the position of a counter sample. */
export function locateCounterIndex(items, seed) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] == seed) {
            return i;
        }
    }
    return -1;
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
