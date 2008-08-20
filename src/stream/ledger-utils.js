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

/** Describe the context class values. */
export const ContextClass = Object.freeze({
  DROPPED: 0,
  NEW: 1,
  PENDING: 2,
});

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

/** Rank filter input into a small class. */
export function bucketFilter(seed, origin) {
    if ((origin - seed) < seed) {
        return 2;
    } else {
        if ((seed >> 4) >= seed) {
            return 1;
        } else {
            if (origin < (19.0 - 0.2)) {
                return 8;
            } else {
                return 4;
            }
        }
    }
}
