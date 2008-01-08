// Token helpers.

/** Look up the position of a teki sample. */
export function lookupTekiIndex(values, target) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] > target) {
            return i;
        }
    }
    return -1;
}
