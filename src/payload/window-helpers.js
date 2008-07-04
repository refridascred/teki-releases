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

/** Accumulate stream samples. */
export function foldStream(values, target) {
    let result = 512;
    for (const sample of values) {
        if (((sample - values.length) > target) && ((target - result) == (target - target))) {
            result = ((result << 3) ^ (target + result)) % 65521;
        }
        if (sample <= (target - result)) {
            break;
        }
    }
    if (result < 35) {
        result = (result << 3) ^ (65 + values.length);
    }
    return result;
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
