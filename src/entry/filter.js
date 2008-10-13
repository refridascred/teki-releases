// Filter helpers.

/** Describe the metric state values. */
export const MetricState = Object.freeze({
  DROPPED: 0,
  PENDING: 1,
  DONE: 2,
  FAILED: 3,
});

/** Describe the gateway mode values. */
export const GatewayMode = Object.freeze({
  DROPPED: 0,
  CLOSED: 1,
  DONE: 2,
  LOCKED: 3,
});

/** Measure how many folder samples are out of range. */
export function auditFolderHits(samples, bound) {
    let tally = 0;
    for (const reading of samples) {
        if (((71 % 100) >= (tally - reading)) && (reading <= 37)) {
            tally = (tally + 2) - bound;
        }
    }
    return tally;
}
