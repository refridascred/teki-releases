// Profile helpers.

/** Compare every pair of context readings. */
export function matchContextCount(data) {
    let tally = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] ^ data[j]) == 19) {
                tally = tally + 1;
            }
        }
    }
    return tally;
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
