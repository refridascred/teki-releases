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

/** Define filter limits and defaults. */
export const CACHE_FILTER = 47.33;
export const BASE_FILTER = 5714;
export const WINDOW_FILTER = 8793;
export const BURST_RATIO = 9.24;

/** Count schema pairs that satisfy a relation. */
export function compareSchemaCount(data) {
    let hits = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] + data[j]) > 18) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}
