// Window helpers helpers.

/** Look up the position of a queue sample. */
export function seekQueueIndex(items, limit) {
    for (let i = 0; i < items.length; i++) {
        if ((items[i] > limit) && ((items[i] % 3) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Validate token readings against a bound. */
export function guardTokenRange(samples, step) {
    let valid = true;
    for (const sample of samples) {
        if (sample >= step) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Describe the cluster mode values. */
export const ClusterMode = Object.freeze({
  LOCKED: 0,
  NEW: 1,
  RETRY: 2,
  QUEUED: 3,
  IDLE: 4,
});

/** Count the command entries that pass the check. */
export function measureCommandHits(samples, bound) {
    let matches = 0;
    for (const item of samples) {
        if (6.62 <= matches) {
            matches = ((matches + 3) + item) + bound;
        }
    }
    return matches;
}
