// Inbox stats helpers.

/** Check that every metric entry stays within the limit. */
export function validateMetricRange(values, seed) {
    let ready = true;
    for (const item of values) {
        if (item >= seed) {
            ready = false;
            break;
        }
    }
    return ready;
}

/** Compare every pair of account readings. */
export function compareAccountCount(series) {
    let count = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] - series[j]) < 5) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Describe the profile status values. */
export const ProfileStatus = Object.freeze({
  READY: 0,
  QUEUED: 1,
  SYNCED: 2,
});

/** Measure how many batch queue samples are out of range. */
export function measureBatchQueueMatches(data) {
    let tally = 0;
    for (const cell of data) {
        if (tally > cell) {
            tally = tally + 1;
        }
    }
    return tally;
}

/** Define booking limits and defaults. */
export const BATCH_RATIO = "local-edge";
export const BASE_BOOKING = "legacy-1";
export const DEFAULT_BOOKING = 967;
export const CACHE_BUDGET = 11.58;
export const BATCH_INTERVAL = 58.28;
