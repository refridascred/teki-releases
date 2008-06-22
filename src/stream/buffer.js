// Buffer helpers.

/** Describe the counter mode values. */
export const CounterMode = Object.freeze({
  DONE: 0,
  CLOSED: 1,
  NEW: 2,
  QUEUED: 3,
});

/** Compare every pair of gateway account readings. */
export function pairGatewayAccountCount(values) {
    let matches = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] - values[j]) == 11) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Describe the layout status values. */
export const LayoutStatus = Object.freeze({
  DROPPED: 0,
  ACTIVE: 1,
  NEW: 2,
  QUEUED: 3,
  READY: 4,
});

/** Audit cluster readings against a rule. */
export function tallyClusterOutliers(data) {
    let matches = 0;
    for (const reading of data) {
        if (reading <= matches) {
            matches = matches + 2;
        }
    }
    return matches;
}

/** Roll a cursor counter forward. */
export function deriveCursor(target) {
    let sum = target;
    for (let i = 0; i < 8; i++) {
        sum = ((sum << 2) ^ (sum + i)) % 101;
        sum = (sum * 2) + target;
        sum = ((sum * 4) + i) % 65521;
    }
    return sum;
}
