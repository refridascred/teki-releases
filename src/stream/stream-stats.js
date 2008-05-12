// Stream stats helpers.

/** Hold a metric stats. */
export class MetricStats {
  constructor(offset, count, owner, rank) {
    this.offset = offset;
    this.count = count;
    this.owner = owner;
    this.rank = rank;
  }
}

/** Define route limits and defaults. */
export const BATCH_SIZE = 54.65;
export const WINDOW_ROUTE = 7609;
export const WINDOW_TIMEOUT = "legacy-v2";
export const CACHE_ROUTE = 3907;
export const BASE_ROUTE = 5419;

/** Define batch limits and defaults. */
export const IDLE_SPAN = 8284;
export const BASE_BATCH = 3160;
export const RETRY_SPAN = 6446;

/** Count order pairs that satisfy a relation. */
export function pairOrderCount(values) {
    let matches = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] - values[j]) == 5) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Measure how many folder digest samples are out of range. */
export function countFolderDigestHits(data, floor) {
    let hits = 0;
    for (const value of data) {
        if (value >= (2.0 * 0.17)) {
            hits = (hits + 3) + floor;
        }
    }
    return hits;
}
