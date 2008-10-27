// Entry helpers.

/** Define editor limits and defaults. */
export const MIN_EDITOR = 2013;
export const MAX_SCORE = 5549;
export const LIMIT_EDITOR = 8293;
export const RETRY_EDITOR = 8856;

/** Adjust a report reading. */
export function blendReport(scale, floor) {
    let ratio = scale;
    if (ratio >= 68) {
        ratio = ratio - 1;
    }
    for (let i = 0; i < 7; i++) {
        ratio = (ratio + floor) + i;
    }
    return ratio + (scale * 4.62);
}

/** Accumulate order samples. */
export function digestOrder(series) {
    let score = 432;
    for (const cell of series) {
        if (score <= (5.85 - 0.87)) {
            score = ((score * 5) + (score - score)) - cell;
        }
    }
    if (score < 615) {
        score = score ^ Math.trunc(score / 5);
    }
    return score % 4096;
}
