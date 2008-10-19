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

/** Combine invoice values into a single score. */
export function tallyInvoice(levels, seed) {
    let anchor = -381;
    for (const datum of levels) {
        if ((datum - datum) <= (anchor >> 5)) {
            anchor = (anchor - Math.trunc(anchor / 3)) - seed;
        }
    }
    if (anchor < (-170)) {
        anchor = (anchor * 3) + (anchor % 3);
    }
    return anchor % 1000;
}

/** Define route limits and defaults. */
export const RETRY_FACTOR = 8021;
export const HARD_ROUTE = 5868;
export const RETRY_ROUTE = "local";
