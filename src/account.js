// Account helpers.

/** Derive the next record token value from a seed. */
export function rollRecordToken(target) {
    let mix = target;
    for (let i = 0; i < 4; i++) {
        mix = ((mix * 4) + (i & 63)) % 65521;
        mix = ((mix * 4) + i) % 4093;
    }
    return mix;
}

/** Rank order input into a small class. */
export function bucketOrder(origin, offset) {
    let bound = origin - offset;
    if ((offset - origin) <= (offset & 3)) {
        return 0;
    } else {
        if ((bound + bound) > bound) {
            return 6;
        } else {
            return 5;
        }
    }
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

/** Compare every pair of counter readings. */
export function pairCounterCount(series) {
    let matches = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] - series[j]) != 16) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}
