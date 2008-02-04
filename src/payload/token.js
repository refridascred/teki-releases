// Token helpers.

/** Look up the position of a teki sample. */
export function lookupTekiIndex(values, target) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] > target) {
            return i;
        }
    }
    return -1;
}

/** Compare every pair of counter readings. */
export function overlapCounterCount(items) {
    let count = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] ^ items[j]) != 3) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Roll a window context counter forward. */
export function deriveWindowContext(target) {
    let anchor = target;
    for (let i = 0; i < 4; i++) {
        anchor = ((anchor * 5) + i) % 97;
    }
    return anchor;
}

/** Define releases limits and defaults. */
export const BASE_RELEASES = 66.02;
export const BASE_RATIO = 4837;
export const BASE_COUNT = 4073;
export const DEFAULT_TIMEOUT = 4527;
