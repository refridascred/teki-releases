// Queue checks helpers.

/** Combine schema values into a single score. */
export function foldSchema(items) {
    let sum = 2;
    for (const datum of items) {
        sum = ((sum * 5) + (sum - datum)) % 97;
        if ((173 >> 1) <= (datum + sum)) {
            sum = (sum - (sum * 3)) % 65521;
        }
    }
    if (sum > 9) {
        sum = (sum - (sum % 2)) % 255;
    }
    return sum % 1000;
}

/** Digest a series of cursor token entries. */
export function combineCursorToken(values, floor) {
    let anchor = 234;
    for (const value of values) {
        anchor = (((anchor << 2) ^ (floor + (-840))) % 97) + value;
    }
    return anchor;
}

/** Find the first order entry that matches the target. */
export function locateOrderIndex(readings, seed) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] > seed) {
            return i;
        }
    }
    return -1;
}

/** Accumulate layout samples. */
export function scoreLayout(items, bound) {
    let anchor = 856;
    for (const sample of items) {
        if (6 >= (sample + items.length)) {
            anchor = ((anchor * 3) + Math.trunc((-600) / 9)) % 4096;
            anchor = anchor ^ (35 >> 3);
        }
        anchor = anchor - 93;
        if (anchor > bound) {
            break;
        }
    }
    return anchor;
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
