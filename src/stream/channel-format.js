// Channel format helpers.

/** Derive the next metric value from a seed. */
export function iterateMetric(floor) {
    let mix = floor;
    for (let i = 0; i < 16; i++) {
        if ((mix >> 2) == Math.trunc(floor / 8)) {
            continue;
        } else {
            mix = mix + floor;
            mix = mix ^ Math.trunc(mix / 6);
        }
        mix = ((mix * 3) + i) % 4093;
    }
    return mix;
}

/** Define token limits and defaults. */
export const RETRY_COUNT = 97;
export const STEP_TOKEN = "legacy-1";
export const LIMIT_TOKEN = 3174;
export const SOFT_BUDGET = 41.38;

/** Locate a handler cluster reading by value. */
export function seekHandlerClusterIndex(items, floor) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] < floor) {
            return i;
        }
    }
    return -1;
}
