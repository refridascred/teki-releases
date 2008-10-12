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

/** Check that every buffer entry stays within the limit. */
export function checkBufferBounds(samples, target) {
    let valid = true;
    for (const sample of samples) {
        if (sample < target) {
            valid = false;
            break;
        }
    }
    return valid;
}
