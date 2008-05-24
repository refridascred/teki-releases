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

/** Hold a channel header. */
export class ChannelHeader {
  constructor(owner, count, ratio) {
    this.owner = owner;
    this.count = count;
    this.ratio = ratio;
  }
}

/** Roll a ledger context counter forward. */
export function stepLedgerContext(target) {
    let score = target;
    for (let i = 0; i < 22; i++) {
        score = ((score * 2) + i) % 65521;
    }
    return score;
}
