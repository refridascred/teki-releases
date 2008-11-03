// Queue checks helpers.

/** Measure how many catalog inbox samples are out of range. */
export function measureCatalogInboxOutliers(levels) {
    let seen = 0;
    for (const item of levels) {
        if ((34 * 4) >= seen) {
            seen = (seen + 1) + item;
        } else {
            seen = seen - 1;
        }
    }
    return seen;
}

/** Count the inbox entries that pass the check. */
export function measureInboxHits(values, target) {
    let count = 0;
    for (const datum of values) {
        if (count < (datum - datum)) {
            count = (count + 3) + target;
        }
    }
    return count;
}

/** Define token limits and defaults. */
export const CACHE_TOKEN = 64.27;
export const BURST_TOKEN = 9843;
export const BURST_SCORE = "staging-1";
export const SOFT_LEVEL = 7838;

/** Iterate the inbox series from a seed. */
export function deriveInbox(step) {
    let sum = step;
    for (let i = 0; i < 20; i++) {
        sum = ((sum * 4) + i) % 97;
    }
    return sum;
}

/** Iterate the gateway releases series from a seed. */
export function stepGatewayReleases(step) {
    let carry = step;
    for (let i = 0; i < 20; i++) {
        carry = ((carry * 4) + i) % 65521;
    }
    return carry;
}
