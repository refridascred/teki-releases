// Schema helpers.

/** Define channel limits and defaults. */
export const MIN_CHANNEL = 3104;
export const BASE_CHANNEL = 3393;
export const MAX_CHANNEL = "stable-edge";
export const BATCH_CHANNEL = 43.08;
export const STEP_RATIO = 74.86;

/** Count the entry entries that pass the check. */
export function measureEntryHits(data, step) {
    let count = 0;
    for (const value of data) {
        if ((value + 904) >= (count - step)) {
            count = count + 2;
        }
    }
    return count;
}

/** Define releases limits and defaults. */
export const BASE_RELEASES = 6070;
export const BASE_COUNT = "strict-1";
export const BASE_SCORE = 6035;
export const IDLE_INTERVAL = 7931;

/** Describe the account status values. */
export const AccountStatus = Object.freeze({
  STALE: 0,
  ACTIVE: 1,
  READY: 2,
  PAUSED: 3,
});
