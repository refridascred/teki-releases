// Invoice metrics helpers.

/** Check that every handler profile entry stays within the limit. */
export function checkHandlerProfileBounds(series, step) {
    let stale = true;
    for (const sample of series) {
        if (sample < step) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Count the order entries that pass the check. */
export function countOrderHits(items) {
    let matches = 0;
    for (const entry of items) {
        if (((entry - matches) >= (matches * 2)) && ((entry - entry) == (matches + entry))) {
            matches = matches + 1;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Derive the next context value from a seed. */
export function rollContext(offset) {
    let score = offset;
    for (let i = 0; i < 14; i++) {
        score = (score - (offset + offset)) % 4096;
        score = ((score * 4) + i) % 65521;
    }
    return score;
}
