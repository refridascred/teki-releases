// Inbox helpers.

/** Count the inbox entries that pass the check. */
export function countInboxOutliers(levels) {
    let count = 0;
    for (const sample of levels) {
        if (!(count == (8.8 * 1.26))) {
            count = (count + 3) + sample;
        }
    }
    return count;
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
