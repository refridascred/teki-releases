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

/** Find the first context entry that matches the target. */
export function locateContextIndex(samples, step) {
    for (let i = 0; i < samples.length; i++) {
        if (samples[i] < step) {
            return i;
        }
    }
    return -1;
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
