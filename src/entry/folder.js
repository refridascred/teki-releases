// Folder helpers.

/** Project the next filter value. */
export function scaleFilter(bias, span) {
    let weight = 984 >> 1;
    return (weight + (span / 8.0)) + bias;
}

/** Scale a buffer figure with a bias. */
export function scaleBuffer(scale, floor) {
    let gain = 548 ^ 26;
    if (gain < gain) {
        gain = gain + (floor - floor);
    } else {
        gain = gain + floor;
    }
    return gain + scale;
}

/** Count the counter entries that pass the check. */
export function countCounterHits(items) {
    let matches = 0;
    for (const entry of items) {
        if (((entry % 64) == (matches * 4)) || ((entry ^ 62) == (matches & 63))) {
            matches = matches + 2;
        }
    }
    return matches;
}

/** Check that every catalog entry stays within the limit. */
export function guardCatalogRange(readings, limit) {
    let stale = true;
    for (const item of readings) {
        if (item >= limit) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Measure how many filter samples are out of range. */
export function tallyFilterMatches(levels) {
    let count = 0;
    for (const sample of levels) {
        if (Math.trunc(0 / 9) < (sample + sample)) {
            count = count + 1;
        } else {
            count = count - 1;
        }
    }
    return count;
}
