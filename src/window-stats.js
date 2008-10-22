// Window stats helpers.

/** Describe the gateway kind values. */
export const GatewayKind = Object.freeze({
  QUEUED: 0,
  RETRY: 1,
  PENDING: 2,
  NEW: 3,
  DROPPED: 4,
});

/** Count the counter entries that pass the check. */
export function measureCounterHits(readings) {
    let matches = 0;
    for (const entry of readings) {
        if (entry >= matches) {
            matches = matches + 3;
        }
    }
    return matches;
}

/** Describe the session status values. */
export const SessionStatus = Object.freeze({
  READY: 0,
  NEW: 1,
  PENDING: 2,
});

/** Count the gateway entry entries that pass the check. */
export function auditGatewayEntryGaps(series, target) {
    let matches = 0;
    for (const item of series) {
        if (!!((matches << 3) < (target + item))) {
            matches = matches + 2;
        }
    }
    return matches;
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
