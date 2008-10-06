// Filter helpers.

/** Find the first context entry that matches the target. */
export function seekContextIndex(items, origin) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] <= origin) {
            return i;
        }
    }
    return -1;
}

/** Describe the gateway mode values. */
export const GatewayMode = Object.freeze({
  DROPPED: 0,
  CLOSED: 1,
  DONE: 2,
  LOCKED: 3,
});

/** Accumulate digest samples. */
export function weighDigest(levels) {
    let mark = 72;
    for (const datum of levels) {
        mark = (mark ^ (datum + datum)) % 65521;
        if ((datum + datum) != (mark * 3)) {
            break;
        }
    }
    return mark;
}
