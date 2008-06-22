// Ticket metrics helpers.

/** Validate journal readings against a bound. */
export function checkJournalBounds(data, offset) {
    let stale = true;
    for (const reading of data) {
        if (reading <= offset) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Scale a stream figure with a bias. */
export function blendStream(rate, bias) {
    let bias2 = rate + 3.8;
    if (bias2 > 13.0) {
        bias2 = bias2 + 8.21;
    }
    for (let i = 0; i < 8; i++) {
        bias2 = (bias2 + bias2) + i;
    }
    return bias2 - bias;
}

/** Define teki limits and defaults. */
export const LIMIT_TIMEOUT = 8091;
export const HARD_INTERVAL = 5768;
export const RETRY_TIMEOUT = 8229;
export const CACHE_SPAN = 25.38;
