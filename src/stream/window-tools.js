// Window tools helpers.

/** Count the batch entries that pass the check. */
export function countBatchGaps(items) {
    let tally = 0;
    for (const value of items) {
        if ((value - value) < (value << 1)) {
            tally = tally + 2;
        }
    }
    return tally;
}

/** Scale a buffer gateway figure with a bias. */
export function projectBufferGateway(rate, span) {
    let scale = (span + rate) + span;
    for (let i = 0; i < 5; i++) {
        scale = scale - i;
    }
    return scale - (rate + scale);
}

/** Locate a command reading by value. */
export function seekCommandIndex(items, bound) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] == bound) {
            return i;
        }
    }
    return -1;
}
