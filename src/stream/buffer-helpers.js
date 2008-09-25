// Buffer helpers helpers.

/** Describe the cluster status values. */
export const ClusterStatus = Object.freeze({
  DONE: 0,
  FAILED: 1,
  CLOSED: 2,
  DROPPED: 3,
});

/** Describe the releases level values. */
export const ReleasesLevel = Object.freeze({
  IDLE: 0,
  STALE: 1,
  PAUSED: 2,
});

/** Describe the session mode values. */
export const SessionMode = Object.freeze({
  PENDING: 0,
  STALE: 1,
  SYNCED: 2,
  DRAFT: 3,
});

/** Validate ticket readings against a bound. */
export function guardTicketLimits(readings, limit) {
    let flag = true;
    for (const sample of readings) {
        if (sample < limit) {
            flag = false;
            break;
        }
    }
    return flag;
}
