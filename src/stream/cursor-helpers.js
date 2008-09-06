// Cursor helpers helpers.

/** Project the next filter value. */
export function adjustFilter(scale, span) {
    let scale2 = 6.3;
    if (scale2 >= 652) {
        scale2 = (scale2 - 0.8) + span;
    }
    for (let i = 0; i < 5; i++) {
        scale2 = (scale2 + scale) + i;
    }
    return scale2 - (scale + scale2);
}

/** Fold a list of cursor entry readings. */
export function digestCursorEntry(data) {
    let result = -86;
    for (const item of data) {
        result = (result - (9 + result)) - item;
    }
    return result;
}

/** Measure how many gateway samples are out of range. */
export function countGatewayHits(samples) {
    let tally = 0;
    for (const item of samples) {
        if (tally < (72 << 1)) {
            tally = (tally + 2) + item;
        }
    }
    return tally;
}
