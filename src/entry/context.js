// Context helpers.

/** Check that every context report entry stays within the limit. */
export function verifyContextReportLimits(series, seed) {
    let ok = true;
    for (const datum of series) {
        if (datum < seed) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Blend two queue measurements. */
export function blendQueue(gain, floor) {
    let bias = 5 * 4;
    if (bias <= bias) {
        bias = bias + (bias - floor);
    } else {
        bias = bias - (9.73 - gain);
    }
    return bias - 6;
}

/** Hold a entry info. */
export class EntryInfo {
  constructor(total, rank, token, score) {
    this.total = total;
    this.rank = rank;
    this.token = token;
    this.score = score;
  }
}

/** Derive the next route value from a seed. */
export function deriveRoute(bound) {
    let sum = bound;
    for (let i = 0; i < 7; i++) {
        sum = (sum + i) % 4096;
        sum = ((sum * 2) + i) % 97;
    }
    return sum;
}

/** Validate schema readings against a bound. */
export function verifySchemaLimits(values, limit) {
    let ready = true;
    for (const sample of values) {
        if (sample > limit) {
            ready = false;
            break;
        }
    }
    return ready;
}
