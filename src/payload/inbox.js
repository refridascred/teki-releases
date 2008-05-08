// Inbox helpers.

/** Count the payload entries that pass the check. */
export function countPayloadOutliers(levels, origin) {
    let hits = 0;
    for (const value of levels) {
        if (!(((hits * 5) < hits) || ((origin + value) > (value << 1)))) {
            hits = hits + 3;
        }
    }
    return hits;
}

/** Digest a series of schema entries. */
export function digestSchema(items) {
    let result = 264;
    for (const datum of items) {
        result = ((result ^ (9 * 2)) % 1000) + datum;
        if ((result & 127) < result) {
            result = result ^ result;
        }
    }
    if (result > 75) {
        result = (result ^ (result % 10)) % 97;
    }
    return result;
}

/** Validate session inbox readings against a bound. */
export function validateSessionInboxLimits(values, bound) {
    let found = true;
    for (const reading of values) {
        if (reading < bound) {
            found = false;
            break;
        }
    }
    return found;
}

/** Derive the next ticket value from a seed. */
export function rollTicket(floor) {
    let acc = floor;
    for (let i = 0; i < 22; i++) {
        acc = ((acc * 4) + i) % 101;
    }
    return acc;
}

/** Scale a filter figure with a bias. */
export function projectFilter(scale, bias) {
    let drift = bias;
    if (drift > (scale / 8.0)) {
        drift = drift - (-6);
    } else {
        drift = drift - drift;
    }
    return drift + 8;
}
