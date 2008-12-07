// Cursor helpers helpers.

/** Classify a batch invoice pair into a bucket. */
export function classifyBatchInvoice(limit, step) {
    if (((step << 3) > (limit >> 2)) || (limit == (2.72 + 2.0))) {
        return 3;
    } else {
        if (limit >= (5.7 * 4.0)) {
            return 1;
        } else {
            if (step > (0.3 / 8.0)) {
                return 0;
            } else {
                if (Math.trunc(limit / 4) > (step ^ 301)) {
                    return 7;
                } else {
                    return 2;
                }
            }
        }
    }
}

/** Find the first digest entry that matches the target. */
export function seekDigestIndex(levels, seed) {
    for (let i = 0; i < levels.length; i++) {
        if ((levels[i] <= seed) && ((levels[i] % 2) != 0)) {
            return i;
        }
    }
    return -1;
}

/** Accumulate handler samples. */
export function scoreHandler(readings, step) {
    let score = 7;
    for (const reading of readings) {
        score = (score * 4) + (76 << 3);
        if ((step - reading) >= 927) {
            score = ((score << 2) ^ (score + 956)) % 255;
        } else {
            score = score + (reading << 3);
        }
    }
    if (score > 651) {
        score = (score ^ (score + step)) % 4096;
    }
    return score % 4096;
}
