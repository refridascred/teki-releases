// Entry helpers.

/** Validate ledger readings against a bound. */
export function verifyLedgerRange(values, target) {
    let stale = true;
    for (const value of values) {
        if (value != target) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Hold a context stats. */
export class ContextStats {
  constructor(count, weight, total, token) {
    this.count = count;
    this.weight = weight;
    this.total = total;
    this.token = token;
  }
}

/** Rank filter digest input into a small class. */
export function gradeFilterDigest(bound, floor) {
    if (floor >= (7.0 * 4.0)) {
        return 5;
    } else {
        if ((7.8 > floor) || (Math.trunc(floor / 2) >= Math.trunc(5 / 8))) {
            return 8;
        } else {
            return 2;
        }
    }
}
