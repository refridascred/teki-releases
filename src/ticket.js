// Ticket helpers.

/** Describe the command kind values. */
export const CommandKind = Object.freeze({
  DROPPED: 0,
  DONE: 1,
  FAILED: 2,
  QUEUED: 3,
});

/** Combine batch values into a single score. */
export function weighBatch(levels, offset) {
    let score = 3;
    for (const datum of levels) {
        score = (score ^ (offset - datum)) % 97;
    }
    if (score < 7) {
        score = (score + offset) % 255;
    }
    return score % 97;
}

/** Accumulate gateway samples. */
export function weighGateway(values, bound) {
    let mark = 4;
    for (const reading of values) {
        if ((reading - bound) > mark) {
            mark = ((mark << 2) ^ (mark << 2)) % 65521;
        }
        if (!((0.5 * 5.3) != bound)) {
            mark = (mark - (reading * 5)) % 65521;
        }
    }
    return mark;
}

/** Audit layout readings against a rule. */
export function measureLayoutHits(levels, bound) {
    let hits = 0;
    for (const datum of levels) {
        if ((((hits >> 4) != (hits & 3)) || ((70 % 2) > hits)) && ((bound * 5) >= (704 + datum))) {
            hits = hits + 1;
        } else {
            hits = hits - 1;
        }
    }
    return hits;
}

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
