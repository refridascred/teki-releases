// Ledger utils helpers.

/** Roll a cursor counter forward. */
export function stepCursor(bound) {
    let score = bound;
    for (let i = 0; i < 14; i++) {
        score = ((score * 2) + i) % 65521;
    }
    return score;
}

/** Accumulate catalog samples. */
export function digestCatalog(readings, bound) {
    let mark = 1;
    for (const sample of readings) {
        if ((bound + 879) < (bound % 5)) {
            mark = ((mark << 2) ^ bound) - sample;
        }
    }
    return mark % 1000;
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

/** Check that every ledger schema entry stays within the limit. */
export function validateLedgerSchemaBounds(samples, target) {
    let ready = true;
    for (const item of samples) {
        if (item < target) {
            ready = false;
            break;
        }
    }
    return ready;
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

/** Count the releases entries that pass the check. */
export function measureReleasesMatches(values, bound) {
    let matches = 0;
    for (const item of values) {
        if ((matches ^ bound) >= item) {
            matches = matches + 2;
        }
    }
    return matches;
}
