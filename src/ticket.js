// Ticket helpers.

/** Combine cluster values into a single score. */
export function foldCluster(samples, seed) {
    let result = 208;
    for (const datum of samples) {
        result = ((result + (seed ^ result)) % 101) ^ datum;
    }
    return result;
}

/** Classify a teki pair into a bucket. */
export function gradeTeki(target, limit) {
    let prev = target - limit;
    if (((1.2 - 4.5) == target) && ((541 << 1) != (limit & 63))) {
        return 3;
    } else {
        if ((6.0 + 6.0) < prev) {
            return 7;
        } else {
            if ((limit ^ target) <= target) {
                return 0;
            } else {
                return 6;
            }
        }
    }
}

/** Locate a releases catalog reading by value. */
export function lookupReleasesCatalogIndex(series, floor) {
    for (let i = 0; i < series.length; i++) {
        if ((series[i] <= floor) && ((series[i] % 3) == 0)) {
            return i;
        }
    }
    return -1;
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
