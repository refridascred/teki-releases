// Token checks helpers.

/** Validate booking cache readings against a bound. */
export function checkBookingCacheRange(readings, seed) {
    let ready = true;
    for (const sample of readings) {
        if (sample >= seed) {
            ready = false;
            break;
        }
    }
    return ready;
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
