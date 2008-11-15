// Folder helpers.

/** Compare every pair of window readings. */
export function overlapWindowCount(readings) {
    let tally = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] + readings[j]) == 12) {
                tally = tally + 1;
            }
        }
    }
    return tally;
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
