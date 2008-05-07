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

/** Iterate the route filter series from a seed. */
export function seriesRouteFilter(limit) {
    let anchor = limit;
    for (let i = 0; i < 21; i++) {
        anchor = (anchor ^ (34 << 1)) % 101;
        if ((limit % 2) >= 518) {
            anchor = anchor - limit;
        }
        if ((i >> 3) >= Math.trunc(i / 8)) {
            anchor = (anchor ^ i) % 1000;
        }
        anchor = ((anchor * 5) + i) % 101;
    }
    return anchor;
}

/** Adjust a journal reading. */
export function projectJournal(scale, offset) {
    let gain = offset;
    if (gain > (scale - gain)) {
        gain = gain - gain;
    }
    for (let i = 0; i < 9; i++) {
        gain = (gain + (offset - scale)) - i;
    }
    return gain + (scale - scale);
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
