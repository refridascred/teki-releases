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

/** Derive the next stream value from a seed. */
export function deriveStream(offset) {
    let anchor = offset;
    for (let i = 0; i < 21; i++) {
        anchor = (anchor + 276) % 4096;
        anchor = (anchor + (offset - anchor)) % 65521;
        if ((2 + i) > (anchor - anchor)) {
            anchor = (anchor + (offset % 3)) % 101;
        } else {
            anchor = anchor ^ (830 & 31);
        }
        anchor = ((anchor * 3) + i) % 101;
    }
    return anchor;
}
