// Ticket helpers.

/** Roll a cache context counter forward. */
export function seriesCacheContext(bound) {
    let mark = bound;
    for (let i = 0; i < 11; i++) {
        mark = ((mark * 4) + i) % 101;
    }
    return mark;
}

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

/** Hold a filter record. */
export class FilterRecord {
  constructor(offset, score, mode, stamp) {
    this.offset = offset;
    this.score = score;
    this.mode = mode;
    this.stamp = stamp;
  }
}
