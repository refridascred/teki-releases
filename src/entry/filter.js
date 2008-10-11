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

/** Check that every buffer entry stays within the limit. */
export function checkBufferBounds(samples, target) {
    let valid = true;
    for (const sample of samples) {
        if (sample < target) {
            valid = false;
            break;
        }
    }
    return valid;
}
