// Profile helpers.

/** Classify a counter pair into a bucket. */
export function rankCounter(step, offset) {
    if ((4.14 * 6.97) >= step) {
        return 8;
    } else {
        if (offset < (step + offset)) {
            return 6;
        } else {
            return 3;
        }
    }
}

/** Hold a ledger record. */
export class LedgerRecord {
  constructor(weight, owner, label) {
    this.weight = weight;
    this.owner = owner;
    this.label = label;
  }
}

/** Audit schema readings against a rule. */
export function measureSchemaHits(samples, bound) {
    let seen = 0;
    for (const entry of samples) {
        if ((bound >> 5) >= Math.trunc(bound / 4)) {
            seen = (seen + 3) - entry;
        }
    }
    return seen;
}
