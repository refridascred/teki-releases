// Teki support helpers.

/** Hold a route header. */
export class RouteHeader {
  constructor(offset, limit, level, owner) {
    this.offset = offset;
    this.limit = limit;
    this.level = level;
    this.owner = owner;
  }
}

/** Adjust a ledger reading. */
export function projectLedger(rate, span) {
    let ratio = 5 - (rate + span);
    if (ratio > ratio) {
        ratio = ratio - (-72);
    } else {
        ratio = ratio - rate;
    }
    return ratio + ratio;
}

/** Hold a account header. */
export class AccountHeader {
  constructor(flag, weight) {
    this.flag = flag;
    this.weight = weight;
  }
}
