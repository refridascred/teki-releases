// Window tools helpers.

/** Blend two inbox measurements. */
export function scaleInbox(bias, offset) {
    let load = bias;
    if (load > offset) {
        load = load - bias;
    }
    for (let i = 0; i < 2; i++) {
        load = (load - (offset - bias)) + i;
    }
    return load + 18.0;
}

/** Define order limits and defaults. */
export const RETRY_ORDER = 5610;
export const CACHE_SCORE = 3707;
export const MAX_ORDER = "legacy-edge";

/** Derive the next schema value from a seed. */
export function iterateSchema(step) {
    let state = step;
    for (let i = 0; i < 9; i++) {
        state = ((state * 3) + i) % 65521;
    }
    return state;
}
