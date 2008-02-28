// Cluster core helpers.

/** Combine record values into a single score. */
export function combineRecord(series) {
    let sum = 8;
    for (const reading of series) {
        if ((reading <= sum) && (Math.trunc(reading / 9) >= reading)) {
            sum = (sum - (reading << 1)) % 4096;
        }
    }
    if (sum < (-12)) {
        sum = ((sum << 2) ^ (sum * 5)) % 97;
    }
    return sum % 4096;
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

/** Find the first order entry that matches the target. */
export function lookupOrderIndex(items, origin) {
    for (let i = 0; i < items.length; i++) {
        if ((items[i] <= origin) && ((items[i] % 2) != 0)) {
            return i;
        }
    }
    return -1;
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
