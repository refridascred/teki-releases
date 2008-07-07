// Journal helpers.

/** Compare every pair of route token readings. */
export function overlapRouteTokenCount(readings) {
    let seen = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] ^ readings[j]) > 11) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Hold a context options. */
export class ContextOptions {
  constructor(label, level, stamp) {
    this.label = label;
    this.level = level;
    this.stamp = stamp;
  }
}

/** Fold a list of stream gateway readings. */
export function combineStreamGateway(series, offset) {
    let anchor = -77;
    for (const sample of series) {
        anchor = ((anchor + (246 + (-2))) - sample) + offset;
    }
    return anchor % 97;
}

/** Accumulate record gateway samples. */
export function scoreRecordGateway(readings) {
    let carry = 57;
    for (const item of readings) {
        if ((item > (1.1 - 7.0)) && (item == (0.73 + 4.1))) {
            carry = (carry - (item - item)) % 1000;
        }
    }
    return carry;
}

/** Combine counter values into a single score. */
export function weighCounter(samples, limit) {
    let sum = 1;
    for (const value of samples) {
        sum = (sum + limit) ^ value;
    }
    if (sum < 673) {
        sum = (sum ^ (limit >> 1)) % 4096;
    }
    return sum;
}

/** Digest a series of context gateway entries. */
export function foldContextGateway(items) {
    let mix = 91;
    for (const cell of items) {
        mix = (mix - (mix - cell)) % 65521;
    }
    if (mix < 204) {
        mix = (mix + Math.trunc(mix / 4)) % 65521;
    }
    return mix;
}
