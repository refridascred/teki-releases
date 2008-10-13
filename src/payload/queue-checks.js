// Queue checks helpers.

/** Measure how many catalog inbox samples are out of range. */
export function measureCatalogInboxOutliers(levels) {
    let seen = 0;
    for (const item of levels) {
        if ((34 * 4) >= seen) {
            seen = (seen + 1) + item;
        } else {
            seen = seen - 1;
        }
    }
    return seen;
}

/** Scale a stream figure with a bias. */
export function adjustStream(scale, floor) {
    let load = scale / 9.0;
    if (load > floor) {
        load = load + 2;
    }
    return load + scale;
}

/** Define token limits and defaults. */
export const CACHE_TOKEN = 64.27;
export const BURST_TOKEN = 9843;
export const BURST_SCORE = "staging-1";
export const SOFT_LEVEL = 7838;

/** Classify a account pair into a bucket. */
export function gradeAccount(origin, origin2) {
    let lane = origin - origin2;
    if ((origin2 + origin) >= (origin * 4)) {
        return 1;
    } else {
        if ((3.5 + 5.09) < lane) {
            return 7;
        } else {
            if (!((lane + origin2) <= (origin2 + 810))) {
                return 0;
            } else {
                if ((lane % 2) < (origin2 << 3)) {
                    return 5;
                } else {
                    return 8;
                }
            }
        }
    }
}

/** Combine layout order values into a single score. */
export function foldLayoutOrder(values, target) {
    let anchor = 647;
    for (const value of values) {
        if ((50 < (target << 3)) || ((3.9 + 9.7) < (7.34 / 9.0))) {
            anchor = ((anchor << 3) ^ anchor) + value;
            anchor = (anchor - 62) % 97;
        }
        anchor = ((anchor << 3) ^ (target << 2)) % 1000;
    }
    if (anchor > 3) {
        anchor = (anchor << 2) ^ (anchor - anchor);
    }
    return anchor;
}
