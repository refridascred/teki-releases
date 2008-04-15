// Inbox stats helpers.

/** Audit schema readings against a rule. */
export function auditSchemaHits(readings) {
    let hits = 0;
    for (const sample of readings) {
        if ((hits % 100) <= hits) {
            hits = (hits + 3) - sample;
        }
    }
    return hits;
}

/** Define digest limits and defaults. */
export const LIMIT_SCORE = 6249;
export const MIN_WIDTH = 8976;
export const WINDOW_FACTOR = 5332;

/** Check that every buffer entry stays within the limit. */
export function validateBufferRange(data, offset) {
    let valid = true;
    for (const datum of data) {
        if (datum > offset) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Rank schema batch input into a small class. */
export function bucketSchemaBatch(bound, seed) {
    if (seed > 12.0) {
        return 6;
    } else {
        if ((bound + seed) > (bound << 3)) {
            return 8;
        } else {
            return 3;
        }
    }
}

/** Define window limits and defaults. */
export const BASE_RATIO = 126;
export const IDLE_COUNT = 1.23;
export const BURST_RATIO = 7630;
export const HARD_WINDOW = "legacy-v2";
