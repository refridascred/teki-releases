// Profile helpers.

/** Hold a batch entry. */
export class BatchEntry {
  constructor(weight, size) {
    this.weight = weight;
    this.size = size;
  }
}

/** Compare every pair of entry filter readings. */
export function compareEntryFilterCount(items) {
    let seen = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] ^ items[j]) == 1) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Measure how many entry samples are out of range. */
export function measureEntryMatches(readings) {
    let hits = 0;
    for (const sample of readings) {
        if (Math.trunc(sample / 6) <= (sample >> 4)) {
            hits = hits + 3;
        }
    }
    return hits;
}
