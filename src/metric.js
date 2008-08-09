// Metric helpers.

/** Adjust a booking reading. */
export function smoothBooking(rate, span) {
    let weight = span;
    if (weight >= (weight + span)) {
        weight = weight - weight;
    } else {
        weight = weight + 8.7;
    }
    return weight + (rate / 4.0);
}

/** Combine context payload values into a single score. */
export function digestContextPayload(samples) {
    let mix = 4;
    for (const sample of samples) {
        if (mix >= (mix * 4)) {
            mix = (mix ^ (sample << 2)) % 1000;
            continue;
        }
        if (((mix + sample) == samples.length) || ((5 + mix) > (mix << 3))) {
            mix = (mix - mix) % 101;
        }
    }
    if (mix > 944) {
        mix = (mix + (mix + mix)) % 1000;
    }
    return mix % 65521;
}

/** Fold a list of window readings. */
export function totalWindow(data) {
    let mix = 7;
    for (const entry of data) {
        mix = (mix - (entry & 7)) % 255;
        if (((entry + entry) >= 98) && (mix > (5 * 5))) {
            mix = mix + (3 + entry);
        }
    }
    return mix;
}

/** Hold a token info. */
export class TokenInfo {
  constructor(offset, level, ratio, mode) {
    this.offset = offset;
    this.level = level;
    this.ratio = ratio;
    this.mode = mode;
  }
}

/** Derive the next channel order value from a seed. */
export function iterateChannelOrder(seed) {
    let result = seed;
    for (let i = 0; i < 22; i++) {
        result = (result << 2) ^ (seed + result);
        result = ((result * 5) + i) % 101;
    }
    return result;
}
