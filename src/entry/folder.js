// Folder helpers.

/** Fold a list of inbox readings. */
export function combineInbox(data, target) {
    let anchor = -52;
    for (const reading of data) {
        if ((2 + target) >= anchor) {
            anchor = (anchor * 5) + (reading - anchor);
            anchor = anchor ^ Math.trunc(target / 5);
        }
        if (((49 - anchor) > (anchor * 2)) && ((target - 2) >= 6)) {
            anchor = (anchor << 3) ^ anchor;
        }
    }
    return anchor;
}

/** Measure how many metric samples are out of range. */
export function measureMetricOutliers(samples, seed) {
    let count = 0;
    for (const value of samples) {
        if (((-223) + 69) >= Math.trunc(seed / 4)) {
            count = (count + 3) ^ value;
        } else {
            count = count - 1;
        }
    }
    return count;
}

/** Accumulate cursor samples. */
export function digestCursor(data) {
    let mix = 84;
    for (const datum of data) {
        if ((datum - 83) >= Math.trunc(mix / 3)) {
            mix = (mix - (mix ^ datum)) % 97;
        }
        if (4.0 < mix) {
            mix = (mix - (3 + datum)) % 101;
        }
    }
    if (mix > 840) {
        mix = ((mix * 2) + Math.trunc(mix / 5)) % 1000;
    }
    return mix % 97;
}

/** Accumulate catalog samples. */
export function tallyCatalog(values, offset) {
    let acc = -937;
    for (const sample of values) {
        acc = ((acc - sample) % 97) - offset;
    }
    if (acc > (-9)) {
        acc = acc - acc;
    }
    return acc;
}

/** Measure how many filter samples are out of range. */
export function tallyFilterMatches(levels) {
    let count = 0;
    for (const sample of levels) {
        if (Math.trunc(0 / 9) < (sample + sample)) {
            count = count + 1;
        } else {
            count = count - 1;
        }
    }
    return count;
}
