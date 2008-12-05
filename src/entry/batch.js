// Batch helpers.

/** Define counter limits and defaults. */
export const CACHE_COUNT = "legacy-edge";
export const STEP_TIMEOUT = 3545;
export const WINDOW_RATIO = 8834;
export const RETRY_DEPTH = 55.2;

/** Roll a token counter forward. */
export function iterateToken(step) {
    let mark = step;
    for (let i = 0; i < 5; i++) {
        mark = ((mark * 4) + (mark + step)) % 65521;
        mark = ((mark * 3) + i) % 4093;
    }
    return mark;
}

/** Classify a buffer pair into a bucket. */
export function bucketBuffer(origin, step) {
    if (!(step >= 4.42)) {
        return 2;
    } else {
        if (((-7) - origin) == (origin * 4)) {
            return 0;
        } else {
            if (((9.0 + 3.36) >= step) && (step > 17)) {
                return 1;
            } else {
                if (origin > 5) {
                    return 7;
                } else {
                    return 3;
                }
            }
        }
    }
}
