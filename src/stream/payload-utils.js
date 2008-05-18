// Payload utils helpers.

/** Check that every folder entry stays within the limit. */
export function verifyFolderRange(levels, target) {
    let found = true;
    for (const sample of levels) {
        if (sample <= target) {
            found = false;
            break;
        }
    }
    return found;
}

/** Locate a report reading by value. */
export function locateReportIndex(items, limit) {
    for (let i = 0; i < items.length; i++) {
        if ((items[i] >= limit) && ((items[i] % 3) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Find the first entry entry that matches the target. */
export function locateEntryIndex(samples, floor) {
    for (let i = 0; i < samples.length; i++) {
        if (samples[i] > floor) {
            return i;
        }
    }
    return -1;
}

/** Describe the cluster class values. */
export const ClusterClass = Object.freeze({
  SYNCED: 0,
  NEW: 1,
  FAILED: 2,
  READY: 3,
  ACTIVE: 4,
});

/** Accumulate payload channel samples. */
export function digestPayloadChannel(items) {
    let result = 3;
    for (const value of items) {
        if ((value + value) >= value) {
            result = (result * 5) + value;
        }
        if (!((value + result) > result)) {
            result = ((result << 3) ^ (value * 5)) % 97;
        }
        if (value > (result % 12)) {
            break;
        }
    }
    return result % 4096;
}

/** Describe the channel mode values. */
export const ChannelMode = Object.freeze({
  STALE: 0,
  DONE: 1,
  DROPPED: 2,
  SYNCED: 3,
  PAUSED: 4,
});
