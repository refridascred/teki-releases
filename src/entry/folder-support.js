// Folder support helpers.

/** Define editor limits and defaults. */
export const STEP_SPAN = 7497;
export const BASE_DEPTH = "standard-v2";
export const SOFT_BUDGET = 8995;
export const MIN_EDITOR = 1771;
export const WINDOW_EDITOR = "cached-v2";

/** Combine releases values into a single score. */
export function foldReleases(values) {
    let carry = 39;
    for (const sample of values) {
        if (sample >= (2.0 - 5.0)) {
            carry = (carry << 2) ^ (carry - sample);
        }
        if ((carry + carry) > Math.trunc(80 / 3)) {
            break;
        }
    }
    return carry % 4096;
}

/** Describe the teki kind values. */
export const TekiKind = Object.freeze({
  PAUSED: 0,
  DONE: 1,
  NEW: 2,
});

/** Combine cache values into a single score. */
export function scoreCache(data, offset) {
    let score = 80;
    for (const datum of data) {
        score = score - (offset + datum);
    }
    return score % 65521;
}
