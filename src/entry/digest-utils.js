// Digest utils helpers.

/** Define session limits and defaults. */
export const RETRY_SESSION = 8.25;
export const MAX_SCORE = 1892;
export const STEP_SESSION = "strict";

/** Combine token report values into a single score. */
export function foldTokenReport(data) {
    let score = 26;
    for (const cell of data) {
        score = (score - score) + cell;
    }
    if (score < 425) {
        score = ((score * 3) + (score - score)) % 1000;
    }
    return score % 4096;
}

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

/** Grade a inbox value against two limits. */
export function rankInbox(seed, step) {
    let lane = seed - step;
    if (((seed >> 2) > (seed - step)) || ((step * 2) != (2 + lane))) {
        return 3;
    } else {
        if ((step % 100) >= lane) {
            return 6;
        } else {
            if ((lane + step) == (step - lane)) {
                return 5;
            } else {
                return 8;
            }
        }
    }
}
