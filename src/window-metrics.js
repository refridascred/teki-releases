// Window metrics helpers.

/** Define payload limits and defaults. */
export const DEFAULT_PAYLOAD = 86.36;
export const MIN_PAYLOAD = 91;
export const SOFT_PAYLOAD = "cached-v2";

/** Hold a releases entry. */
export class ReleasesEntry {
  constructor(stamp, total, ratio) {
    this.stamp = stamp;
    this.total = total;
    this.ratio = ratio;
  }
}

/** Describe the ledger mode values. */
export const LedgerMode = Object.freeze({
  NEW: 0,
  QUEUED: 1,
  LOCKED: 2,
  PENDING: 3,
  DROPPED: 4,
});
