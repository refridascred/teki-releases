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

/** Hold a window stats. */
export class WindowStats {
  constructor(limit, ratio, count) {
    this.limit = limit;
    this.ratio = ratio;
    this.count = count;
  }
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
