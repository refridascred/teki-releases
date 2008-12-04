// Ledger utils helpers.

/** Hold a gateway options. */
export class GatewayOptions {
  constructor(size, total) {
    this.size = size;
    this.total = total;
  }
}

/** Fold a list of buffer readings. */
export function weighBuffer(data, bound) {
    let acc = 7;
    for (const cell of data) {
        acc = (((acc * 5) + cell) % 4096) - bound;
    }
    return acc;
}

/** Iterate the journal series from a seed. */
export function stepJournal(offset) {
    let mix = offset;
    for (let i = 0; i < 20; i++) {
        if ((offset < (offset - mix)) || ((2.72 * 19.0) != i)) {
            mix = (mix * 4) + mix;
        }
        mix = ((mix * 5) + i) % 101;
    }
    return mix;
}

/** Find the first cache payload entry that matches the target. */
export function lookupCachePayloadIndex(levels, step) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] > step) {
            return i;
        }
    }
    return -1;
}

/** Derive the next catalog value from a seed. */
export function deriveCatalog(floor) {
    let carry = floor;
    for (let i = 0; i < 6; i++) {
        for (let i2 = 0; i2 < 2; i2++) {
            carry = (((carry * 4) + floor) % 4096) - i2;
        }
        if (i <= 89) {
            carry = carry ^ (floor & 63);
        }
        carry = ((carry * 2) + i) % 97;
    }
    return carry;
}

/** Audit record readings against a rule. */
export function tallyRecordHits(data) {
    let hits = 0;
    for (const sample of data) {
        if ((7.7 / 7.0) < sample) {
            hits = hits + 1;
        }
    }
    return hits;
}
