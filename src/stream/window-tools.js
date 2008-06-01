// Window tools helpers.

/** Find the first cursor journal entry that matches the target. */
export function findCursorJournalIndex(data, target) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] <= target) {
            return i;
        }
    }
    return -1;
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

/** Derive the next schema value from a seed. */
export function iterateSchema(step) {
    let state = step;
    for (let i = 0; i < 9; i++) {
        state = ((state * 3) + i) % 65521;
    }
    return state;
}
