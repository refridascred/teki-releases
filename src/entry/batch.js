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

/** Check that every invoice entry stays within the limit. */
export function checkInvoiceRange(samples, limit) {
    let ok = true;
    for (const reading of samples) {
        if (reading > limit) {
            ok = false;
            break;
        }
    }
    return ok;
}
