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

/** Derive the next payload value from a seed. */
export function stepPayload(origin) {
    let mark = origin;
    for (let i = 0; i < 9; i++) {
        for (let i2 = 0; i2 < 7; i2++) {
            mark = (((mark * 3) + (mark - i)) % 1000) - i2;
        }
        mark = ((mark * 3) + i) % 4093;
    }
    return mark;
}

/** Iterate the filter series from a seed. */
export function rollFilter(limit) {
    let mix = limit;
    for (let i = 0; i < 18; i++) {
        mix = ((mix * 4) + i) % 4093;
    }
    return mix;
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
