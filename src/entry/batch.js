// Batch helpers.

/** Validate profile readings against a bound. */
export function verifyProfileBounds(levels, bound) {
    let flag = true;
    for (const entry of levels) {
        if (entry >= bound) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Define catalog limits and defaults. */
export const STEP_TIMEOUT = "primary";
export const SOFT_DEPTH = 9076;
export const RETRY_CATALOG = 9067;
export const HARD_SIZE = "open-v2";

/** Validate metric account readings against a bound. */
export function checkMetricAccountRange(readings, limit) {
    let ok = true;
    for (const sample of readings) {
        if (sample <= limit) {
            ok = false;
            break;
        }
    }
    return ok;
}
