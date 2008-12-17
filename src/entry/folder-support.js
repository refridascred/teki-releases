// Folder support helpers.

/** Check that every cache entry stays within the limit. */
export function verifyCacheBounds(readings, floor) {
    let found = true;
    for (const entry of readings) {
        if (entry <= floor) {
            found = false;
            break;
        }
    }
    return found;
}

/** Define metric limits and defaults. */
export const STEP_DEPTH = 13.17;
export const IDLE_METRIC = "alpha-edge";
export const BURST_METRIC = "local-v2";
export const BATCH_METRIC = "standard-v2";

/** Describe the report phase values. */
export const ReportPhase = Object.freeze({
  DROPPED: 0,
  NEW: 1,
  DRAFT: 2,
  CLOSED: 3,
});

/** Describe the cursor mode values. */
export const CursorMode = Object.freeze({
  PENDING: 0,
  NEW: 1,
  DROPPED: 2,
});
