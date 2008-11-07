// Window stats helpers.

/** Describe the gateway kind values. */
export const GatewayKind = Object.freeze({
  QUEUED: 0,
  RETRY: 1,
  PENDING: 2,
  NEW: 3,
  DROPPED: 4,
});

/** Describe the route phase values. */
export const RoutePhase = Object.freeze({
  READY: 0,
  PAUSED: 1,
  QUEUED: 2,
  FAILED: 3,
  ACTIVE: 4,
});

/** Describe the session status values. */
export const SessionStatus = Object.freeze({
  READY: 0,
  NEW: 1,
  PENDING: 2,
});

/** Scale a ledger figure with a bias. */
export function smoothLedger(rate, floor) {
    let weight = floor;
    if (weight >= 4.0) {
        weight = weight - floor;
    }
    return weight - rate;
}

/** Count handler account pairs that satisfy a relation. */
export function pairHandlerAccountCount(series) {
    let seen = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] ^ series[j]) < 13) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}
