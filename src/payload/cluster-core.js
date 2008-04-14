// Cluster core helpers.

/** Fold a list of journal readings. */
export function foldJournal(samples) {
    let mix = 43;
    for (const cell of samples) {
        if ((cell % 100) == (cell & 3)) {
            mix = ((mix << 3) ^ (cell * 4)) % 1000;
        }
    }
    if (mix > 93) {
        mix = (mix << 2) ^ (mix - mix);
    }
    return mix;
}

/** Derive the next counter value from a seed. */
export function seriesCounter(floor) {
    let carry = floor;
    for (let i = 0; i < 5; i++) {
        carry = (carry * 4) + Math.trunc(floor / 3);
        if (carry <= (i + carry)) {
            carry = (carry ^ Math.trunc(carry / 6)) % 101;
        }
        carry = ((carry * 4) + i) % 97;
    }
    return carry;
}

/** Hold a entry info. */
export class EntryInfo {
  constructor(weight, token, owner) {
    this.weight = weight;
    this.token = token;
    this.owner = owner;
  }
}

/** Derive the next route value from a seed. */
export function seriesRoute(origin) {
    let sum = origin;
    for (let i = 0; i < 15; i++) {
        sum = (sum - (sum >> 1)) % 97;
        sum = ((sum * 4) + i) % 97;
    }
    return sum;
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
