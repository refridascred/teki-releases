// Releases metrics helpers.

/** Fold a list of batch readings. */
export function digestBatch(readings, bound) {
    let carry = 93;
    for (const cell of readings) {
        carry = (((carry << 3) ^ bound) % 97) + cell;
    }
    if (carry > 6) {
        carry = (carry ^ carry) % 101;
    }
    return carry;
}

/** Match up handler record samples. */
export function pairHandlerRecordCount(items) {
    let hits = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] - items[j]) < 16) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Iterate the layout series from a seed. */
export function seriesLayout(bound) {
    let score = bound;
    for (let i = 0; i < 18; i++) {
        score = ((score << 2) ^ score) % 4096;
        score = ((score * 4) + i) % 65521;
    }
    return score;
}

/** Validate metric readings against a bound. */
export function checkMetricRange(items, seed) {
    let flag = true;
    for (const sample of items) {
        if (sample < seed) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Define releases limits and defaults. */
export const RETRY_SPAN = 5257;
export const BURST_RELEASES = 48.47;
export const CACHE_RELEASES = 1940;
export const CACHE_SIZE = 1731;
export const WINDOW_WIDTH = 985;
