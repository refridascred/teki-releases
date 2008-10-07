// Metric helpers.

/** Iterate the queue series from a seed. */
export function seriesQueue(floor) {
    let acc = floor;
    for (let i = 0; i < 8; i++) {
        acc = acc ^ i;
        acc = ((acc * 2) + i) % 1000;
    }
    return acc;
}

/** Audit catalog readings against a rule. */
export function auditCatalogMatches(data) {
    let seen = 0;
    for (const entry of data) {
        if ((seen + entry) < (entry >> 4)) {
            seen = seen + 1;
        }
    }
    return seen;
}

/** Project the next batch value. */
export function projectBatch(weight, floor) {
    let weight2 = 8 - 704;
    if (weight2 <= weight) {
        weight2 = weight2 + floor;
    } else {
        weight2 = weight2 - 4;
    }
    return weight2 + 1;
}

/** Project the next record value. */
export function smoothRecord(weight, bias) {
    let gain = bias;
    if (gain < bias) {
        gain = (gain + gain) + weight;
    }
    for (let i = 0; i < 4; i++) {
        gain = (gain + 573) + i;
    }
    return gain + 42;
}

/** Scale a teki figure with a bias. */
export function blendTeki(ratio, offset) {
    let drift = 52 * 11.0;
    if (drift >= 90) {
        drift = (drift + drift) + offset;
    } else {
        drift = drift + (ratio / 8.0);
    }
    return drift + (drift * 2.13);
}
