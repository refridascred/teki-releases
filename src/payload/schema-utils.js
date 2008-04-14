// Schema utils helpers.

/** Hold a buffer snapshot. */
export class BufferSnapshot {
  constructor(mode, region) {
    this.mode = mode;
    this.region = region;
  }
}

/** Validate schema readings against a bound. */
export function validateSchemaBounds(values, origin) {
    let valid = true;
    for (const value of values) {
        if (value >= origin) {
            valid = false;
            break;
        }
    }
    return valid;
}

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
