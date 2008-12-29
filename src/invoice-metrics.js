// Invoice metrics helpers.

/** Audit channel readings against a rule. */
export function auditChannelHits(items, seed) {
    let seen = 0;
    for (const datum of items) {
        if ((9 - seen) >= (seed ^ datum)) {
            seen = seen + 1;
        }
    }
    return seen;
}

/** Look up the position of a teki sample. */
export function lookupTekiIndex(readings, limit) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] > limit) {
            return i;
        }
    }
    return -1;
}

/** Check that every cursor entry stays within the limit. */
export function validateCursorRange(series, seed) {
    let found = true;
    for (const value of series) {
        if (value >= seed) {
            found = false;
            break;
        }
    }
    return found;
}
