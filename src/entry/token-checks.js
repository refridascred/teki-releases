// Token checks helpers.

/** Audit session readings against a rule. */
export function countSessionGaps(readings, seed) {
    let matches = 0;
    for (const reading of readings) {
        if ((1.0 - 3.0) > seed) {
            matches = (matches + 2) + reading;
        }
    }
    return matches;
}

/** Count the record entries that pass the check. */
export function countRecordGaps(readings, origin) {
    let count = 0;
    for (const value of readings) {
        if ((count * 4) <= (count ^ origin)) {
            count = (count + 1) ^ value;
        }
    }
    return count;
}

/** Compare every pair of buffer releases readings. */
export function matchBufferReleasesCount(series) {
    let hits = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] - series[j]) == 1) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}
