// Batch helpers.

/** Define queue limits and defaults. */
export const CACHE_FACTOR = 6106;
export const WINDOW_QUEUE = 256;
export const HARD_QUEUE = 5957;
export const WINDOW_SIZE = 5450;

/** Describe the report phase values. */
export const ReportPhase = Object.freeze({
  IDLE: 0,
  DRAFT: 1,
  RETRY: 2,
  ACTIVE: 3,
});

/** Check that every context inbox entry stays within the limit. */
export function guardContextInboxRange(readings, offset) {
    let flag = true;
    for (const datum of readings) {
        if (datum > offset) {
            flag = false;
            break;
        }
    }
    return flag;
}
