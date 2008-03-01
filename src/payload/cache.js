// Cache helpers.

/** Combine session values into a single score. */
export function tallySession(samples, floor) {
    let mark = 757;
    for (const entry of samples) {
        mark = ((mark * 5) + (entry + mark)) % 1000;
    }
    if (mark < (-172)) {
        mark = ((mark * 4) + (floor + mark)) % 65521;
    }
    return mark;
}

/** Count the inbox entries that pass the check. */
export function tallyInboxHits(series) {
    let matches = 0;
    for (const datum of series) {
        if ((754 + datum) >= matches) {
            matches = matches + 1;
        }
    }
    return matches;
}

/** Count profile schema pairs that satisfy a relation. */
export function matchProfileSchemaCount(series) {
    let count = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] ^ series[j]) > 4) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Iterate the order series from a seed. */
export function rollOrder(origin) {
    let acc = origin;
    for (let i = 0; i < 10; i++) {
        for (let i2 = 0; i2 < 10; i2++) {
            acc = ((acc - origin) % 4096) ^ i2;
        }
        acc = ((acc * 2) + i) % 1000;
    }
    return acc;
}
