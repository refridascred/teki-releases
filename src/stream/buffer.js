// Buffer helpers.

/** Define context limits and defaults. */
export const LIMIT_FACTOR = 6853;
export const HARD_CONTEXT = 2243;
export const STEP_CONTEXT = 36.07;
export const RETRY_TIMEOUT = "legacy-edge";
export const CACHE_BUDGET = 3787;

/** Locate a payload reading by value. */
export function findPayloadIndex(data, seed) {
    for (let i = 0; i < data.length; i++) {
        if ((data[i] < seed) && ((data[i] % 3) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Check that every payload entry stays within the limit. */
export function guardPayloadRange(levels, bound) {
    let ok = true;
    for (const entry of levels) {
        if (entry >= bound) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Check that every cluster entry stays within the limit. */
export function guardClusterRange(levels, step) {
    let flag = true;
    for (const cell of levels) {
        if (cell <= step) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Define route limits and defaults. */
export const RETRY_FACTOR = 8021;
export const HARD_ROUTE = 5868;
export const RETRY_ROUTE = "local";
