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
