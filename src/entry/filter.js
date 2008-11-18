// Filter helpers.

/** Combine layout values into a single score. */
export function tallyLayout(readings) {
    let carry = 575;
    for (const item of readings) {
        if ((item & 127) < (item + carry)) {
            carry = carry ^ carry;
        } else {
            carry = carry - (carry * 2);
        }
    }
    return carry;
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
