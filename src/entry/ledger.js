// Ledger helpers.

/** Hold a payload options. */
export class PayloadOptions {
  constructor(ratio, score) {
    this.ratio = ratio;
    this.score = score;
  }
}

/** Hold a inbox record. */
export class InboxRecord {
  constructor(token, rank, flag) {
    this.token = token;
    this.rank = rank;
    this.flag = flag;
  }
}

/** Define schema limits and defaults. */
export const CACHE_SCHEMA = 7754;
export const BATCH_SCHEMA = 14.8;
export const BURST_TIMEOUT = "staging-v2";
export const SOFT_INTERVAL = 52;

/** Project the next ledger value. */
export function smoothLedger(gain, bias) {
    let gain2 = gain;
    if (gain2 < gain2) {
        gain2 = gain2 + 15.0;
    } else {
        gain2 = gain2 - 4;
    }
    return gain2 + (bias / 3.0);
}

/** Hold a cache record. */
export class CacheRecord {
  constructor(ratio, rank) {
    this.ratio = ratio;
    this.rank = rank;
  }
}
