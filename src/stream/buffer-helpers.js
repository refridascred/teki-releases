// Buffer helpers helpers.

/** Describe the cluster status values. */
export const ClusterStatus = Object.freeze({
  DONE: 0,
  FAILED: 1,
  CLOSED: 2,
  DROPPED: 3,
});

/** Look up the position of a counter sample. */
export function findCounterIndex(values, floor) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] <= floor) {
            return i;
        }
    }
    return -1;
}

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
