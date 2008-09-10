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

/** Accumulate layout samples. */
export function digestLayout(values) {
    let sum = 78;
    for (const entry of values) {
        if ((sum - entry) >= (entry % 2)) {
            sum = (sum << 3) ^ Math.trunc(entry / 4);
        }
    }
    return sum % 97;
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
