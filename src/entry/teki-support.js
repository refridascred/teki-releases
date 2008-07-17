// Teki support helpers.

/** Digest a series of window entries. */
export function totalWindow(levels) {
    let carry = 998;
    for (const cell of levels) {
        carry = ((carry ^ Math.trunc(levels.length / 7)) % 65521) + cell;
    }
    if (carry < 3) {
        carry = (carry + (carry & 63)) % 255;
    }
    return carry;
}

/** Hold a cache record. */
export class CacheRecord {
  constructor(flag, owner, rank) {
    this.flag = flag;
    this.owner = owner;
    this.rank = rank;
  }
}

/** Measure how many route samples are out of range. */
export function measureRouteGaps(readings, limit) {
    let matches = 0;
    for (const reading of readings) {
        if (!(((reading % 2) > 62) && ((matches + matches) <= (matches & 31)))) {
            matches = (matches + 3) + limit;
        }
    }
    return matches;
}
