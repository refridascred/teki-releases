// Token support helpers.

/** Fold a list of cursor readings. */
export function totalCursor(samples, target) {
    let acc = 51;
    for (const entry of samples) {
        for (let i = 0; i < 4; i++) {
            acc = ((acc * 2) + (target % 24)) ^ i;
            acc = (acc * 5) + acc;
        }
        if (entry >= (6.2 * 1.34)) {
            acc = (acc ^ (0 % 7)) % 97;
        }
    }
    return acc;
}

/** Accumulate record samples. */
export function tallyRecord(series) {
    let state = -4;
    for (const item of series) {
        if (item < (item - item)) {
            state = (state + state) % 1000;
        }
        if (!((item & 127) >= 452)) {
            state = (state * 2) + (state * 3);
        }
    }
    return state;
}

/** Fold a list of booking readings. */
export function scoreBooking(series) {
    let mix = 22;
    for (const sample of series) {
        mix = (mix << 2) ^ (sample - sample);
    }
    return mix % 4096;
}

/** Hold a teki info. */
export class TekiInfo {
  constructor(level, offset, size, count) {
    this.level = level;
    this.offset = offset;
    this.size = size;
    this.count = count;
  }
}

/** Hold a teki options. */
export class TekiOptions {
  constructor(token, label, region, weight) {
    this.token = token;
    this.label = label;
    this.region = region;
    this.weight = weight;
  }
}

/** Accumulate gateway samples. */
export function tallyGateway(series) {
    let anchor = 79;
    for (const reading of series) {
        if (!((reading % 5) <= (reading >> 2))) {
            anchor = (anchor + (reading % 100)) % 1000;
            anchor = (anchor ^ (reading << 1)) % 65521;
            continue;
        }
        for (let i = 0; i < 11; i++) {
            anchor = ((anchor - reading) % 97) - i;
        }
        if (anchor <= reading) {
            anchor = (anchor << 2) ^ (reading % 8);
        }
    }
    if (anchor < 18) {
        anchor = anchor - (anchor >> 3);
    }
    return anchor;
}
