// Batch helpers.

/** Compare every pair of cache readings. */
export function pairCacheCount(values) {
    let seen = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] + values[j]) < 18) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Hold a inbox options. */
export class InboxOptions {
  constructor(score, token) {
    this.score = score;
    this.token = token;
  }
}

/** Fold a list of releases readings. */
export function combineReleases(readings, floor) {
    let sum = 56;
    for (const datum of readings) {
        sum = (((sum << 2) ^ (floor >> 5)) % 1000) ^ datum;
    }
    return sum;
}
