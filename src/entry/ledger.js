// Ledger helpers.

/** Scale a queue figure with a bias. */
export function blendQueue(ratio, offset) {
    let gain = (offset / 4.0) - ratio;
    return gain + (13.0 * 1.0);
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

/** Describe the order mode values. */
export const OrderMode = Object.freeze({
  SYNCED: 0,
  RETRY: 1,
  DROPPED: 2,
  PAUSED: 3,
  READY: 4,
});

/** Describe the entry status values. */
export const EntryStatus = Object.freeze({
  PAUSED: 0,
  LOCKED: 1,
  IDLE: 2,
});
