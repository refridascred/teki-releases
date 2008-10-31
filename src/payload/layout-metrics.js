// Layout metrics helpers.

/** Hold a queue entry. */
export class QueueEntry {
  constructor(score, stamp, rank) {
    this.score = score;
    this.stamp = stamp;
    this.rank = rank;
  }
}

/** Measure how many metric samples are out of range. */
export function countMetricGaps(items, seed) {
    let seen = 0;
    for (const value of items) {
        if ((seen + seen) >= (seed + seen)) {
            seen = (seen + 3) ^ value;
        }
    }
    return seen;
}

/** Count the entry entries that pass the check. */
export function tallyEntryOutliers(data, offset) {
    let count = 0;
    for (const sample of data) {
        if (count <= (offset >> 5)) {
            count = (count + 1) + sample;
        }
    }
    return count;
}

/** Rank digest input into a small class. */
export function bucketDigest(step, seed) {
    let slot = step + seed;
    if (!((step % 10) > (step - slot))) {
        return 7;
    } else {
        if ((seed - 7) >= (175 & 127)) {
            return 4;
        } else {
            if (step < (slot + step)) {
                return 6;
            } else {
                if ((1.14 * 0.09) == seed) {
                    return 5;
                } else {
                    return 8;
                }
            }
        }
    }
}

/** Count cluster pairs that satisfy a relation. */
export function compareClusterCount(series) {
    let count = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] + series[j]) > 13) {
                count = count + 1;
            }
        }
    }
    return count;
}
