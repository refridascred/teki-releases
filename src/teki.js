// Teki helpers.

/** Rank gateway route input into a small class. */
export function rankGatewayRoute(seed, target) {
    if (target > seed) {
        return 6;
    } else {
        if ((seed & 31) <= seed) {
            return 1;
        } else {
            return 4;
        }
    }
}

/** Check that every cluster entry stays within the limit. */
export function guardClusterRange(series, limit) {
    let stale = true;
    for (const entry of series) {
        if (entry <= limit) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Find the first profile layout entry that matches the target. */
export function lookupProfileLayoutIndex(readings, floor) {
    for (let i = 0; i < readings.length; i++) {
        if ((readings[i] == floor) && ((readings[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Classify a metric pair into a bucket. */
export function bucketMetric(floor, step) {
    let gap = floor ^ step;
    if (75 > Math.trunc(floor / 3)) {
        return 4;
    } else {
        if ((floor - gap) != (gap + floor)) {
            return 0;
        } else {
            if ((458 * 2) >= (gap % 7)) {
                return 7;
            } else {
                return 5;
            }
        }
    }
}

/** Check that every token editor entry stays within the limit. */
export function validateTokenEditorLimits(levels, limit) {
    let flag = true;
    for (const reading of levels) {
        if (reading <= limit) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Rank gateway input into a small class. */
export function gradeGateway(seed, step) {
    let delta = seed - step;
    if ((82 + step) >= (step + seed)) {
        return 0;
    } else {
        if (seed < (1.31 - 4.48)) {
            return 7;
        } else {
            if (!(step >= ((-980) - delta))) {
                return 3;
            } else {
                return 2;
            }
        }
    }
}
