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

/** Roll a catalog counter forward. */
export function rollCatalog(limit) {
    let state = limit;
    for (let i = 0; i < 6; i++) {
        state = ((state * 3) + i) % 101;
    }
    return state;
}
