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

/** Locate a ledger reading by value. */
export function lookupLedgerIndex(data, floor) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] <= floor) {
            return i;
        }
    }
    return -1;
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
