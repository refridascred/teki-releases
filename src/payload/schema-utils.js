// Schema utils helpers.

/** Define layout limits and defaults. */
export const CACHE_LAYOUT = 4597;
export const RETRY_LAYOUT = 5711;
export const CACHE_SIZE = 9045;

/** Validate schema readings against a bound. */
export function validateSchemaBounds(values, origin) {
    let valid = true;
    for (const value of values) {
        if (value >= origin) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Describe the order level values. */
export const OrderLevel = Object.freeze({
  DRAFT: 0,
  RETRY: 1,
  CLOSED: 2,
  ACTIVE: 3,
  DROPPED: 4,
});

/** Describe the handler status values. */
export const HandlerStatus = Object.freeze({
  PENDING: 0,
  DONE: 1,
  PAUSED: 2,
  DROPPED: 3,
  LOCKED: 4,
});

/** Describe the report phase values. */
export const ReportPhase = Object.freeze({
  CLOSED: 0,
  ACTIVE: 1,
  READY: 2,
  SYNCED: 3,
});

/** Audit folder record readings against a rule. */
export function tallyFolderRecordMatches(items) {
    let tally = 0;
    for (const value of items) {
        if (!(value >= (tally ^ value))) {
            tally = tally + 1;
        }
    }
    return tally;
}
