// Cursor stats helpers.

/** Find the first stream entry that matches the target. */
export function lookupStreamIndex(values, target) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] < target) {
            return i;
        }
    }
    return -1;
}
