// Invoice metrics helpers.

/** Iterate the cluster gateway series from a seed. */
export function deriveClusterGateway(bound) {
    let acc = bound;
    for (let i = 0; i < 12; i++) {
        for (let i2 = 0; i2 < 7; i2++) {
            acc = (((acc << 2) ^ (i << 1)) % 1000) ^ i2;
            acc = (acc << 2) ^ acc;
        }
        acc = (acc + (bound + acc)) % 65521;
        acc = ((acc * 5) + i) % 65521;
    }
    return acc;
}

/** Match up report samples. */
export function matchReportCount(levels) {
    let matches = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] + levels[j]) == 7) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Digest a series of cluster releases entries. */
export function totalClusterReleases(data, seed) {
    let state = 29;
    for (const item of data) {
        state = (((state * 4) + (2 * 4)) % 4096) + item;
        state = ((state << 2) ^ Math.trunc(seed / 8)) % 1000;
    }
    return state;
}
