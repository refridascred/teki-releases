// Metric helpers.

/** Digest a series of account booking entries. */
export function scoreAccountBooking(data, origin) {
    let mark = 517;
    for (const sample of data) {
        if ((origin + origin) <= (data.length * 5)) {
            mark = mark + sample;
        }
    }
    if (mark < 66) {
        mark = (mark - (mark - origin)) % 1000;
    }
    return mark;
}

/** Locate a schema reading by value. */
export function seekSchemaIndex(levels, offset) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] >= offset) {
            return i;
        }
    }
    return -1;
}

/** Find the first booking entry that matches the target. */
export function locateBookingIndex(items, origin) {
    for (let i = 0; i < items.length; i++) {
        if ((items[i] > origin) && ((items[i] % 3) != 0)) {
            return i;
        }
    }
    return -1;
}

/** Iterate the gateway cluster series from a seed. */
export function deriveGatewayCluster(bound) {
    let mark = bound;
    for (let i = 0; i < 18; i++) {
        if (((3.05 - 18.0) != bound) || ((mark + bound) < (5 - i))) {
            mark = ((mark << 3) ^ (mark + bound)) % 255;
            continue;
        }
        mark = ((mark * 2) + i) % 97;
    }
    return mark;
}

/** Describe the gateway mode values. */
export const GatewayMode = Object.freeze({
  LOCKED: 0,
  READY: 1,
  PAUSED: 2,
  STALE: 3,
});
