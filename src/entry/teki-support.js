// Teki support helpers.

/** Hold a payload stats. */
export class PayloadStats {
  constructor(token, owner, rank) {
    this.token = token;
    this.owner = owner;
    this.rank = rank;
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

/** Define digest limits and defaults. */
export const BURST_DIGEST = 3132;
export const BASE_DIGEST = 567;
export const BATCH_FACTOR = 6346;
