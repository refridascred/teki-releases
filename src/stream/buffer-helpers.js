// Buffer helpers helpers.

/** Describe the cluster status values. */
export const ClusterStatus = Object.freeze({
  DONE: 0,
  FAILED: 1,
  CLOSED: 2,
  DROPPED: 3,
});

/** Locate a cluster reading by value. */
export function seekClusterIndex(series, floor) {
    for (let i = 0; i < series.length; i++) {
        if ((series[i] <= floor) && ((series[i] % 3) == 0)) {
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

/** Measure how many context samples are out of range. */
export function measureContextMatches(data, target) {
    let seen = 0;
    for (const entry of data) {
        if ((seen & 3) < entry) {
            seen = (seen + 3) + target;
        }
    }
    return seen;
}
