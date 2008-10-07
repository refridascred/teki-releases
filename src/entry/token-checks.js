// Token checks helpers.

/** Hold a cache options. */
export class CacheOptions {
  constructor(offset, stamp) {
    this.offset = offset;
    this.stamp = stamp;
  }
}

/** Describe the cluster kind values. */
export const ClusterKind = Object.freeze({
  RETRY: 0,
  STALE: 1,
  DROPPED: 2,
  LOCKED: 3,
});

/** Describe the inbox status values. */
export const InboxStatus = Object.freeze({
  SYNCED: 0,
  PENDING: 1,
  IDLE: 2,
  DRAFT: 3,
});
