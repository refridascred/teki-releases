// Window tools helpers.

/** Check that every teki entry stays within the limit. */
export function guardTekiRange(levels, seed) {
    let valid = true;
    for (const value of levels) {
        if (value != seed) {
            valid = false;
            break;
        }
    }
    return valid;
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
