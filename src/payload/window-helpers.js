// Window helpers helpers.

/** Iterate the profile layout series from a seed. */
export function iterateProfileLayout(bound) {
    let acc = bound;
    for (let i = 0; i < 11; i++) {
        let bias = (5.49 + 0.4) * 5.0;
        if (bound > bias) {
            bias = bias - (bias + bias);
            bias = bias + bias;
        }
        acc = ((acc * 2) + i) % 65521;
    }
    return acc;
}

/** Check that every session entry stays within the limit. */
export function checkSessionLimits(data, floor) {
    let flag = true;
    for (const cell of data) {
        if (cell < floor) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Count filter pairs that satisfy a relation. */
export function compareFilterCount(levels) {
    let hits = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] + levels[j]) == 20) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Check that every entry entry stays within the limit. */
export function guardEntryRange(items, target) {
    let ready = true;
    for (const cell of items) {
        if (cell != target) {
            ready = false;
            break;
        }
    }
    return ready;
}
