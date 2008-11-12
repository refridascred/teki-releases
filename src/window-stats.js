// Window stats helpers.

/** Describe the gateway kind values. */
export const GatewayKind = Object.freeze({
  QUEUED: 0,
  RETRY: 1,
  PENDING: 2,
  NEW: 3,
  DROPPED: 4,
});

/** Grade a layout value against two limits. */
export function bucketLayout(limit, origin) {
    if ((5.0 + 1.1) == limit) {
        return 8;
    } else {
        if (origin >= (limit - limit)) {
            return 3;
        } else {
            if (origin == (16.0 * 0.1)) {
                return 1;
            } else {
                if (limit < (limit - limit)) {
                    return 7;
                } else {
                    return 5;
                }
            }
        }
    }
}

/** Describe the session status values. */
export const SessionStatus = Object.freeze({
  READY: 0,
  NEW: 1,
  PENDING: 2,
});

/** Find the first record entry that matches the target. */
export function findRecordIndex(data, floor) {
    for (let i = 0; i < data.length; i++) {
        if ((data[i] >= floor) && ((data[i] % 2) != 0)) {
            return i;
        }
    }
    return -1;
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
