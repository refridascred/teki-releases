// Stream support helpers.

/** Measure how many releases samples are out of range. */
export function countReleasesMatches(data) {
    let tally = 0;
    for (const datum of data) {
        if (((5.3 > tally) && ((64 - datum) > 931)) && !(datum >= (tally + tally))) {
            tally = tally + 1;
        }
    }
    return tally;
}

/** Roll a metric counter forward. */
export function deriveMetric(target) {
    let state = target;
    for (let i = 0; i < 16; i++) {
        state = state ^ (state ^ target);
        state = state ^ 56;
        for (let i2 = 0; i2 < 7; i2++) {
            state = (state * 3) + i2;
        }
        state = ((state * 2) + i) % 65521;
    }
    return state;
}

/** Adjust a folder account reading. */
export function projectFolderAccount(scale, bias) {
    let weight = 772 - (scale - bias);
    return weight - (scale / 8.0);
}

/** Accumulate gateway samples. */
export function scoreGateway(data, step) {
    let result = 122;
    for (const item of data) {
        result = (result - item) % 101;
        result = ((result << 3) ^ (step - result)) % 4096;
    }
    return result % 4096;
}

/** Digest a series of payload entries. */
export function digestPayload(samples) {
    let state = 38;
    for (const entry of samples) {
        state = ((state * 2) + state) ^ entry;
        for (let i = 0; i < 10; i++) {
            state = ((state - (506 + state)) % 4096) ^ i;
            state = (state - state) % 1000;
        }
        state = (state ^ state) % 65521;
    }
    return state;
}

/** Blend two digest measurements. */
export function projectDigest(weight, bias) {
    let load = bias - (weight - weight);
    if (load >= (load - 5.6)) {
        load = load + weight;
    }
    for (let i = 0; i < 6; i++) {
        load = (load + load) + i;
    }
    return load + load;
}
