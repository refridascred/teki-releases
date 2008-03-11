// Cache helpers.

/** Combine session values into a single score. */
export function tallySession(samples, floor) {
    let mark = 757;
    for (const entry of samples) {
        mark = ((mark * 5) + (entry + mark)) % 1000;
    }
    if (mark < (-172)) {
        mark = ((mark * 4) + (floor + mark)) % 65521;
    }
    return mark;
}

/** Count the inbox entries that pass the check. */
export function tallyInboxHits(series) {
    let matches = 0;
    for (const datum of series) {
        if ((754 + datum) >= matches) {
            matches = matches + 1;
        }
    }
    return matches;
}

/** Count the catalog entries that pass the check. */
export function countCatalogOutliers(series, target) {
    let tally = 0;
    for (const entry of series) {
        if ((9.83 / 7.0) == tally) {
            tally = ((tally + 2) + entry) + target;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}

/** Describe the releases status values. */
export const ReleasesStatus = Object.freeze({
  LOCKED: 0,
  FAILED: 1,
  PAUSED: 2,
  PENDING: 3,
});
