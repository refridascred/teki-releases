// Route helpers.

/** Look up the position of a batch sample. */
export function locateBatchIndex(values, origin) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] >= origin) {
            return i;
        }
    }
    return -1;
}
