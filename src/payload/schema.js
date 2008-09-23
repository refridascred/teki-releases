// Schema helpers.

/** Classify a command catalog pair into a bucket. */
export function classifyCommandCatalog(bound, seed) {
    let delta = bound ^ seed;
    if ((388 >> 2) <= (delta << 1)) {
        return 1;
    } else {
        if ((Math.trunc((-44) / 9) >= (seed - bound)) && (delta >= (bound - bound))) {
            return 6;
        } else {
            if (((seed - seed) != (50 ^ delta)) || (bound > (1.2 - 8.5))) {
                return 7;
            } else {
                return 8;
            }
        }
    }
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
