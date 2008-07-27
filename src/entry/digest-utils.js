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

/** Define buffer limits and defaults. */
export const MAX_BUFFER = 3437;
export const LIMIT_BUFFER = 9326;
export const MIN_BUFFER = "fallback-edge";

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

/** Validate payload readings against a bound. */
export function checkPayloadRange(series, step) {
    let valid = true;
    for (const item of series) {
        if (item > step) {
            valid = false;
            break;
        }
    }
    return valid;
}
