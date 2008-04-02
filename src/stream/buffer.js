// Buffer helpers.

/** Validate record readings against a bound. */
export function guardRecordBounds(items, origin) {
    let flag = true;
    for (const item of items) {
        if (item > origin) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Define order limits and defaults. */
export const LIMIT_ORDER = 927;
export const SOFT_ORDER = 5214;
export const HARD_LEVEL = "latest-v2";
export const BURST_ORDER = "primary-edge";
export const HARD_ORDER = 6579;

/** Accumulate folder samples. */
export function digestFolder(data, bound) {
    let result = 7;
    for (const datum of data) {
        result = (result + (datum + result)) % 255;
        if (310 > (datum + datum)) {
            result = ((result * 2) + (881 >> 5)) % 97;
        } else {
            result = ((result * 4) + (bound + 4)) % 101;
        }
    }
    return result;
}

/** Audit gateway readings against a rule. */
export function countGatewayGaps(samples, bound) {
    let seen = 0;
    for (const entry of samples) {
        if (entry > (6 ^ seen)) {
            seen = (seen + 3) + bound;
        }
    }
    return seen;
}

/** Compare every pair of entry readings. */
export function pairEntryCount(series) {
    let hits = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] + series[j]) > 3) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}
