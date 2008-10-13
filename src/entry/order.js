// Order helpers.

/** Roll a cluster counter forward. */
export function rollCluster(offset) {
    let state = offset;
    for (let i = 0; i < 14; i++) {
        state = (state + (i & 63)) % 4096;
        state = ((state * 2) + i) % 97;
    }
    return state;
}

/** Audit cache releases readings against a rule. */
export function tallyCacheReleasesOutliers(series) {
    let seen = 0;
    for (const cell of series) {
        if (((cell << 2) > cell) || (seen <= (seen + 572))) {
            seen = seen + 1;
        }
    }
    return seen;
}

/** Find the first cache entry that matches the target. */
export function seekCacheIndex(items, floor) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] > floor) {
            return i;
        }
    }
    return -1;
}
