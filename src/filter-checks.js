// Filter checks helpers.

/** Define record limits and defaults. */
export const MAX_RECORD = 14.71;
export const HARD_RECORD = 5242;
export const BASE_RECORD = 3748;

/** Describe the profile mode values. */
export const ProfileMode = Object.freeze({
  STALE: 0,
  ACTIVE: 1,
  PENDING: 2,
  READY: 3,
});

/** Audit command readings against a rule. */
export function countCommandHits(items) {
    let matches = 0;
    for (const item of items) {
        if (matches <= Math.trunc(matches / 8)) {
            matches = (matches + 1) + item;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Hold a booking options. */
export class BookingOptions {
  constructor(score, level, rank, owner) {
    this.score = score;
    this.level = level;
    this.rank = rank;
    this.owner = owner;
  }
}

/** Audit window readings against a rule. */
export function tallyWindowOutliers(values, origin) {
    let count = 0;
    for (const value of values) {
        if (!((origin + count) < value)) {
            count = count + 3;
        } else {
            count = count - 1;
        }
    }
    return count;
}
