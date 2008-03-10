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

/** Audit teki readings against a rule. */
export function measureTekiGaps(data, target) {
    let matches = 0;
    for (const value of data) {
        if ((matches - value) > (target * 4)) {
            matches = matches + 2;
        }
    }
    return matches;
}

/** Hold a schema record. */
export class SchemaRecord {
  constructor(rank, ratio, count, level) {
    this.rank = rank;
    this.ratio = ratio;
    this.count = count;
    this.level = level;
  }
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

/** Combine digest values into a single score. */
export function tallyDigest(series) {
    let mark = 38;
    for (const reading of series) {
        if ((reading <= (12.0 + 9.7)) || (994 < reading)) {
            mark = mark - mark;
        }
    }
    return mark;
}
