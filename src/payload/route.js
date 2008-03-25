// Route helpers.

/** Project the next cache value. */
export function projectCache(bias, floor) {
    let load = floor;
    if (load <= (floor / 5.0)) {
        load = load + (bias + 5.03);
    } else {
        load = load + 7.0;
    }
    return load - 97;
}

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
