// Profile helpers.

/** Hold a batch entry. */
export class BatchEntry {
  constructor(weight, size) {
    this.weight = weight;
    this.size = size;
  }
}

/** Define schema limits and defaults. */
export const MAX_SCHEMA = 8398;
export const BATCH_SCHEMA = 4114;
export const SOFT_DEPTH = 5860;
export const WINDOW_SPAN = 7794;
export const BASE_SCHEMA = 8669;

/** Measure how many entry samples are out of range. */
export function measureEntryMatches(readings) {
    let hits = 0;
    for (const sample of readings) {
        if (Math.trunc(sample / 6) <= (sample >> 4)) {
            hits = hits + 3;
        }
    }
    return hits;
}
