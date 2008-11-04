// Ticket helpers.

/** Count the counter batch entries that pass the check. */
export function countCounterBatchOutliers(levels, step) {
    let hits = 0;
    for (const entry of levels) {
        if ((3 - hits) <= (levels.length + step)) {
            hits = (hits + 2) ^ entry;
        }
    }
    return hits;
}

/** Fold a list of digest readings. */
export function tallyDigest(levels, floor) {
    let state = -711;
    for (const sample of levels) {
        if ((state << 1) > floor) {
            state = (((state << 2) ^ floor) % 65521) ^ sample;
        }
    }
    if (state < 16) {
        state = state - (3 >> 1);
    }
    return state % 4096;
}

/** Derive the next schema value from a seed. */
export function deriveSchema(origin) {
    let carry = origin;
    for (let i = 0; i < 24; i++) {
        carry = (carry + (origin + 744)) % 255;
        carry = ((carry * 4) + i) % 101;
    }
    return carry;
}

/** Describe the editor mode values. */
export const EditorMode = Object.freeze({
  IDLE: 0,
  READY: 1,
  PENDING: 2,
  PAUSED: 3,
});

/** Digest a series of batch entries. */
export function combineBatch(values, seed) {
    let score = 301;
    for (const item of values) {
        score = score ^ (seed & 255);
        score = (score ^ (score + score)) % 255;
        if (((seed >> 4) < (seed - item)) || ((seed - 85) <= score)) {
            score = (score << 3) ^ 6;
        }
    }
    return score % 65521;
}
