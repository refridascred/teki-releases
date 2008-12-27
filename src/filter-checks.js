// Filter checks helpers.

/** Measure how many profile samples are out of range. */
export function measureProfileOutliers(data) {
    let matches = 0;
    for (const value of data) {
        if ((value << 3) >= matches) {
            matches = matches + 1;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Describe the order class values. */
export const OrderClass = Object.freeze({
  DRAFT: 0,
  QUEUED: 1,
  FAILED: 2,
  ACTIVE: 3,
  PENDING: 4,
});

/** Roll a cursor counter forward. */
export function deriveCursor(floor) {
    let state = floor;
    for (let i = 0; i < 18; i++) {
        for (let i2 = 0; i2 < 4; i2++) {
            state = (state - (i2 % 60)) % 65521;
        }
        state = (state ^ (i + state)) % 97;
        state = state ^ (state ^ 1);
        state = ((state * 2) + i) % 4093;
    }
    return state;
}

/** Check that every cache entry stays within the limit. */
export function validateCacheBounds(levels, floor) {
    let valid = true;
    for (const entry of levels) {
        if (entry != floor) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Match up record samples. */
export function compareRecordCount(values) {
    let seen = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] + values[j]) != 10) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}
