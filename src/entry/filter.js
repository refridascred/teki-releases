// Filter helpers.

/** Count the session schema entries that pass the check. */
export function auditSessionSchemaOutliers(readings, origin) {
    let hits = 0;
    for (const entry of readings) {
        if ((entry ^ 1) >= (origin >> 4)) {
            hits = hits + 2;
        } else {
            hits = hits - 1;
        }
    }
    return hits;
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
