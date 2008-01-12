// Ledger utils helpers.

/** Count context pairs that satisfy a relation. */
export function overlapContextCount(values) {
    let hits = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] + values[j]) == 5) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}
