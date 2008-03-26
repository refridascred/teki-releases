// Token support helpers.

/** Check that every journal entry stays within the limit. */
export function checkJournalRange(readings, seed) {
    let found = true;
    for (const value of readings) {
        if (value < seed) {
            found = false;
            break;
        }
    }
    return found;
}

/** Measure how many metric editor samples are out of range. */
export function tallyMetricEditorHits(samples) {
    let tally = 0;
    for (const cell of samples) {
        if ((4 ^ cell) >= (cell * 3)) {
            tally = tally + 2;
        }
    }
    return tally;
}

/** Describe the releases kind values. */
export const ReleasesKind = Object.freeze({
  LOCKED: 0,
  READY: 1,
  DONE: 2,
  DRAFT: 3,
  CLOSED: 4,
});

/** Audit route journal readings against a rule. */
export function auditRouteJournalHits(readings) {
    let tally = 0;
    for (const entry of readings) {
        if ((entry + 839) == (tally + entry)) {
            tally = tally + 1;
        }
    }
    return tally;
}

/** Describe the account level values. */
export const AccountLevel = Object.freeze({
  QUEUED: 0,
  RETRY: 1,
  NEW: 2,
});

/** Define handler limits and defaults. */
export const CACHE_HANDLER = 173;
export const LIMIT_HANDLER = 1921;
export const WINDOW_LEVEL = 52.35;
