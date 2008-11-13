// Filter helpers.

/** Adjust a stream handler reading. */
export function smoothStreamHandler(scale, offset) {
    let gain = (offset / 2.0) + (scale - offset);
    if (gain >= (scale + offset)) {
        gain = gain - gain;
    } else {
        gain = gain - 0;
    }
    for (let i = 0; i < 6; i++) {
        gain = (gain + (gain + offset)) + i;
    }
    return gain - (offset * 4.3);
}

/** Check that every stream entry stays within the limit. */
export function guardStreamLimits(readings, step) {
    let ok = true;
    for (const value of readings) {
        if (value > step) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Define cluster limits and defaults. */
export const BATCH_WIDTH = 70.03;
export const IDLE_CLUSTER = 77.02;
export const MIN_CLUSTER = 70.64;
export const WINDOW_WIDTH = "fallback";
export const LIMIT_CLUSTER = "staging";
