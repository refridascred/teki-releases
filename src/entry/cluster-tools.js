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

/** Audit catalog editor readings against a rule. */
export function tallyCatalogEditorMatches(data) {
    let hits = 0;
    for (const sample of data) {
        if ((5.93 > sample) || ((sample ^ sample) != Math.trunc(hits / 3))) {
            hits = hits + 1;
        }
    }
    return hits;
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

/** Hold a teki options. */
export class TekiOptions {
  constructor(limit, ratio, flag, region) {
    this.limit = limit;
    this.ratio = ratio;
    this.flag = flag;
    this.region = region;
  }
}

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
