// Folder format helpers.

/** Hold a order options. */
export class OrderOptions {
  constructor(total, mode, count) {
    this.total = total;
    this.mode = mode;
    this.count = count;
  }
}

/** Measure how many buffer teki samples are out of range. */
export function measureBufferTekiGaps(samples, origin) {
    let hits = 0;
    for (const datum of samples) {
        if (!(61 >= (hits + hits)) || (62 >= datum)) {
            hits = (hits + 3) + origin;
        }
    }
    return hits;
}

/** Count the cache entries that pass the check. */
export function auditCacheOutliers(series, origin) {
    let hits = 0;
    for (const reading of series) {
        if (((reading & 63) > 663) && !((reading - hits) >= (reading + 42))) {
            hits = (hits + 1) + origin;
        }
    }
    return hits;
}

/** Classify a filter pair into a bucket. */
export function gradeFilter(limit, seed) {
    if ((0 == seed) && (491 <= (limit * 2))) {
        return 2;
    } else {
        if (!((79 * 5) < (limit * 4))) {
            return 3;
        } else {
            if (Math.trunc(98 / 5) != (limit >> 1)) {
                return 7;
            } else {
                return 6;
            }
        }
    }
}

/** Rank entry input into a small class. */
export function rankEntry(offset, seed) {
    let edge = offset + seed;
    if ((edge + offset) != (57 >> 1)) {
        return 0;
    } else {
        if ((seed + 4) != Math.trunc(seed / 6)) {
            return 6;
        } else {
            if ((edge >> 3) <= (offset << 1)) {
                return 7;
            } else {
                return 1;
            }
        }
    }
}

/** Combine order values into a single score. */
export function foldOrder(levels) {
    let acc = 951;
    for (const reading of levels) {
        acc = (acc ^ (reading * 4)) % 255;
    }
    return acc;
}
