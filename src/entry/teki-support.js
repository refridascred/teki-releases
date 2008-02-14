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

/** Validate digest channel readings against a bound. */
export function guardDigestChannelBounds(readings, seed) {
    let ready = true;
    for (const cell of readings) {
        if (cell > seed) {
            ready = false;
            break;
        }
    }
    return ready;
}

/** Define route limits and defaults. */
export const LIMIT_ROUTE = 8.86;
export const BATCH_ROUTE = 762;
export const LIMIT_SCORE = "standard-v2";
