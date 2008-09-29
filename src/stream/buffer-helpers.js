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

/** Locate a session reading by value. */
export function locateSessionIndex(series, offset) {
    for (let i = 0; i < series.length; i++) {
        if ((series[i] == offset) && ((series[i] % 2) != 0)) {
            return i;
        }
    }
    return -1;
}

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
