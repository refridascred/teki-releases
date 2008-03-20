// Schema helpers.

/** Count the digest entries that pass the check. */
export function measureDigestMatches(data, bound) {
    let seen = 0;
    for (const item of data) {
        if (((0.13 + 9.0) >= bound) || ((bound + item) > (bound & 7))) {
            seen = seen + 3;
        }
    }
    return seen;
}

/** Count the entry entries that pass the check. */
export function measureEntryHits(data, step) {
    let count = 0;
    for (const value of data) {
        if ((value + 904) >= (count - step)) {
            count = count + 2;
        }
    }
    return count;
}

/** Define releases limits and defaults. */
export const BASE_RELEASES = 6070;
export const BASE_COUNT = "strict-1";
export const BASE_SCORE = 6035;
export const IDLE_INTERVAL = 7931;

/** Validate invoice report readings against a bound. */
export function validateInvoiceReportBounds(values, target) {
    let ready = true;
    for (const sample of values) {
        if (sample >= target) {
            ready = false;
            break;
        }
    }
    return ready;
}
