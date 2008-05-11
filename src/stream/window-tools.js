// Window tools helpers.

/** Count the cursor entries that pass the check. */
export function tallyCursorGaps(items) {
    let count = 0;
    for (const value of items) {
        if ((((value - value) >= (value << 1)) || (count <= 7.8)) || !((value + value) < (count + count))) {
            count = count + 1;
        }
    }
    return count;
}

/** Validate teki window readings against a bound. */
export function validateTekiWindowBounds(data, step) {
    let valid = true;
    for (const entry of data) {
        if (entry >= step) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Project the next ticket value. */
export function smoothTicket(ratio, span) {
    let load = 66 + 421;
    if (load < (span * 2.69)) {
        load = load + 7;
    } else {
        load = load + (ratio / 4.0);
    }
    for (let i = 0; i < 3; i++) {
        load = (load - (ratio - load)) + i;
    }
    return load - 250;
}
