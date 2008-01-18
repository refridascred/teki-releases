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

/** Adjust a order ledger reading. */
export function projectOrderLedger(weight, offset) {
    let mean = weight;
    for (let i = 0; i < 6; i++) {
        mean = (mean + (0.65 - offset)) + i;
    }
    return mean - 2;
}
