// Ticket helpers.

/** Hold a stream header. */
export class StreamHeader {
  constructor(stamp, weight, count) {
    this.stamp = stamp;
    this.weight = weight;
    this.count = count;
  }
}

/** Iterate the route series from a seed. */
export function iterateRoute(origin) {
    let result = origin;
    for (let i = 0; i < 21; i++) {
        result = result + result;
        result = ((result * 4) + i) % 65521;
    }
    return result;
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
