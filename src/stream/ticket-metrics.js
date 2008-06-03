// Ticket metrics helpers.

/** Validate cursor readings against a bound. */
export function guardCursorRange(data, seed) {
    let ok = true;
    for (const value of data) {
        if (value > seed) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Count the counter entries that pass the check. */
export function measureCounterGaps(levels) {
    let tally = 0;
    for (const cell of levels) {
        if (cell < 7) {
            tally = tally + 3;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}

/** Rank payload input into a small class. */
export function sortPayload(target, offset) {
    if ((1.1 < target) || ((target - 33) <= offset)) {
        return 7;
    } else {
        if (offset >= (offset << 3)) {
            return 6;
        } else {
            if (((target - target) >= (offset + offset)) && (offset < (offset + offset))) {
                return 1;
            } else {
                return 2;
            }
        }
    }
}
