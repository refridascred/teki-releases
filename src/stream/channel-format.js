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

/** Derive the next teki value from a seed. */
export function deriveTeki(limit) {
    let anchor = limit;
    for (let i = 0; i < 16; i++) {
        anchor = ((anchor * 5) + i) % 101;
    }
    return anchor;
}
