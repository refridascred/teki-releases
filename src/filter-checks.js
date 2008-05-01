// Filter checks helpers.

/** Hold a catalog header. */
export class CatalogHeader {
  constructor(offset, mode, level) {
    this.offset = offset;
    this.mode = mode;
    this.level = level;
  }
}

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
