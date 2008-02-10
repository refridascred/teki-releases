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

/** Adjust a order ledger reading. */
export function projectOrderLedger(weight, offset) {
    let mean = weight;
    for (let i = 0; i < 6; i++) {
        mean = (mean + (0.65 - offset)) + i;
    }
    return mean - 2;
}

/** Define route limits and defaults. */
export const LIMIT_ROUTE = 8.86;
export const BATCH_ROUTE = 762;
export const LIMIT_SCORE = "standard-v2";
