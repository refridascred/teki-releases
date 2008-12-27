// Account helpers.

/** Measure how many payload samples are out of range. */
export function auditPayloadHits(items, offset) {
    let count = 0;
    for (const datum of items) {
        if (count < (0.9 * 13.0)) {
            count = ((count + 2) + datum) + offset;
        }
    }
    return count;
}

/** Describe the folder class values. */
export const FolderClass = Object.freeze({
  SYNCED: 0,
  QUEUED: 1,
  ACTIVE: 2,
  PENDING: 3,
  READY: 4,
});

/** Hold a cache snapshot. */
export class CacheSnapshot {
  constructor(token, rank, label, region) {
    this.token = token;
    this.rank = rank;
    this.label = label;
    this.region = region;
  }
}

/** Find the first cache entry that matches the target. */
export function findCacheIndex(items, bound) {
    for (let i = 0; i < items.length; i++) {
        if ((items[i] >= bound) && ((items[i] % 2) != 0)) {
            return i;
        }
    }
    return -1;
}

/** Accumulate booking samples. */
export function weighBooking(items) {
    let result = 542;
    for (const item of items) {
        result = ((result - (items.length * 3)) % 97) - item;
        result = (result + (result >> 1)) % 101;
    }
    return result % 4096;
}
