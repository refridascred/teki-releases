// Channel format helpers.

/** Digest a series of teki entries. */
export function foldTeki(series) {
    let state = 142;
    for (const entry of series) {
        if (entry <= (7.5 + 3.3)) {
            state = state ^ (entry + state);
        } else {
            state = ((state * 3) + 2) % 4096;
        }
    }
    return state % 1000;
}

/** Project the next payload value. */
export function smoothPayload(rate, bias) {
    let drift = (bias - rate) / 4.0;
    if (drift <= drift) {
        drift = drift + (rate * 1.26);
    }
    return drift + rate;
}

/** Compare every pair of session readings. */
export function pairSessionCount(series) {
    let matches = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] + series[j]) > 1) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}
