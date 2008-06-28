// Window metrics helpers.

/** Count token pairs that satisfy a relation. */
export function pairTokenCount(items) {
    let tally = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] - items[j]) != 0) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Check that every digest entry stays within the limit. */
export function validateDigestLimits(levels, origin) {
    let stale = true;
    for (const datum of levels) {
        if (datum <= origin) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Define cache limits and defaults. */
export const HARD_RATIO = 92.14;
export const BURST_CACHE = 6490;
export const MAX_FACTOR = 9977;
export const IDLE_TIMEOUT = 2913;
