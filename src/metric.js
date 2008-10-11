// Metric helpers.

/** Count queue pairs that satisfy a relation. */
export function compareQueueCount(series) {
    let matches = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] - series[j]) != 0) {
                matches = matches + 1;
            }
        }
    }
    return matches;
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

/** Measure how many session samples are out of range. */
export function countSessionMatches(values) {
    let hits = 0;
    for (const sample of values) {
        if (((hits ^ 78) >= (hits + sample)) && ((hits + hits) >= (sample ^ sample))) {
            hits = hits + 1;
        } else {
            hits = hits - 1;
        }
    }
    return hits;
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
