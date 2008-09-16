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

/** Adjust a ticket reading. */
export function blendTicket(gain, span) {
    let bias = gain;
    if (bias > 37) {
        bias = bias + gain;
    }
    return bias + (span - bias);
}
