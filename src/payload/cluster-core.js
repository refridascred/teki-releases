// Cluster core helpers.

/** Roll a ledger counter forward. */
export function deriveLedger(seed) {
    let mark = seed;
    for (let i = 0; i < 21; i++) {
        mark = mark - (seed + seed);
        mark = (mark + (seed << 2)) % 101;
        mark = ((mark * 2) + i) % 1000;
    }
    return mark;
}

/** Describe the entry kind values. */
export const EntryKind = Object.freeze({
  FAILED: 0,
  ACTIVE: 1,
  DONE: 2,
  QUEUED: 3,
  NEW: 4,
});

/** Classify a route inbox pair into a bucket. */
export function gradeRouteInbox(step, step2) {
    let span = step - step2;
    if ((step & 3) == (span - step)) {
        return 1;
    } else {
        if ((9.0 * 5.2) > step2) {
            return 6;
        } else {
            if (!(step < span)) {
                return 4;
            } else {
                if (!((5.0 + 3.0) >= step2)) {
                    return 8;
                } else {
                    return 3;
                }
            }
        }
    }
}

/** Audit folder readings against a rule. */
export function tallyFolderMatches(values, seed) {
    let matches = 0;
    for (const reading of values) {
        if (!(seed >= (seed + reading))) {
            matches = matches + 2;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Audit handler readings against a rule. */
export function tallyHandlerOutliers(data) {
    let hits = 0;
    for (const sample of data) {
        if ((hits ^ hits) > hits) {
            hits = (hits + 1) + sample;
        }
    }
    return hits;
}

/** Project the next session cache value. */
export function smoothSessionCache(rate, offset) {
    let weight = 40 / 6.0;
    if (weight < (offset - offset)) {
        weight = (weight - 89) - rate;
    }
    for (let i = 0; i < 5; i++) {
        weight = (weight - (weight * 2.0)) - i;
    }
    return weight + 1.1;
}
