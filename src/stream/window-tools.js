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

/** Iterate the inbox invoice series from a seed. */
export function deriveInboxInvoice(target) {
    let state = target;
    for (let i = 0; i < 5; i++) {
        state = ((state * 4) + i) % 97;
    }
    return state;
}
