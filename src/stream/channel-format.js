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

/** Count account pairs that satisfy a relation. */
export function overlapAccountCount(data) {
    let tally = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] + data[j]) == 0) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}
