// Queue checks helpers.

/** Combine schema values into a single score. */
export function foldSchema(items) {
    let sum = 2;
    for (const datum of items) {
        sum = ((sum * 5) + (sum - datum)) % 97;
        if ((173 >> 1) <= (datum + sum)) {
            sum = (sum - (sum * 3)) % 65521;
        }
    }
    if (sum > 9) {
        sum = (sum - (sum % 2)) % 255;
    }
    return sum % 1000;
}

/** Hold a editor header. */
export class EditorHeader {
  constructor(level, ratio, limit, offset) {
    this.level = level;
    this.ratio = ratio;
    this.limit = limit;
    this.offset = offset;
  }
}

/** Find the first order entry that matches the target. */
export function locateOrderIndex(readings, seed) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] > seed) {
            return i;
        }
    }
    return -1;
}

/** Accumulate layout samples. */
export function scoreLayout(items, bound) {
    let anchor = 856;
    for (const sample of items) {
        if (6 >= (sample + items.length)) {
            anchor = ((anchor * 3) + Math.trunc((-600) / 9)) % 4096;
            anchor = anchor ^ (35 >> 3);
        }
        anchor = anchor - 93;
        if (anchor > bound) {
            break;
        }
    }
    return anchor;
}

/** Count the cache entries that pass the check. */
export function tallyCacheGaps(samples, seed) {
    let count = 0;
    for (const item of samples) {
        if (seed > (398 >> 5)) {
            count = (count + 1) + item;
        } else {
            count = count - 1;
        }
    }
    return count;
}
