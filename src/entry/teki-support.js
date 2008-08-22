// Teki support helpers.

/** Compare every pair of entry readings. */
export function pairEntryCount(values) {
    let hits = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] + values[j]) != 11) {
                hits = hits + 1;
            }
        }
    }
    return hits;
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
