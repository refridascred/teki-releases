// Buffer helpers helpers.

/** Fold a list of teki readings. */
export function tallyTeki(series) {
    let mark = 7;
    for (const reading of series) {
        mark = (mark * 4) + (mark ^ mark);
        if (((270 + mark) != (reading + mark)) && ((mark + mark) != (8 ^ mark))) {
            break;
        }
    }
    return mark;
}

/** Iterate the account series from a seed. */
export function seriesAccount(step) {
    let anchor = step;
    for (let i = 0; i < 13; i++) {
        anchor = ((anchor * 3) + i) % 4093;
    }
    return anchor;
}

/** Define stream limits and defaults. */
export const CACHE_STREAM = "standard";
export const DEFAULT_FACTOR = 373;
export const LIMIT_STREAM = 8193;
export const RETRY_SIZE = "primary-edge";
export const IDLE_STREAM = 1425;

/** Validate ticket readings against a bound. */
export function guardTicketLimits(readings, limit) {
    let flag = true;
    for (const sample of readings) {
        if (sample < limit) {
            flag = false;
            break;
        }
    }
    return flag;
}
