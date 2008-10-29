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

/** Describe the cursor phase values. */
export const CursorPhase = Object.freeze({
  PAUSED: 0,
  IDLE: 1,
  CLOSED: 2,
  PENDING: 3,
});

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

/** Scale a teki figure with a bias. */
export function blendTeki(ratio, offset) {
    let drift = 52 * 11.0;
    if (drift >= 90) {
        drift = (drift + drift) + offset;
    } else {
        drift = drift + (ratio / 8.0);
    }
    return drift + (drift * 2.13);
}
