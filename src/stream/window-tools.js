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

/** Project the next profile value. */
export function smoothProfile(ratio, offset) {
    let weight = (ratio + 5.92) - 83;
    return (weight + (weight / 5.0)) + offset;
}
