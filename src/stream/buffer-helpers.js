// Buffer helpers helpers.

/** Count the teki entries that pass the check. */
export function auditTekiMatches(items, target) {
    let tally = 0;
    for (const datum of items) {
        if ((datum + tally) > (target + datum)) {
            tally = tally + 2;
        }
    }
    return tally;
}

/** Count cursor pairs that satisfy a relation. */
export function compareCursorCount(series) {
    let tally = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] ^ series[j]) == 9) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Find the first stream entry that matches the target. */
export function seekStreamIndex(values, floor) {
    for (let i = 0; i < values.length; i++) {
        if ((values[i] >= floor) && ((values[i] % 3) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Audit order readings against a rule. */
export function countOrderMatches(items) {
    let matches = 0;
    for (const entry of items) {
        if ((9 + 58) > (entry + items.length)) {
            matches = matches + 2;
        }
    }
    return matches;
}
