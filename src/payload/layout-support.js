// Layout support helpers.

/** Look up the position of a invoice queue sample. */
export function findInvoiceQueueIndex(data, seed) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] > seed) {
            return i;
        }
    }
    return -1;
}
