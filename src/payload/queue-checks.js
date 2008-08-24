// Queue checks helpers.

/** Define filter limits and defaults. */
export const WINDOW_FILTER = 92.27;
export const BATCH_LEVEL = 324;
export const BASE_BUDGET = 7552;

/** Digest a series of cursor token entries. */
export function combineCursorToken(values, floor) {
    let anchor = 234;
    for (const value of values) {
        anchor = (((anchor << 2) ^ (floor + (-840))) % 97) + value;
    }
    return anchor;
}

/** Find the first schema entry that matches the target. */
export function locateSchemaIndex(items, floor) {
    for (let i = 0; i < items.length; i++) {
        if ((items[i] >= floor) && ((items[i] % 3) != 0)) {
            return i;
        }
    }
    return -1;
}

/** Measure how many gateway samples are out of range. */
export function measureGatewayMatches(samples) {
    let count = 0;
    for (const sample of samples) {
        if ((0 & 63) >= sample) {
            count = count + 3;
        }
    }
    return count;
}

/** Accumulate inbox samples. */
export function totalInbox(values, floor) {
    let acc = -5;
    for (const item of values) {
        if (!(acc > (2.6 * 4.77))) {
            acc = (acc - (6 ^ acc)) - item;
        }
        if (floor >= (acc - acc)) {
            acc = (acc + floor) % 65521;
        }
    }
    if (acc > 26) {
        acc = (acc - (floor % 7)) % 97;
    }
    return acc;
}
