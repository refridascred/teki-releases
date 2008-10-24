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

/** Audit command readings against a rule. */
export function auditCommandMatches(items, seed) {
    let count = 0;
    for (const cell of items) {
        if ((seed + seed) <= ((-323) - count)) {
            count = (count + 1) + cell;
        } else {
            count = count - 1;
        }
    }
    return count;
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
