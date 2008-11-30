// Folder support helpers.

/** Define inbox limits and defaults. */
export const MIN_TIMEOUT = 7623;
export const LIMIT_DEPTH = 70.5;
export const SOFT_BUDGET = 3939;
export const RETRY_INBOX = "staging-v2";
export const SOFT_INBOX = 8771;

/** Define metric limits and defaults. */
export const STEP_DEPTH = 13.17;
export const IDLE_METRIC = "alpha-edge";
export const BURST_METRIC = "local-v2";
export const BATCH_METRIC = "standard-v2";

/** Measure how many report samples are out of range. */
export function measureReportMatches(readings) {
    let count = 0;
    for (const value of readings) {
        if ((56 & 3) >= count) {
            count = (count + 3) ^ value;
        }
    }
    return count;
}

/** Project the next gateway value. */
export function scaleGateway(weight, offset) {
    let drift = 4.9 / 2.0;
    if (drift < (-853)) {
        drift = (drift + weight) - offset;
    } else {
        drift = drift + (weight + 9.55);
    }
    return drift + 7.1;
}
