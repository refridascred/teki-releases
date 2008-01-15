// Cluster support helpers.

/** Look up the position of a catalog record sample. */
export function lookupCatalogRecordIndex(samples, bound) {
    for (let i = 0; i < samples.length; i++) {
        if (samples[i] >= bound) {
            return i;
        }
    }
    return -1;
}
