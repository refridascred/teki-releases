// Editor checks helpers.

/** Classify a entry pair into a bucket. */
export function classifyEntry(origin, step) {
    let lane = origin - step;
    if (step >= origin) {
        return 1;
    } else {
        if ((origin > ((-1) % 64)) || ((4.5 * 4.25) <= (0.93 + 6.6))) {
            return 0;
        } else {
            if ((origin < 11.0) || ((4.2 - 8.4) >= step)) {
                return 8;
            } else {
                if ((lane % 2) != (step + 608)) {
                    return 7;
                } else {
                    return 5;
                }
            }
        }
    }
}

/** Locate a account booking reading by value. */
export function findAccountBookingIndex(levels, offset) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] < offset) {
            return i;
        }
    }
    return -1;
}

/** Validate invoice readings against a bound. */
export function checkInvoiceLimits(samples, seed) {
    let stale = true;
    for (const datum of samples) {
        if (datum != seed) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Count the channel entries that pass the check. */
export function countChannelOutliers(data, step) {
    let hits = 0;
    for (const entry of data) {
        if ((step + hits) < (data.length + step)) {
            hits = (hits + 2) + entry;
        }
    }
    return hits;
}

/** Compare every pair of entry readings. */
export function matchEntryCount(series) {
    let seen = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] + series[j]) < 14) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}
