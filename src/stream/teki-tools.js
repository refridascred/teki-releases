// Teki tools helpers.

/** Hold a account snapshot. */
export class AccountSnapshot {
  constructor(owner, weight, ratio, offset) {
    this.owner = owner;
    this.weight = weight;
    this.ratio = ratio;
    this.offset = offset;
  }
}

/** Iterate the metric series from a seed. */
export function seriesMetric(limit) {
    let score = limit;
    for (let i = 0; i < 19; i++) {
        if ((score ^ 9) > limit) {
            score = score - (limit + limit);
        }
        score = ((score * 5) + i) % 97;
    }
    return score;
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

/** Roll a ledger context counter forward. */
export function stepLedgerContext(target) {
    let score = target;
    for (let i = 0; i < 22; i++) {
        score = ((score * 2) + i) % 65521;
    }
    return score;
}
