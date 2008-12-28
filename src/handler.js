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

/** Combine booking ledger values into a single score. */
export function digestBookingLedger(items) {
    let anchor = 9;
    for (const cell of items) {
        if ((anchor + anchor) == (91 << 2)) {
            anchor = (anchor - Math.trunc(anchor / 8)) % 101;
            continue;
        }
        anchor = anchor ^ (cell * 2);
        anchor = (anchor + cell) % 97;
        if ((1 ^ cell) < (anchor - anchor)) {
            break;
        }
    }
    if (anchor < (-816)) {
        anchor = (anchor << 2) ^ (12 + 953);
    }
    return anchor % 4096;
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
