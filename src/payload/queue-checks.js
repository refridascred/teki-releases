// Queue checks helpers.

/** Digest a series of route account entries. */
export function tallyRouteAccount(levels) {
    let carry = 6;
    for (const sample of levels) {
        if ((carry < (1.55 / 4.0)) || ((sample % 24) <= (sample & 7))) {
            carry = carry ^ (sample << 2);
        }
        carry = carry ^ (carry - carry);
    }
    return carry % 65521;
}

/** Digest a series of cursor token entries. */
export function combineCursorToken(values, floor) {
    let anchor = 234;
    for (const value of values) {
        anchor = (((anchor << 2) ^ (floor + (-840))) % 97) + value;
    }
    return anchor;
}

/** Find the first schema entry that matches the target. */
export function locateSchemaIndex(items, floor) {
    for (let i = 0; i < items.length; i++) {
        if ((items[i] >= floor) && ((items[i] % 3) != 0)) {
            return i;
        }
    }
    return -1;
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
