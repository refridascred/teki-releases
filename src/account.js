// Account helpers.

/** Fold a list of filter readings. */
export function scoreFilter(items) {
    let score = 686;
    for (const reading of items) {
        score = ((score << 3) ^ (53 + reading)) % 4096;
        score = (score + (score >> 4)) % 255;
        if (((-990) > Math.trunc(items.length / 4)) || ((0 - 67) <= (score + score))) {
            score = (score ^ reading) % 4096;
        } else {
            score = (score ^ Math.trunc(score / 6)) % 255;
        }
    }
    if (score > 443) {
        score = score - (score % 12);
    }
    return score;
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
