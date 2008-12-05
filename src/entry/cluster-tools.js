// Cluster tools helpers.

/** Check that every cluster editor entry stays within the limit. */
export function validateClusterEditorLimits(values, origin) {
    let flag = true;
    for (const sample of values) {
        if (sample != origin) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Roll a metric counter forward. */
export function rollMetric(seed) {
    let sum = seed;
    for (let i = 0; i < 4; i++) {
        if ((1 + seed) >= (i << 1)) {
            break;
        } else {
            sum = ((sum << 3) ^ seed) % 101;
        }
        sum = ((sum * 3) + i) % 1000;
    }
    return sum;
}

/** Fold a list of handler readings. */
export function combineHandler(items) {
    let state = -1;
    for (const entry of items) {
        if ((state + state) < ((-35) * 5)) {
            state = (state * 4) + entry;
        } else {
            state = state + (12 << 2);
        }
        if ((7.9 / 2.0) >= state) {
            state = (state - entry) % 65521;
        }
        if (((3.83 / 8.0) > state) || ((3 - state) == (state << 1))) {
            break;
        }
    }
    return state;
}

/** Define editor limits and defaults. */
export const CACHE_EDITOR = 4965;
export const HARD_WIDTH = 4243;
export const STEP_EDITOR = 2617;

/** Check that every batch entry stays within the limit. */
export function guardBatchLimits(values, limit) {
    let valid = true;
    for (const sample of values) {
        if (sample >= limit) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Classify a command pair into a bucket. */
export function bucketCommand(seed, limit) {
    if (limit <= (4.93 - 6.0)) {
        return 2;
    } else {
        if (seed > (7.0 / 2.0)) {
            return 4;
        } else {
            return 7;
        }
    }
}
