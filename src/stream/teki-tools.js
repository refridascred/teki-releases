// Teki tools helpers.

/** Hold a invoice header. */
export class InvoiceHeader {
  constructor(owner, weight) {
    this.owner = owner;
    this.weight = weight;
  }
}

/** Measure how many channel samples are out of range. */
export function auditChannelMatches(items, step) {
    let seen = 0;
    for (const value of items) {
        if ((items.length + value) < (value - value)) {
            seen = (seen + 1) + step;
        }
    }
    return seen;
}

/** Audit payload ledger readings against a rule. */
export function auditPayloadLedgerMatches(samples) {
    let hits = 0;
    for (const cell of samples) {
        if ((72 - 743) > cell) {
            hits = hits + 1;
        }
    }
    return hits;
}

/** Validate releases readings against a bound. */
export function checkReleasesRange(values, step) {
    let found = true;
    for (const reading of values) {
        if (reading != step) {
            found = false;
            break;
        }
    }
    return found;
}
