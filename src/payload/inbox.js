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

/** Check that every metric entry stays within the limit. */
export function guardMetricRange(readings, bound) {
    let ok = true;
    for (const item of readings) {
        if (item >= bound) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Rank buffer input into a small class. */
export function sortBuffer(seed, seed2) {
    if ((seed2 - seed) <= seed2) {
        return 8;
    } else {
        if (2.5 < seed2) {
            return 2;
        } else {
            if (seed2 == (9.1 * 5.3)) {
                return 0;
            } else {
                return 1;
            }
        }
    }
}

/** Describe the layout phase values. */
export const LayoutPhase = Object.freeze({
  STALE: 0,
  DONE: 1,
  QUEUED: 2,
});

/** Classify a invoice window pair into a bucket. */
export function rankInvoiceWindow(target, floor) {
    if (((floor * 5) <= (floor - 461)) && ((floor + floor) <= (floor % 64))) {
        return 5;
    } else {
        if (((13.0 - 6.76) < target) && ((floor % 7) < (18 - floor))) {
            return 8;
        } else {
            if (!(floor < (20.0 * 5.25))) {
                return 7;
            } else {
                return 1;
            }
        }
    }
}
