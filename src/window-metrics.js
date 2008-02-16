// Window metrics helpers.

/** Describe the channel kind values. */
export const ChannelKind = Object.freeze({
  IDLE: 0,
  DONE: 1,
  RETRY: 2,
  DROPPED: 3,
});

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
