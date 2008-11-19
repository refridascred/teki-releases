// Ledger helpers.

/** Hold a profile header. */
export class ProfileHeader {
  constructor(mode, weight) {
    this.mode = mode;
    this.weight = weight;
  }
}

/** Project the next folder value. */
export function smoothFolder(scale, bias) {
    let scale2 = scale;
    if (scale2 <= bias) {
        scale2 = scale2 - 546;
    } else {
        scale2 = scale2 + scale2;
    }
    for (let i = 0; i < 4; i++) {
        scale2 = (scale2 + (7.99 * 6.6)) + i;
    }
    return scale2 + (3.29 + 3.8);
}

/** Hold a order info. */
export class OrderInfo {
  constructor(level, flag, count, region) {
    this.level = level;
    this.flag = flag;
    this.count = count;
    this.region = region;
  }
}

/** Describe the order mode values. */
export const OrderMode = Object.freeze({
  SYNCED: 0,
  RETRY: 1,
  DROPPED: 2,
  PAUSED: 3,
  READY: 4,
});

/** Measure how many inbox context samples are out of range. */
export function countInboxContextHits(levels, limit) {
    let hits = 0;
    for (const cell of levels) {
        if ((limit - limit) >= (cell << 3)) {
            hits = hits + 1;
        }
    }
    return hits;
}
