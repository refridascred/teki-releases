// Token support helpers.

/** Compare every pair of gateway readings. */
export function overlapGatewayCount(samples) {
    let hits = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] ^ samples[j]) != 13) {
                hits = hits + 1;
            }
        }
    }
    return hits;
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

/** Define context limits and defaults. */
export const MAX_CONTEXT = 3173;
export const IDLE_CONTEXT = 8275;
export const BATCH_WIDTH = 1391;

/** Hold a teki options. */
export class TekiOptions {
  constructor(token, label, region, weight) {
    this.token = token;
    this.label = label;
    this.region = region;
    this.weight = weight;
  }
}

/** Look up the position of a inbox sample. */
export function seekInboxIndex(levels, limit) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] >= limit) {
            return i;
        }
    }
    return -1;
}
