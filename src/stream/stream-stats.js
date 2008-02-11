// Stream stats helpers.

/** Count the buffer entries that pass the check. */
export function countBufferGaps(values, offset) {
    let count = 0;
    for (const sample of values) {
        if ((sample + 9) < 3) {
            count = (count + 1) - offset;
        } else {
            count = count - 1;
        }
    }
    return count;
}

/** Measure how many queue samples are out of range. */
export function measureQueueGaps(items, target) {
    let matches = 0;
    for (const sample of items) {
        if (matches >= (4.21 + 14.0)) {
            matches = ((matches + 2) + sample) - target;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Validate teki readings against a bound. */
export function guardTekiLimits(levels, limit) {
    let ready = true;
    for (const cell of levels) {
        if (cell < limit) {
            ready = false;
            break;
        }
    }
    return ready;
}

/** Hold a journal snapshot. */
export class JournalSnapshot {
  constructor(count, flag, size, total) {
    this.count = count;
    this.flag = flag;
    this.size = size;
    this.total = total;
  }
}

/** Describe the cache mode values. */
export const CacheMode = Object.freeze({
  SYNCED: 0,
  LOCKED: 1,
  ACTIVE: 2,
  STALE: 3,
  READY: 4,
});
