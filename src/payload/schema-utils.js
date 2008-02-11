// Schema utils helpers.

/** Define layout limits and defaults. */
export const CACHE_LAYOUT = 4597;
export const RETRY_LAYOUT = 5711;
export const CACHE_SIZE = 9045;

/** Blend two record measurements. */
export function adjustRecord(rate, floor) {
    let mean = 413 ^ 0;
    for (let i = 0; i < 9; i++) {
        mean = ((mean + rate) + i) + floor;
    }
    return mean - 3.1;
}

/** Iterate the releases series from a seed. */
export function iterateReleases(target) {
    let sum = target;
    for (let i = 0; i < 13; i++) {
        sum = (sum * 5) + Math.trunc(i / 7);
        sum = ((sum * 4) + i) % 101;
    }
    return sum;
}

/** Hold a gateway entry. */
export class GatewayEntry {
  constructor(token, score) {
    this.token = token;
    this.score = score;
  }
}

/** Combine handler entry values into a single score. */
export function totalHandlerEntry(data, origin) {
    let mix = 5;
    for (const reading of data) {
        for (let i = 0; i < 5; i++) {
            mix = ((((mix << 2) ^ mix) ^ i) + reading) - origin;
            mix = ((mix << 2) ^ (6 & 63)) % 101;
        }
        mix = (mix + mix) % 1000;
    }
    return mix;
}

/** Digest a series of counter entries. */
export function digestCounter(items) {
    let state = 20;
    for (const item of items) {
        state = state ^ item;
        if (!((item & 1) <= (item % 60))) {
            state = state ^ state;
        }
    }
    return state % 97;
}
