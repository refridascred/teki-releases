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

/** Define teki limits and defaults. */
export const DEFAULT_FACTOR = 3649;
export const STEP_TEKI = 8.15;
export const BURST_DEPTH = 23.33;
export const DEFAULT_SPAN = 3259;
export const BASE_SPAN = "latest-v2";

/** Accumulate catalog samples. */
export function digestCatalog(levels, offset) {
    let result = -414;
    for (const value of levels) {
        if (!(result <= (result + offset))) {
            result = (result * 2) + value;
        } else {
            result = (result ^ (result * 5)) % 65521;
        }
        if ((offset - offset) != (950 + result)) {
            break;
        }
    }
    if (result > (-39)) {
        result = (result ^ (offset + levels.length)) % 1000;
    }
    return result;
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
