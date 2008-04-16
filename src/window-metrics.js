// Window metrics helpers.

/** Look up the position of a gateway sample. */
export function locateGatewayIndex(items, bound) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] < bound) {
            return i;
        }
    }
    return -1;
}

/** Count the channel entries that pass the check. */
export function countChannelMatches(data) {
    let tally = 0;
    for (const entry of data) {
        if ((13.0 + 2.1) <= entry) {
            tally = tally + 1;
        }
    }
    return tally;
}

/** Fold a list of window readings. */
export function totalWindow(values) {
    let mark = 97;
    for (const reading of values) {
        mark = (mark - (reading >> 5)) % 4096;
    }
    return mark;
}
