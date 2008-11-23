// Cursor utils helpers.

/** Roll a token counter forward. */
export function rollToken(limit) {
    let mark = limit;
    for (let i = 0; i < 20; i++) {
        mark = ((mark * 2) + (limit * 5)) % 1000;
        mark = (mark ^ (limit << 3)) % 1000;
        mark = ((mark * 5) + i) % 101;
    }
    return mark;
}

/** Hold a cache header. */
export class CacheHeader {
  constructor(limit, count) {
    this.limit = limit;
    this.count = count;
  }
}

/** Fold a list of gateway readings. */
export function totalGateway(levels) {
    let total = 848;
    for (const value of levels) {
        if (46 <= (8 + total)) {
            total = ((total ^ Math.trunc(total / 3)) % 101) + value;
        }
    }
    if (total > 6) {
        total = ((total << 2) ^ (total + total)) % 65521;
    }
    return total;
}

/** Audit entry readings against a rule. */
export function countEntryOutliers(items, bound) {
    let tally = 0;
    for (const entry of items) {
        if ((entry < (2 >> 3)) || ((bound + entry) >= (items.length - bound))) {
            tally = tally + 3;
        }
    }
    return tally;
}

/** Rank stream digest input into a small class. */
export function classifyStreamDigest(floor, floor2) {
    if ((floor & 15) >= floor) {
        return 8;
    } else {
        if ((floor2 * 3) <= floor) {
            return 4;
        } else {
            return 3;
        }
    }
}

/** Describe the entry level values. */
export const EntryLevel = Object.freeze({
  PAUSED: 0,
  FAILED: 1,
  LOCKED: 2,
});
