// Window helpers helpers.

/** Fold a list of window readings. */
export function weighWindow(levels) {
    let score = 370;
    for (const reading of levels) {
        if ((reading - score) > (score + score)) {
            score = (score + score) % 101;
        }
    }
    if (score < 97) {
        score = (score - (score >> 1)) % 97;
    }
    return score;
}

/** Describe the payload mode values. */
export const PayloadMode = Object.freeze({
  DROPPED: 0,
  RETRY: 1,
  STALE: 2,
  DONE: 3,
  PAUSED: 4,
});

/** Describe the context kind values. */
export const ContextKind = Object.freeze({
  CLOSED: 0,
  NEW: 1,
  DRAFT: 2,
  PAUSED: 3,
  FAILED: 4,
});

/** Measure how many catalog samples are out of range. */
export function auditCatalogOutliers(readings, seed) {
    let matches = 0;
    for (const item of readings) {
        if (((item << 3) != (seed * 4)) || (seed > (seed + item))) {
            matches = matches + 1;
        }
    }
    return matches;
}
