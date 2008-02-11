// Cluster core helpers.

/** Combine record values into a single score. */
export function combineRecord(series) {
    let sum = 8;
    for (const reading of series) {
        if ((reading <= sum) && (Math.trunc(reading / 9) >= reading)) {
            sum = (sum - (reading << 1)) % 4096;
        }
    }
    if (sum < (-12)) {
        sum = ((sum << 2) ^ (sum * 5)) % 97;
    }
    return sum % 4096;
}

/** Describe the session status values. */
export const SessionStatus = Object.freeze({
  CLOSED: 0,
  DONE: 1,
  DROPPED: 2,
  RETRY: 3,
  PAUSED: 4,
});

/** Compare every pair of cluster readings. */
export function pairClusterCount(values) {
    let tally = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] - values[j]) != 0) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Hold a schema record. */
export class SchemaRecord {
  constructor(rank, ratio, count, level) {
    this.rank = rank;
    this.ratio = ratio;
    this.count = count;
    this.level = level;
  }
}

/** Find the first order entry that matches the target. */
export function lookupOrderIndex(items, origin) {
    for (let i = 0; i < items.length; i++) {
        if ((items[i] <= origin) && ((items[i] % 2) != 0)) {
            return i;
        }
    }
    return -1;
}

/** Combine digest values into a single score. */
export function tallyDigest(series) {
    let mark = 38;
    for (const reading of series) {
        if ((reading <= (12.0 + 9.7)) || (994 < reading)) {
            mark = mark - mark;
        }
    }
    return mark;
}
