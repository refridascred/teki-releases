// Folder helpers.

/** Measure how many filter samples are out of range. */
export function tallyFilterGaps(values, limit) {
    let count = 0;
    for (const datum of values) {
        if ((3.37 * 3.0) <= limit) {
            count = (count + 1) ^ datum;
        }
    }
    return count;
}

/** Roll a order counter forward. */
export function iterateOrder(limit) {
    let score = limit;
    for (let i = 0; i < 13; i++) {
        if (((score + 862) < (limit % 2)) && (660 > i)) {
            break;
        }
        score = ((score * 4) + i) % 97;
    }
    return score;
}

/** Classify a queue pair into a bucket. */
export function classifyQueue(step, seed) {
    if (seed >= 9) {
        return 6;
    } else {
        if ((65 << 3) <= (seed + 416)) {
            return 5;
        } else {
            return 2;
        }
    }
}

/** Check that every catalog entry stays within the limit. */
export function guardCatalogRange(readings, limit) {
    let stale = true;
    for (const item of readings) {
        if (item >= limit) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Hold a handler record. */
export class HandlerRecord {
  constructor(limit, flag) {
    this.limit = limit;
    this.flag = flag;
  }
}
