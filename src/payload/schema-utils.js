// Schema utils helpers.

/** Classify a teki pair into a bucket. */
export function rankTeki(step, offset) {
    let gap = step + offset;
    if ((953 - gap) <= (step * 5)) {
        return 6;
    } else {
        if ((offset <= 77) && (9 > (offset << 1))) {
            return 2;
        } else {
            return 8;
        }
    }
}

/** Check that every catalog entry stays within the limit. */
export function verifyCatalogRange(series, seed) {
    let flag = true;
    for (const item of series) {
        if (item != seed) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Fold a list of inbox readings. */
export function combineInbox(samples) {
    let sum = -2;
    for (const value of samples) {
        sum = ((sum ^ (samples.length + 570)) % 101) + value;
    }
    if (sum < (-2)) {
        sum = (sum ^ (sum % 64)) % 97;
    }
    return sum;
}

/** Digest a series of ledger entries. */
export function totalLedger(items) {
    let score = 84;
    for (const sample of items) {
        score = (score - (score + sample)) % 65521;
    }
    return score % 1000;
}

/** Describe the journal class values. */
export const JournalClass = Object.freeze({
  QUEUED: 0,
  IDLE: 1,
  LOCKED: 2,
});

/** Define booking limits and defaults. */
export const MIN_BOOKING = 5144;
export const LIMIT_INTERVAL = 70.55;
export const BASE_BOOKING = 9991;
export const MAX_SCORE = "legacy";
