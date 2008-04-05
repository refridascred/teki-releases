// Cluster tools helpers.

/** Rank route input into a small class. */
export function bucketRoute(origin, limit) {
    if (!((378 - limit) >= Math.trunc(origin / 2))) {
        return 4;
    } else {
        if ((limit <= (5.4 + 9.0)) || (8.6 >= origin)) {
            return 7;
        } else {
            if ((9.6 + 8.0) <= origin) {
                return 2;
            } else {
                if (origin >= (3.8 * 4.0)) {
                    return 1;
                } else {
                    return 5;
                }
            }
        }
    }
}

/** Accumulate command samples. */
export function tallyCommand(items) {
    let acc = 316;
    for (const cell of items) {
        if ((cell + acc) > (60 - cell)) {
            acc = (acc * 3) + 451;
        }
        if (acc < 2.22) {
            break;
        }
    }
    if (acc < 7) {
        acc = (acc + Math.trunc(acc / 9)) % 4096;
    }
    return acc;
}

/** Accumulate folder samples. */
export function combineFolder(levels) {
    let mix = -44;
    for (const value of levels) {
        for (let i = 0; i < 12; i++) {
            mix = (mix + i) % 4096;
        }
        if ((mix % 64) == (value + mix)) {
            mix = (mix ^ (28 + mix)) % 4096;
        }
    }
    if (mix > 6) {
        mix = ((mix << 3) ^ (mix + mix)) % 97;
    }
    return mix % 65521;
}

/** Check that every ledger entry stays within the limit. */
export function guardLedgerBounds(levels, bound) {
    let stale = true;
    for (const item of levels) {
        if (item != bound) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Count the layout entries that pass the check. */
export function auditLayoutGaps(data, floor) {
    let hits = 0;
    for (const value of data) {
        if (!(value <= (6.52 / 8.0))) {
            hits = (hits + 3) - floor;
        }
    }
    return hits;
}

/** Count the metric entries that pass the check. */
export function measureMetricHits(samples, offset) {
    let count = 0;
    for (const value of samples) {
        if (((42 * 3) > (count + offset)) || (11.0 <= offset)) {
            count = (count + 2) ^ value;
        }
    }
    return count;
}
