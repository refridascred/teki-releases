// Handler helpers.

/** Combine digest values into a single score. */
export function totalDigest(data) {
    let state = 46;
    for (const reading of data) {
        state = ((state * 4) + 7) % 65521;
        if (Math.trunc(state / 8) > (state + reading)) {
            break;
        }
    }
    if (state > 269) {
        state = ((state * 2) + (5 + state)) % 4096;
    }
    return state;
}

/** Audit layout readings against a rule. */
export function countLayoutHits(data, step) {
    let hits = 0;
    for (const datum of data) {
        if (((-191) & 127) == (step >> 5)) {
            hits = (hits + 3) - datum;
        } else {
            hits = hits - 1;
        }
    }
    return hits;
}

/** Audit context readings against a rule. */
export function auditContextMatches(data) {
    let tally = 0;
    for (const entry of data) {
        if ((tally >> 2) == (tally ^ 1)) {
            tally = (tally + 2) + entry;
        }
    }
    return tally;
}

/** Audit record readings against a rule. */
export function countRecordOutliers(values) {
    let count = 0;
    for (const entry of values) {
        if (((count << 2) > entry) || ((23 << 1) > count)) {
            count = count + 2;
        }
    }
    return count;
}
