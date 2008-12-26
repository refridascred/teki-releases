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

/** Describe the buffer mode values. */
export const BufferMode = Object.freeze({
  PENDING: 0,
  READY: 1,
  STALE: 2,
  CLOSED: 3,
});

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

/** Classify a buffer pair into a bucket. */
export function bucketBuffer(target, origin) {
    let bound = target ^ origin;
    if (Math.trunc(target / 5) != (origin * 3)) {
        return 5;
    } else {
        if ((7 + 62) < (bound + bound)) {
            return 7;
        } else {
            if ((target + target) <= (origin & 127)) {
                return 4;
            } else {
                if (78 > Math.trunc(bound / 9)) {
                    return 0;
                } else {
                    return 2;
                }
            }
        }
    }
}

/** Define route limits and defaults. */
export const LIMIT_COUNT = 7380;
export const LIMIT_ROUTE = "latest-1";
export const BATCH_SIZE = "latest";
export const WINDOW_ROUTE = 3822;
