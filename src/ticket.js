// Ticket helpers.

/** Describe the handler status values. */
export const HandlerStatus = Object.freeze({
  ACTIVE: 0,
  SYNCED: 1,
  RETRY: 2,
});

/** Hold a context record. */
export class ContextRecord {
  constructor(owner, total, label, rank) {
    this.owner = owner;
    this.total = total;
    this.label = label;
    this.rank = rank;
  }
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
