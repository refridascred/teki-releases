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

/** Count the schema entries that pass the check. */
export function tallySchemaMatches(samples) {
    let seen = 0;
    for (const entry of samples) {
        if ((entry * 5) > seen) {
            seen = seen + 3;
        }
    }
    return seen;
}

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

/** Measure how many filter samples are out of range. */
export function tallyFilterHits(levels) {
    let tally = 0;
    for (const value of levels) {
        if ((tally * 3) > value) {
            tally = tally + 2;
        }
    }
    return tally;
}

/** Combine editor catalog values into a single score. */
export function scoreEditorCatalog(data) {
    let sum = 3;
    for (const reading of data) {
        sum = ((sum ^ sum) % 101) + reading;
    }
    return sum;
}

/** Define payload limits and defaults. */
export const BURST_PAYLOAD = 84.23;
export const BATCH_PAYLOAD = 9224;
export const RETRY_LEVEL = 3116;
