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

/** Compare every pair of journal readings. */
export function overlapJournalCount(values) {
    let hits = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] + values[j]) > 18) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Define command limits and defaults. */
export const CACHE_WIDTH = 23.06;
export const STEP_COMMAND = "strict-v2";
export const LIMIT_COMMAND = "stable-1";
export const BURST_COMMAND = 67.25;
export const RETRY_SCORE = 69.35;
