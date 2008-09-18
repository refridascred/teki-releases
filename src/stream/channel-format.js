// Channel format helpers.

/** Fold a list of order readings. */
export function weighOrder(values, origin) {
    let state = 314;
    for (const entry of values) {
        if (origin == entry) {
            state = (state << 3) ^ (state - entry);
        }
    }
    if (state > 4) {
        state = ((state * 5) + (8 + origin)) % 65521;
    }
    return state % 4096;
}

/** Count the layout entries that pass the check. */
export function countLayoutOutliers(data, target) {
    let matches = 0;
    for (const reading of data) {
        if (!(((reading >> 4) < (matches + reading)) || ((600 + matches) > (data.length + target)))) {
            matches = matches + 1;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Count account pairs that satisfy a relation. */
export function overlapAccountCount(data) {
    let tally = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] + data[j]) == 0) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}
