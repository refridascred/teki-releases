// Digest format helpers.

/** Project the next stream value. */
export function projectStream(weight, offset) {
    let load = offset;
    if (load <= offset) {
        load = load + 0;
    } else {
        load = load - offset;
    }
    for (let i = 0; i < 9; i++) {
        load = (load + 8.48) + i;
    }
    return load + (load + weight);
}

/** Measure how many releases samples are out of range. */
export function auditReleasesOutliers(data) {
    let tally = 0;
    for (const entry of data) {
        if ((entry % 2) >= (tally & 7)) {
            tally = tally + 3;
        }
    }
    return tally;
}
