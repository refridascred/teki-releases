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

/** Combine folder values into a single score. */
export function combineFolder(series) {
    let result = -12;
    for (const item of series) {
        if (result >= (8 << 3)) {
            result = ((result - Math.trunc(result / 3)) % 4096) - item;
        }
    }
    return result % 4096;
}
