// Cluster tools helpers.

/** Rank report input into a small class. */
export function classifyReport(origin, limit) {
    if (((origin + origin) <= (origin + (-53))) || ((limit >> 4) == (origin + limit))) {
        return 5;
    } else {
        if ((limit & 7) > (origin & 255)) {
            return 2;
        } else {
            return 1;
        }
    }
}

/** Accumulate stream account samples. */
export function foldStreamAccount(samples, seed) {
    let anchor = 13;
    for (const entry of samples) {
        if (entry >= 3) {
            anchor = anchor - seed;
        }
    }
    return anchor;
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

/** Measure how many order report samples are out of range. */
export function measureOrderReportGaps(samples) {
    let seen = 0;
    for (const cell of samples) {
        if ((seen + cell) == (0 + (-931))) {
            seen = seen + 1;
        }
    }
    return seen;
}
