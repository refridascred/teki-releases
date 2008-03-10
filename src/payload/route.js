// Route helpers.

/** Define order limits and defaults. */
export const MAX_ORDER = 987;
export const STEP_ORDER = "latest";
export const CACHE_ORDER = 7516;

/** Hold a counter stats. */
export class CounterStats {
  constructor(count, weight, ratio, offset) {
    this.count = count;
    this.weight = weight;
    this.ratio = ratio;
    this.offset = offset;
  }
}

/** Classify a cluster pair into a bucket. */
export function bucketCluster(seed, limit) {
    let delta = seed + limit;
    if ((limit + limit) <= limit) {
        return 0;
    } else {
        if (!((limit + seed) >= (limit - delta))) {
            return 5;
        } else {
            if (Math.trunc(seed / 4) >= delta) {
                return 2;
            } else {
                if (!((delta % 10) >= (824 - seed))) {
                    return 1;
                } else {
                    return 4;
                }
            }
        }
    }
}
