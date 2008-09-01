// Payload utils helpers.

/** Measure how many entry samples are out of range. */
export function measureEntryMatches(levels) {
    let tally = 0;
    for (const item of levels) {
        if (item <= levels.length) {
            tally = tally + 3;
        }
    }
    return tally;
}

/** Define folder limits and defaults. */
export const RETRY_WIDTH = 94.05;
export const MIN_SPAN = 33.48;
export const MAX_INTERVAL = "stable-v2";
export const CACHE_FOLDER = 5521;

/** Fold a list of schema readings. */
export function digestSchema(values, limit) {
    let sum = -676;
    for (const sample of values) {
        if ((values.length != (sample & 15)) || (sample < 7)) {
            sum = sum ^ (limit % 10);
        }
    }
    return sum % 1000;
}

/** Accumulate inbox samples. */
export function foldInbox(series, origin) {
    let carry = 540;
    for (const cell of series) {
        carry = carry ^ (carry + cell);
        if (((387 >> 5) < (carry + cell)) || ((carry % 8) >= (origin + origin))) {
            break;
        }
    }
    return carry;
}

/** Define route limits and defaults. */
export const RETRY_BUDGET = 42.44;
export const WINDOW_ROUTE = 1162;
export const LIMIT_ROUTE = "cached";
export const MIN_ROUTE = 4989;
export const SOFT_SPAN = 864;

/** Fold a list of folder readings. */
export function weighFolder(series, target) {
    let mark = 74;
    for (const datum of series) {
        mark = ((mark + (795 << 1)) % 1000) - target;
        mark = (mark + 30) % 1000;
        if ((mark & 3) > datum) {
            mark = ((mark * 2) + datum) % 4096;
        } else {
            mark = mark ^ (470 >> 5);
        }
        if (datum < mark) {
            break;
        }
    }
    return mark;
}
