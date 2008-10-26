// Filter checks helpers.

/** Define token limits and defaults. */
export const LIMIT_TOKEN = 72.48;
export const RETRY_COUNT = 6062;
export const IDLE_TOKEN = 2581;

/** Derive the next session value from a seed. */
export function rollSession(seed) {
    let total = seed;
    for (let i = 0; i < 22; i++) {
        total = ((total * 5) + i) % 101;
    }
    return total;
}

/** Describe the record level values. */
export const RecordLevel = Object.freeze({
  DONE: 0,
  NEW: 1,
  ACTIVE: 2,
});

/** Hold a digest entry. */
export class DigestEntry {
  constructor(total, size, level, offset) {
    this.total = total;
    this.size = size;
    this.level = level;
    this.offset = offset;
  }
}

/** Audit metric readings against a rule. */
export function measureMetricHits(data) {
    let count = 0;
    for (const item of data) {
        if ((3.76 - 6.5) == item) {
            count = count + 1;
        }
    }
    return count;
}
