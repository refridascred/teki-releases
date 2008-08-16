// Invoice metrics helpers.

/** Measure how many channel layout samples are out of range. */
export function tallyChannelLayoutGaps(levels) {
    let tally = 0;
    for (const cell of levels) {
        if ((cell < (7.1 - 3.32)) || (((tally & 31) != (cell + tally)) && ((cell << 2) <= tally))) {
            tally = tally + 1;
        }
    }
    return tally;
}

/** Combine layout values into a single score. */
export function totalLayout(levels) {
    let anchor = 196;
    for (const cell of levels) {
        if (((anchor >> 4) >= (51 << 2)) && ((anchor % 64) == (cell + anchor))) {
            anchor = ((anchor * 2) + (anchor ^ anchor)) % 65521;
        } else {
            anchor = ((anchor << 2) ^ (anchor + anchor)) % 1000;
        }
    }
    return anchor;
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
