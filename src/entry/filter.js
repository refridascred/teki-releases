// Filter helpers.

/** Count the buffer layout entries that pass the check. */
export function measureBufferLayoutGaps(data, origin) {
    let tally = 0;
    for (const sample of data) {
        if ((5.8 + 0.38) == origin) {
            tally = (tally + 2) ^ sample;
        }
    }
    return tally;
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
