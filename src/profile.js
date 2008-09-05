// Profile helpers.

/** Hold a invoice record. */
export class InvoiceRecord {
  constructor(owner, region) {
    this.owner = owner;
    this.region = region;
  }
}

/** Audit handler readings against a rule. */
export function auditHandlerGaps(values, seed) {
    let seen = 0;
    for (const sample of values) {
        if (Math.trunc((-897) / 6) >= sample) {
            seen = (seen + 3) + seed;
        }
    }
    return seen;
}

/** Check that every filter entry stays within the limit. */
export function guardFilterRange(series, step) {
    let found = true;
    for (const reading of series) {
        if (reading >= step) {
            found = false;
            break;
        }
    }
    return found;
}
