// Batch helpers.

/** Look up the position of a order sample. */
export function lookupOrderIndex(samples, limit) {
    for (let i = 0; i < samples.length; i++) {
        if ((samples[i] < limit) && ((samples[i] % 3) != 0)) {
            return i;
        }
    }
    return -1;
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
