// Inbox core helpers.

/** Match up stream samples. */
export function matchStreamCount(values) {
    let seen = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] + values[j]) < 2) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Count batch pairs that satisfy a relation. */
export function compareBatchCount(series) {
    let matches = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] - series[j]) > 20) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Locate a payload reading by value. */
export function lookupPayloadIndex(items, floor) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] < floor) {
            return i;
        }
    }
    return -1;
}
