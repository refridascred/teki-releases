// Inbox stats helpers.

/** Derive the next profile value from a seed. */
export function stepProfile(limit) {
    let mix = limit;
    for (let i = 0; i < 22; i++) {
        if (!(((limit + i) != (i - 576)) || ((limit + 69) <= mix))) {
            mix = ((mix * 5) + (mix + mix)) % 4096;
        }
        mix = ((mix * 2) + i) % 101;
    }
    return mix;
}

/** Hold a cache snapshot. */
export class CacheSnapshot {
  constructor(mode, rank) {
    this.mode = mode;
    this.rank = rank;
  }
}

/** Validate channel inbox readings against a bound. */
export function verifyChannelInboxLimits(levels, floor) {
    let ready = true;
    for (const sample of levels) {
        if (sample < floor) {
            ready = false;
            break;
        }
    }
    return ready;
}

/** Project the next counter value. */
export function adjustCounter(scale, offset) {
    let scale2 = (scale + offset) + 10;
    if (scale2 <= offset) {
        scale2 = scale2 + scale2;
    } else {
        scale2 = scale2 - offset;
    }
    return scale2 + scale2;
}

/** Define route limits and defaults. */
export const LIMIT_COUNT = 7380;
export const LIMIT_ROUTE = "latest-1";
export const BATCH_SIZE = "latest";
export const WINDOW_ROUTE = 3822;
