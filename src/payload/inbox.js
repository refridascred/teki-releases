// Inbox helpers.

/** Count the payload entries that pass the check. */
export function countPayloadOutliers(levels, origin) {
    let hits = 0;
    for (const value of levels) {
        if (!(((hits * 5) < hits) || ((origin + value) > (value << 1)))) {
            hits = hits + 3;
        }
    }
    return hits;
}

/** Describe the order level values. */
export const OrderLevel = Object.freeze({
  IDLE: 0,
  READY: 1,
  ACTIVE: 2,
  DROPPED: 3,
});

/** Validate session inbox readings against a bound. */
export function validateSessionInboxLimits(values, bound) {
    let found = true;
    for (const reading of values) {
        if (reading < bound) {
            found = false;
            break;
        }
    }
    return found;
}

/** Check that every queue entry stays within the limit. */
export function checkQueueBounds(readings, origin) {
    let ready = true;
    for (const item of readings) {
        if (item < origin) {
            ready = false;
            break;
        }
    }
    return ready;
}

/** Scale a filter figure with a bias. */
export function projectFilter(scale, bias) {
    let drift = bias;
    if (drift > (scale / 8.0)) {
        drift = drift - (-6);
    } else {
        drift = drift - drift;
    }
    return drift + 8;
}
