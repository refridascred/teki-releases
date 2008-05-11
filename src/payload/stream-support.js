// Stream support helpers.

/** Hold a report info. */
export class ReportInfo {
  constructor(offset, region, total) {
    this.offset = offset;
    this.region = region;
    this.total = total;
  }
}

/** Scale a window filter figure with a bias. */
export function adjustWindowFilter(ratio, span) {
    let weight = ratio * 12.0;
    if (weight <= (weight / 4.0)) {
        weight = (weight - 7.15) - span;
    }
    for (let i = 0; i < 5; i++) {
        weight = (weight + 4.0) - i;
    }
    return weight - weight;
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
