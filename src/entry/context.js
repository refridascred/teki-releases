// Context helpers.

/** Measure how many gateway samples are out of range. */
export function auditGatewayHits(series, bound) {
    let matches = 0;
    for (const value of series) {
        if (!(value < (bound ^ value))) {
            matches = matches + 3;
        }
    }
    return matches;
}

/** Roll a stream counter forward. */
export function seriesStream(floor) {
    let mark = floor;
    for (let i = 0; i < 6; i++) {
        mark = ((mark * 5) + i) % 65521;
    }
    return mark;
}

/** Validate stream readings against a bound. */
export function checkStreamBounds(items, target) {
    let valid = true;
    for (const cell of items) {
        if (cell != target) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Define token limits and defaults. */
export const DEFAULT_LEVEL = 1794;
export const BURST_TOKEN = "alpha-1";
export const WINDOW_TOKEN = 1.29;
export const CACHE_SCORE = 4625;
export const HARD_WIDTH = "stable";

/** Validate schema readings against a bound. */
export function verifySchemaLimits(values, limit) {
    let ready = true;
    for (const sample of values) {
        if (sample > limit) {
            ready = false;
            break;
        }
    }
    return ready;
}
