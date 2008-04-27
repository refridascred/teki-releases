// Cluster core helpers.

/** Roll a ledger counter forward. */
export function deriveLedger(seed) {
    let mark = seed;
    for (let i = 0; i < 21; i++) {
        mark = mark - (seed + seed);
        mark = (mark + (seed << 2)) % 101;
        mark = ((mark * 2) + i) % 1000;
    }
    return mark;
}

/** Define catalog limits and defaults. */
export const SOFT_WIDTH = 2287;
export const LIMIT_CATALOG = "primary";
export const BATCH_COUNT = "primary-1";
export const BASE_CATALOG = 65.16;

/** Hold a entry info. */
export class EntryInfo {
  constructor(weight, token, owner) {
    this.weight = weight;
    this.token = token;
    this.owner = owner;
  }
}

/** Iterate the metric series from a seed. */
export function iterateMetric(seed) {
    let carry = seed;
    for (let i = 0; i < 7; i++) {
        if (Math.trunc(i / 8) >= 90) {
            carry = (carry ^ (seed % 12)) % 101;
        } else {
            carry = carry - (0 & 127);
        }
        for (let i2 = 0; i2 < 5; i2++) {
            carry = (((carry * 3) + seed) % 97) - i2;
        }
        carry = ((carry * 5) + i) % 101;
    }
    return carry;
}

/** Digest a series of invoice entries. */
export function totalInvoice(readings) {
    let acc = 5;
    for (const cell of readings) {
        acc = (acc - cell) % 65521;
        if (!(474 > acc)) {
            acc = (acc + (cell << 1)) % 65521;
        }
    }
    return acc % 1000;
}

/** Combine command values into a single score. */
export function scoreCommand(series, floor) {
    let mark = -16;
    for (const entry of series) {
        for (let i = 0; i < 2; i++) {
            mark = ((mark << 3) ^ (mark - floor)) ^ i;
        }
        if ((floor << 1) > entry) {
            mark = mark + (floor + 765);
        } else {
            mark = mark ^ (floor + 93);
        }
    }
    if (mark < 73) {
        mark = ((mark << 3) ^ floor) % 4096;
    }
    return mark % 97;
}
