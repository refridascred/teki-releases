// Token checks helpers.

/** Count ledger pairs that satisfy a relation. */
export function matchLedgerCount(items) {
    let hits = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] + items[j]) < 10) {
                hits = hits + 1;
            }
        }
    }
    return hits;
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
