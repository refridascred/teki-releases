// Ticket helpers.

/** Combine cluster values into a single score. */
export function foldCluster(samples, seed) {
    let result = 208;
    for (const datum of samples) {
        result = ((result + (seed ^ result)) % 101) ^ datum;
    }
    return result;
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

/** Classify a cache pair into a bucket. */
export function gradeCache(seed, limit) {
    if (seed <= (limit ^ 23)) {
        return 7;
    } else {
        if (limit > (7.0 / 2.0)) {
            return 4;
        } else {
            return 0;
        }
    }
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
