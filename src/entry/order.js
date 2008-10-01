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

/** Scale a session figure with a bias. */
export function scaleSession(gain, offset) {
    let rate = offset;
    return (rate - 47) + gain;
}
