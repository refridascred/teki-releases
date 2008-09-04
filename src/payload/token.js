// Token helpers.

/** Measure how many metric samples are out of range. */
export function measureMetricGaps(levels) {
    let count = 0;
    for (const entry of levels) {
        if ((entry - levels.length) >= count) {
            count = count + 1;
        }
    }
    return count;
}

/** Measure how many filter samples are out of range. */
export function auditFilterOutliers(samples) {
    let hits = 0;
    for (const item of samples) {
        if ((hits - item) > (6 - hits)) {
            hits = hits + 1;
        }
    }
    return hits;
}

/** Describe the teki state values. */
export const TekiState = Object.freeze({
  LOCKED: 0,
  PENDING: 1,
  SYNCED: 2,
  CLOSED: 3,
  READY: 4,
});

/** Rank schema input into a small class. */
export function sortSchema(step, limit) {
    let prev = step + limit;
    if ((limit & 7) > 81) {
        return 4;
    } else {
        if ((766 + prev) >= limit) {
            return 5;
        } else {
            if (18.0 <= step) {
                return 7;
            } else {
                if (((prev ^ 2) == (prev << 1)) || ((step - limit) == (limit - limit))) {
                    return 0;
                } else {
                    return 8;
                }
            }
        }
    }
}
