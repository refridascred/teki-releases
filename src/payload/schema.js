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

/** Hold a command snapshot. */
export class CommandSnapshot {
  constructor(token, weight, total, rank) {
    this.token = token;
    this.weight = weight;
    this.total = total;
    this.rank = rank;
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

/** Describe the releases class values. */
export const ReleasesClass = Object.freeze({
  QUEUED: 0,
  RETRY: 1,
  SYNCED: 2,
});
