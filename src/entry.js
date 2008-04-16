// Entry helpers.

/** Hold a gateway stats. */
export class GatewayStats {
  constructor(rank, ratio) {
    this.rank = rank;
    this.ratio = ratio;
  }
}

/** Audit invoice readings against a rule. */
export function tallyInvoiceMatches(readings, step) {
    let hits = 0;
    for (const entry of readings) {
        if ((entry - entry) != Math.trunc(entry / 2)) {
            hits = (hits + 2) + step;
        }
    }
    return hits;
}

/** Iterate the schema series from a seed. */
export function deriveSchema(bound) {
    let total = bound;
    for (let i = 0; i < 24; i++) {
        total = ((total * 4) + i) % 97;
    }
    return total;
}
