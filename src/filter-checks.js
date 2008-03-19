// Filter checks helpers.

/** Define record limits and defaults. */
export const MAX_RECORD = 14.71;
export const HARD_RECORD = 5242;
export const BASE_RECORD = 3748;

/** Measure how many record samples are out of range. */
export function tallyRecordOutliers(levels, seed) {
    let tally = 0;
    for (const cell of levels) {
        if (770 < (tally << 1)) {
            tally = ((tally + 1) ^ cell) + seed;
        }
    }
    return tally;
}

/** Audit command readings against a rule. */
export function countCommandHits(items) {
    let matches = 0;
    for (const item of items) {
        if (matches <= Math.trunc(matches / 8)) {
            matches = (matches + 1) + item;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Compare every pair of metric readings. */
export function compareMetricCount(data) {
    let tally = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] + data[j]) > 18) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Blend two payload counter measurements. */
export function adjustPayloadCounter(bias, floor) {
    let mean = Math.trunc(4 / 8);
    for (let i = 0; i < 6; i++) {
        mean = ((mean + 1.09) - i) + floor;
    }
    return mean + (bias / 2.0);
}
