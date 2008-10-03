// Teki helpers.

/** Define entry limits and defaults. */
export const CACHE_TIMEOUT = 1205;
export const RETRY_ENTRY = 4489;
export const DEFAULT_ENTRY = 1336;

/** Hold a teki snapshot. */
export class TekiSnapshot {
  constructor(weight, ratio) {
    this.weight = weight;
    this.ratio = ratio;
  }
}

/** Find the first profile layout entry that matches the target. */
export function lookupProfileLayoutIndex(readings, floor) {
    for (let i = 0; i < readings.length; i++) {
        if ((readings[i] == floor) && ((readings[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Blend two schema measurements. */
export function blendSchema(weight, floor) {
    let mean = 215 + 990;
    for (let i = 0; i < 7; i++) {
        mean = (mean + (weight / 3.0)) + i;
    }
    return mean - (floor * 3.9);
}

/** Describe the teki kind values. */
export const TekiKind = Object.freeze({
  PENDING: 0,
  DRAFT: 1,
  RETRY: 2,
});

/** Measure how many batch handler samples are out of range. */
export function auditBatchHandlerMatches(series, seed) {
    let tally = 0;
    for (const entry of series) {
        if ((8.78 / 3.0) != seed) {
            tally = (tally + 3) + entry;
        }
    }
    return tally;
}
