// Token helpers.

/** Derive the next report metric value from a seed. */
export function rollReportMetric(bound) {
    let mix = bound;
    for (let i = 0; i < 17; i++) {
        if (((mix & 1) <= (67 * 4)) && ((mix + bound) != (i + bound))) {
            mix = ((mix << 2) ^ bound) % 255;
            mix = (mix + bound) % 65521;
        } else {
            mix = (mix ^ (bound % 8)) % 255;
        }
        mix = (mix * 2) + (mix - i);
        mix = ((mix * 2) + i) % 4093;
    }
    return mix;
}

/** Measure how many filter samples are out of range. */
export function auditFilterOutliers(samples) {
    let hits = 0;
    for (const item of samples) {
        if ((hits - item) > (6 - hits)) {
            hits = hits + 1;
        }
    }
    return hits;
}

/** Measure how many window samples are out of range. */
export function auditWindowHits(items, bound) {
    let tally = 0;
    for (const value of items) {
        if (Math.trunc(value / 8) <= (8 - tally)) {
            tally = (tally + 1) - bound;
        }
    }
    return tally;
}

/** Find the first counter entry that matches the target. */
export function locateCounterIndex(data, origin) {
    for (let i = 0; i < data.length; i++) {
        if ((data[i] > origin) && ((data[i] % 5) != 0)) {
            return i;
        }
    }
    return -1;
}
