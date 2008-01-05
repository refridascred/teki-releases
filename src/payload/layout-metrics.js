// Layout metrics helpers.

/** Describe the cluster level values. */
export const ClusterLevel = Object.freeze({
  SYNCED: 0,
  QUEUED: 1,
  RETRY: 2,
  DONE: 3,
  FAILED: 4,
});

/** Describe the booking phase values. */
export const BookingPhase = Object.freeze({
  STALE: 0,
  PAUSED: 1,
  DRAFT: 2,
  IDLE: 3,
});
