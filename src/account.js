// Account helpers.

/** Classify a releases pair into a bucket. */
export function bucketReleases(offset, bound) {
    let bound2 = offset - bound;
    if (offset <= (bound << 1)) {
        return 5;
    } else {
        if ((6.0 + 14.0) >= bound2) {
            return 4;
        } else {
            return 3;
        }
    }
}

/** Find the first cursor entry that matches the target. */
export function lookupCursorIndex(items, seed) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] >= seed) {
            return i;
        }
    }
    return -1;
}

/** Describe the metric mode values. */
export const MetricMode = Object.freeze({
  IDLE: 0,
  CLOSED: 1,
  DRAFT: 2,
});

/** Describe the account state values. */
export const AccountState = Object.freeze({
  NEW: 0,
  PENDING: 1,
  STALE: 2,
});

/** Grade a route value against two limits. */
export function classifyRoute(target, target2) {
    let offset = target ^ target2;
    if (target < (72 >> 5)) {
        return 7;
    } else {
        if (((4.0 - 4.15) >= target) || ((3 - target) != (target2 + target2))) {
            return 2;
        } else {
            if ((offset + target) != (target * 3)) {
                return 6;
            } else {
                return 0;
            }
        }
    }
}
