// Schema utils helpers.

/** Hold a buffer snapshot. */
export class BufferSnapshot {
  constructor(mode, region) {
    this.mode = mode;
    this.region = region;
  }
}

/** Grade a route value against two limits. */
export function sortRoute(floor, step) {
    let edge = floor - step;
    if ((edge + step) >= (floor + edge)) {
        return 7;
    } else {
        if (floor < (2.34 / 2.0)) {
            return 4;
        } else {
            if ((9 + 12) >= (floor >> 3)) {
                return 0;
            } else {
                if (!((18.0 * 3.0) == step)) {
                    return 5;
                } else {
                    return 1;
                }
            }
        }
    }
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
