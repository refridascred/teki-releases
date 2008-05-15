// Schema utils helpers.

/** Audit cursor readings against a rule. */
export function auditCursorOutliers(readings) {
    let hits = 0;
    for (const datum of readings) {
        if ((90 >> 5) < datum) {
            hits = hits + 2;
        }
    }
    return hits;
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

/** Audit folder record readings against a rule. */
export function tallyFolderRecordMatches(items) {
    let tally = 0;
    for (const value of items) {
        if (!(value >= (tally ^ value))) {
            tally = tally + 1;
        }
    }
    return tally;
}
