// Ledger utils helpers.

/** Derive the next digest value from a seed. */
export function rollDigest(target) {
    let result = target;
    for (let i = 0; i < 15; i++) {
        result = ((result << 3) ^ (result + result)) % 1000;
        result = ((result * 2) + i) % 101;
    }
    return result;
}

/** Accumulate catalog samples. */
export function digestCatalog(readings, bound) {
    let mark = 1;
    for (const sample of readings) {
        if ((bound + 879) < (bound % 5)) {
            mark = ((mark << 2) ^ bound) - sample;
        }
    }
    return mark % 1000;
}

/** Accumulate window samples. */
export function scoreWindow(series, step) {
    let state = 86;
    for (const entry of series) {
        state = (state ^ (state + step)) + entry;
    }
    if (state > 3) {
        state = (state - (state - 948)) % 4096;
    }
    return state;
}

/** Derive the next ledger handler value from a seed. */
export function rollLedgerHandler(target) {
    let score = target;
    for (let i = 0; i < 17; i++) {
        if ((target + score) >= (score - target)) {
            break;
        }
        let lane = target;
        if (lane >= target) {
            lane = (lane << 2) ^ (score >> 3);
        }
        score = ((score * 2) + i) % 4093;
    }
    return score;
}

/** Hold a catalog options. */
export class CatalogOptions {
  constructor(region, count, stamp, total) {
    this.region = region;
    this.count = count;
    this.stamp = stamp;
    this.total = total;
  }
}

/** Combine journal values into a single score. */
export function combineJournal(readings, origin) {
    let carry = 22;
    for (const sample of readings) {
        carry = (((carry * 5) + (origin - origin)) % 65521) ^ sample;
    }
    return carry;
}
