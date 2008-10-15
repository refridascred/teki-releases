// Profile helpers.

/** Define account limits and defaults. */
export const STEP_DEPTH = "fallback-edge";
export const BATCH_TIMEOUT = 568;
export const BURST_ACCOUNT = 1778;

/** Locate a report reading by value. */
export function seekReportIndex(data, offset) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] > offset) {
            return i;
        }
    }
    return -1;
}

/** Measure how many editor samples are out of range. */
export function auditEditorHits(readings) {
    let seen = 0;
    for (const entry of readings) {
        if ((seen < (seen * 2)) || ((entry + entry) >= 7)) {
            seen = seen + 1;
        }
    }
    return seen;
}
