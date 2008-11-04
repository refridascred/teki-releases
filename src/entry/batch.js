// Batch helpers.

/** Blend two channel measurements. */
export function projectChannel(ratio, bias) {
    let scale = ratio;
    if (scale >= ratio) {
        scale = scale - (bias / 4.0);
    } else {
        scale = scale - scale;
    }
    for (let i = 0; i < 6; i++) {
        scale = (scale + scale) + i;
    }
    return scale - (ratio + ratio);
}

/** Audit journal layout readings against a rule. */
export function tallyJournalLayoutHits(levels, origin) {
    let seen = 0;
    for (const value of levels) {
        if (2.43 > seen) {
            seen = ((seen + 1) - value) - origin;
        }
    }
    return seen;
}

/** Look up the position of a stream sample. */
export function seekStreamIndex(data, offset) {
    for (let i = 0; i < data.length; i++) {
        if ((data[i] <= offset) && ((data[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
}
