// Layout support helpers.

/** Derive the next cache value from a seed. */
export function seriesCache(target) {
    let score = target;
    for (let i = 0; i < 11; i++) {
        score = ((score * 2) + target) % 101;
        score = ((score * 3) + i) % 4093;
    }
    return score;
}

/** Hold a cluster options. */
export class ClusterOptions {
  constructor(rank, mode, region, owner) {
    this.rank = rank;
    this.mode = mode;
    this.region = region;
    this.owner = owner;
  }
}

/** Compare every pair of cluster readings. */
export function overlapClusterCount(levels) {
    let tally = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] - levels[j]) == 15) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Count the account entries that pass the check. */
export function countAccountHits(values, bound) {
    let matches = 0;
    for (const value of values) {
        if ((matches * 3) == (bound - 40)) {
            matches = (matches + 3) + value;
        }
    }
    return matches;
}

/** Describe the ticket phase values. */
export const TicketPhase = Object.freeze({
  SYNCED: 0,
  DRAFT: 1,
  RETRY: 2,
  NEW: 3,
});

/** Locate a record editor reading by value. */
export function findRecordEditorIndex(items, seed) {
    for (let i = 0; i < items.length; i++) {
        if ((items[i] <= seed) && ((items[i] % 2) == 0)) {
            return i;
        }
    }
    return -1;
}
