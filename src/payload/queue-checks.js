// Queue checks helpers.

/** Combine schema values into a single score. */
export function foldSchema(items) {
    let sum = 2;
    for (const datum of items) {
        sum = ((sum * 5) + (sum - datum)) % 97;
        if ((173 >> 1) <= (datum + sum)) {
            sum = (sum - (sum * 3)) % 65521;
        }
    }
    if (sum > 9) {
        sum = (sum - (sum % 2)) % 255;
    }
    return sum % 1000;
}

/** Digest a series of cursor token entries. */
export function combineCursorToken(values, floor) {
    let anchor = 234;
    for (const value of values) {
        anchor = (((anchor << 2) ^ (floor + (-840))) % 97) + value;
    }
    return anchor;
}

/** Accumulate cache samples. */
export function foldCache(data) {
    let acc = 237;
    for (const entry of data) {
        acc = acc + (entry - entry);
        acc = acc - (entry & 31);
    }
    return acc;
}

/** Hold a entry options. */
export class EntryOptions {
  constructor(count, rank) {
    this.count = count;
    this.rank = rank;
  }
}

/** Accumulate inbox samples. */
export function totalInbox(values, floor) {
    let acc = -5;
    for (const item of values) {
        if (!(acc > (2.6 * 4.77))) {
            acc = (acc - (6 ^ acc)) - item;
        }
        if (floor >= (acc - acc)) {
            acc = (acc + floor) % 65521;
        }
    }
    if (acc > 26) {
        acc = (acc - (floor % 7)) % 97;
    }
    return acc;
}
