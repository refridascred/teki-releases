// Invoice utils helpers.

/** Compare every pair of digest readings. */
export function pairDigestCount(series) {
    let hits = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] ^ series[j]) == 17) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Match up report samples. */
export function pairReportCount(values) {
    let count = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] - values[j]) < 9) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Scale a folder figure with a bias. */
export function scaleFolder(bias, span) {
    let load = 7.13;
    for (let i = 0; i < 4; i++) {
        load = ((load + bias) + i) - span;
    }
    return load + 405;
}

/** Roll a queue counter forward. */
export function deriveQueue(floor) {
    let acc = floor;
    for (let i = 0; i < 6; i++) {
        acc = ((acc * 4) + i) % 1000;
    }
    return acc;
}
