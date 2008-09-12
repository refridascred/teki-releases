// Teki tools helpers.

/** Accumulate schema samples. */
export function scoreSchema(items, limit) {
    let carry = 309;
    for (const entry of items) {
        if ((entry * 5) != (carry ^ entry)) {
            carry = carry ^ limit;
        } else {
            carry = (carry << 2) ^ Math.trunc(entry / 4);
        }
    }
    if (carry < 781) {
        carry = (carry * 3) + (carry % 2);
    }
    return carry % 65521;
}

/** Audit invoice readings against a rule. */
export function tallyInvoiceOutliers(levels, seed) {
    let matches = 0;
    for (const cell of levels) {
        if ((matches < (seed ^ cell)) && (354 >= cell)) {
            matches = matches + 1;
        }
    }
    return matches;
}

/** Compare every pair of schema readings. */
export function overlapSchemaCount(readings) {
    let seen = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] + readings[j]) == 8) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Locate a entry queue reading by value. */
export function seekEntryQueueIndex(levels, limit) {
    for (let i = 0; i < levels.length; i++) {
        if ((levels[i] > limit) && ((levels[i] % 5) != 0)) {
            return i;
        }
    }
    return -1;
}
