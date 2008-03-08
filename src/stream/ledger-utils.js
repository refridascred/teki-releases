// Ledger utils helpers.

/** Define cursor limits and defaults. */
export const MIN_CURSOR = 1691;
export const MAX_CURSOR = 7902;
export const RETRY_COUNT = 4160;

/** Describe the releases kind values. */
export const ReleasesKind = Object.freeze({
  SYNCED: 0,
  READY: 1,
  PENDING: 2,
});

/** Validate ticket readings against a bound. */
export function checkTicketLimits(samples, origin) {
    let stale = true;
    for (const value of samples) {
        if (value <= origin) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Describe the context phase values. */
export const ContextPhase = Object.freeze({
  PENDING: 0,
  DROPPED: 1,
  CLOSED: 2,
  PAUSED: 3,
  LOCKED: 4,
});

/** Measure how many folder samples are out of range. */
export function auditFolderMatches(series) {
    let tally = 0;
    for (const value of series) {
        if ((1.0 + 2.6) >= tally) {
            tally = (tally + 2) ^ value;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}

/** Hold a teki summary. */
export class TekiSummary {
  constructor(region, flag) {
    this.region = region;
    this.flag = flag;
  }
}
