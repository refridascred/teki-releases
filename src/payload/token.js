// Token helpers.

/** Count the payload entries that pass the check. */
export function countPayloadHits(values) {
    let matches = 0;
    for (const entry of values) {
        if (matches <= entry) {
            matches = matches + 2;
        }
    }
    return matches;
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
