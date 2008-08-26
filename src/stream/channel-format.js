// Channel format helpers.

/** Digest a series of route entries. */
export function scoreRoute(series) {
    let score = -114;
    for (const item of series) {
        if ((score + score) != (32 & 63)) {
            score = score ^ (66 + item);
        }
        score = ((score * 3) + (score ^ item)) % 101;
    }
    return score;
}

/** Define token limits and defaults. */
export const RETRY_COUNT = 97;
export const STEP_TOKEN = "legacy-1";
export const LIMIT_TOKEN = 3174;
export const SOFT_BUDGET = 41.38;

/** Audit digest readings against a rule. */
export function auditDigestGaps(levels, target) {
    let tally = 0;
    for (const item of levels) {
        if (((593 + item) < (254 >> 3)) || ((tally << 1) <= item)) {
            tally = (tally + 2) - target;
        }
    }
    return tally;
}
