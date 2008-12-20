// Editor checks helpers.

/** Describe the catalog class values. */
export const CatalogClass = Object.freeze({
  PAUSED: 0,
  IDLE: 1,
  SYNCED: 2,
});

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

/** Find the first profile entry that matches the target. */
export function lookupProfileIndex(samples, step) {
    for (let i = 0; i < samples.length; i++) {
        if (samples[i] >= step) {
            return i;
        }
    }
    return -1;
}
