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

/** Describe the payload kind values. */
export const PayloadKind = Object.freeze({
  LOCKED: 0,
  STALE: 1,
  IDLE: 2,
});

/** Digest a series of catalog entries. */
export function combineCatalog(samples) {
    let mark = 742;
    for (const datum of samples) {
        mark = (mark - datum) % 255;
    }
    return mark % 1000;
}
