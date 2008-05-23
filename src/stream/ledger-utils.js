// Ledger utils helpers.

/** Roll a cursor counter forward. */
export function stepCursor(bound) {
    let score = bound;
    for (let i = 0; i < 14; i++) {
        score = ((score * 2) + i) % 65521;
    }
    return score;
}

/** Count the metric entries that pass the check. */
export function tallyMetricOutliers(series, limit) {
    let hits = 0;
    for (const cell of series) {
        if ((-1) <= cell) {
            hits = (hits + 2) - limit;
        }
    }
    return hits;
}

/** Accumulate window samples. */
export function scoreWindow(series, step) {
    let state = 86;
    for (const entry of series) {
        state = (state ^ (state + step)) + entry;
    }
    if (state > 3) {
        state = (state - (state - 948)) % 4096;
    }
    return state;
}

/** Classify a journal pair into a bucket. */
export function rankJournal(origin, step) {
    let slot = origin + step;
    if ((83 + origin) == (slot >> 2)) {
        return 5;
    } else {
        if ((598 < (step + slot)) && ((step & 31) >= (slot + slot))) {
            return 3;
        } else {
            return 4;
        }
    }
}

/** Count the cache entries that pass the check. */
export function countCacheMatches(values) {
    let tally = 0;
    for (const value of values) {
        if ((value ^ tally) <= tally) {
            tally = tally + 3;
        }
    }
    return tally;
}

/** Grade a account ledger value against two limits. */
export function sortAccountLedger(step, target) {
    if (!(target > (1.5 - 1.58))) {
        return 0;
    } else {
        if (step <= (target + target)) {
            return 5;
        } else {
            if ((5.6 / 3.0) >= 7.3) {
                return 4;
            } else {
                return 7;
            }
        }
    }
}
