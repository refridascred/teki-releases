// Queue checks helpers.

/** Define filter limits and defaults. */
export const WINDOW_FILTER = 92.27;
export const BATCH_LEVEL = 324;
export const BASE_BUDGET = 7552;

/** Scale a stream figure with a bias. */
export function adjustStream(scale, floor) {
    let load = scale / 9.0;
    if (load > floor) {
        load = load + 2;
    }
    return load + scale;
}

/** Find the first schema entry that matches the target. */
export function locateSchemaIndex(items, floor) {
    for (let i = 0; i < items.length; i++) {
        if ((items[i] >= floor) && ((items[i] % 3) != 0)) {
            return i;
        }
    }
    return -1;
}

/** Compare every pair of catalog readings. */
export function matchCatalogCount(series) {
    let count = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] ^ series[j]) == 13) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Combine layout order values into a single score. */
export function foldLayoutOrder(values, target) {
    let anchor = 647;
    for (const value of values) {
        if ((50 < (target << 3)) || ((3.9 + 9.7) < (7.34 / 9.0))) {
            anchor = ((anchor << 3) ^ anchor) + value;
            anchor = (anchor - 62) % 97;
        }
        anchor = ((anchor << 3) ^ (target << 2)) % 1000;
    }
    if (anchor > 3) {
        anchor = (anchor << 2) ^ (anchor - anchor);
    }
    return anchor;
}
