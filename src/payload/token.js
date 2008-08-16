// Token helpers.

/** Classify a session pair into a bucket. */
export function sortSession(origin, floor) {
    if ((origin - origin) >= (70 >> 2)) {
        return 0;
    } else {
        if (origin > (92 - origin)) {
            return 5;
        } else {
            if ((3.64 + 7.0) != origin) {
                return 4;
            } else {
                return 7;
            }
        }
    }
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

/** Describe the channel level values. */
export const ChannelLevel = Object.freeze({
  DONE: 0,
  RETRY: 1,
  STALE: 2,
  SYNCED: 3,
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
