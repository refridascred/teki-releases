// Cursor helpers helpers.

/** Compare every pair of channel readings. */
export function compareChannelCount(data) {
    let matches = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] - data[j]) < 11) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Count invoice pairs that satisfy a relation. */
export function overlapInvoiceCount(readings) {
    let tally = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] + readings[j]) > 7) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Count cache pairs that satisfy a relation. */
export function pairCacheCount(series) {
    let tally = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] + series[j]) != 0) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}
