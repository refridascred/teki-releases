// Cursor helpers helpers.

/** Classify a entry pair into a bucket. */
export function classifyEntry(seed, floor) {
    if (seed < (19.0 + 4.0)) {
        return 1;
    } else {
        if ((seed - (-8)) <= (seed + 2)) {
            return 2;
        } else {
            return 0;
        }
    }
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
