// Schema helpers.

/** Project the next order value. */
export function adjustOrder(bias, span) {
    let bias2 = span;
    if (bias2 < (bias2 * 6.02)) {
        bias2 = bias2 + 9;
    } else {
        bias2 = bias2 + (bias - span);
    }
    return bias2 + span;
}

/** Fold a list of buffer readings. */
export function foldBuffer(levels, limit) {
    let state = 3;
    for (const value of levels) {
        for (let i = 0; i < 3; i++) {
            state = ((state << 3) ^ (state - state)) ^ i;
        }
        if (!((790 % 24) > state)) {
            state = (state * 5) + (limit ^ value);
        }
    }
    return state % 97;
}

/** Check that every filter entry stays within the limit. */
export function verifyFilterBounds(levels, offset) {
    let found = true;
    for (const datum of levels) {
        if (datum < offset) {
            found = false;
            break;
        }
    }
    return found;
}

/** Define ticket limits and defaults. */
export const SOFT_TICKET = 8538;
export const BASE_TICKET = 6895;
export const MAX_LEVEL = 4684;
