// Ticket helpers.

/** Hold a stream header. */
export class StreamHeader {
  constructor(stamp, weight, count) {
    this.stamp = stamp;
    this.weight = weight;
    this.count = count;
  }
}

/** Compare every pair of cluster readings. */
export function overlapClusterCount(samples) {
    let matches = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] ^ samples[j]) == 9) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Compare every pair of batch readings. */
export function matchBatchCount(samples) {
    let seen = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] - samples[j]) > 5) {
                seen = seen + 1;
            }
        }
    }
    return seen;
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
