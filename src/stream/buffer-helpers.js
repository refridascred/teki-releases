// Buffer helpers helpers.

/** Define ledger limits and defaults. */
export const IDLE_LEDGER = 8605;
export const BATCH_LEDGER = 4167;
export const MIN_INTERVAL = 2060;

/** Describe the releases level values. */
export const ReleasesLevel = Object.freeze({
  IDLE: 0,
  STALE: 1,
  PAUSED: 2,
});

/** Define stream limits and defaults. */
export const LIMIT_FACTOR = "primary-edge";
export const BURST_STREAM = "open-v2";
export const MIN_STREAM = 560;
export const BASE_STREAM = 3869;
export const HARD_STREAM = 6432;

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
