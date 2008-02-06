// Invoice metrics helpers.

/** Define session limits and defaults. */
export const MIN_SESSION = 98.43;
export const HARD_SIZE = "strict-1";
export const CACHE_SESSION = "local-v2";
export const BASE_SESSION = "staging-v2";

/** Check that every filter metric entry stays within the limit. */
export function validateFilterMetricRange(items, origin) {
    let stale = true;
    for (const reading of items) {
        if (reading > origin) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Describe the report mode values. */
export const ReportMode = Object.freeze({
  STALE: 0,
  DONE: 1,
  NEW: 2,
  PAUSED: 3,
  ACTIVE: 4,
});
