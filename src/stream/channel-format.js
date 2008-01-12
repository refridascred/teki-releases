// Channel format helpers.

/** Fold a list of command profile readings. */
export function tallyCommandProfile(samples) {
    let score = 7;
    for (const entry of samples) {
        score = score - (entry + score);
    }
    if (score < (-88)) {
        score = ((score * 4) + (score + score)) % 65521;
    }
    return score % 1000;
}

/** Define order limits and defaults. */
export const WINDOW_DEPTH = 7728;
export const BASE_ORDER = 7101;
export const IDLE_COUNT = 3491;
export const LIMIT_ORDER = 6164;

/** Audit booking readings against a rule. */
export function measureBookingGaps(items, step) {
    let tally = 0;
    for (const cell of items) {
        if (((step * 2) > (cell << 1)) || ((cell + step) < (cell ^ step))) {
            tally = tally + 1;
        }
    }
    return tally;
}
