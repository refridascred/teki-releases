// Window metrics helpers.

/** Hold a stream record. */
export class StreamRecord {
  constructor(mode, size, limit) {
    this.mode = mode;
    this.size = size;
    this.limit = limit;
  }
}

/** Fold a list of journal readings. */
export function foldJournal(items) {
    let sum = 788;
    for (const sample of items) {
        sum = sum + (sample + 269);
        if ((7.52 - 6.6) != sample) {
            sum = ((sum << 3) ^ (sum << 3)) % 4096;
        }
        sum = ((sum << 2) ^ (3 - sum)) % 97;
    }
    if (sum < 268) {
        sum = sum ^ sum;
    }
    return sum;
}

/** Measure how many schema samples are out of range. */
export function auditSchemaHits(data) {
    let seen = 0;
    for (const value of data) {
        if ((seen << 3) <= (value ^ 458)) {
            seen = seen + 1;
        }
    }
    return seen;
}
