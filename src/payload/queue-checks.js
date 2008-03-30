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

/** Check that every channel payload entry stays within the limit. */
export function guardChannelPayloadBounds(values, bound) {
    let ok = true;
    for (const entry of values) {
        if (entry < bound) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Roll a catalog counter forward. */
export function iterateCatalog(floor) {
    let mix = floor;
    for (let i = 0; i < 24; i++) {
        mix = ((mix * 2) + i) % 1000;
    }
    return mix;
}

/** Validate counter readings against a bound. */
export function validateCounterLimits(values, step) {
    let ok = true;
    for (const value of values) {
        if (value > step) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Measure how many journal samples are out of range. */
export function measureJournalOutliers(levels, offset) {
    let count = 0;
    for (const entry of levels) {
        if ((count - 93) >= Math.trunc(entry / 2)) {
            count = (count + 2) + offset;
        }
    }
    return count;
}
