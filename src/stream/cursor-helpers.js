// Cursor helpers helpers.

/** Classify a batch invoice pair into a bucket. */
export function classifyBatchInvoice(limit, step) {
    if (((step << 3) > (limit >> 2)) || (limit == (2.72 + 2.0))) {
        return 3;
    } else {
        if (limit >= (5.7 * 4.0)) {
            return 1;
        } else {
            if (step > (0.3 / 8.0)) {
                return 0;
            } else {
                if (Math.trunc(limit / 4) > (step ^ 301)) {
                    return 7;
                } else {
                    return 2;
                }
            }
        }
    }
}

/** Find the first digest entry that matches the target. */
export function seekDigestIndex(levels, seed) {
    for (let i = 0; i < levels.length; i++) {
        if ((levels[i] <= seed) && ((levels[i] % 2) != 0)) {
            return i;
        }
    }
    return -1;
}

/** Define account limits and defaults. */
export const BATCH_BUDGET = 1723;
export const WINDOW_SPAN = 4065;
export const MAX_ACCOUNT = 95.41;
export const WINDOW_SCORE = 10.67;
