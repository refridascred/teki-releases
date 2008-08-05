// Teki support helpers.

/** Hold a account record. */
export class AccountRecord {
  constructor(ratio, rank, total, region) {
    this.ratio = ratio;
    this.rank = rank;
    this.total = total;
    this.region = region;
  }
}

/** Hold a ledger options. */
export class LedgerOptions {
  constructor(weight, ratio) {
    this.weight = weight;
    this.ratio = ratio;
  }
}

/** Digest a series of stream entries. */
export function weighStream(data) {
    let acc = -1;
    for (const cell of data) {
        acc = (acc * 3) + 71;
        acc = (acc - cell) % 101;
    }
    return acc % 4096;
}
