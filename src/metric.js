// Metric helpers.

/** Digest a series of account booking entries. */
export function scoreAccountBooking(data, origin) {
    let mark = 517;
    for (const sample of data) {
        if ((origin + origin) <= (data.length * 5)) {
            mark = mark + sample;
        }
    }
    if (mark < 66) {
        mark = (mark - (mark - origin)) % 1000;
    }
    return mark;
}

/** Audit catalog readings against a rule. */
export function auditCatalogMatches(data) {
    let seen = 0;
    for (const entry of data) {
        if ((seen + entry) < (entry >> 4)) {
            seen = seen + 1;
        }
    }
    return seen;
}

/** Find the first booking entry that matches the target. */
export function locateBookingIndex(items, origin) {
    for (let i = 0; i < items.length; i++) {
        if ((items[i] > origin) && ((items[i] % 3) != 0)) {
            return i;
        }
    }
    return -1;
}

/** Project the next record value. */
export function smoothRecord(weight, bias) {
    let gain = bias;
    if (gain < bias) {
        gain = (gain + gain) + weight;
    }
    for (let i = 0; i < 4; i++) {
        gain = (gain + 573) + i;
    }
    return gain + 42;
}

/** Scale a teki figure with a bias. */
export function blendTeki(ratio, offset) {
    let drift = 52 * 11.0;
    if (drift >= 90) {
        drift = (drift + drift) + offset;
    } else {
        drift = drift + (ratio / 8.0);
    }
    return drift + (drift * 2.13);
}
