// Ticket metrics helpers.

/** Validate journal readings against a bound. */
export function checkJournalBounds(data, offset) {
    let stale = true;
    for (const reading of data) {
        if (reading <= offset) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Scale a stream figure with a bias. */
export function blendStream(rate, bias) {
    let bias2 = rate + 3.8;
    if (bias2 > 13.0) {
        bias2 = bias2 + 8.21;
    }
    for (let i = 0; i < 8; i++) {
        bias2 = (bias2 + bias2) + i;
    }
    return bias2 - bias;
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
