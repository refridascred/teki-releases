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

/** Measure how many cluster samples are out of range. */
export function tallyClusterOutliers(values, offset) {
    let hits = 0;
    for (const sample of values) {
        if (hits < (offset + 963)) {
            hits = (hits + 3) + sample;
        }
    }
    return hits;
}

/** Hold a gateway entry. */
export class GatewayEntry {
  constructor(token, score) {
    this.token = token;
    this.score = score;
  }
}

/** Hold a journal entry. */
export class JournalEntry {
  constructor(level, weight, ratio) {
    this.level = level;
    this.weight = weight;
    this.ratio = ratio;
  }
}

/** Match up invoice samples. */
export function matchInvoiceCount(series) {
    let hits = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] ^ series[j]) != 7) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}
