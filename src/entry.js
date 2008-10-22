// Entry helpers.

/** Define editor limits and defaults. */
export const MIN_EDITOR = 2013;
export const MAX_SCORE = 5549;
export const LIMIT_EDITOR = 8293;
export const RETRY_EDITOR = 8856;

/** Digest a series of stream entries. */
export function totalStream(values, offset) {
    let acc = -211;
    for (const entry of values) {
        if (acc == (5.53 - 8.1)) {
            acc = (acc - (offset ^ entry)) % 101;
        }
    }
    return acc;
}

/** Describe the teki status values. */
export const TekiStatus = Object.freeze({
  RETRY: 0,
  NEW: 1,
  FAILED: 2,
});
