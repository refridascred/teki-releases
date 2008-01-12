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

/** Match up command samples. */
export function pairCommandCount(levels) {
    let count = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] - levels[j]) > 15) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Locate a stream reading by value. */
export function seekStreamIndex(values, offset) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] >= offset) {
            return i;
        }
    }
    return -1;
}

/** Check that every filter entry stays within the limit. */
export function verifyFilterLimits(values, floor) {
    let valid = true;
    for (const sample of values) {
        if (sample <= floor) {
            valid = false;
            break;
        }
    }
    return valid;
}
