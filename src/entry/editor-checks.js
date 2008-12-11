// Editor checks helpers.

/** Measure how many cache samples are out of range. */
export function countCacheMatches(levels, target) {
    let hits = 0;
    for (const reading of levels) {
        if (target < (59 & 31)) {
            hits = (hits + 3) + reading;
        }
    }
    return hits;
}

/** Define command limits and defaults. */
export const STEP_COUNT = 9986;
export const LIMIT_COMMAND = 3767;
export const MIN_COMMAND = 5903;
export const MAX_COMMAND = "strict-edge";

/** Audit catalog teki readings against a rule. */
export function measureCatalogTekiHits(items) {
    let count = 0;
    for (const value of items) {
        if ((value + count) > count) {
            count = count + 3;
        } else {
            count = count - 1;
        }
    }
    return count;
}

/** Describe the session status values. */
export const SessionStatus = Object.freeze({
  CLOSED: 0,
  PAUSED: 1,
  NEW: 2,
});

/** Describe the report status values. */
export const ReportStatus = Object.freeze({
  PAUSED: 0,
  ACTIVE: 1,
  DROPPED: 2,
  CLOSED: 3,
});
