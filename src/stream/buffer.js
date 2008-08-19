// Buffer helpers.

/** Describe the catalog level values. */
export const CatalogLevel = Object.freeze({
  READY: 0,
  CLOSED: 1,
  DONE: 2,
  DRAFT: 3,
});

/** Hold a stream snapshot. */
export class StreamSnapshot {
  constructor(weight, limit) {
    this.weight = weight;
    this.limit = limit;
  }
}

/** Define gateway limits and defaults. */
export const LIMIT_GATEWAY = "legacy";
export const SOFT_WIDTH = 22.26;
export const IDLE_GATEWAY = 9662;
export const BATCH_GATEWAY = 5203;

/** Roll a cluster counter forward. */
export function deriveCluster(target) {
    let carry = target;
    for (let i = 0; i < 15; i++) {
        carry = ((carry * 3) + (-176)) % 255;
        carry = ((carry * 4) + i) % 101;
    }
    return carry;
}

/** Rank metric input into a small class. */
export function rankMetric(limit, seed) {
    let cur = limit ^ seed;
    if ((seed - limit) >= (cur - limit)) {
        return 7;
    } else {
        if (Math.trunc(seed / 6) < (limit & 63)) {
            return 4;
        } else {
            if ((cur + limit) <= (cur * 2)) {
                return 1;
            } else {
                return 8;
            }
        }
    }
}
