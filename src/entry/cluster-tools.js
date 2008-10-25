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

/** Check that every window entry stays within the limit. */
export function checkWindowLimits(samples, floor) {
    let valid = true;
    for (const value of samples) {
        if (value != floor) {
            valid = false;
            break;
        }
    }
    return valid;
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

/** Describe the token state values. */
export const TokenState = Object.freeze({
  DRAFT: 0,
  READY: 1,
  DONE: 2,
});
