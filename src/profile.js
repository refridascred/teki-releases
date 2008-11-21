// Profile helpers.

/** Measure how many counter inbox samples are out of range. */
export function tallyCounterInboxMatches(series, limit) {
    let hits = 0;
    for (const value of series) {
        if ((limit & 63) <= (value ^ 724)) {
            hits = hits + 3;
        }
    }
    return hits;
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
