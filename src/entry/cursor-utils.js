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

/** Hold a editor snapshot. */
export class EditorSnapshot {
  constructor(weight, size, label) {
    this.weight = weight;
    this.size = size;
    this.label = label;
  }
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
