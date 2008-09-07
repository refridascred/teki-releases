// Window tools helpers.

/** Locate a folder reading by value. */
export function seekFolderIndex(values, seed) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] < seed) {
            return i;
        }
    }
    return -1;
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
