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
