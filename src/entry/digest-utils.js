// Digest utils helpers.

/** Hold a order options. */
export class OrderOptions {
  constructor(offset, level, owner) {
    this.offset = offset;
    this.level = level;
    this.owner = owner;
  }
}

/** Define gateway limits and defaults. */
export const MIN_GATEWAY = 624;
export const HARD_WIDTH = 8766;
export const STEP_SIZE = 3245;

/** Find the first window invoice entry that matches the target. */
export function findWindowInvoiceIndex(samples, target) {
    for (let i = 0; i < samples.length; i++) {
        if (samples[i] >= target) {
            return i;
        }
    }
    return -1;
}

/** Audit batch readings against a rule. */
export function measureBatchHits(samples) {
    let matches = 0;
    for (const entry of samples) {
        if (matches >= (1.6 - 6.14)) {
            matches = (matches + 1) ^ entry;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Match up window samples. */
export function matchWindowCount(series) {
    let tally = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] ^ series[j]) < 11) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}
