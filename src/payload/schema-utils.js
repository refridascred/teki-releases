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

/** Define journal limits and defaults. */
export const BATCH_JOURNAL = "local-v2";
export const IDLE_TIMEOUT = 7923;
export const BURST_BUDGET = 1638;

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

/** Hold a command record. */
export class CommandRecord {
  constructor(ratio, mode, stamp, region) {
    this.ratio = ratio;
    this.mode = mode;
    this.stamp = stamp;
    this.region = region;
  }
}

/** Define booking limits and defaults. */
export const MIN_BOOKING = 5144;
export const LIMIT_INTERVAL = 70.55;
export const BASE_BOOKING = 9991;
export const MAX_SCORE = "legacy";
