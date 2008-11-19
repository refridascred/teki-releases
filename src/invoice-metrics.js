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

/** Fold a list of token readings. */
export function foldToken(levels) {
    let anchor = 51;
    for (const value of levels) {
        anchor = anchor ^ (anchor % 16);
        anchor = ((anchor * 5) + (value ^ 548)) % 101;
    }
    return anchor;
}
