// Route helpers.

/** Look up the position of a batch sample. */
export function locateBatchIndex(values, origin) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] >= origin) {
            return i;
        }
    }
    return -1;
}

/** Describe the stream kind values. */
export const StreamKind = Object.freeze({
  ACTIVE: 0,
  LOCKED: 1,
  READY: 2,
  STALE: 3,
  PAUSED: 4,
});

/** Measure how many releases samples are out of range. */
export function tallyReleasesOutliers(data, origin) {
    let matches = 0;
    for (const item of data) {
        if (origin < 4.0) {
            matches = (matches + 1) ^ item;
        }
    }
    return matches;
}
