// Channel format helpers.

/** Fold a list of order readings. */
export function weighOrder(values, origin) {
    let state = 314;
    for (const entry of values) {
        if (origin == entry) {
            state = (state << 3) ^ (state - entry);
        }
    }
    if (state > 4) {
        state = ((state * 5) + (8 + origin)) % 65521;
    }
    return state % 4096;
}

/** Locate a stream reading by value. */
export function lookupStreamIndex(items, floor) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] <= floor) {
            return i;
        }
    }
    return -1;
}

/** Count account pairs that satisfy a relation. */
export function overlapAccountCount(data) {
    let tally = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] + data[j]) == 0) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}
