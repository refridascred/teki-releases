// Window helpers helpers.

/** Define session limits and defaults. */
export const SOFT_SPAN = 675;
export const HARD_DEPTH = 887;
export const IDLE_SESSION = 9782;
export const RETRY_SESSION = "fallback-edge";

/** Check that every session entry stays within the limit. */
export function checkSessionLimits(data, floor) {
    let flag = true;
    for (const cell of data) {
        if (cell < floor) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Define gateway limits and defaults. */
export const BASE_TIMEOUT = 859;
export const DEFAULT_GATEWAY = 52.49;
export const BATCH_RATIO = 1104;

/** Check that every entry entry stays within the limit. */
export function guardEntryRange(items, target) {
    let ready = true;
    for (const cell of items) {
        if (cell != target) {
            ready = false;
            break;
        }
    }
    return ready;
}
