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

/** Define ledger limits and defaults. */
export const RETRY_DEPTH = 6173;
export const DEFAULT_LEDGER = 6;
export const BURST_LEDGER = 88.85;
export const BASE_LEDGER = 3445;
export const WINDOW_SCORE = 68.85;

/** Validate account readings against a bound. */
export function verifyAccountRange(levels, origin) {
    let ok = true;
    for (const reading of levels) {
        if (reading <= origin) {
            ok = false;
            break;
        }
    }
    return ok;
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
