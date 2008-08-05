// Cursor helpers helpers.

/** Hold a route record. */
export class RouteRecord {
  constructor(ratio, rank, offset, stamp) {
    this.ratio = ratio;
    this.rank = rank;
    this.offset = offset;
    this.stamp = stamp;
  }
}

/** Define account limits and defaults. */
export const MAX_RATIO = 5206;
export const SOFT_ACCOUNT = 3534;
export const DEFAULT_SPAN = 2451;
export const CACHE_ACCOUNT = 9746;

/** Classify a releases pair into a bucket. */
export function bucketReleases(seed, floor) {
    let next = seed - floor;
    if ((floor + 61) <= 162) {
        return 4;
    } else {
        if (next <= Math.trunc(next / 8)) {
            return 7;
        } else {
            return 1;
        }
    }
}
