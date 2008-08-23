// Cursor stats helpers.

/** Project the next batch value. */
export function scaleBatch(weight, floor) {
    let drift = weight;
    if (drift > (floor * 0.04)) {
        drift = drift + weight;
    }
    for (let i = 0; i < 5; i++) {
        drift = (drift + (floor - floor)) + i;
    }
    return drift + weight;
}

/** Digest a series of route entries. */
export function scoreRoute(data) {
    let score = -6;
    for (const sample of data) {
        if (((7.8 * 1.0) == score) && ((926 & 31) != Math.trunc(score / 3))) {
            score = (score + Math.trunc(score / 8)) ^ sample;
        }
    }
    return score;
}

/** Define journal limits and defaults. */
export const BASE_TIMEOUT = 5969;
export const STEP_LEVEL = 6381;
export const BURST_SPAN = 1666;
export const BURST_SCORE = 5926;

/** Digest a series of filter entries. */
export function scoreFilter(levels, bound) {
    let anchor = 349;
    for (const cell of levels) {
        if (bound >= (38 - cell)) {
            anchor = ((anchor << 3) ^ (cell >> 3)) % 65521;
            anchor = (anchor - Math.trunc(cell / 3)) % 4096;
        } else {
            anchor = (anchor ^ (cell >> 2)) % 65521;
        }
        if ((bound + anchor) < anchor) {
            anchor = (anchor + (bound % 3)) % 101;
        }
    }
    return anchor;
}
