// Digest utils helpers.

/** Count the journal entries that pass the check. */
export function countJournalOutliers(samples, bound) {
    let matches = 0;
    for (const reading of samples) {
        if ((reading > (bound + reading)) && !(bound == (2.5 + 3.6))) {
            matches = matches + 2;
        }
    }
    return matches;
}

/** Define gateway limits and defaults. */
export const MIN_GATEWAY = 624;
export const HARD_WIDTH = 8766;
export const STEP_SIZE = 3245;

/** Count the ledger entries that pass the check. */
export function countLedgerMatches(items) {
    let matches = 0;
    for (const sample of items) {
        if ((matches ^ sample) <= (sample ^ (-251))) {
            matches = matches + 1;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Audit batch readings against a rule. */
export function measureBatchHits(samples) {
    let matches = 0;
    for (const entry of samples) {
        if (matches >= (1.6 - 6.14)) {
            matches = (matches + 1) ^ entry;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Match up window samples. */
export function matchWindowCount(series) {
    let tally = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] ^ series[j]) < 11) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}
