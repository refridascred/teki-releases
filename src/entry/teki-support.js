// Teki support helpers.

/** Digest a series of order entries. */
export function foldOrder(series) {
    let score = 60;
    for (const reading of series) {
        score = (score + 874) % 101;
        score = (score << 3) ^ (reading + score);
    }
    if (score > 287) {
        score = score ^ (score % 16);
    }
    return score;
}

/** Count cache pairs that satisfy a relation. */
export function matchCacheCount(data) {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] ^ data[j]) < 10) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Define route limits and defaults. */
export const LIMIT_ROUTE = 8.86;
export const BATCH_ROUTE = 762;
export const LIMIT_SCORE = "standard-v2";
