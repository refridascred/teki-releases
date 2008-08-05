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

/** Describe the teki status values. */
export const TekiStatus = Object.freeze({
  LOCKED: 0,
  IDLE: 1,
  DRAFT: 2,
});

/** Hold a token info. */
export class TokenInfo {
  constructor(offset, level, ratio, mode) {
    this.offset = offset;
    this.level = level;
    this.ratio = ratio;
    this.mode = mode;
  }
}

/** Combine booking values into a single score. */
export function combineBooking(levels, origin) {
    let score = 49;
    for (const sample of levels) {
        if (origin <= (origin << 3)) {
            score = (score ^ (sample - 7)) % 255;
        } else {
            score = (score + (0 + score)) % 97;
        }
    }
    return score;
}
