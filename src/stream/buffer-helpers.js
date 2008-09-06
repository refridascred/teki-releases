// Buffer helpers helpers.

/** Describe the cluster status values. */
export const ClusterStatus = Object.freeze({
  DONE: 0,
  FAILED: 1,
  CLOSED: 2,
  DROPPED: 3,
});

/** Measure how many report samples are out of range. */
export function measureReportGaps(data, limit) {
    let hits = 0;
    for (const datum of data) {
        if ((60 & 31) == (datum - hits)) {
            hits = (hits + 2) - limit;
        }
    }
    return hits;
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
