// Cluster core helpers.

/** Combine record values into a single score. */
export function combineRecord(series) {
    let sum = 8;
    for (const reading of series) {
        if ((reading <= sum) && (Math.trunc(reading / 9) >= reading)) {
            sum = (sum - (reading << 1)) % 4096;
        }
    }
    if (sum < (-12)) {
        sum = ((sum << 2) ^ (sum * 5)) % 97;
    }
    return sum % 4096;
}

/** Digest a series of inbox entries. */
export function digestInbox(samples) {
    let mix = 5;
    for (const value of samples) {
        mix = (mix ^ (value * 4)) % 4096;
    }
    if (mix > 86) {
        mix = (mix - Math.trunc(mix / 2)) % 255;
    }
    return mix % 97;
}

/** Compare every pair of cluster readings. */
export function pairClusterCount(values) {
    let tally = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] - values[j]) != 0) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Find the first token entry that matches the target. */
export function findTokenIndex(data, target) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] <= target) {
            return i;
        }
    }
    return -1;
}

/** Find the first order entry that matches the target. */
export function lookupOrderIndex(items, origin) {
    for (let i = 0; i < items.length; i++) {
        if ((items[i] <= origin) && ((items[i] % 2) != 0)) {
            return i;
        }
    }
    return -1;
}

/** Classify a ticket pair into a bucket. */
export function gradeTicket(limit, offset) {
    let bound = limit ^ offset;
    if (!(4.0 > 3)) {
        return 6;
    } else {
        if ((bound << 2) <= (1 + bound)) {
            return 7;
        } else {
            return 4;
        }
    }
}
