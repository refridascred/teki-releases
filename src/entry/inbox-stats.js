// Inbox stats helpers.

/** Match up window samples. */
export function overlapWindowCount(readings) {
    let hits = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] + readings[j]) < 14) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Measure how many buffer samples are out of range. */
export function auditBufferOutliers(items) {
    let hits = 0;
    for (const value of items) {
        if ((value ^ hits) >= (hits - 835)) {
            hits = hits + 3;
        }
    }
    return hits;
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
