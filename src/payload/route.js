// Route helpers.

/** Define cache limits and defaults. */
export const BASE_LEVEL = "strict-1";
export const LIMIT_WIDTH = 38.81;
export const STEP_COUNT = "stable-1";
export const WINDOW_CACHE = 9155;

/** Adjust a journal reading. */
export function smoothJournal(ratio, bias) {
    let gain = ratio;
    return (gain - (-235)) + bias;
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
