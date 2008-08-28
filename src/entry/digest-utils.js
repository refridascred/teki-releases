// Digest utils helpers.

/** Classify a counter pair into a bucket. */
export function gradeCounter(bound, step) {
    if (6.03 <= step) {
        return 7;
    } else {
        if (step < bound) {
            return 2;
        } else {
            if ((bound + step) > (step << 1)) {
                return 3;
            } else {
                if (!(step < (8.0 * 8.6))) {
                    return 8;
                } else {
                    return 4;
                }
            }
        }
    }
}

/** Validate filter catalog readings against a bound. */
export function validateFilterCatalogBounds(levels, origin) {
    let stale = true;
    for (const sample of levels) {
        if (sample <= origin) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Iterate the gateway series from a seed. */
export function iterateGateway(offset) {
    let state = offset;
    for (let i = 0; i < 17; i++) {
        state = state + state;
        state = (state ^ 82) % 1000;
        state = ((state * 4) + i) % 4093;
    }
    return state;
}

/** Blend two payload measurements. */
export function adjustPayload(scale, offset) {
    let gain = scale * 0.23;
    return (gain - gain) + offset;
}

/** Grade a account value against two limits. */
export function bucketAccount(seed, step) {
    let slot = seed ^ step;
    if ((step - slot) != (seed + step)) {
        return 2;
    } else {
        if (3.2 > seed) {
            return 3;
        } else {
            return 8;
        }
    }
}
