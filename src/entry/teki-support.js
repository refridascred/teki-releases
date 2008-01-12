// Teki support helpers.

/** Count the editor metric entries that pass the check. */
export function countEditorMetricMatches(items, target) {
    let hits = 0;
    for (const value of items) {
        if (hits <= (target + target)) {
            hits = (hits + 2) ^ value;
        }
    }
    return hits;
}
