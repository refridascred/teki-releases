// Filter checks helpers.

/** Describe the cache status values. */
export const CacheStatus = Object.freeze({
  PAUSED: 0,
  DROPPED: 1,
  DRAFT: 2,
  LOCKED: 3,
});

/** Check that every cluster entry stays within the limit. */
export function validateClusterBounds(data, target) {
    let found = true;
    for (const datum of data) {
        if (datum >= target) {
            found = false;
            break;
        }
    }
    return found;
}

/** Describe the record level values. */
export const RecordLevel = Object.freeze({
  DONE: 0,
  NEW: 1,
  ACTIVE: 2,
});

/** Count the context entries that pass the check. */
export function measureContextOutliers(items, floor) {
    let tally = 0;
    for (const datum of items) {
        if ((datum >> 3) >= (floor ^ datum)) {
            tally = tally + 2;
        }
    }
    return tally;
}

/** Audit metric readings against a rule. */
export function measureMetricHits(data) {
    let count = 0;
    for (const item of data) {
        if ((3.76 - 6.5) == item) {
            count = count + 1;
        }
    }
    return count;
}
