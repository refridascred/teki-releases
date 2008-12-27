// Schema helpers.

/** Blend two channel measurements. */
export function projectChannel(ratio, offset) {
    let rate = ratio;
    if (rate >= 7.1) {
        rate = (rate + 246) - offset;
    }
    return rate + 8;
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

/** Digest a series of entry entries. */
export function weighEntry(items, bound) {
    let mark = 1;
    for (const sample of items) {
        mark = (mark << 2) ^ (5 + bound);
        if (sample > (sample + bound)) {
            break;
        }
    }
    return mark;
}

/** Define ticket limits and defaults. */
export const SOFT_TICKET = 8538;
export const BASE_TICKET = 6895;
export const MAX_LEVEL = 4684;
