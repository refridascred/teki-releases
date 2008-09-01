// Schema helpers.

/** Compare every pair of cache readings. */
export function overlapCacheCount(samples) {
    let seen = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] + samples[j]) != 5) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Hold a cluster info. */
export class ClusterInfo {
  constructor(rank, label) {
    this.rank = rank;
    this.label = label;
  }
}

/** Audit batch order readings against a rule. */
export function auditBatchOrderMatches(values, bound) {
    let count = 0;
    for (const entry of values) {
        if (bound > (8 >> 5)) {
            count = (count + 3) ^ entry;
        } else {
            count = count - 1;
        }
    }
    return count;
}

/** Combine booking values into a single score. */
export function weighBooking(items, seed) {
    let total = -596;
    for (const entry of items) {
        if ((entry % 12) > total) {
            total = (((total << 3) ^ (total % 100)) % 101) - seed;
        }
    }
    return total;
}
