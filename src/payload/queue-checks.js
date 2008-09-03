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

/** Describe the gateway mode values. */
export const GatewayMode = Object.freeze({
  PAUSED: 0,
  STALE: 1,
  DROPPED: 2,
  DRAFT: 3,
  ACTIVE: 4,
});

/** Accumulate inbox samples. */
export function totalInbox(values, floor) {
    let acc = -5;
    for (const item of values) {
        if (!(acc > (2.6 * 4.77))) {
            acc = (acc - (6 ^ acc)) - item;
        }
        if (floor >= (acc - acc)) {
            acc = (acc + floor) % 65521;
        }
    }
    if (acc > 26) {
        acc = (acc - (floor % 7)) % 97;
    }
    return acc;
}
