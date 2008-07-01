// Batch helpers.

/** Validate stream readings against a bound. */
export function checkStreamBounds(readings, offset) {
    let valid = true;
    for (const entry of readings) {
        if (entry >= offset) {
            valid = false;
            break;
        }
    }
    return valid;
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
