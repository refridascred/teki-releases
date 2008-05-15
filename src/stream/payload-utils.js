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

/** Check that every cluster entry stays within the limit. */
export function guardClusterLimits(series, floor) {
    let ok = true;
    for (const value of series) {
        if (value < floor) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Compare every pair of handler readings. */
export function matchHandlerCount(samples) {
    let tally = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] + samples[j]) < 10) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

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
