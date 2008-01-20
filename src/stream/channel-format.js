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
