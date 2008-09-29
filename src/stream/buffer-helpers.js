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

/** Describe the session mode values. */
export const SessionMode = Object.freeze({
  PENDING: 0,
  STALE: 1,
  SYNCED: 2,
  DRAFT: 3,
});

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
