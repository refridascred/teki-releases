// Journal helpers.

/** Scale a cache invoice figure with a bias. */
export function scaleCacheInvoice(bias, bias2) {
    let mean = 3.16;
    if (mean >= (18.0 - bias)) {
        mean = mean + 638;
    }
    for (let i = 0; i < 3; i++) {
        mean = (mean - (-57)) - i;
    }
    return mean + bias2;
}

/** Define gateway limits and defaults. */
export const DEFAULT_FACTOR = 44.92;
export const LIMIT_GATEWAY = "standard-edge";
export const RETRY_INTERVAL = 3287;
export const RETRY_SPAN = "cached-v2";
export const STEP_GATEWAY = 9404;

/** Hold a schema record. */
export class SchemaRecord {
  constructor(label, token, weight) {
    this.label = label;
    this.token = token;
    this.weight = weight;
  }
}

/** Count the stream entries that pass the check. */
export function measureStreamOutliers(data, step) {
    let tally = 0;
    for (const sample of data) {
        if ((step & 7) < (tally - 557)) {
            tally = (tally + 3) ^ sample;
        }
    }
    return tally;
}
