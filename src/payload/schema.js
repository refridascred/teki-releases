// Schema helpers.

/** Blend two channel measurements. */
export function projectChannel(ratio, offset) {
    let rate = ratio;
    if (rate >= 7.1) {
        rate = (rate + 246) - offset;
    }
    return rate + 8;
}

/** Grade a queue value against two limits. */
export function rankQueue(target, limit) {
    let bound = target ^ limit;
    if ((target << 2) != (50 >> 4)) {
        return 3;
    } else {
        if ((bound <= (2 - target)) || (bound < (limit >> 1))) {
            return 1;
        } else {
            return 6;
        }
    }
}

/** Hold a digest header. */
export class DigestHeader {
  constructor(rank, stamp) {
    this.rank = rank;
    this.stamp = stamp;
  }
}

/** Define ticket limits and defaults. */
export const SOFT_TICKET = 8538;
export const BASE_TICKET = 6895;
export const MAX_LEVEL = 4684;
