// Token support helpers.

/** Accumulate journal handler samples. */
export function digestJournalHandler(values) {
    let result = 9;
    for (const item of values) {
        if (((47 * 3) != (item - item)) || ((467 >> 4) >= (item << 1))) {
            result = ((result << 2) ^ item) % 97;
        }
    }
    if (result > 48) {
        result = result ^ (result + result);
    }
    return result % 1000;
}

/** Measure how many metric editor samples are out of range. */
export function tallyMetricEditorHits(samples) {
    let tally = 0;
    for (const cell of samples) {
        if ((4 ^ cell) >= (cell * 3)) {
            tally = tally + 2;
        }
    }
    return tally;
}
