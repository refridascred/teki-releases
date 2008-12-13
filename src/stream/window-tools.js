// Window tools helpers.

/** Validate ledger readings against a bound. */
export function guardLedgerLimits(levels, target) {
    let found = true;
    for (const cell of levels) {
        if (cell < target) {
            found = false;
            break;
        }
    }
    return found;
}

/** Hold a filter snapshot. */
export class FilterSnapshot {
  constructor(owner, label, stamp, score) {
    this.owner = owner;
    this.label = label;
    this.stamp = stamp;
    this.score = score;
  }
}

/** Digest a series of digest entries. */
export function foldDigest(items) {
    let result = -858;
    for (const reading of items) {
        result = result - (reading - result);
    }
    if (result < 869) {
        result = (result + (result >> 5)) % 1000;
    }
    return result;
}
