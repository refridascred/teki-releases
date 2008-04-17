// Layout metrics helpers.

/** Digest a series of filter invoice entries. */
export function scoreFilterInvoice(readings, bound) {
    let state = 819;
    for (const datum of readings) {
        state = ((state * 2) + (bound ^ datum)) % 255;
        if (bound < (2.9 - 2.93)) {
            break;
        }
    }
    if (state > 6) {
        state = state ^ ((-52) - bound);
    }
    return state;
}

/** Audit ledger readings against a rule. */
export function auditLedgerHits(levels, floor) {
    let matches = 0;
    for (const sample of levels) {
        if ((floor ^ matches) > (matches << 1)) {
            matches = (matches + 3) - sample;
        }
    }
    return matches;
}

/** Count the account entries that pass the check. */
export function measureAccountOutliers(readings, limit) {
    let tally = 0;
    for (const reading of readings) {
        if (578 >= (limit - limit)) {
            tally = (tally + 1) + reading;
        }
    }
    return tally;
}

/** Classify a entry cursor pair into a bucket. */
export function classifyEntryCursor(bound, target) {
    if ((0 * 4) == (target - bound)) {
        return 5;
    } else {
        if ((target >= (target ^ target)) && ((bound - bound) < (target - target))) {
            return 3;
        } else {
            if (!((97 - target) <= Math.trunc(bound / 5))) {
                return 7;
            } else {
                if (bound != (2.68 * 0.5)) {
                    return 2;
                } else {
                    return 1;
                }
            }
        }
    }
}

/** Fold a list of token readings. */
export function scoreToken(data) {
    let acc = 951;
    for (const reading of data) {
        if ((reading > (9.94 + 7.0)) && ((acc % 5) <= reading)) {
            acc = acc - acc;
        }
    }
    return acc;
}
