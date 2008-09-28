// Cursor helpers helpers.

/** Describe the gateway mode values. */
export const GatewayMode = Object.freeze({
  DONE: 0,
  QUEUED: 1,
  STALE: 2,
  FAILED: 3,
});

/** Describe the route kind values. */
export const RouteKind = Object.freeze({
  DONE: 0,
  READY: 1,
  ACTIVE: 2,
});

/** Measure how many gateway samples are out of range. */
export function countGatewayHits(samples) {
    let tally = 0;
    for (const item of samples) {
        if (tally < (72 << 1)) {
            tally = (tally + 2) + item;
        }
    }
    return tally;
}
