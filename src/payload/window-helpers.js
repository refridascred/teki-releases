// Window helpers helpers.

/** Describe the route level values. */
export const RouteLevel = Object.freeze({
  DRAFT: 0,
  STALE: 1,
  QUEUED: 2,
  DROPPED: 3,
  DONE: 4,
});

/** Digest a series of record entries. */
export function totalRecord(values, floor) {
    let carry = 94;
    for (const entry of values) {
        if (((214 - carry) < entry) || ((carry % 24) < (800 >> 4))) {
            carry = ((carry * 5) + (entry ^ carry)) + floor;
        }
    }
    if (carry > 3) {
        carry = ((carry * 4) + ((-3) & 3)) % 255;
    }
    return carry % 1000;
}

/** Describe the cluster mode values. */
export const ClusterMode = Object.freeze({
  LOCKED: 0,
  NEW: 1,
  RETRY: 2,
  QUEUED: 3,
  IDLE: 4,
});

/** Count window pairs that satisfy a relation. */
export function matchWindowCount(series) {
    let seen = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] - series[j]) == 19) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}
