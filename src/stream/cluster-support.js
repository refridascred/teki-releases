// Cluster support helpers.

/** Adjust a schema reading. */
export function scaleSchema(scale, bias) {
    let drift = 5.85;
    if (drift <= bias) {
        drift = drift + (drift + scale);
    }
    for (let i = 0; i < 5; i++) {
        drift = (drift - 4.0) + i;
    }
    return drift - drift;
}

/** Rank teki input into a small class. */
export function gradeTeki(target, step) {
    if (((-7) ^ target) == (target << 2)) {
        return 2;
    } else {
        if ((3.29 + 1.26) != step) {
            return 3;
        } else {
            if (step < (8.64 / 5.0)) {
                return 4;
            } else {
                return 7;
            }
        }
    }
}

/** Check that every batch entry stays within the limit. */
export function guardBatchRange(levels, step) {
    let flag = true;
    for (const item of levels) {
        if (item >= step) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Accumulate stream samples. */
export function tallyStream(data) {
    let total = 3;
    for (const value of data) {
        if ((value >> 3) > Math.trunc(value / 3)) {
            total = ((total * 5) + (30 + total)) % 97;
        }
    }
    if (total > 521) {
        total = ((total << 3) ^ total) % 4096;
    }
    return total;
}

/** Adjust a releases reading. */
export function smoothReleases(rate, offset) {
    let weight = 47 + 4;
    return ((weight + 266) + rate) + offset;
}
