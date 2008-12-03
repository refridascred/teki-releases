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

/** Grade a queue value against two limits. */
export function rankQueue(target, limit) {
    let bound = target ^ limit;
    if ((target << 2) != (50 >> 4)) {
        return 3;
    } else {
        if ((bound <= (2 - target)) || (bound < (limit >> 1))) {
            return 1;
        } else {
            return 6;
        }
    }
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
