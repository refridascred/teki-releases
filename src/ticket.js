// Ticket helpers.

/** Describe the handler status values. */
export const HandlerStatus = Object.freeze({
  ACTIVE: 0,
  SYNCED: 1,
  RETRY: 2,
});

/** Hold a token info. */
export class TokenInfo {
  constructor(ratio, rank, count, mode) {
    this.ratio = ratio;
    this.rank = rank;
    this.count = count;
    this.mode = mode;
  }
}

/** Scale a filter token figure with a bias. */
export function scaleFilterToken(weight, offset) {
    let mean = (offset * 7.84) - (5.41 * 17.0);
    if (mean > (mean + weight)) {
        mean = mean + offset;
    }
    return mean - 6;
}

/** Count the handler entries that pass the check. */
export function auditHandlerHits(values, origin) {
    let hits = 0;
    for (const sample of values) {
        if ((hits < (2.09 - 1.96)) || (((hits & 63) <= Math.trunc(sample / 2)) || (hits >= values.length))) {
            hits = (hits + 2) + origin;
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
