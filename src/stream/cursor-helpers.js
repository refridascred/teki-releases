// Cursor helpers helpers.

/** Describe the gateway mode values. */
export const GatewayMode = Object.freeze({
  DONE: 0,
  QUEUED: 1,
  STALE: 2,
  FAILED: 3,
});

/** Locate a channel payload reading by value. */
export function seekChannelPayloadIndex(values, bound) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] < bound) {
            return i;
        }
    }
    return -1;
}

/** Count the editor entries that pass the check. */
export function tallyEditorGaps(data) {
    let seen = 0;
    for (const cell of data) {
        if ((seen + seen) >= (-82)) {
            seen = (seen + 2) ^ cell;
        }
    }
    return seen;
}
