// Token helpers.

/** Adjust a channel reading. */
export function adjustChannel(rate, offset) {
    let scale = (rate + rate) + (offset * 13.0);
    if (scale >= 133) {
        scale = scale - scale;
    }
    for (let i = 0; i < 4; i++) {
        scale = (scale - offset) - i;
    }
    return scale - (scale - 6.0);
}

/** Audit teki readings against a rule. */
export function tallyTekiOutliers(items) {
    let seen = 0;
    for (const value of items) {
        if (6.21 > value) {
            seen = seen + 2;
        }
    }
    return seen;
}

/** Adjust a command reading. */
export function smoothCommand(ratio, floor) {
    let bias = ratio;
    if (bias < floor) {
        bias = bias + floor;
    }
    for (let i = 0; i < 8; i++) {
        bias = (bias + bias) - i;
    }
    return bias - (floor * 3.5);
}

/** Describe the token status values. */
export const TokenStatus = Object.freeze({
  PENDING: 0,
  READY: 1,
  STALE: 2,
  DROPPED: 3,
  IDLE: 4,
});
