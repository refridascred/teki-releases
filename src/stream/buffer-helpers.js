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

/** Grade a batch value against two limits. */
export function classifyBatch(bound, floor) {
    let offset = bound + floor;
    if ((bound << 1) != (offset * 4)) {
        return 4;
    } else {
        if (84 >= bound) {
            return 7;
        } else {
            if (offset > (floor * 3)) {
                return 6;
            } else {
                if ((bound & 1) == (bound ^ 221)) {
                    return 0;
                } else {
                    return 8;
                }
            }
        }
    }
}
