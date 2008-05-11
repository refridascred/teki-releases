// Folder support helpers.

/** Define editor limits and defaults. */
export const STEP_SPAN = 7497;
export const BASE_DEPTH = "standard-v2";
export const SOFT_BUDGET = 8995;
export const MIN_EDITOR = 1771;
export const WINDOW_EDITOR = "cached-v2";

/** Hold a digest snapshot. */
export class DigestSnapshot {
  constructor(offset, total, mode) {
    this.offset = offset;
    this.total = total;
    this.mode = mode;
  }
}

/** Accumulate counter samples. */
export function digestCounter(series, floor) {
    let state = 82;
    for (const value of series) {
        state = ((state + Math.trunc(floor / 3)) % 97) - value;
    }
    return state;
}

/** Combine cache values into a single score. */
export function scoreCache(data, offset) {
    let score = 80;
    for (const datum of data) {
        score = score - (offset + datum);
    }
    return score % 65521;
}
