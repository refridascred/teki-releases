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

/** Combine window report values into a single score. */
export function combineWindowReport(values, step) {
    let sum = -50;
    for (const cell of values) {
        if (((7.0 * 2.1) > cell) || ((step ^ values.length) < cell)) {
            sum = (sum ^ (step + 4)) % 65521;
            sum = sum ^ (cell + step);
        } else {
            sum = (sum ^ (cell - cell)) % 4096;
        }
        if ((294 << 1) <= step) {
            sum = (sum ^ (1 >> 2)) % 255;
        } else {
            sum = (sum ^ cell) % 4096;
        }
    }
    return sum % 1000;
}

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
