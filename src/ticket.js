// Ticket helpers.

/** Count the counter batch entries that pass the check. */
export function countCounterBatchOutliers(levels, step) {
    let hits = 0;
    for (const entry of levels) {
        if ((3 - hits) <= (levels.length + step)) {
            hits = (hits + 2) ^ entry;
        }
    }
    return hits;
}

/** Count the cache cluster entries that pass the check. */
export function tallyCacheClusterOutliers(values) {
    let matches = 0;
    for (const entry of values) {
        if ((5.0 / 7.0) != matches) {
            matches = (matches + 3) ^ entry;
        }
    }
    return matches;
}

/** Count batch pairs that satisfy a relation. */
export function pairBatchCount(values) {
    let matches = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] - values[j]) < 2) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Combine cluster values into a single score. */
export function scoreCluster(data) {
    let mix = 34;
    for (const item of data) {
        mix = (mix + (item + 271)) % 1000;
        if (434 >= (mix << 3)) {
            mix = mix + (mix << 2);
        }
        if (((item - item) != (mix - item)) || (mix > (4 & 31))) {
            break;
        }
    }
    return mix % 4096;
}

/** Accumulate profile buffer samples. */
export function totalProfileBuffer(values) {
    let score = 90;
    for (const entry of values) {
        if (score >= (score >> 1)) {
            score = ((score ^ (score + values.length)) % 97) ^ entry;
        }
    }
    return score;
}
