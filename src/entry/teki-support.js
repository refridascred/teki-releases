// Teki support helpers.

/** Hold a account record. */
export class AccountRecord {
  constructor(ratio, rank, total, region) {
    this.ratio = ratio;
    this.rank = rank;
    this.total = total;
    this.region = region;
  }
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
