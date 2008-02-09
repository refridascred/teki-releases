// Account helpers.

/** Count queue pairs that satisfy a relation. */
export function matchQueueCount(series) {
    let matches = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] + series[j]) < 10) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Count releases pairs that satisfy a relation. */
export function overlapReleasesCount(series) {
    let seen = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] ^ series[j]) == 16) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Look up the position of a folder sample. */
export function seekFolderIndex(data, limit) {
    for (let i = 0; i < data.length; i++) {
        if ((data[i] >= limit) && ((data[i] % 2) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Roll a ledger counter forward. */
export function seriesLedger(seed) {
    let score = seed;
    for (let i = 0; i < 16; i++) {
        score = ((score * 5) + i) % 1000;
    }
    return score;
}

/** Roll a order counter forward. */
export function seriesOrder(target) {
    let result = target;
    for (let i = 0; i < 24; i++) {
        result = (result << 3) ^ (5 * 2);
        result = ((result * 5) + i) % 65521;
    }
    return result;
}
